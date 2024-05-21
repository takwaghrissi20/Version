import React from 'react';
import PropTypes from 'prop-types';
import OrderActions from './OrderActions';
import { StyledOrderId, StyledOrderTable } from '../index.styled';


const columns = [
  {
    title: 'Ref',
    dataIndex: 'ref',
    key: 'ref',
    render: (ref) => <StyledOrderId>{ref}</StyledOrderId>,
  },
  {
    title: 'EMPLOYEE NAME',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: 'FUNCTION',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'DATE START',
    dataIndex: 'fromD',
    key: 'fromD',
  },
  {
    title: 'DATE End',
    dataIndex: 'integPeriod',
    key: 'integPeriod',
  },
  {
    title: 'Section',
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: 'TOPIC',
    dataIndex: 'topic',
    key: 'topic',
  },
  // {
  //   title: 'Status',
  //   dataIndex: 'status',
  //   key: 'status',
  //   render: (status) => (
  //     <span
  //       className='badge'
  //       style={{
  //         color: getPaymentStatusColor(status),
  //         backgroundColor: getPaymentStatusColor(status) + '44',
  //       }}
  //     >
  //       {status}
  //     </span>
  //   ),
  // },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    className: 'order-table-action',
    fixed: 'right',
    render: () => <OrderActions />,
  },
];
const OrderTable = ({ orderIntegration, loading }) => {
  return (
    <StyledOrderTable
      hoverColor
      data={orderIntegration}
      loading={loading}
      columns={columns}
      
      scroll={{ x: 'auto',y:200 }}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderIntegration: [],
};

OrderTable.propTypes = {
  orderIntegration: PropTypes.array,
  loading: PropTypes.bool,
};
