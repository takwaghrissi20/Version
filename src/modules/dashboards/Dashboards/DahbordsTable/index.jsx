import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
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

const getDesiredDateColor = (desiredDate) => {
  const daysDifference = desiredDate ? Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24)) : '';
  return daysDifference < 0 ? 'red' : 'green';
};

const OrderTable = ({ orderData, loading }) => {

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
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'POSITION LEFT',
      dataIndex: 'totalNumber',
      key: 'totalNumber',
    },
    {
      title: 'Department',
      dataIndex: 'dep',
      key: 'dep',
     
    },
    {
      title: 'Project Reference',
      dataIndex: 'projRef',
      key: 'projRef',


    },
    {
      title: '#Experiences',
      dataIndex: 'nbExperience',
      key: 'nbExperience',


    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',

      render: (desiredDate) => (
        desiredDate ? new Date(desiredDate).toLocaleDateString() : ""
      ),

    },
    {
      title: 'OVERDUE DATE DAYS',
      dataIndex: 'desiredDate',

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
    <>
      <StyledOrderTable
        hoverColor
        data={orderData}
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />


    </>
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
