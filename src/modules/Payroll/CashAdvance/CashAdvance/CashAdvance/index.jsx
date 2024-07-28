import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable, StyledAction } from '../../../../../styles/index.styled';


const OrderTable = ({  employee, loading }) => {
  const columns = [
    {
      title: 'Item Ref',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Gets Ref ',
      dataIndex: 'getsId',
      key: 'getsId',
    },
 
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      render: (text) => {
        const date = new Date(text);
        return date.getFullYear();
      },
    },
    {
      title: 'Amount to be deducted',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Cash advance/Other Deduction',
      dataIndex: 'cashOrOther',
      key: 'cashOrOther',
    },
   
    {
      title: 'Scan File Advance',
      dataIndex: 'scanFileAdvance',
      key: 'scanFileAdvance',
    },
    {
      title: 'Deduction Description',
      dataIndex: 'description',
      key: 'description',
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
