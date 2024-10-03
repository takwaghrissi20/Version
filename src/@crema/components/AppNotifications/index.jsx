import React, { useEffect, useState } from 'react';
import { notification } from '../../../@crema/mockapi/fakedb';
import { Dropdown, Spin } from 'antd';  
import IntlMessages from '../../../@crema/helpers/IntlMessages';
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
  const [count, setCount] = useState(0);
  const [notif, setNotif] = useState([]);
  const [isLoadingchargement, setIsLoadingchargement] = useState(true);
  const [visible, setVisible] = useState(false);

  const user = localStorage.getItem("role");
  const items = [
    ...(user.includes('bod') ? [{
      key: 1,
      label: (
        <span className='header'>
          <IntlMessages id='common.notifications' />({count})
        </span>
      ),
    }] : []),
    {
      key: 2,
      label: (
        <StyledNotifyScrollSubmenu>
          <NotificationItem 
            user={user}
            isLoadingchargement={isLoadingchargement}
            setIsLoadingchargement={setIsLoadingchargement}
            setVisible={setVisible}
            visible={visible}
          />
        </StyledNotifyScrollSubmenu>
      ),
    },
    {
      key: 3,
      label: (
        <StyledNotifyButtonAll type='primary'>
          {/* <IntlMessages id='common.viewAll' /> */}
        </StyledNotifyButtonAll>
      ),
    },
  ];

  const handleVisibleChange = (visible) => {
    setVisible(visible); 
  };

  return (
    <StyledDrowdownWrapper>
      <Dropdown
        menu={{ items }}
        className='dropdown'
        overlayClassName='header-notify-messages'
        getPopupContainer={(triggerNode) => triggerNode}
        trigger={['click']}
        visible={visible}
        onVisibleChange={handleVisibleChange} 
      >
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
