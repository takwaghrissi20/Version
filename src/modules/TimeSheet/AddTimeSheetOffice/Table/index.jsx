import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip, Select } from 'antd';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';

const { Option } = Select;

const OrderTable = ({ orderData, filterDate, setSelectedPointage, selectedPointage, loading }) => {
  const [editingRecord, setEditingRecord] = useState(null);
  const formattedPickerValue = moment(filterDate).format('YYYY-MM-DD');

  // Gérer le changement du pointage
  const handlePointageChange = async (value, record) => {
    try {
      if (!selectedPointage[record.getsId]) {
        await handleAddPointage(record.getsId, value);
      } else {
        await handleUpdatePointage(record.getsId, value);
      }
      setSelectedPointage({ ...selectedPointage, [record.getsId]: value });
      setEditingRecord(null);
    } catch (error) {
      console.error("Erreur lors de la gestion du pointage:", error);
    }
  };

  // Ajouter un pointage
  const handleAddPointage = async (code, pointage) => {
    try {
      const bodyData = {
        odate: formattedPickerValue,
        pointage: pointage,
        getsId: code,
      };
      const response = await fetch(
        `https://dev-gateway.gets-company.com/api/v1/sheetOffice/add?id=${code}&token=${localStorage.getItem("token")}`,
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
      console.log("ttyhhhh",responseData)
      setEditingRecord(code);

        setEditingRecord(code);
    } catch (error) {
      console.error("Erreur lors de l'ajout du pointage:", error);
    }
  };

  // Mettre à jour un pointage
  const handleUpdatePointage = async (code, pointage) => {
    try {
      const bodyData = {
        odate: formattedPickerValue,
        pointage: pointage,
      };
      const response = await fetch(
        `https://dev-gateway.gets-company.com/api/v1/sheetOffice/update?id=${code}&token=${localStorage.getItem("token")}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        }
      );
      if (!response.ok) throw new Error('Erreur lors de la mise à jour du pointage');
      setEditingRecord(null);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du pointage:", error);
    }
  };

  const handleEditClick = (code) => {
    setEditingRecord(code);
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
      fixed: 'left',
      render: (text, record) => {
        const pointage = selectedPointage[record.getsId];
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
          {editingRecord === record.getsId ? (
            <Select
              style={{ width: 120 }}
              value={pointage} // Use value instead of defaultValue
              onChange={(value) => handlePointageChange(value, record)}
            >
              <Option value="WO">Working Office</Option>
              <Option value="WH">Working Home</Option>
              <Option value="A">Absent</Option>
              <Option value="V">Vacation</Option>
              <Option value="R">Site Rest</Option>
              <Option value="JA">Justified Absence</Option>
              <Option value="WR">Work Recorded</Option>
            </Select>
          ) : (
            <span
              onClick={() => handleEditClick(record.getsId)}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}
            >
              <span style={{ color: pointage ? '#384454' : 'black',fontWeight: pointage ? 'bold' : 'normal' }}>
              {pointage || 'Select Pointing'}
              </span>
           
              {/* <EditOutlined className="iconeEditTime" style={{ marginLeft: 8 }} /> */}
            </span>
          )}
        </div>
        
        );
      },
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (text, record) => {
        const pointage = selectedPointage[record.getsId];
        return (
          <span
            onClick={() => handleEditClick(record.getsId)}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
         
         {pointage && (
        <EditOutlined className="iconeEditTime" style={{ marginLeft: 8 }} />
      )}
          </span>
        );
      },
    }
    
  ];

  return (
    <Table
      dataSource={orderData}
      columns={columns}
      loading={loading}
      pagination={false}
      rowKey={(record) => record.getsId}
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  filterDate: PropTypes.any.isRequired,
  setSelectedPointage: PropTypes.func.isRequired,
  selectedPointage: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default OrderTable;
