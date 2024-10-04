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
  setLoading,
  loading,
  handleInterview }) => {


  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
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
        // type: findIdData?.type,
        exDep: findIdData?.exDep,
        oDep: findIdData?.oDep,
        comentPlaner: findIdData?.comentPlaner,
        signatureBod: findIdData?.signatureBod,
        signatureHod: findIdData?.signatureHod,








      }

    });





    //onViewRecruitement(true);
  };
  ////////////Gets Status
  const getStatus = (notificationValue) => {
    switch (notificationValue) {
      case 2:
        return 'Waiting';
        case 6:
          return 'Waiting';
          case 8:
            return 'Waiting';
      case 3:
        return 'Approved by BOD';
      case 20:
        return 'Refuse By BOD';
      case 4:
        return 'Checked By PMO';
      case 7:
        return 'Accepted By Operation Manager';
        case 70:
          return 'Refuse By Operation Manager';
      default:
        return 'Pending';
    }
  };
  const getStatusClass = (notificationValue) => {
    switch (notificationValue) {
      case 2:
      case 0:
        return 'status-approved';
      case 20:
      case 10:
        return 'status-rejected';
      default:
        return 'status-Pending';
    }
  }

  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.18;
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

      const response = await fetch(`${endPoint}/api/v1/re/delete?code=${id}&token=${token}`, {
        method: 'DELETE',
      });

      // Handle server response
      if (!response.ok) {
        console.log("Error: Response not OK", response.status);
        alert("Error Not Recruitement Delete");
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      if (response.ok) {


        const data = await response.json();
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
  const handleApprovedRecruitement = () => {
    setLoading(true); 
    setTimeout(() => {
      navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${findIdData?.jobCode}`, {
        state: {
          jobCode: findIdData.jobCode,
          notif: findIdData?.notif,
          dep: findIdData?.dep,
          idemp: findIdData?.idemp,
          requestName: findIdData?.requestName,
          dateInputRecrut: findIdData?.dateInputRecrut,
          position: findIdData?.position,
          recruttrequestDate: findIdData?.recruttrequestDate,
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
          exDep: findIdData?.exDep,
          oDep: findIdData?.oDep,
          comentPlaner: findIdData?.comentPlaner,
          signatureBod: findIdData?.signatureBod,
          signatureHod: findIdData?.signatureHod,
          signaturepolead:findIdData?.signaturepolead,
          signatureBod2:findIdData?.signatureBod2,
        }
      });
      // Hide the loading indicator after navigating
      setLoading(false);
    }, 1000); // 1 second delay
  };
  
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddRecruitementOpen },
    ...(roles.includes('admin') ? [
      { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
      { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement },
    ] : []),
    ...(roles?.includes('Cordinator') || roles?.includes('admin')  ? [
      ...(findIdData?.status === 'Approved By BOD' ? [
        { key: 2, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview }
           
      ] : []),
    ] : []),
    // ...(findIdData?.status === 'Approved By BOD' ? [
    //   { key: 4, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview }
    // ] : [])
    // { key: 3, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview },
    ...(roles.includes('bod') ? [
      { key: 2, label: <span style={{ fontSize: 14 }}>Approve</span>, onClick: handleApprovedRecruitement },
     
    ] : []),
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
      width: 150,
      render: (status) => {
        let backgroundColor;
        let color = 'white'; 
    
        if (status?.includes('Pending')) {
          backgroundColor = '#C0C0C0';
        } else if (status?.includes('Approved')) {
          backgroundColor = '#32CD32';
        } else if (status?.includes('Not Approved ')) {
          backgroundColor = 'red';
        }
        else if (status?.includes('Cheked By PMO')) {
          backgroundColor = '#FF2400';
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
{loading && <div>...</div>}

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
