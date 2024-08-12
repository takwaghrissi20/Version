import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ siteTimeSheet }) => {

  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'emp_code',
      key: 'emp_code',
      fixed: 'left',
      width: 80,
    },
    {
      title: 'Full Name',
      dataIndex: 'first_name',
      key: 'first_name',
      fixed: 'left',
      width: 200,
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },

    {
      title: 'last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      fixed: 'left',
      width: 200,
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },
  

    {
      title: 'Departement',
      dataIndex: 'dept_name',
      key: 'dept_name',
      fixed: 'left',
      width: 100,
    },
   

    {
      title: 'Position',
      dataIndex: 'position_name',
      key: 'position_name',
      fixed: 'left',
      width: 120,
     
    },
    {
      title: 'Check In',
      dataIndex: 'check_in',
      key: 'check_in',
     
    },
    {
      title: 'Check OUT',
      dataIndex: 'check_out',
      key: 'check_out',
     
    },
    {
      title: 'Work Day',
      dataIndex: 'work_day',
      key: 'work_day',
     
    },
    {
      title: 'Clock In',
      dataIndex: 'clock_in',
      key: 'clock_in',     
    },
    {
      title: 'Clock Out',
      dataIndex: 'clock_out',
      key: 'clock_out',
     
    },
    {
      title: 'Total Hrs',
      dataIndex: 'total_hrs',
      key: 'total_hrs',
     
    },
    {
      title: 'Worked Hrs',
      dataIndex: 'worked_hrs',
      key: 'worked_hrs',
     
    },
   
  
  ];


  return (
    <Table
      columns={columns}
      dataSource={ siteTimeSheet}
      scroll={{ x: 1500, y: 1000 }}
      pagination={false}
      rowKey="getsId"
      bordered
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,

};

export default OrderTable;
