import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledAnChar,
  StyledOrderTable,
} from '../../../../styles/index.styled';
import { Button } from 'antd';
import RecruitementView from "../../../Model/RecruitementView"
import RecruitementEdit from "../../../Model/RecruitementEdit"
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';
import { Space, Table } from 'antd';


const FixHeader = ({ orderData, loading }) => {
  const getDesiredDateColor = (desiredDate) => {
    const daysDifference = desiredDate ? Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24)) : '';
    return daysDifference < 0 ? 'red' : 'green';
  };

  const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAddRecruitementOpen = () => {

    onViewRecruitement(true);
  };
  const handleAddRecruitementClose = () => {
    setFindIdData(null);
    onViewRecruitement(false);
  };

  const handleEditRecruitementOpen = () => {
    onEditRecruitement(true);
  };

  const handleEditRecruitementClose = () => {
    onEditRecruitement(false);
  };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}`, {
        method: 'POST',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        setFindIdData(responseData);
        setId(responseData.jobCode)
      


      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddRecruitementOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span> },
    // { key: 3, label: <span style={{ fontSize: 14 }}>generate the interview sheet</span>, onClick: handleAddInterviewSheet },
  ];

  const columns = [
    {
      title: 'Position',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
      width: 150,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'POSITION LEFT',
      dataIndex: 'totalNumber',
      key: 'totalNumber',
      width: 150,
    },
    {
      title: 'Department',
      dataIndex: 'dep',
      key: 'dep',
      width: 150,
     
    },
    {
      title: 'Project Reference',
      dataIndex: 'projRef',
      key: 'projRef',
      width: 150,


    },
    {
      title: '#Experiences',
      dataIndex: 'nbExperience',
      key: 'nbExperience',
      width: 150,


    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',
      width: 150,

      render: (desiredDate) => (
        desiredDate ? new Date(desiredDate).toLocaleDateString() : ""
      ),

    },
    {
      title: 'OVERDUE DATE DAYS',
      dataIndex: 'desiredDate',
      width: 150,

      key: 'overdueDateDays',
      render: (desiredDate) => (
        desiredDate ? (
          <span style={{ color: getDesiredDateColor(desiredDate) }}>
            {Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24))}
          </span>
        ) : ''
      ),

    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.jobCode)}>
          <Dropdown menu={{ items }} trigger={['click']}  >
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
          {isViewRecruitement && (
            <RecruitementView
            
              isViewRecruitement={isViewRecruitement}
              handleAddContactClose={handleAddRecruitementClose}
              JobCode={findIdData?.jobCode}
              idemp={findIdData?.idemp}
              dep={findIdData?.dep}
              requestName={findIdData?.requestName}
              position={findIdData?.position}
              DesiredDate={findIdData?.desiredDate}
              projectName={findIdData?.projectName}
              projRef={findIdData?.projRef}
              type={findIdData?.type}
              affectedTo={findIdData?.affectedTo}
              requestedDicipline={findIdData?.requestedDicipline}
              Level={findIdData?.experience}
              exDep={findIdData?.exDep}
              Numbervacancies={findIdData?.totalNumber}
              certif={findIdData?.certif}
              nbExperience={findIdData?.nbExperience}
            />
          )}
          {isEditRecruitement && (

            <RecruitementEdit
              isEditRecruitement={isEditRecruitement}
              handleAddContactClose={handleEditRecruitementClose}
              JobCode={findIdData?.jobCode}
              idemp={findIdData?.idemp}
              dep={findIdData?.dep}
              requestName={findIdData?.requestName}
              position={findIdData?.position}
              DesiredDate={findIdData?.desiredDate}
              projectName={findIdData?.projectName}
              projRef={findIdData?.projRef}
              type={findIdData?.type}
              affectedTo={findIdData?.affectedTo}
              requestedDicipline={findIdData?.requestedDicipline}
              Level={findIdData?.experience}
              exDep={findIdData?.exDep}
              Numbervacancies={findIdData?.totalNumber}
              certif={findIdData?.certif}
              nbExperience={findIdData?.nbExperience}
            />
          )}

        </div>

      ),


    }
  ];
 
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Table
      columns={columns}
      dataSource={orderData}
        scroll={{ y: 250 }}
      />
    </Space>
  );
};

export default FixHeader;
