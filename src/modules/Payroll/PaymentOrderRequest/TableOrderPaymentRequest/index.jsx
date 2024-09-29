import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../styles/index.styled';
import { Input } from 'antd';

const OrderTable = ({ allemployee, loading, filteredEmployees, costCenter, selectedProject,
   calculateSalary, descriptions, setDescriptions, listsalaries,selectedRows }) => {
 
  const handleDescriptionChange = (id, value) => {
    setDescriptions(prev => ({ ...prev, [id]: value }));
  };

  // Mapping salaries and months from listsalaries to filteredEmployees
  const transformedEmployees = filteredEmployees.map(employee => {
    const salaryInfo = listsalaries[employee.getsId] || {}; // Get salary info from listsalaries using getsId
    return {
      ...employee,
      salary: salaryInfo.siteSaalary || 0, // Use siteSaalary from listsalaries
      monthName: salaryInfo.month || new Date().toLocaleString('default', { month: 'long' }), // Use month from listsalaries
      position: employee?.position || 'N/A',
      costCenter: costCenter || 'N/A',
      selectedProject: selectedProject || 'N/A',
    };
  });

  const columns = [
    { title: 'GetsId', dataIndex: 'getsId', key: 'getsId' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    {
      title: 'Other Description(Adress)',
      dataIndex: 'getsId',
      render: (id) => (
        <Input
          value={descriptions[id] || ''}
          onChange={(e) => handleDescriptionChange(id, e.target.value)}
          placeholder="Enter description"
        />
      ),
    },
    { title: 'MONTH OF', dataIndex: 'monthName', key: 'monthName' }, // Display the month
    { title: 'AMOUNT', dataIndex: 'salary', key: 'salary', render: (text) => text }, // Display the salary
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

OrderTable.defaultProps = {
  filteredEmployees: [],
};

OrderTable.propTypes = {
  filteredEmployees: PropTypes.array,
  loading: PropTypes.bool,
  calculateSalary: PropTypes.object.isRequired,
  listsalaries: PropTypes.object.isRequired,
  descriptions: PropTypes.object.isRequired,
  setDescriptions: PropTypes.func.isRequired,
};

export default OrderTable;
