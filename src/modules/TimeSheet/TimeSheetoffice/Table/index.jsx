import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ orderData }) => {
  const currentMonthDays = Array.from({ length: moment().daysInMonth() }, (v, k) => k + 1);

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
    ...currentMonthDays.map(day => ({
      title: day,
      dataIndex: `day${day}`,
      key: `day${day}`,
      width: 50,
      render: (text, record) => {
        const pointage = record.officepointages.find(p => moment(p.date).date() === day)?.pointage || '';
        return <span>{pointage}</span>;
      }
    })),
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
      scroll={{ x: 1500, y: 500 }}
      pagination={false}
      rowKey="getsId"
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
};

export default OrderTable;
