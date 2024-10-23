import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { MoreOutlined } from '@ant-design/icons';
import moment from 'moment';

const OrderTable = ({ orderData }) => {

  const [findIdData, setFindIdData] = useState(null);
  const [isViewEmployee, onViewEmployee] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);
  const handleViewDemobilization = () => {
    console.log("View")
  };

  const handleUpdateDemobilization = () => {
    console.log("Update")
  };


  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleViewDemobilization },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleUpdateDemobilization },

  ];

  // Function to calculate days since mobilization
  const calculateDaysSinceMobilization = (dateMob) => {
    if (!dateMob) return null;
    const now = moment();
    const mobDate = moment(dateMob);
    return now.diff(mobDate, 'days');
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
      title: 'joysId',
      dataIndex: 'joysId',
      key: 'joysId',
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
      title: 'Actual Location',
      dataIndex: 'actualLocationFrom',
      key: 'actualLocationFrom',
    },
    {
      title: 'Project Work',
      dataIndex: 'projName',
      key: 'projName',
    },

    {
      title: 'Mobilization Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
      render: (datemob) => {
        if (!datemob) return null;  // Exclude empty dates
        const isFuture = new Date(datemob) < new Date();
        return (
          <span style={{ color: isFuture ? 'red' : 'black' }}>
            {datemob}
          </span>
        );
      },
    },
    {
      title: 'Day Since Mobilization',
      dataIndex: 'daySinceMob',
      key: 'daySinceMob',
      ellipsis: true,
      render: (text, record) => {
        const days = calculateDaysSinceMobilization(record.dateMob);
        return days !== null ? days : 'N/A';
      },
    },
    {
      title: 'Demobilization Date As Per Policy',
      dataIndex: 'dateDemob',
      key: 'dateDemob',
      ellipsis: true,

    },
    {
      title: 'End Mission Date',
      dataIndex: 'endDateMiss',
      key: 'endDateMiss',
      render: (endmission) => {
        if (!endmission) return null;  // Exclude empty dates
        const isFuture = new Date(endmission) < new Date();
        return (
          <span style={{
            backgroundColor: isFuture ? '#06668C' : 'black',
            color: isFuture ? 'white' : 'white',
            padding: isFuture ? '0.2rem' : '0px',
            borderRadius:isFuture ? '0.2rem' : '0px'
            

          }}>
            {endmission}
          </span>
        );
      },
    },

    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   width: 80,
    //   fixed: 'right',
    //   className: 'customer-table-actions',
    //   render: (text, record) => (
    //     <div onClick={() => findId(record?.idMiss)}>
    //       <Dropdown menu={{ items }} trigger={['click']}>
    //         <Button type='circle'>
    //           <MoreOutlined />
    //         </Button>
    //       </Dropdown>
    //     </div>
    //   ),
    // }
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

  // useEffect(() => {
  //   const today = new Date();
  //   const overdueNames = orderData
  //     .filter(record => new Date(record.dateDemob) < today)
  //     .map(record => record.name);

  //   if (overdueNames.length > 0) {
  //     alert(`Les employés suivants ont une date de démobilisation supérieure à aujourd'hui : ${overdueNames.join(', ')}`);
  //   }
  // }, [orderData]);

  const handleAddEmployeeClose = () => {
    setFindIdData(null);
    onViewEmployee(false);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}

        rowClassName={(record) => {
          const isFuture = record.dateDemob && new Date(record.dateMob) < new Date();
          return isFuture ? 'row-red' : '';
        }}
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
