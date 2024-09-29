import React ,{useEffect}from 'react';
import { StyledOrderTable } from '../../../../styles/index.styled';

const OrderTable = ({ requestPayments, monthOf }) => {

  console.log("monthOf", monthOf);
  useEffect(() => {
    
  }, [monthOf]);
  const columns = [
    { title: 'GetsId', dataIndex: 'getsId', key: 'getsId' },
    { title: 'Name', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'MONTH OF', dataIndex: 'monthBy', key: 'monthBy' },
    { 
      title: 'monthBy Test', 
      dataIndex: 'monthOf', 
      key: 'monthOf', 
      render: (monthOf) => monthOf || {monthOf}
    }, 
    { title: 'otherDescription', dataIndex: 'otherDescription', key: 'otherDescription' },
    { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
  ];

  return (
    <>
      <StyledOrderTable
        hoverColor
        dataSource={requestPayments}
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
    </>
  );
};

export default OrderTable;
