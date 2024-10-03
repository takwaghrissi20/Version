import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable, StyledAction } from '../../../../../styles/index.styled';


const OrderTable = ({  employee, loading }) => {
  const columns = [
    {
      title: 'Gets Id ',
      dataIndex: 'getsId',
      key: 'getsId',
    },
 
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Departement',
      dataIndex: 'departement',
      key: 'departement',
    },
    {
      title: 'Monthly Office Salary TND',
      dataIndex: 'netOfice',
      key: 'netOfice',
    },
    {
      title: 'Site Daily Rate',
      dataIndex: 'netSite',
      key: 'netSite',
    },
    {
      title: 'Bank Account',
      dataIndex: 'rib',
      key: 'rib',
    },
    
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    {
      title: 'Payment Categorie',
      dataIndex: 'paymentCategory',
      key: 'paymentCategory',
    },
    {
      title: 'Alternative Name For Bank Account',
      dataIndex: 'altenativeNameBank',
      key: 'altenativeNameBank',
    },
  
  ];

  return (
    <StyledOrderTable
      hoverColor
      data={employee}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto', y: 250 }}
    />
  );
};

OrderTable.defaultProps = {
  employee: [],
};

OrderTable.propTypes = {
  employee: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
