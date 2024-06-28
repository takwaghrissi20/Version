import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Tooltip } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { MoreOutlined } from '@ant-design/icons';
import { FiAlertOctagon } from "react-icons/fi";

const OrderTable = ({ orderData }) => {
  const calculateRestDays = (record) => {
    if (!record.dateMob || !record.dateDemob) return 0; // Handle missing dates gracefully

    const dateMob = new Date(record.dateMob);
    const dateDemob = new Date(record.dateDemob);
    const daysDifference = Math.floor((dateDemob - dateMob) / (1000 * 60 * 60 * 24)); 

    if (daysDifference >= 90) {
      return 21;
    } else if (daysDifference >= 60) {
      return 14;
    } else if (daysDifference >= 30) {
      return 7;
    } else {
      return 0;
    }
  };

  const calculatePlanReturnDate = (record) => {
    if (!record.dateMob || !record.dateDemob) return null; 

    const dateMob = new Date(record.dateMob);
    const dateDemob = new Date(record.dateDemob);
    const restDays = calculateRestDays(record);
    const planReturnDate = new Date(dateDemob);
    planReturnDate.setDate(planReturnDate.getDate() + restDays);
    
    return planReturnDate.toISOString().split('T')[0]; 
  };

  const handleViewDemobilization = () => {
    console.log("View");
  };

  const handleUpdateDemobilization = () => {
    console.log("Update");
  };

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleViewDemobilization },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleUpdateDemobilization },
  ];

  const columns = [
    {
      title: 'idMd',
      dataIndex: 'idMd',
      key: 'idMd',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'dateMob',
      dataIndex: 'dateMob',
      key: 'dateMob',
      width: 80,
    },
    {
      title: 'Rest Day',
      dataIndex: 'dayRest',
      key: 'dayRest',
      render: (text, record) => calculateRestDays(record),
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'joysId',
      dataIndex: 'joysId',
      key: 'joysId',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Project Work',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Demobilization Date',
      dataIndex: 'dateDemob',
      key: 'dateDemob',
      render: (dateDemob) => {
        if (!dateDemob) return null;  // Exclude empty dates
        const isFuture = new Date(dateDemob) < new Date();
        return (
          <Tooltip title={isFuture ? 'End Demobilization Date' : ''}>
            <span style={{ color: isFuture ? 'red' : 'black' }}>
              {dateDemob}
            </span>
          </Tooltip>
        );
      },
    },
    {
      title: 'Plan Date Return Date to Site After Rotation as Per Policy',
      dataIndex: 'planReturnDate',
      key: 'planReturnDate',
      render: (text, record) => {
        const planReturnDate = calculatePlanReturnDate(record);
        return planReturnDate ? (
          <Tooltip title={calculatePlanReturnDate? 'Call For Mobilization' : ''}>
          <span style={{ backgroundColor: 'blue', color: 'white', padding: '2px 5px', borderRadius: '4px' }}>
            {planReturnDate}
          </span>
          </Tooltip>
        ) : null;
      },
      ellipsis: true,
    },
    // {
    //   title: 'Plan Date Return Date to Site After Rotation as Per Policy',
    //   dataIndex: 'planReturnDate',
    //   key: 'planReturnDate',
    //   render: (text, record) => calculatePlanReturnDate(record),
    //   ellipsis: true,
    // },
    {
      title: 'End Mission Date',
      dataIndex: 'endDateMiss',
      key: 'endDateMiss',
      render: (endDateMiss) => {
        if (!endDateMiss) return null;  // Exclude empty dates
        const isFuture = new Date(endDateMiss) < new Date();
        return (
          <Tooltip title={isFuture ? 'End Mission' : ''}>
            <span style={{ color: isFuture ? '#2DA8E0' : 'black' }}>
              {endDateMiss}
            </span>
          </Tooltip>
        );
      },
    },
    {
      title: 'Alert',
      key: 'alert',
      width: 200,
      render: (record) => {
        const isDateDemobExpired = record.dateDemob && new Date(record.dateDemob) < new Date();
        const isEndDateMissExpired = record.endDateMiss && new Date(record.endDateMiss) < new Date();
        const planReturnDate = calculatePlanReturnDate(record);
        const isPlanReturnDateDue = planReturnDate && new Date(planReturnDate) < new Date();
  
        if (isDateDemobExpired || isEndDateMissExpired || isPlanReturnDateDue) {
          return (
            <span style={{ color: 'red' }}>
              <FiAlertOctagon style={{ marginRight: 4 }} />
              {isDateDemobExpired && (
                <>
                  Renew dateDemob, Expiry Date At: <span style={{ fontWeight: "bold", color: "#77021D" }}>{record.dateDemob}</span>
                  <br />
                </>
              )}
              {isEndDateMissExpired && (
                <>
                  <FiAlertOctagon style={{ marginRight: 4 }} />
                  Renew end mission date, Expiry Date At: <span style={{ fontWeight: "bold", color: "#77021D" }}>{record.endDateMiss}</span>
                  <br />
                </>
              )}
              {isPlanReturnDateDue && (
                <>
                  <FiAlertOctagon style={{ marginRight: 4 }} />
                  Call For Mobilization: <span style={{ fontWeight: "bold", color: "#77021D" }}>{planReturnDate}</span>
                </>
              )}
            </span>
          );
        } else {
          return null;
        }
      },
    },
  ];

  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.7;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
        rowClassName={(record) => {
          const isDateDemobExpired = record.dateDemob && new Date(record.dateDemob) < new Date();
          const isEndDateMissExpired = record.endDateMiss && new Date(record.endDateMiss) < new Date();

          if (isDateDemobExpired && isEndDateMissExpired) {
            return 'row-brown';
          } else if (isDateDemobExpired) {
            return 'row-red';
          } else if (isEndDateMissExpired) {
            return 'row-yellow';
          } else {
            return '';
          }
        }}
      />
    </AppAnimate>
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};

export default OrderTable;
