import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import {
  StyledAnChar,
  StyledOrderTable,
} from '../../../../styles/index.styled';
import { Button } from 'antd';




const ExpiredVisaData = ({ expiredVisaData  }) => {
console.log("testttt",expiredVisaData)
 
  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
 
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Visa Finish Date',
      dataIndex: 'finishDateVisa',
      key: 'finishDateVisa',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
   
   
 
 
  ];
 
  return (
    <>
      <StyledOrderTable
        hoverColor
        data={expiredVisaData}

        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />


    </>
  );
};



export default ExpiredVisaData;
