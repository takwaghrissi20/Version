import React, { useState, useEffect , useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './@crema/context/AppContextProvider';
import AppThemeProvider from './@crema/context/AppThemeProvider';
import AppLocaleProvider from './@crema/context/AppLocaleProvider';
import AppAuthProvider from './@crema/core/AppAuthProvider';
import AuthRoutes from './@crema/components/AuthRoutes';
import AppLayout from './@crema/core/AppLayout';
import './@crema/mockapi';
import { GlobalStyles } from './@crema/core/theme/GlobalStyle';
import { Normalize } from 'styled-normalize';
import './styles/index.css';
import { Button, Modal, Space,notification } from 'antd';


function App() {

  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  //GetProfile When Login
  const storedrole = window.localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("role");
  ////////////////List Emp Visa or Passport OR cONTRAT 
  const [visaExpired, setVisaExpired] = useState("");
  const [passportExpired, setPassportExpired] = useState("");
  const [contartExpired, setContratExpired] = useState("");
  //Verifier Connextion


  const checkNetworkStatus = () => {
    if (navigator.onLine) {
      if (navigator.connection) {
        const { downlink, effectiveType } = navigator.connection;
        console.log(`Connection speed: ${downlink} Mbps, type: ${effectiveType}`);

        // Show alert for very slow connection (less than 1 Mbps)
        if (downlink < 1) {
          notification.warning({
            message: 'Slow Connection',
            description: 'Your connection speed is very slow. Please check your network.',
            style: {
              backgroundColor: 'red',
              border: '1px solid #DAAB3A',
              color: '#FFFFFF !important',
              borderRadius: '3px',
              boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              height: "102px",
              width: "500px",
              borderLeft: '8px solid #DAAB3A',
              fontsize: '30px',
              lineheight: '150%',
              marginbottom: 0,
              margintop: 0,
              maxwidth: 'calc(100% - 15px)',
              position: 'relative',
            },
            placement: 'topRight',
            color: '#FFFFFF !important',  

          });
        }
      } else {
        console.log('Connection speed information is not available.');
      }
    } else {
      notification.error({
        message: 'No Connection',
        description: 'You are offline. Please check your internet connection.',
        style: {
          backgroundColor: 'red',
          border: '1px solid #dc3545',
          color: '#FFFFFF !important',
          borderRadius: '3px',
          boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          display: 'flex',
          height: "102px",
          width: "500px",
          borderLeft: '8px solid #bd1120',
          fontsize: '30px',
          lineheight: '150%',
          marginbottom: 0,
          margintop: 0,
          maxwidth: 'calc(100% - 15px)',
          position: 'relative',
        },
        placement: 'topRight',
        color: '#FFFFFF !important',
      
      });
    }
  };

  useEffect(() => {
    checkNetworkStatus();

    // Monitor changes in connection status
    window.addEventListener('online', checkNetworkStatus);
    window.addEventListener('offline', checkNetworkStatus);

    return () => {
      window.removeEventListener('online', checkNetworkStatus);
      window.removeEventListener('offline', checkNetworkStatus);
    };
  }, []);

  //End Verifier connecction


  //Fetch Employees Expired Passport et Visa 
  const fetchExpiredVisa = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          ' Content-Encoding': 'chunked'
        }
      });
    

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      // Get the current date and date 15 days from now
      const data = await response.json();  
      const activeEmployees = data.filter(employee => employee.actStatus === "Active");

      const currentDate = new Date();
      const dateInFifteenDays = new Date();
      dateInFifteenDays.setDate(currentDate.getDate() + 15);
      // Filter employees whose visa expires within 15 days
      const expiredVisaData = activeEmployees.filter(employee => {
        if (employee.finishDateVisa) {
          const visaDate = new Date(employee.finishDateVisa);
          return visaDate > currentDate;
        } else {
          return false;
        }
      });


      setVisaExpired(expiredVisaData)
      // Filter employees whose passport expires within 15 days
      const passportFinishDate = activeEmployees.filter(employee => {
        if (employee.passport_finish_date) {
          const passportDate = new Date(employee.passport_finish_date);
          return passportDate <= dateInFifteenDays && passportDate > currentDate;
        } else {
          return false;
        }
      });
      setPassportExpired(passportFinishDate)
      
      // Filter employees whose Contract expires within 15 days
      const contratFinishDate = activeEmployees.filter(employee => {
        if (employee.finishDate) {
          const contartDate = new Date(employee.finishDate);
          return contartDate <= dateInFifteenDays && contartDate > currentDate;
        } else {
          return false;
        }
      });

      setContratExpired(contratFinishDate)
    } catch (error) {
      console.error('Error fetching All employees :', error);
    }
  };
  //End Fetch Employees Expired Passport et Visa 
  const [name, setName] = useState("");
  const userEmail = localStorage.getItem("email");
  ///Gets Profile
  const GetProfileEmployess = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      setName(data?.name)
      localStorage.setItem('name',data?.name);
      localStorage.setItem('departement',data?.departement);
    } catch (error) {
      console.error('Erreur lors de la récupération getByEmail', error);
    }
  
  };

  ////Gets Profiles
  const fetchRole = async () => {
    try {
      const params = new URLSearchParams({ roles: storedrole });
      const url = `https://dev-gateway.gets-company.com/api/v1/auth/editProfile?${params}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
    
        if (data.roles === "not autheticated" && window.location.pathname !== "/signin") {
          alert("You are logged out.");
          localStorage.removeItem('token');
          window.location.href = "/signin"; 
        } else {
          setEmail(data.email);
          localStorage.setItem('email', data.email);
        }
        // setEmail(data.email);
        // localStorage.setItem('email', data.email);
      } else {
        console.error("Erreur lors de la récupération du rôle:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du rôle:", error);
    }
  };
  /////Modal


  ///End Modl Employees 
  useEffect(() => {
    const handleTokenCheck = () => {
      const isAlertShown = localStorage.getItem('alertShown');
      if (token && isAlertShown === 'false') {      
          setVisible(true)
          localStorage.setItem('alertShown', 'true');      

        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);

      }
      else if (token === null) {
        localStorage.setItem('alertShown', 'false');

      }
    };
    fetchRole();
    if(user?.includes("Administrator") && !user?.includes("Cordinator")){
      handleTokenCheck();

    }else null
    fetchExpiredVisa()
    GetProfileEmployess()
  }, [token, email]);
  ////////////////
  // const [inactiveTime, setInactiveTime] = useState(0);
  // const timeoutDuration = 5 * 60 * 1000; 

  // const resetTimer = useCallback(() => {
  //   setInactiveTime(0); 
  // }, []);


  // useEffect(() => {
  //   const handleUserActivity = () => {
  //     resetTimer();
  //   };

  //   window.addEventListener('mousemove', handleUserActivity);
  //   window.addEventListener('keypress', handleUserActivity);

  //   return () => {
  //     window.removeEventListener('mousemove', handleUserActivity);
  //     window.removeEventListener('keypress', handleUserActivity);
  //   };
  // }, [resetTimer]);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setInactiveTime((prevTime) => prevTime + 1000); 
  //   }, 1000);

  //   if (inactiveTime >= timeoutDuration) {
  //     window.location.reload(); 
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [inactiveTime]);

  return (
  
    <AppContextProvider>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <AppAuthProvider>
              <AuthRoutes>
                <GlobalStyles />
                <Normalize />
                <Modal
                  title='You Have Employees Will Visa Or Contrat Or Passsport Expired!!!!'
                  centered
                  open={visible}
                  onOk={() => setVisible(false)}
                  onCancel={() => setVisible(false)}
                  width={1000}
                >
                  {/* {contartExpired?.length > 0 &&
                  <>
                    <p>You Have {contartExpired?.length} Employees Will Contrat Expired</p>
                    <a href='/Hr/VisaAndPassportExpired'>Link:</a>
                    </>
                  } */}
                   {passportExpired?.length > 0 &&
                   <>
                    <p>You Have {passportExpired?.length} Employees Will Passport Expired</p>
                    <a href='/Hr/VisaAndPassportExpired'>Link:</a>
                    </>
                  }
                   {visaExpired?.length > 0 &&
                   <>
                    <p>You Have {visaExpired?.length} Employees Will Visa Expired</p>
                    <a href='/Hr/VisaAndPassportExpired'>Link:</a>
                    </>
                  }

                </Modal>
                <AppLayout />
              </AuthRoutes>
            </AppAuthProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </AppContextProvider>
  
  );
}

export default App;
