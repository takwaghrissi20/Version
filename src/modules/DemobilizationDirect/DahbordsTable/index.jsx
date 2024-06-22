import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { MoreOutlined } from '@ant-design/icons';

const OrderTable = ({ orderData }) => {

  
  const handleViewDemobilization = () => {
    console.log("View")
     };
   
     const handleUpdateDemobilization = () => {
       console.log("Update")
     };
   
  
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>,onClick: handleViewDemobilization },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>,onClick: handleUpdateDemobilization },
  
  ];

 


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
      title: 'Project Work',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Demobilization Date',
      dataIndex: 'dateDemob',
      key: 'dateDemob',
      render: (dateDemob) => {
        if (!dateDemob) return null;  // Exclude empty dates
        const isFuture = new Date(dateDemob) < new Date();
        return (
          <span style={{ color: isFuture ? 'red' : 'black' }}>
            {dateDemob}
          </span>
        );
      },
    },
    {
      title: 'Plan Date Return Date to Site After Rotaion as Per Policy',
      dataIndex: '????',
      key: '???',
      ellipsis: true,
    },
    {
      title: 'End Mission Date',
      dataIndex: 'endDateMiss',
      key: 'endDateMiss',
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



  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
   
        rowClassName={(record) => {
          const isFuture = record.dateDemob && new Date(record.dateDemob) < new Date();
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
