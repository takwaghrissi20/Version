import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip, Select } from 'antd';
import moment from 'moment';

const { Option } = Select;

const OrderTable = ({ orderData, pickerValue }) => {
  const [selectedPointage, setSelectedPointage] = useState({});

  const formattedPickerValue = moment(pickerValue).format('YYYY-MM-DD');

  const handlePointageChange0 = async (value, record) => {
    setSelectedPointage({ ...selectedPointage, [record.getsId]: value });
    await handleAddPointage(record.getsId, value);
  };
  const handlePointageChange = (value, record) => {
    setSelectedPointage({ ...selectedPointage, [record.getsId]: value });
    if(value==="A"){
    handleAddPointage(record.getsId,"A"); }
    else if(value==="W"){
      handleAddPointage(record.getsId,"W"); }
      else if(value==="WS"){
        handleAddPointage(record.getsId,"WF"); }

  };

  const handleAddPointage = async (code, pointage) => {
    try {
      const bodyData = {
        date: formattedPickerValue,
        pointage: pointage
      };

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/add?id=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Pointage ajouté avec succès:', responseData);
    } catch (error) {
      console.error("Erreur lors de l'ajout du pointage:", error);
    }
  };

  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      fixed: 'left',
      width: 80,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 90,
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },
    {
      title: 'Time Pointages',
      dataIndex: 'Pointages',
      key: 'Pointages',
      fixed: 'left',
      width: 90,
      render: (text, record) => (
        <div>
          {selectedPointage[record.getsId] ? (
            selectedPointage[record.getsId]
          ) : (
            <Select
              style={{ width: 120 }}
              defaultValue="Select Pointage"
              onChange={(value) => handlePointageChange(value, record)}
            >
              <Option value="Select Pointage" disabled>Default</Option>
              <Option value="W">W</Option>
              <Option value="A">A</Option>
              <Option value="WS">WS</Option>
            </Select>
          )}
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={orderData}
      scroll={{ x: 1500, y: 1000 }}
      pagination={false}
      rowKey="getsId"
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  pickerValue: PropTypes.instanceOf(Date).isRequired,
};

export default OrderTable;
