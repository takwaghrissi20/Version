import React, { useEffect, useState } from "react";
import { Card, Col, Table, Typography, Menu, Dropdown, Button, notification, Input, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../../@crema/components/AppsContainer";
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import AppCard from '../../../../@crema/components/AppCard';
import {

  StyledCustomerHeaderRight,
  StyledOrderHeader,
  StyledOrderHeaderRight

} from '../../../../styles/index.styled';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
const AllLeaveTab = ({user}) => {
  const { messages } = useIntl();
  const [vacations, setVacations] = useState([]);
  const [isDeleteVac, setDeleteVac] = useState(false);
  const [idv, setIdv] = useState("");
  const [getsId, setGetsId] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("token")
  //const [reason , setreason]=useState("");
  const navigate = useNavigate();
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
  //TabHeight
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
  const showVaclistBypage = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/listBypage?page=${currentPage}&size=${pageSize}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();


      //setreason(data.reason);
    } catch (error) {
      console.error('Error fetching vacations:', error);
    }
  };

  const showVac = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      const filterData = data.filter(p => p.notif === 3)
     
      setCount(filterData.length)
      setVacations(filterData);

      //setreason(data.reason);
    } catch (error) {
      console.error('Error fetching vacations:', error);
    }
  };



  const handleDeleteVac = async (record) => {
    setIdv(record.idv);
    setGetsId(record.getsId);
    setDeleteVac(true);
  };
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Delete Vacation',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Succes Delete Vacation',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const deleteVac = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/delete?id=${idv}&code=${getsId}&token=${token}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Request failed with status code ' + response.status);
      }
      if (response.ok) {

        const responseData = await response.text();
        console.log("Deleted vacation response:", responseData);
        setDeleteVac(false);
        window.location.reload();
        openNotification('bottomRight')
      }

    } catch (error) {
      console.error('Error deleting vacation:', error);
    }
  };
  const handleViewVac = (record) => {
    navigate(`/Hr/Vacation&Leave/View/${record.idv}`, {
      state: {
        id: record.idv,
        getsid: record.getsId,
        notif: record.notif,
        name: record.name,
        type: record.type,
        reason: record.reason,
        numberdays: getLeaveData(record, 'nuberdays'),
        startDate: getLeaveData(record, 'startDate'),
        endDate: getLeaveData(record, 'endDate'),
      },
    });
  };


  useEffect(() => {
    showVac();
    showVaclistBypage()
  }, []);

  const items = (record) => [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: () => handleViewVac(record) },
    ...(user.includes('admin') ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: () => handleDeleteVac(record) },
    ] : [])
    
  ];

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

  const columns = [


    {
      title: 'GETS ID',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
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
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <Dropdown menu={{ items: items(record) }} trigger={['click']}>
          <Button type='circle'>
            <MoreOutlined />
          </Button>
        </Dropdown>
      ),
    }
  ];
  const handlePageChangeVacation = (page) => {
    setCurrentPage(page);
  };
  return (
    <div style={{ marginBottom: "2rem" }}>
      <AppPageMeta title='AllLeave' />
      <div style={{ marginBottom: "2rem" }}>

        <AppsHeader>
          <StyledOrderHeader>
            <div style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
              <Input.Search
                placeholder='Search Here'
                type="text"
                // value={nameFilter}
                // onChange={handleNameFilterChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event);
                  }
                }}
              />
              {/* {isDropdownOpen && (
                <List
                  style={{
                    zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                    background: "white", position: "absolute", top: "6rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={employeesFiltrer}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.name}
                    </List.Item>
                  )}
                />
              )} */}
            </div>


          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.Vacation']}
        >
          <Space direction='vertical' style={{ width: '100%', marginBottom: "8rem" }}>
            <div>
              <h4 style={{ padding: "1rem" }}> Pending Vacation</h4>
              <Table
                columns={columns}
                dataSource={vacations}
                size='middle' />

            </div>
          </Space>

        </AppCard>

        <StyledOrderHeaderRight>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChangeVacation}
          />

        </StyledOrderHeaderRight>
      </div>
      {isDeleteVac && (
        <ConfirmationModal
          open={isDeleteVac}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={() => setDeleteVac(false)}
          onConfirm={deleteVac}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      )}














    </div>

  );
};

export default AllLeaveTab;
