import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useInfoViewActionsContext } from '../../../../@crema/context/AppContextProvider/InfoViewContextProvider';

const jwtAxios = axios.create({
  baseURL: 'https://dev-gateway.gets-company.com', // Your base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);
export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();

  useEffect(() => {
    const getAuthUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);

      try {
        const { data } = await axios.get(`https://dev-gateway.gets-company.com/api/v1/auth/editProfileByToken?token=${token}`);
        console.log("dattttaaa",data)
         // Ensure this is the correct endpoint
        setAuthData({
          user: data,
          isLoading: false,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Error during token validation:', error);
        setAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    };

    getAuthUser();
  }, []);

  const signInUser = async ({ username, password }) => {
    fetchStart();
    try {
      const response = await jwtAxios.post('/api/v1/auth/generateToken', { username, password });
      if (response.status === 200) {
  
        const data = response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.roles);
        localStorage.setItem('email', data.email);
        setAuthToken(data.token);
        setAuthData({
          user: data,
          isAuthenticated: true,
          isLoading: false,
        });
        window.location.reload();
        fetchSuccess();
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setAuthData({
        ...authData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async ({ name, email, password }) => {
    fetchStart();
    try {
      const response = await jwtAxios.post('/api/v1/auth/register', { name, email, password });
      if (response.status === 200) {
        const data = response.data;
        setAuthToken(data.token);
        setAuthData({
          user: data,
          isAuthenticated: true,
          isLoading: false,
        });
        fetchSuccess();
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setAuthData({
        ...authData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setAuthToken(null);
    window.location.reload();
    setAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider value={authData}>
      <JWTAuthActionsContext.Provider value={{ signUpUser, signInUser, logout }}>
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};

export default JWTAuthProvider;

JWTAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
