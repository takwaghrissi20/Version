import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ orderData, selectedMonth, selectedYear }) => {
  const currentDate = moment({ year: selectedYear, month: selectedMonth - 1 });
  const currentMonthDays = Array.from({ length: currentDate.daysInMonth() }, (v, k) => k + 1);
  const currentMonthName = currentDate.format('MMMM').toUpperCase();
  const pointageLabels = {
    'WO': 'Working Office ',
    'V': 'Vacation',
    'A': 'Absence',
    'WH': 'Working Home',
    'R': 'Site Rest',
    'JA': 'Justified Absence',
    'WR': 'Work Recorded'
  };

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
      width: 200,
      render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      fixed: 'left',
      width: 150,
     
    },
    ...currentMonthDays.map(day => {
      const date = moment({ year: selectedYear, month: selectedMonth - 1, day });
      const dayName = date.format('dddd');
      return {
        title: `${day} - ${dayName.substring(0, 3)}`,
        dataIndex: `day${day}`,
        key: `day${day}`,
        width: 80,
        render: (text, record) => {
          const pointage = record[`day${day}`] || '';

          let color = 'black';
          let fontSize = '1rem'; 
          let fontWeight = 'normal';
          
          if (pointage === 'WO') {
            color = '#77c98d';
            fontWeight = 'bold';
          } else if (pointage === 'V') {
            color = '#6969c0';
            fontWeight = 'bold';
          }  else if (pointage === 'A') {
            color = 'red';
            fontWeight = 'bold';
          } 
          else if (pointage === 'WH') {
            color = 'green';
            fontWeight = 'bold';
          } 
          else if (pointage === 'R') {
            color = 'green';
            fontWeight = 'bold';
          } 
          else if (pointage === 'JA') {
            color = '#98b1cb';
            fontWeight = 'bold';
          } 
          else if (pointage === 'WR') {
            color = '#a6c04f';
            fontWeight = 'bold';
          } 

          return (
            <Tooltip title={pointageLabels[pointage] || ''}>
              <span style={{ color, fontSize, fontWeight }}>{pointage}</span>
            </Tooltip>
          );
        },
      };
    }),
    {
      title: 'Working Day',
      dataIndex: 'workingDay',
      key: 'workingDay',
      width: 100,     
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.workingDay : 0;
      },
    },
    {
      title: 'Working Day',
      dataIndex: 'workingHome',
      key: 'workingHome',
      width: 100,     
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.workingHome : 0;
      },
    },
  

    {
      title: 'Vacation',
      dataIndex: 'vacation',
      key: 'vacation',
      width: 100,
      
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.vacation : 0;
      },
    },
    {
      title: 'Rest',
      dataIndex: 'rest',
      key: 'rest',
      width: 100,
      
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus. rest: 0;
      },
    },
   
    {
      title: 'Absent',
      dataIndex: 'absent',
      key: 'absent',
      width: 100,
      
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.absent : 0;
      },
    },
    {
      title: 'OverTime',
      dataIndex: 'overTime',
      key: 'overTime',
      width: 100,
      
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.overTime : 0;
      },
    },
    {
      title: 'workRecord',
      dataIndex: 'workRecord',
      key: 'workRecord',
      width: 100,
      
      render: (text, record) => {
        const currentMonthStatus = record.officeWorkStatus.find(status => status.month === currentMonthName);
        return currentMonthStatus ? currentMonthStatus.workRecord : 0;
      },
    },

  
  ];

  const data = orderData?.map(employee => {
    const employeeData = { ...employee };
    currentMonthDays.forEach(day => {
      const date = moment({ year: selectedYear, month: selectedMonth - 1, day });
      const pointage = employee.officepointages.find(p => moment(p.date).isSame(date, 'day'));
      employeeData[`day${day}`] = pointage ? pointage.pointage : '';
    });
    return employeeData;
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500, y: 1000 }}
      pagination={false}
      rowKey="getsId"
      bordered
    />
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.array.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  selectedYear: PropTypes.number.isRequired,
};

export default OrderTable;
