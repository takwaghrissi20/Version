import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown ,Spin } from 'antd';
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
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(true); 
  // Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseData transfer", responseData?.refTransf);
      setId(responseData?.refTransf);
      setFindIdData(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du id Transfer Emp:", error);
    }
  };

  useEffect(() => {
    if (id) {
      findId(id);
    }
  }, [id,findIdData]);

  const handleViewTransfer = () => {
    navigate(`/Hr/ManpowerLocation/Employee_Transfer_Permission/ViewTransferEmployee/ETP=${id}`, { 
      state: {
         id :id,
         formattedDate:findIdData?.formattedDate,
         findIdData:findIdData

        
        
        }
     
    });
  };

  const handleEditTransfer = () => {
    navigate(`/Hr/ManpowerLocation/Employee_Transfer_Permission/UpdateTransferEmployee/ETP=${id}`, { 
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
      onClick: handleViewTransfer
    },
    { 
      key: 2, 
      label: <span style={{ fontSize: 14 }}>Edit</span>, 
      onClick: handleEditTransfer 
    }
  ] : [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewTransfer
    }
  ];


  const columns = [
    {
      title: 'Reference',
      dataIndex: 'refTransf',
      key: 'refTransf',
      width: 150,
      render: (id) => <StyledAnChar>ETP-{id}</StyledAnChar>,
    },
    {
      title: 'Requestor',
      dataIndex: 'requestor',
      key: 'requestor',
      width: 150,
  
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
   
    {
      title: 'Transfer From',
      dataIndex: 'transferFrom',
      key: 'transferFrom',
    },
    {
      title: 'To ',
      dataIndex: 'transferTo',
      key: 'transferTo',
    },
    {
      title: 'Desired Transfer Date',
      dataIndex: 'desiredTransfDate',
      key: 'desiredTransfDate',
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
        <div onClick={() => findId(record?.refTransf)}>
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
