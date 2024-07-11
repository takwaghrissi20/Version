import React from 'react';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

import { AiOutlineEye } from "react-icons/ai";

const items = [
  { key: 1, label: <span style={{ fontSize: 14 }}>View </span> },
  { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span> },

];


const OrderActions = () => {

  
  return (
    <>
  
    <GrFormView className='iconeView'></GrFormView>
    <AiFillEdit className='iconeEdit'></AiFillEdit>
    <CiSaveDown2 className='iconeDownload'></CiSaveDown2>
    

      {/* <Dropdown menu={{ items }} trigger={['click']}>
        <Button type='circle'>
          <MoreOutlined />
        </Button>
      </Dropdown> */}
    </>
  );
};
export default OrderActions;
