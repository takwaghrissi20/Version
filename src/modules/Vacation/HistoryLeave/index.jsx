import React, { useEffect, useState } from "react";
import { Col, Table, Space } from 'antd';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../@crema/components/AppsContainer";
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import StatsAllVacationCard from "./StatsAllVacationCard";
import StatsApprovedVacationCard from "./StatsApprovedVacationCard";
import StatsPendingVacationCard from "./StatsPendingVacationCard";
import StatsRejectedVacationCard from "./StatsRejectedVacationCard";
import { useIntl } from 'react-intl';
import AppCard from '../../../@crema/components/AppCard';
import Pagination from '../../../@crema/components/AppsPagination';
import {

  StyledCustomerHeaderRight,
  StyledOrderHeader,
  StyledOrderHeaderRight

} from '../../../styles/index.styled'
const Tables = () => {
  const { messages } = useIntl();
  const navigate = useNavigate();
  const [vacations, setVacations] = useState([]);
  const [countVacation, setCountVacation] = useState(0);
  const [countVacationPending, setCountVacationPending] = useState(0);
  const [countVacationApproved, setCountVacationApproved] = useState(0);
  const [countVacationRejected, setCountVacationRejected] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(30);
  const [error, setError] = useState(null);
  const [idgets,setIdGets] = useState("");

 //Get profile By Email
 const userEmail = localStorage.getItem("email");
 const GetProfileEmployess = async () => {

  try {
    const endPoint =
      process.env.NODE_ENV === "development"
        ? "https://dev-gateway.gets-company.com"
        : "";
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("La réponse n'est pas au format JSON");
    }
    const data = await response.json();
    setIdGets(data.getsId)
   
  } catch (error) {
    console.error('Erreur lors de la récupération getByEmail', error);
  }
};

  const getVacations = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/listByEmp?id=${idgets}`, {
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
      setCountVacation(data.length);
      
      //Pending
      const filterDataPending = data.filter(p => p.notif === 3);
      setCountVacationPending(filterDataPending.length);
      
      //Approved
      const filterDataApproved = data.filter(item => item.notif === 2 || item.notif === 0);
      setCountVacationApproved(filterDataApproved.length);
      
      //Rejected 
      const filterDataRejected = data.filter(item => item.notif === 10);
      setCountVacationRejected(filterDataRejected.length);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getVacations();
    GetProfileEmployess()
  }, [currentPage, pageSize,idgets]);
  const getStatus = (notificationValue) => {
    switch (notificationValue) {
      case 2:
        return 'Approved by HOD';
      case 0:
        return 'Approved by HR';
      case 20:
        return 'Rejected by HOD';
      case 10:
        return 'Rejected by HR';
      default:
        return 'Pending';
    }
  };

  const getStatusClass = (notificationValue) => {
    switch (notificationValue) {
      case 2:
      case 0:
        return 'status-approved';
      case 20:
      case 10:
        return 'status-rejected';
      default:
        return 'status-Pending';
    }
  }
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
    switch (record.type) {
      case 'Permission':
        if (field === 'startDate') return record.livePerm;
        if (field === 'endDate') return record.endPermission;
        if (field === 'nuberdays') return record.durationPermiss;
        break;
      case 'MaternityPaternity':
        if (field === 'startDate') return record.startMatern;
        if (field === 'endDate') return record.joinEndMatern;
        if (field === 'nuberdays') return record.nuberdays;
        break;
      case 'Justified Absent':
        if (field === 'startDate') return record.startDateJus;
        if (field === 'endDate') return record.endDateJus;
        if (field === 'nuberdays') return record.nuberdaysJus;
        break;
      case 'Vacation':
        if (field === 'startDate') return record.startDate;
        if (field === 'endDate') return record.endDate;
        if (field === 'nuberdays') return record.nuberdays;
        break;
      default:
        return record[field];
    }
  };

  const handlePageChangeVacation = (page) => {
    setCurrentPage(page);
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
      render: (text, record) => {
        const status = getStatus(record.notif);
        const statusClass = getStatusClass(record.notif);
        return <span className={statusClass}>{status}</span>;
      },
    },
    {
      title: 'HR Status',
      dataIndex: 'hrStatus',
      key: 'hrStatus',
      render: (text, record) => {
        const status = getStatus(record.notif);
        const statusClass = getStatusClass(record.notif);
        return <span className={statusClass}>{status}</span>;
      },
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
    <div>
   
        <AppRowContainer ease={'easeInSine'}>
          <Col xs={24} sm={12} lg={6}>
            <StatsAllVacationCard countVacation={countVacation}></StatsAllVacationCard>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatsApprovedVacationCard countVacationApproved={countVacationApproved}></StatsApprovedVacationCard>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatsPendingVacationCard countVacationPending={countVacationPending}></StatsPendingVacationCard>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatsRejectedVacationCard countVacationRejected={countVacationRejected}></StatsRejectedVacationCard>
          </Col>
        </AppRowContainer>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.LeaveRequests']}>   
            <Table
              columns={columns}
              dataSource={vacations}
           
              pagination={false}
            />

    
        <StyledOrderHeaderRight>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(countVacation / pageSize)}
          handlePageChange={handlePageChangeVacation}
        />

        </StyledOrderHeaderRight>
        
      </AppCard>
 
    </div>
  );
};

export default Tables;
