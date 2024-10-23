import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip, Select } from 'antd';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';

const { Option } = Select;

const OrderTable = ({ orderData, filterDate, setSelectedPointage, selectedPointage, loading }) => {
  console.log("orderDataffff",selectedPointage)
  const [editingRecord, setEditingRecord] = useState(null);
  const formattedPickerValue = moment(filterDate).format('YYYY-MM-DD');
  const [tableHeight, setTableHeight] = useState('auto');
  const [allpointage, setAllpointage] = useState('');
  const token = localStorage.getItem("token");
  useEffect(() => {
    GetAllPointage();
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

  useEffect(() => {
    fetchPointages();
  }, [filterDate]);

  const fetchPointages = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/all?token=${token}`);
      const data = await response.json();
      const testdate = moment(filterDate).format('YYYY-MM-DD');
      const filteredData = data.filter(item => item.date === testdate);
      const pointageData = filteredData.reduce((acc, item) => {
        acc[item.getsId] = item.pointage;
        return acc;
      }, {});
      setSelectedPointage(pointageData);
    } catch (error) {
      console.error('Error fetching pointages:', error);
    }
  };

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

  const handleAddPointage = async (code, pointage) => {
    try {
      const bodyData = {
        pdate: formattedPickerValue,
        pointage: pointage,
      };

      const response = await fetch(
        `https://dev-gateway.gets-company.com/api/v1/sheetSite/add?id=${code}&token=${token}`,
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
      console.log("gggggggg",responseData)    
      setEditingRecord(code);
    } catch (error) {
      console.error("Erreur lors de l'ajout du pointage:", error);
    }
  };

  const handleUpdatePointage = async (code, pointage) => {
    try {
      const bodyData = {
        date: formattedPickerValue,
        pointage: pointage,
      };

      const response = await fetch(
        `https://dev-gateway.gets-company.com/api/v1/sheetSite/update?id=${code}&token=${token}`,
        {
          method: 'PUT',
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
      console.log("UpdateReponse",responseData)
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
        const currentDate = moment().format('YYYY-MM-DD');
        const pointage = selectedPointage[record.getsId];
        return (
          <div>
            {editingRecord === record.getsId ? (
              <Select
                style={{ width: 120 }}
                defaultValue={pointage}
                onChange={(value) => handlePointageChange(value, record)}
              >
                <Option value="S">Standby</Option>
                <Option value="A">Absent</Option>
                <Option value="WS">Working Site</Option>
                <Option value="TG">Travel Go</Option>
                <Option value="TB">Travel Back</Option>
                <Option value="SIC">Sick Days</Option>
              </Select>
            ) : (
              <div className='pointageContainer'>
                {pointage || (
                  <Select
                    style={{ width: 120 }}
                    defaultValue="Select Time Sheet"
                    onChange={(value) => handlePointageChange(value, record)}
                  >
                    <Option value="Select Time Sheet" disabled>
                      Default
                    </Option>
                    <Option value="S">Standby</Option>
                    <Option value="A">Absent</Option>
                    <Option value="WS">Working Site</Option>
                    <Option value="TG">Travel Go</Option>
                    <Option value="TB">Travel Back</Option>
                    <Option value="SIC">Sick Days</Option>
                  </Select>
                )}
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <EditOutlined
          className="iconeEditTime"
          onClick={() => handleEditClick(record.getsId)}
          style={{ marginLeft: 8 }}
        />
      ),
    },
  ];

  const GetAllPointage = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/all?token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setAllpointage(responseData);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération all Pointage:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: "#2997ff"
        }}>
          <p>Loading...</p>
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={orderData}
          scroll={{ x: 'auto', y: tableHeight }}
          pagination={false}
          rowKey="getsId"
          bordered
        />
      )}
    </>
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  filterDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedPointage: PropTypes.func.isRequired,
  selectedPointage: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default OrderTable;
