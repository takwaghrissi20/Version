import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip, Select, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Option } = Select;

const OrderTable = ({ orderData, pickerValue }) => {
  const [selectedPointage, setSelectedPointage] = useState({});
  const [editingRecord, setEditingRecord] = useState(null);
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
  const formattedPickerValue = moment(pickerValue).format('YYYY-MM-DD');

  const handlePointageChange = (value, record) => {
    setSelectedPointage({ ...selectedPointage, [record.getsId]: value });
    handleUpdatePointage(record.getsId, value);
    setEditingRecord(null);
  };

  const handleUpdatePointage = async (code, pointage) => {
    try {
      const bodyData = {
        date: formattedPickerValue,
        pointage: pointage,
      };

      const response = await fetch(
        `https://dev-gateway.gets-company.com/api/v1/sheetSite/update?id=${code}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Pointage mis à jour avec succès:', responseData);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du pointage:", error);
    }
  };

  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
   
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
   
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },
    {
      title: 'Time Attendance',
      dataIndex: 'Pointages',
      key: 'Pointages',
   
      render: (text, record) => (
        <div>
          {selectedPointage[record.getsId] && editingRecord !== record.getsId ? (
             <span >
              {selectedPointage[record.getsId]} 
            </span>
          ) : (
            <Select
              style={{ width: 120 }}
              defaultValue={selectedPointage[record.getsId] || "Select Time Sheet"}
              onChange={(value) => handlePointageChange(value, record)}
            >
              <Option value="Select Time Sheet" disabled>Default</Option>
              <Option value="S">Standby</Option>
              <Option value="A">Absent</Option>
              <Option value="WS">Working Site</Option>
              <Option value="TG">Travel Go</Option>
              <Option value="TB">Travel Back</Option>
              <Option value="SIC">SICk Days</Option>
            </Select>
          )}
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (text, record) => (
        <span>
          <EditOutlined className="iconeEditTime" onClick={() => setEditingRecord(record.getsId)} />
        </span>
      ),
    },
  ];

  return (
    <div style={{minHeight:"14rem"}}>
    <Table
      columns={columns}
      dataSource={orderData}
      scroll={{ x: "auto", y:tableHeight }}
      pagination={false}
      rowKey="getsId"
      bordered
    />
    </div>
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  pickerValue: PropTypes.instanceOf(Date).isRequired,
};

export default OrderTable;
