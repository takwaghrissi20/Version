import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../styles/index.styled';
import { Input } from 'antd';


const OrderTable = ({ allemployee, loading, filteredEmployees, costCenter, selectedProject,
  calculateSalary, descriptions, setDescriptions, listsalaries, selectedRows }) => {

 const handleDescriptionChange = (id, value) => {
   setDescriptions(prev => ({ ...prev, [id]: value }));
 };
console.log("3333 listsalaries",listsalaries)
 // Safely map salaries and months from listsalaries to filteredEmployees
 const transformedEmployees = filteredEmployees.map(employee => {
   const salaryInfo = listsalaries?.[employee?.getsId] || {}; // Ensure listsalaries is accessed safely
   return {
     ...employee,
     salary: salaryInfo?.paidSetelment|| 0,
     monthName: salaryInfo?.monthOfSetelment
     || new Date().toLocaleString('default', { month: 'long' }),
     position: employee?.position || 'N/A',
     costCenter: costCenter || 'N/A',
     selectedProject: selectedProject || 'N/A',
   };
 });

 const columns = [
   { title: 'GetsId', dataIndex: 'getsId', key: 'getsId' },
   { title: 'Position', dataIndex: 'position', key: 'position' },
   { title: 'Setement', dataIndex: 'salary', key: 'salary' },
   { title: 'Month', dataIndex: 'monthName', key: 'monthName' },
   { title: 'Cost Center', dataIndex: 'costCenter', key: 'costCenter' },
 ];

 return (
   <>
     <StyledOrderTable
       hoverColor
       dataSource={transformedEmployees}
       loading={loading}
       columns={columns}
       scroll={{ x: 'auto', y: 250 }}
     />
   </>
 );
};

export default OrderTable;
