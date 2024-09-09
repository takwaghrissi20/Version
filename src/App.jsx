import React, { useState, useEffect } from 'react';
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
import { Button, Modal, Space } from 'antd';

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


  //Fetch Employees Expired Passport et Visa 
  const fetchExpiredVisa = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);

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
      console.error('Error fetching employees:', error);
    }
  };
  //End Fetch Employees Expired Passport et Visa 

  const fetchRole = async () => {
    try {
      const params = new URLSearchParams({ roles: storedrole });
      const url = `https://dev-gateway.gets-company.com/api/v1/auth/editProfile?${params}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setEmail(data.email);
        localStorage.setItem('email', data.email);
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
    if(user.includes("Administrator")){
      handleTokenCheck();

    }else null

    fetchExpiredVisa()

  }, [token, email]);

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
                  {contartExpired?.length > 0 &&
                  <>
                    <p>You Have {contartExpired?.length} Employees Will Contrat Expired</p>
                    <a href='/Hr/VisaAndPassportExpired'>Link:</a>
                    </>
                  }
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
