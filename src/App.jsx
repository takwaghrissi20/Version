import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from '@crema/core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from '@crema/core/AppLayout';
import '@crema/mockapi';
import { GlobalStyles } from '@crema/core/theme/GlobalStyle';
import { Normalize } from 'styled-normalize';
import './styles/index.css';
import React, { useState, useEffect } from 'react';


function App() {
    const [email, setEmail] = useState("");
    //GetProfile When Login
    const storedrole = window.localStorage.getItem("role");
  
    const fetchRole = async () => {
      try {
        const params = new URLSearchParams({ roles: storedrole }); 
        const url = `https://dev-gateway.gets-company.com/api/v1/auth/editProfile?${params}`; 
        const response = await fetch(url, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setEmail(data.email)       
          console.log("sataaaa",data)
          localStorage.setItem('email',data.email);

          
        } else {
          console.error("Erreur lors de la récupération du rôle:", response.status);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du rôle:", error);
      }
    };

  
      
      useEffect(() => {
        fetchRole()  
        // GetProfileEmployess()
      }, [email]);


  return (
      <AppContextProvider>
          <AppThemeProvider>
              <AppLocaleProvider>
                  <BrowserRouter>
                      <AppAuthProvider>
                          <AuthRoutes>
                              <GlobalStyles />
                              <Normalize />
                              <AppLayout />
                          </AuthRoutes>
                      </AppAuthProvider>
                  </BrowserRouter>
              </AppLocaleProvider>
          </AppThemeProvider>
      </AppContextProvider>
  )
}

export default App
