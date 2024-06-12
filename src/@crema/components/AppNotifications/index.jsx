import React,{useEffect, useState} from 'react';
import { notification } from '@crema/mockapi/fakedb';
import { Dropdown } from 'antd';

import IntlMessages from '@crema/helpers/IntlMessages';
import NotificationItem from './NotificationItem';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {
  StyledDrowdownWrapper,
  StyledNotifyButtonAll,
  StyledNotifyIcon,
  StyledNotifyLink,
  StyledNotifyList,
  StyledNotifyScrollSubmenu,
  StyledNotifyText,
} from './index.styled';
const AppNotifications = () => {
  const[count,setCount]=useState(0)
  const[notif,setNotif]=useState([])
  //Norifff All
  const AllNotif = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/notif/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log("eeeeedata",data)
      const filteredData= data.filter(item => item.notfi === 0);
      //Filtert Notif ==0 de bod 
      console.log("FilterDateNotif0222",filteredData)
    
      setCount(FilterDateNotif.length)
      setNotif(filteredData)
    
    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  useEffect(() => {
    AllNotif ()   
  }, [notif]);

  const user = localStorage.getItem("role");
  const items = [
    ...(user.includes('bod') ? [{
      key: 1, 
      label: (    
        <span className='header'>
          <IntlMessages id='common.notifications' />({count})
        </span>
      ),
       
    }] : []
  ),
    // {
    //   key: 1,
    //   label: (    
    //     <span className='header'>
    //       <IntlMessages id='common.notifications' />({count})
    //     </span>
    //   ),
    // },
    {
      key: 2,
      label: (
        <StyledNotifyScrollSubmenu>
          <NotificationItem  />
          {/* <StyledNotifyList
            dataSource={notification}
            renderItem={(item) => {
              return <NotificationItem key={item.id} item={item} />;
            }}
          /> */}
        </StyledNotifyScrollSubmenu>
      ),
    },
    {
      key: 3,
      label: (
        <StyledNotifyButtonAll type='primary'>
          <IntlMessages id='common.viewAll' />
        </StyledNotifyButtonAll>
      ),
    },
  ];

  return (
    <StyledDrowdownWrapper>
    <Dropdown
      menu={{ items }}
      className='dropdown'
      overlayClassName='header-notify-messages'
      getPopupContainer={(triggerNode) => triggerNode}
      trigger={['click']}>
      <StyledNotifyLink onClick={(e) => e.preventDefault()}>
        <StyledNotifyIcon>
          <IoIosNotificationsOutline />
        </StyledNotifyIcon>
        <StyledNotifyText>
          <IntlMessages id='common.notifications' />
         
        </StyledNotifyText>
      </StyledNotifyLink>
    </Dropdown>
  
  </StyledDrowdownWrapper>
  );
};



export default AppNotifications;

