import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../@crema/components/AppsContainer";
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Col } from 'antd';
import VisaExpired from './VisaExpired';
import PassportExpired from './PassportExpired';
import ContartExpired from './ContartExpired';

import StaticNumber from "./StaticNumber";

const VisaAndPassportExpired = () => {
  const { messages } = useIntl();

  //////////////////////New 
  const [visaExpired, setVisaExpired] = useState("");
  const [passportExpired, setPassportExpired] = useState("");
  const [contratExpired, setContratExpired] = useState("");
  // Gets Id BY Profile:
  const userEmail = localStorage.getItem("email");
  const roles = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  ////////////////////New
  const fetchExpiredVisa = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
  
      const data = await response.json();
      const activeEmployees = data.filter(employee => employee.actStatus === "Active");
      const currentDate = new Date();
      const dateInFifteenDays = new Date();
      dateInFifteenDays.setDate(currentDate.getDate() + 15);
      // Filter employees whose visa expires within 15 days
      const expiredVisaData = activeEmployees.filter(employee => {
        if (employee.finishDateVisa) {
          const visaDate = new Date(employee.finishDateVisa);
          return visaDate <= dateInFifteenDays && visaDate > currentDate;
        } else {
          return false;
        }
      });
  
      console.log("expiredVisaData :", expiredVisaData);
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
      console.log("passportFinishDate :", passportFinishDate);
      ////Finish Contart Finish
      const contartFinishDate = activeEmployees.filter(employee => {
        if (employee.finishDate) {
          const contartDate = new Date(employee.finishDate);
          return contartDate  <= dateInFifteenDays && contartDate  > currentDate;
        } else {
          return false;
        }
      });
 
      setContratExpired(contartFinishDate)
   
  
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };




  const items = [
    {
      label: '# Visa will be Expired After 15 Days ',
      key: '1',
      children: 
      <VisaExpired
        roles={roles}
        visaExpired={visaExpired}
        token={token}

      />,
    },
    {
      label: '# Passport will be Expired After 15 Days ',
      key: '2',
      children: 
      <PassportExpired 
        roles={roles}
        passportExpired={passportExpired}
        token={token}

      />,
    },
    {
      label: '# Contrat will be Expired After 15 Days ',
      key: '3',
      children: 
      <ContartExpired  
        roles={roles}
        contratExpired={contratExpired}
        token={token}

      />,
    },
   
    // {
    //   label: '# Passports will be Expired After 15 Days',
    //   key: '2',
    //   children: <RecruitementConstruction

    //     roles={roles}
    //     token={token}

    //   />,
    // },


  
 
  ];

  useEffect(() => {
    fetchExpiredVisa()


  }, [roles])


  return (
    <>
      <AppsContainer
        title={messages['sidebar.app.Visa&PassportExpired']}
        cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        fullView
      >
        {/*Layout of dahbords*/}
        <AppPageMeta title='Visa & Pasport Expired' />
        <div>
          <AppRowContainer ease={'easeInSine'}>
            <Col xs={24} md={24}>
              <StaticNumber
               visaExpired={visaExpired}
               passportExpired={passportExpired}
               contratExpired={contratExpired}
                 user={roles} />
            </Col>

  
          </AppRowContainer>
        </div>

        <AppsContainer

          type='bottom'
          fullView>
          <StyledBuyCellCard style={{ paddingLeft: "10px" }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
        </AppsContainer>

        <AppInfoView />

      </AppsContainer>


    </>
  );
};

export default VisaAndPassportExpired;
