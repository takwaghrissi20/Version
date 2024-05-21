import React from 'react';

import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Button, List } from 'antd';

import { CloseOutlined } from '@ant-design/icons';

const Messages = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.messages']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }
    >
    
    </AppCard>
  );
};

export default Messages;

Messages.defaultProps = {
  data: [],
};

Messages.propTypes = {
  data: PropTypes.array,
};
