import React from 'react';
import { notification } from 'antd';

const Notification = ({ type, message, description }) => {
  const openNotification = () => {
    let notificationType = 'info'; // Par défaut, type info

    if (type === 'success') {
      notificationType = 'success';
    } else if (type === 'error') {
      notificationType = 'error';
    } else if (type === 'warning') {
      notificationType = 'warning';
    }

    notification.open({
      message: message,
      description: description,
      type: notificationType,
      style: {
        backgroundColor: type === 'success' ? '#28a745' : (type === 'warning' ? '#eab000' : '#f5222d'),
        border: '1px solid ' + (type === 'success' ? '#28a745' : (type === 'warning' ? '#eab000' : '#f5222d')),
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: '102px',
        width: '500px',
        borderLeft: '8px solid ' + (type === 'success' ? '#1f8838' : (type === 'warning' ? '#ce9c09' : '#d4380d')),
        fontSize: '30px',
        lineHeight: '150%',
        marginBottom: 0,
        marginTop: 0,
        maxWidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
    });
  };

  return <>{openNotification()}</>;
};

export default Notification;
