import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ orderData, selectedMonth, selectedYear }) => {
  const currentDate = moment({ year: selectedYear, month: selectedMonth - 1 });
  const currentMonthDays = Array.from({ length: currentDate.daysInMonth() }, (v, k) => k + 1);
  const currentMonthName = currentDate.format('MMMM').toUpperCase();
 
  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      fixed: 'left',
      width: 80,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 150,
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },
    ...currentMonthDays.map(day => {
      const date = moment({ year: selectedYear, month: selectedMonth - 1, day });
      const dayName = date.format('dddd');
      return {
        title: `${day} - ${dayName}`,
        dataIndex: `day${day}`,
        key: `day${day}`,
        width: 150,
        render: (text, record) => {
          const pointage = record.pointages.find(p => moment(p.date).isSame(date, 'day'))?.pointage || '';
          return <span>{pointage}</span>;
        }
      };
    }),
  ];

  const data = orderData?.map(employee => {
    const employeeData = {};
    currentMonthDays.forEach(day => {
      const date = moment({ year: selectedYear, month: selectedMonth - 1, day });
      const pointage = employee.pointages.find(p => moment(p.date).isSame(date, 'day'));
      employeeData[`day${day}`] = pointage ? pointage.pointage : '';
    });
    return { ...employee, ...employeeData };
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500, y: 1000 }}
      pagination={false}
      rowKey="getsId"
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  selectedYear: PropTypes.number.isRequired,
};

export default OrderTable;
