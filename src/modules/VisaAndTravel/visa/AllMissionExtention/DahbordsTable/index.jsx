import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const OrderTable = ({ orderData }) => {
  const location = useLocation();
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState("");
  const [getsid, setGetsid] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  // Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseData Mission", responseData?.getsId);
      setId(responseData?.ref);
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

  const handleViewMission = () => {
    navigate(`/Hr/Visa/ViewMissionOrderExtention/MER=${id}`, { 
      state: { id }
    });
  };

  const handleEditMission = () => {
    navigate(`/Hr/Visa/UpdateMissionOrderExtention/MER=${id}`, { 
      state: { id }
    });
  };



  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleViewMission },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditMission },
  
  ];

  const columns = [
    {
      title: 'ID Mission',
      dataIndex: 'ref',
      key: 'ref',
      width: 150,
      render: (id) => <StyledAnChar>MER-{id}</StyledAnChar>,
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
      title: 'gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Actual Location',
      dataIndex: 'actualLocation',
      key: 'actualLocation',
    },
    {
      title: 'New Mission',
      dataIndex: 'new_mission',
      key: 'new_mission',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 80,
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.ref)}>
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
