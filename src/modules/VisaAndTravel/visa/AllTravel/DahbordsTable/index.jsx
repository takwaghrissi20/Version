import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const OrderTable = ({ orderData,user }) => {
  const location = useLocation();
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState("");
  const [getsid, setGetsid] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setId(responseData?.idTravel);
      setFindIdData(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du id Mission:", error);
    }
  };

  useEffect(() => {
    if (id) {
      findId(id);
    }
  }, [id]);

  const handleViewTravel= () => {
    navigate(`/Hr/Visa/ViewTravel/idTravel=${id}`, { 
      state: { id }
    });
  };

  const handleEditTravel = () => {
    navigate(`/Hr/Visa/UpdateTravel/idTravel=${id}`, { 
      state: { id }
    });
  };


  const items= user?.includes("admin") ? [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewTravel 
    },
    { 
      key: 2, 
      label: <span style={{ fontSize: 14 }}>Edit</span>, 
      onClick: handleEditTravel 
    }
  ] : [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewTravel 
    }
  ];
  
  const itemstest = [
   
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleViewTravel },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditTravel },
  
  ];

  const columns = [
    {
      title: 'ID Travel',
      dataIndex: 'idTravel',
      key: 'idTravel',
      width: 150,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 150,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Fonction',
      dataIndex: 'position',
      key: 'position',
    },
   
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Mobilization/Demobilization',
      dataIndex: 'goBack',
      key: 'goBack',
      render: (text, record) => {
        console.log("goBack",record.goBack); // Log the value to check
        return record.goBack ? (
          <span style={{ color: '#5784BA',fontFamily:"sans-serif" }}>Demobilization</span>
        ) : (
          <span style={{ color: '#384454',fontWeight:"bold"}}>Mobilization</span>
        );
        // return record.goBack ? 'Demobilization' : 'Mobilization';
      },
    },
   
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 80,
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.idTravel)}>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
        </div>
      ),
    }
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
  }, [id]);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
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
