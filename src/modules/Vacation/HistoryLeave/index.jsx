import React, { useEffect, useState } from "react";
import { Col, Table } from 'antd';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import Cards from "./Cards";
import AppsContainer from "../../../@crema/components/AppsContainer";
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Tables = () => {
  const navigate = useNavigate();
  const [vacations, setVacations] = useState([]);
  const [error, setError] = useState(null);

  const getVacations = async (id) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/listByEmp?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers like Authorization here if required
        },
      }); 
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setVacations(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getVacations(2); // Assuming you want to fetch vacations for id=2 initially
  }, []);

  const handleViewVac = (record) => {
    navigate(`/Hr/Vacation&Leave/HistoryLeave/DetailsLeave/idV=${record.idv}`, {
      state: {
        id: record.idv,
        getsid: record.getsId,
        name: record.name,
        type: record.type,
        reason: record.reason,
        numberdays: getLeaveData(record, 'nuberdays'),
        startDate: getLeaveData(record, 'startDate'),
        endDate: getLeaveData(record, 'endDate'),
      },
    });
  };

  const getLeaveData = (record, field) => {
    switch(record.type) {
      case 'Permission':
        if(field === 'startDate') return record.livePerm;
        if(field === 'endDate') return record.endPermission;
        if(field === 'nuberdays') return record.durationPermiss;
        break;
      case 'MaternityPaternity':
        if(field === 'startDate') return record.startMatern;
        if(field === 'endDate') return record.joinEndMatern;
        if(field === 'nuberdays') return record.nuberdays;
        break;
      case 'Justified Absent':
        if(field === 'startDate') return record.startDateJus;
        if(field === 'endDate') return record.endDateJus;
        if(field === 'nuberdays') return record.nuberdaysJus;
        break;
      case 'Vacation':
        if(field === 'startDate') return record.startDate;
        if(field === 'endDate') return record.endDate;
        if (field === 'nuberdays') return record.nuberdays;
        break;
      default:
        return record[field];
    }
  };

  const columns = [
    {
      title: 'Leave Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date From',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (text, record) => getLeaveData(record, 'startDate'),
    },
    {
      title: 'Date To',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (text, record) => getLeaveData(record, 'endDate'),
    },
    {
      title: 'No of Days',
      dataIndex: 'nuberdays',
      key: 'nuberdays',
      render: (text, record) => getLeaveData(record, 'nuberdays'),
    },
    {
      title: 'HOD Status',
      dataIndex: 'hodStatus',
      key: 'hodStatus',
    },
    {
      title: 'HR Status',
      dataIndex: 'hrStatus',
      key: 'hrStatus',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <EyeOutlined onClick={() => handleViewVac(record)} style={{ cursor: 'pointer' }} />
      ),
    },
  ];

  return (
    <div >
      <Cards leaveData={{ allLeaves: vacations.length }} />
      <div style={{ flex: 1, borderRadius: '20px', marginTop: '0.5rem'}}>
        <AppsContainer>
          <AppRowContainer style={{ marginTop: '2rem', marginBottom: '5rem' ,marginRight:'2rem',marginLeft:'2rem'}}>
            <Col span={24}>
              <div style={{ margin: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Leave Requests</div>
              {error && <p>{error}</p>}
              <Table columns={columns} dataSource={vacations} pagination={false} rowKey="idv" scroll={{ y: 400 }} />
            </Col>
          </AppRowContainer>
        </AppsContainer>
      </div>
    </div>
  );
};

export default Tables;
