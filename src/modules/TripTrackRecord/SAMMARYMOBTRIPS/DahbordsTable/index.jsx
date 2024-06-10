import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../styles/index.styled';
import AppIconButton from "../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";

const OrderTable = ({ orderData }) => {


  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Jos Id',
      dataIndex: 'josId',
      key: 'josId',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Flight Date',
      dataIndex: 'dateOfTravel',
      key: 'dateOfTravel',
    },
    {
      title: 'Demob From',
      dataIndex: 'actualLocationFrom',
      key: 'actualLocationFrom',
    },

    {
      title: 'Demob To',
      dataIndex: 'actualLocationTo',
      key: 'actualLocationTo',
    },
 
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Mob Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Flight Ticket Number',
      dataIndex: 'refTicket',
      key: 'refTicket',
    },


  ];
  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
  
      const tableHeight = pageHeight ; 
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []); 

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}   
    >
     
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto',  y: tableHeight}}
       
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
