import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable } from '../../../../../styles/index.styled';

import { Button, Alert, Tooltip } from 'antd';
import RecruitementView from "../../../../Model/RecruitementView"
import RecruitementEdit from "../../../../Model/RecruitementEdit"
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import {
  StyledRecentPatientBadge,

} from '../../index.styled'
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
const AllRecruitementStaff = ({ allrecruitementabove,
  findIdData,
  id,
  findId,
  setFindIdData
  , open,
  roles,
  handleInterview }) => {


  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const navigate = useNavigate();

  const handleAddRecruitementOpen = () => {
    navigate(`/Hr/Recruitement&Interview/Recruitement/View/codeJob=${id}`, {
      state: {
        id: id,
        dep: findIdData?.dep,
        idemp: findIdData?.idemp,
        requestName: findIdData?.requestName,
        position: findIdData?.position,
        DesiredDate: findIdData?.desiredDate,
        projectName: findIdData?.projectName,
        projRef: findIdData?.projRef,
        type: findIdData?.type,
        affectedTo: findIdData?.affectedTo,
        requestedDicipline: findIdData?.requestedDicipline,
        Level: findIdData?.experience,
        Numbervacancies: findIdData?.totalNumber,
        certif: findIdData?.certif,
        nbExperience: findIdData?.nbExperience,
        recruttrequestDate: findIdData?.recruttrequestDate,
        projCode: findIdData?.projRef,
        type: findIdData?.type,
        exDep: findIdData?.exDep,
        oDep: findIdData?.oDep,
        comentPlaner: findIdData?.comentPlaner,
        signatureBod: findIdData?.signatureBod,
        signatureHod: findIdData?.signatureHod,








      }

    });





    //onViewRecruitement(true);
  };

  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.25;
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  const handleEditRecruitementOpen = () => {
    navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${id}`, {
      state: {
        id: id,
        dep: findIdData?.dep,
        idemp: findIdData?.idemp,
        requestName: findIdData?.requestName,
        position: findIdData?.position,
        DesiredDate: findIdData?.desiredDate,
        projectName: findIdData?.projectName,
        projRef: findIdData?.projRef,
        type: findIdData?.type,
        affectedTo: findIdData?.affectedTo,
        requestedDicipline: findIdData?.requestedDicipline,
        Level: findIdData?.experience,
        Numbervacancies: findIdData?.totalNumber,
        certif: findIdData?.certif,
        nbExperience: findIdData?.nbExperience,
        recruttrequestDate: findIdData?.recruttrequestDate,
        projCode: findIdData?.projRef,
        exDep: findIdData?.exDep,
        oDep: findIdData?.oDep,
        comentPlaner: findIdData?.comentPlaner,
        signatureBod: findIdData?.signatureBod,
        signatureHod: findIdData?.signatureHod,


      }

    });
  }


  const handleEditRecruitementClose = () => {
    onEditRecruitement(false);
  };

  const handleDeleteRecruitement = () => {

    onDeleteRecruitement(true);
  };

  const DeleteRecruitement = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`${endPoint}/api/v1/re/delete?code=${id}`, {
        method: 'DELETE',
      });

      // Handle server response
      if (!response.ok) {
        console.log("Error: Response not OK", response.status);
        alert("Error Not Recruitement Delete");
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      if (response.ok) {


        const data = await response.text();
        console.log("deletee", data);
        alert(data);
        onDeleteRecruitement(false);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }
  
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddRecruitementOpen },
    ...(roles.includes('admin') ? [
      { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
      { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement },
    ] : []),
    ...(roles.includes('Administrator') || roles.includes('admin')  ? [
      ...(findIdData?.status === 'Approved By BOD' ? [
        { key: 2, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview }
           
      ] : []),
    ] : []),
    // ...(findIdData?.status === 'Approved By BOD' ? [
    //   { key: 4, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview }
    // ] : [])
    // { key: 3, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview },

  ];
  const columns0 = [
    {
      title: 'Recruitement Reference',
      dataIndex: 'jobCode',
      key: 'jobCode',

    },

    {
      title: 'Requestor Name',
      dataIndex: 'requestName',
      key: 'requestName',
    },


    {
      title: 'Requested Discipline',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
    },


    {
      title: 'Project Code/Office',
      dataIndex: 'projRef',
      key: 'projRef',
    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',
    },

    {
      title: 'Total Number',
      dataIndex: 'totalNumber',
      key: 'totalNumber',

    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <StyledRecentPatientBadge
          style={{
            color: record.color,
            backgroundColor: record.color + '44',
          }}
        >
          {record.status}
        </StyledRecentPatientBadge>
      ),
    },

    {
      title: 'Status',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => (
        <StyledRecentPatientBadge
          style={{
            color: record.color,
            backgroundColor: record.color + '44',
          }}
        >
          {record.notif}
        </StyledRecentPatientBadge>
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
          {/* {isViewRecruitement && (
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
          )} */}

        </div>

      ),


    },

  ];
  const columns = [
    {
      title: 'Recruitement Reference',
      dataIndex: 'jobCode',
      key: 'jobCode',


    },
    {
      title: 'Requestor Name',
      dataIndex: 'requestName',
      key: 'requestName',
      render: (text) => <a>{text}</a>,

    },

    {
      title: 'Requested Discipline',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',

    },
    {
      title: 'Project Code/Office',
      dataIndex: 'projRef',
      key: 'projRef',

      ellipsis: {
        showTitle: false,
      },
      render: (Project) => (
        <Tooltip placement='topLeft' title={Project}>
          {Project}
        </Tooltip>
      ),

    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',

      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement='topLeft' title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Total Number',
      dataIndex: 'totalNumber',
      key: 'totalNumber',

      ellipsis: {
        showTitle: false,
      },
      render: (address) => (
        <Tooltip placement='topLeft' title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',

      ellipsis: {
        showTitle: false,
      },
      render: (desiredDate) => (
        desiredDate ? new Date(desiredDate).toLocaleDateString() : ""
      ),


    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => {
        let backgroundColor;
        let color = 'white'; 
    
        if (status.includes('Pending')) {
          backgroundColor = 'red';
        } else if (status.includes('Approved')) {
          backgroundColor = 'green';
        } else if (status.includes('Refuse')) {
          backgroundColor = 'blue';
        }
    
        return (
          <div style={{ backgroundColor, color, padding: '4px', borderRadius: '4px', textAlign: 'center' }}>
            {status}
          </div>
        );
      },
    },
 
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    // },
    // {
    //   title: 'Status',
    //   dataIndex: 'notif',
    //   key: 'notif',

    //   ellipsis: {
    //     showTitle: false,
    //   },
    //   render: (text, record) => (
    //     <Tooltip style={{
    //         color: record.color,
    //         backgroundColor: record.color + '44',
    //       }}>
    //     {record.notif}
    //   </Tooltip>

    //   ),  
    // },


    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 88,
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.jobCode)}>
          <Dropdown menu={{ items }} trigger={['click']}  >
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
          {/* {isViewRecruitement && (
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
          )} */}
          {/* {isEditRecruitement && (
  
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
          )} */}

        </div>

      ),

    }
  ];


  return (
    <>

      <StyledOrderTable
        hoverColor
        data={allrecruitementabove}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
        border

      />

      {isDelteRecruitement ? (
        <ConfirmationModal
          open={isDelteRecruitement}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={onDeleteRecruitement}
          onConfirm={DeleteRecruitement}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}

      {/* {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <p>Do you want to generate an interview for this position?</p>
            <div className="button-container">
              <button className="red-button" onClick={AddInterview }>Yes</button>
              <button className="green-button" onClick={handleAddInterviewSheetClose}>Cancel</button>
            </div>
          
          </div>
        </div>
      )} */}

    </>
  );
};



export default AllRecruitementStaff;
