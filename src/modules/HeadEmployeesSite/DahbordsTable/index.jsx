import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { MoreOutlined } from '@ant-design/icons';

const OrderTable = ({ orderData }) => {

  const calculateRestDays = (record) => {
    if (!record.dateMob || !record.dateDemob) return 0; // Handle missing dates gracefully

    const dateMob = new Date(record.dateMob);
    const dateDemob = new Date(record.dateDemob);
    const daysDifference = Math.floor((dateDemob - dateMob) / (1000 * 60 * 60 * 24)); // Calculate difference in days

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

  const calculateReturnDate = (record) => {
    const restDays = calculateRestDays(record);
    if (!record.dateDemob) return ''; // Handle missing dates gracefully

    const dateDemob = new Date(record.dateDemob);
    return new Date(dateDemob.setDate(dateDemob.getDate() + restDays)).toLocaleDateString();
  };

  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
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
      title: 'Mobilization Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
    },
    {
      title: 'Demobilization Date',
      dataIndex: 'dateDemob',
      key: 'dateDemob',
    },
    {
      title: 'Rest Day',
      dataIndex: 'dayRest',
      key: 'dayRest',
      render: (text, record) => calculateRestDays(record),
    },
    {
      title: 'Return Date to Office After Rest',
      dataIndex: 'returnDateAfterRest',
      key: 'returnDateAfterRest',
      render: (text, record) => {
        const returnDate = new Date(calculateReturnDate(record));
        const currentDate = new Date();
        const isPastOrEqual = returnDate <= currentDate;
        return (
          <span style={{ color: isPastOrEqual ? '#2DA8E0' : 'inherit' }}>
            {returnDate.toLocaleDateString()}
          </span>
        );
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
