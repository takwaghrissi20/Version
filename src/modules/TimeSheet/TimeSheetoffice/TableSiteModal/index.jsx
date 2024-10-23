import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ siteTimeSheet }) => {

  const columns = [
    {
      title: 'Gets Id 2',
      dataIndex: 'emp_code',
      key: 'emp_code',
      fixed: 'left',
      width: 80,
    },
    {
      title: 'Full Name 2222',
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
