import React from 'react';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

const items = [
  { key: 1, label: <span style={{ fontSize: 14 }}>View Order</span> },
  { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span> },
  { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span> },
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
