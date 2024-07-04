import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import moment from 'moment';

const OrderTable = ({ orderData, selectedMonth, selectedYear }) => {
  console.log("selectedMonth",selectedMonth)
  console.log("selectedYear",selectedYear)
  const currentDate = moment({ year: selectedYear, month: selectedMonth - 1 });
  const currentMonthDays = Array.from({ length: currentDate.daysInMonth() }, (v, k) => k + 1);
  const currentMonthName = currentDate.format('MMMM').toUpperCase();
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
  const pointageLabels = {
    'S': 'StandBy ',
    'WS': 'WORKING Site',
    'TG': 'Travel Go',
    'WH': 'Travel Back',
    'Sic': 'Sick Day',
    'A': 'Absent',
   
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
          
          if (pointage === 'A') {
            color = 'red';
          } else if (pointage === 'S') {
            color = 'gray';
          } else if (pointage === 'TG') {
            color = '#F6B339';
          }else if (pointage === 'TB') {
            color = '#5C5792';
          }else if (pointage === 'WS') {
            color = 'green';
            fontWeight = 'bold';
           
          }

          return (
            <Tooltip title={pointageLabels[pointage] || ''}>
              <span style={{ color, fontSize, fontWeight }}>{pointage}</span>
            </Tooltip>
          );
        },
        /////////////////////////////
        // render: (text, record) => {
        //   const pointage = record.pointages.find(p => moment(p.date).isSame(date, 'day'))?.pointage || '';
    
        //   // Définir les styles en fonction de la valeur de pointage
        //   let color = 'black';
        //   let fontSize = '1rem'; 
        //   let fontWeight = 'normal';
          
        //   if (pointage === 'A') {
        //     color = 'red';
        //   } else if (pointage === 'S') {
        //     color = 'gray';
        //   } else if (pointage === 'TG') {
        //     color = '#F6B339';
        //   }else if (pointage === 'TB') {
        //     color = '#5C5792';
        //   }else if (pointage === 'WS') {
        //     color = 'green';
        //     fontWeight = 'bold';
           
        //   }
    
        //   return <span style={{ color, fontSize}}>{pointage}</span>;
        // }
      };
    }),
    {
      title: 'Absences',
      dataIndex: 'absent',
      key: 'absent',
      width: 100,
      render: (absent, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.absent || 0}</span>;
      },
    },
    {
      title: 'Friday Work',
      dataIndex: 'fridayWork',
      key: 'fridayWork',
      width: 100,
      render: (fridayWork, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month() === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.fridayWork|| 0}</span>;
      },
    },
    {
      title: 'Over Time',
      dataIndex: 'overTime',
      key: 'overTime',
      width: 100,
      render: (overTime, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.overTime|| 0}</span>;
      },
    },
    {
      title: 'Rest',
      dataIndex: 'rest',
      key: 'rest',
      width: 100,
      render: (rest, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.rest || 0}</span>;
      },
    },
    {
      title: 'Sick Day',
      dataIndex: 'sickDay',
      key: 'sickDay',
      width: 100,
      render: (sickDay, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month() === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.sickDay || 0}</span>;
      },
    },
    {
      title: 'TravelBack',
      dataIndex: 'travelBack',
      key: 'travelBack',
      width: 100,
      render: (travelBack, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.travelBack ||0}</span>;
      },
    }, 
    {
      title: 'Travel Go',
      dataIndex: 'travelGo',
      key: 'travelGo',
      width: 100,
      render: (travelGo, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.travelGo || 0}</span>;
      },
    },

    {
      title: 'Vacation',
      dataIndex: 'vacation',
      key: 'vacation',
      width: 100,
      render: (vacation, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month() === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.vacation || 0}</span>;
      },
    },
    {
      title: 'Work Site',
      dataIndex: 'workSite',
      key: 'workSite',
      width: 100,
      render: (workSite, record) => {
        const filteredData = record.siteWorkStatus.filter(status => {
          const statusDate = moment(status.date);
          return statusDate.month()  === selectedMonth && statusDate.year() === selectedYear;
        });
        return <span>{filteredData[0]?.workSite || 0}</span>;
      },
    },
    
 
  
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
      scroll={{ x:1500, y: tableHeight}}
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
