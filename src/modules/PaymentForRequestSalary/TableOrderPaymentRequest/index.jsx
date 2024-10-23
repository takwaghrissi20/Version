import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../styles/index.styled';
import { Input, Button } from 'antd';

const OrderTable = ({ setDescriptions, descriptions, 
  getsIdData, setEmpId, empId,
  handleInputGetsIdChange, data }) => {
  
  const initialDataSource = Array.isArray(data) ? data : [data];
  const [dataSource, setDataSource] = useState(initialDataSource);

  const addNewRow = () => {
    const newRow = {
      getsId: '', 
      name: '',
    };
    setDataSource(prevDataSource => [...prevDataSource, newRow]);
  };

  const handleGetsIdChange = (value, index) => {
    const newDataSource = [...dataSource];
    newDataSource[index].getsId = value;
    setDataSource(newDataSource);
  };

  const handleNameChange = (value, index) => {
    const newDataSource = [...dataSource];
    newDataSource[index].name = value;
    setDataSource(newDataSource);
  };

  // Define the columns for the table
  const columns = [
    {
      title: 'GetsId',
      dataIndex: 'getsId',
      render: (text, record, index) => (
        <Input
          type='number'
          value={text}
          onChange={(e) => handleGetsIdChange(e.target.value, index)}
          placeholder="Enter Gets Id"
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => handleNameChange(e.target.value, index)}
          placeholder={text}
        />
      ),
    },
  ];

  return (
    <>
      <Button onClick={addNewRow} type="primary" style={{ marginBottom: '16px' }}>
        + Add
      </Button>
      <StyledOrderTable
        hoverColor
        dataSource={dataSource} // Use dataSource
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
    </>
  );
};

export default OrderTable;
