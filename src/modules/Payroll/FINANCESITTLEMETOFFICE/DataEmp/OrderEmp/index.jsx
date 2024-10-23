
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderActions from './OrderActions';
import { StyledOrderId, StyledOrderTable } from '../index.styled';
const OrderTable = ({ allemp, loading }) => {
 
  const columns = [
    {
      title: 'Id Number',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (ref) => <StyledOrderId>{ref}</StyledOrderId>,
    },
    {
      title: 'EMPLOYEE NAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Status',
      dataIndex: 'actStatus',
      key: 'actStatus',
    },
    {
      title: 'FS',
      dataIndex: 'departement',
      key: 'departement',
    },
    {
      title: 'FINANCE SITTLEMT (END COTRACT)',
      dataIndex: 'settelment',
      key: 'settelment',
    },
    {
      title: 'LAST WORKING MONTH (END COTRACT)',
      dataIndex: 'topic',
      key: 'topic',
    },
  
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'order-table-action',
      fixed: 'right',
 
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
      <StyledOrderTable
        hoverColor
        data={allemp}
         columns={columns}
        scroll={{ x: 'auto',  y: tableHeight }}
       />
         
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};

export default OrderTable;
