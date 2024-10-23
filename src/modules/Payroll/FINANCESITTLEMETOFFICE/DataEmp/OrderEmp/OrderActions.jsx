import React from 'react';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const items = [
  { key: 1, label: <span style={{ fontSize: 14 }}>View </span> },
  { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span> },

];

const OrderActions = () => {
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button type='circle'>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default OrderActions;
