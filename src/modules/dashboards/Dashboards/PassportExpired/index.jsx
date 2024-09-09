import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import OrderActions from './OrderActions';
import { StyledCustomerTable } from '../index.styled';
import { Dropdown, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { StyledOrderTable, StyledAction } from '../../../../styles/index.styled';
import { all } from 'axios';
import { Table, Tooltip } from 'antd';
import { useNavigate } from "react-router-dom";
const ExpiredPassportData = ({passportExpered ,loading, passportExperedProjet,user}) => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  //TabHeight
  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.3; 
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
  
  const getDesiredDateColor = (desiredDate) => {
    const daysDifference = desiredDate ? Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24)) : '';
    return daysDifference < 0 ? 'red' : 'green';
  };
  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
   
  
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,

    },
    {
      title: 'Passport Finish Date',
      dataIndex: 'passport_finish_date',
      key: 'passport_finish_date',
     
    },

  
  ];
 

  return (
    <>
      {user.includes('It') && (
    <p></p>
   
  )}
  {( user?.includes('bod') ||user?.includes('Administrator'))   && (
      <StyledCustomerTable
      hoverColor
      data={passportExpered}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
  
    />
   
  )}
  {user.includes('Leader') && (
      <StyledCustomerTable
      hoverColor
      data={passportExperedProjet}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      //scroll={{ x: 'auto', y: 150 }}


    />
   
  )}
    {(user.includes('bod') || user?.includes('admin'))  && (
      <StyledCustomerTable
      hoverColor
      data={passportExpered}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      


    />
   
  )}
 


    </>
  );
};


export default ExpiredPassportData;
