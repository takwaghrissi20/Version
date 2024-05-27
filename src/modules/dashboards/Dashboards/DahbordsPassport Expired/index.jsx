import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import {
  StyledAnChar,
  StyledOrderTable,
} from '../../../../styles/index.styled';


const ExpiredPassportData = ({ passportExpered  }) => {
console.log("testttt",passportExpered)
 
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
      title: 'Passport Finish Date',
      dataIndex: 'passport_finish_date',
      key: 'passport_finish_date',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
   
   
  ];
 
  return (
    <>
      <StyledOrderTable
        hoverColor
        data={passportExpered }

        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />


    </>
  );
};



export default ExpiredPassportData;
