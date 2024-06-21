import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ orderData }) => {

  const currentDate = moment();
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
      const date = moment({ year: currentDate.year(), month: currentDate.month(), day });
      const dayName = date.format('dddd');
      return {
        title: `${day} -${dayName}`,
        dataIndex: `day${day}`,
        key: `day${day}`,
        width: 150,
        render: (text, record) => {
          const pointage = record.officepointages.find(p => moment(p.date).date() === day)?.pointage || '';
          return <span>{pointage}</span>;
        }
      };
    }),
  ];

  const data = orderData.map(employee => {
    const employeeData = {};
    currentMonthDays.forEach(day => {
      const pointage = employee.officepointages.find(p => moment(p.date).date() === day);
      employeeData[`day${day}`] = pointage ? pointage.pointage : '';
    });
    return { ...employee, ...employeeData };
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x:500, y: 1000 }}
      pagination={false}
      rowKey="getsId"
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
};

export default OrderTable;
