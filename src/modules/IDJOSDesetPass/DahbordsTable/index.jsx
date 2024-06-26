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
      title: 'Mobilization Id',
      dataIndex: 'idTravel',
      key: 'idTravel',
      width: 100,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
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
      title: 'Desert Pass',
     
      children: [
        {
          title: 'Id Joys',
          dataIndex: 'joysId',
          key: 'joysId',
          width: 180,
        
          render: (id) => <StyledAnChar>JT-{id}</StyledAnChar>,
        },
        {
          title: 'Expiry Date',
          dataIndex: 'desertPass_finish_date',
          key: 'desertPass_finish_date',
          width: 100,
         
        },
      ],
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

        rowClassName={(record) => {
          const isFuture = record.desertPass_finish_date && new Date(record.desertPass_finish_date) < new Date();
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
