import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, notification, Row, Spin,Col } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../styles/index.styled';

const OrderTable = ({ orderData, positionCount,departmentCount ,total}) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const [loading, setLoading] = useState(true); // Loading state
  const columns = [
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'QTY',
      dataIndex: 'count',
      key: 'count',
    },
 
 
   
   
  ];
  const columnsDep = [
    {
      title: 'Departement',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'QTY',
      dataIndex: 'count',
      key: 'count',
    },
 
 
   
   
  ];
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.5; // Adjust table height
      setTableHeight(tableHeight);
    };

    // Set a 3-second loading delay
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight(); // Call once on mount

    // Cleanup functions
    return () => {
      clearTimeout(loadingTimer); 
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Row>
        {loading ? (
          <Spin size="large" style={{ margin: '0 auto' }} /> 
        ) : (
          <Row gutter={16}>
              <Col xs={24} sm={11}>
          <StyledOrderTable
            hoverColor
            data={positionCount}
            columns={columns}
            scroll={{ x: 'auto', y: tableHeight }}
          />
          </Col>
          <Col style={{backgroundColor:"transparent"}}xs={24} sm={1}>
          </Col>

          <Col xs={24} sm={11}>
          <StyledOrderTable
            hoverColor
            data={departmentCount}
            columns={columnsDep}
            scroll={{ x: 'auto', y: tableHeight }}
          />
              <p style={{ textAlign: 'right',paddingTop:"1rem",fontSize:"1.5rem",fontFamily:"monospace" }}>Total: <span style={{color:"#2997f"}}>{total}</span></p>
          </Col>
     
          
          </Row>
        )}
      </Row>
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
