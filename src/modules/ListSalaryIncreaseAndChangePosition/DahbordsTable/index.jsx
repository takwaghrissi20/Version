import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown ,Spin } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
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
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(true); 
  // Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/position/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseData position", responseData?.refPos);
      setId(responseData?.refPos);
      setFindIdData(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du id POSITION cHANGE Emp:", error);
    }
  };

  useEffect(() => {
    if (id) {
      findId(id);
    }
  }, [id,findIdData]);

  const handleViewIncrease = () => {
    navigate(`/HrDataBase/SALARY_INCREASE_And_Position_Change/View/SIF=${id}`, { 
      state: {
         id :id,
         formattedDate:findIdData?.formattedDate,
         findIdData:findIdData

  
        
        }
     
    });
  };

  const handleEditIncrease = () => {
    navigate(`/HrDataBase/SALARY_INCREASE_And_Position_Change/Update/SIF=${id}`, { 
      state: { 
        id :id,
        formattedDate:findIdData?.formattedDate,
        findIdData:findIdData
       
      


        
      }
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const items = user?.includes("admin") ? [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewIncrease
    },
    { 
      key: 2, 
      label: <span style={{ fontSize: 14 }}>Edit</span>, 
      onClick: handleEditIncrease
    }
  ] : [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewIncrease
    }
  ];


  const columns = [
    {
      title: 'Reference',
      dataIndex: 'refPos',
      key: 'refPos',
      width: 150,
      render: (id) => <StyledAnChar>SIF-{id}</StyledAnChar>,
    },
    {
      title: 'GetsId',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 150,
  
    },
    {
      title: 'NewPosition',
      dataIndex: 'newPositionnewPosition',
      key: 'newPosition',
    },
   
    {
      title: 'Assignement Project',
      dataIndex: 'assignementProject',
      key: 'assignementProject',
    },
    {
      title: 'Request Type',
      dataIndex: 'Request TypetransferTo',
      key: 'Request Type',
      render: (_, record) => {
        if (record.checkSalaryIncrease) {
          return 'Salary Increase';
        } else if (record.chekPositionChange) {
          return 'Position Change';
        } else if (record.checkBoth) {
          return 'Salary Increase & Position Change';
        } else {
          return 'N/A'; 
        }
      },
    },
      {
    title: 'Actual Salary',
    dataIndex: 'actualSalary',
    key: 'actualSalary',
    render: (_, record) => (record.checkSalaryIncrease || record.checkBoth ? record.actualSalary : null),
  },
  {
    title: 'New Salary',
    dataIndex: 'newSalary',
    key: 'newSalary',
    render: (_, record) => {
      if (record.checkSalaryIncrease || record.checkBoth) {
        return (
          <span style={{ color: '#212E53', fontWeight: 'bold' }}>
            {record.newSalary}
          </span>
        );
      }
      return null;
    },
  },
  

  {
    title: 'Actual Position',
    dataIndex: 'actualPosition',
    key: 'actualPosition',
    render: (_, record) => (record.chekPositionChange || record.checkBoth ? record.actualPosition : null),
  },
  {
    title: 'New Position',
    dataIndex: 'newPosition',
    key: 'newPosition',
    render: (_, record) => {
      if (record.chekPositionChange || record.checkBoth) {
        return (
          <span style={{ color: '#5784BA', fontWeight: 'bold' }}>
            {record.newPosition}
          </span>
        );
      }
      return null;
    },
  },
  
   
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
    },
   
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 80,
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.refPos)}>
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
       {loading ? (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spin size="large" tip="Loading..." />
      </div>
    ) : (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
          <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
      />
      </AppAnimate>
    )}
     
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
