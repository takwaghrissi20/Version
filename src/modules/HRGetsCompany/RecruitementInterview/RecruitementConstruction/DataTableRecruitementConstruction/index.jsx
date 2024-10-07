import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable } from '../../../../../styles/index.styled';
import RecruitementView from "../../../../Model/RecruitementView"
import RecruitementEdit from "../../../../Model/RecruitementEdit"
import { MoreOutlined } from '@ant-design/icons'
import {
  StyledRecentPatientBadge,

} from '../../index.styled'
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from "react-router-dom";
import { Button, Tooltip, Dropdown } from 'antd';
const AllRecruitementConstruction = ({ roles,allrecruitementbelow, findIdData, id, findId, setFindIdData, open, handleInterview }) => {

  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const [tableHeight, setTableHeight] = useState('auto');
  const token = localStorage.getItem("token")
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.15;
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
  const navigate = useNavigate();
  // const handleAddRecruitementOpen = () => {

  //   onViewRecruitement(true);
  // };
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

    //onViewRecruitement(true);
  };
  const handleAddRecruitementClose = () => {
    setFindIdData(null);
    onViewRecruitement(false);
  };

  // const handleEditRecruitementOpen = () => {
  //   onEditRecruitement(true);
  // };

  const handleEditRecruitementClose = () => {
    onEditRecruitement(false);
  };

  const handleDeleteRecruitement = () => {

    onDeleteRecruitement(true);
  };
  const handleApprovedRecruitement = () => {
      navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${findIdData?.jobCode}`, {
        state: {
          jobCode: findIdData?.jobCode,
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
          signatureBod2:findIdData?.signatureBod2
        
        }
    
    });
  };
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
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleAddRecruitementOpen },   
    // { key: 3, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview },
  
    //Approved Hr 
    ...(roles?.includes('Cordinator') || roles?.includes('admin') ? [
      ...(findIdData?.status === 'Approved By BOD' ? [
        { 
          key: 2, 
          label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, 
          onClick: handleInterview 
        }
      ] : [])
    ] : []),
    ...(roles.includes('admin') ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
      { key: 4, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement },
    ] : []),
    ...(roles.includes('bod') ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>,onClick:handleApprovedRecruitement },
     
    ] : []),
  ];

 
  const columns = [
    {
      title: 'Recruitement Referencerr',
      dataIndex: 'jobCode',
      key: 'jobCode',
      width: 150,

    },
    {
      title: 'Requested Discipline',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
      render: (text) => <a>{text}</a>,
      width: 150,
    },

    {
      title: 'Requested Discipline',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
      width: 150,
    },
    {
      title: 'Project Code',
      dataIndex: 'projRef',
      key: 'projRef',
      width: 80,
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
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (date) => (
        <Tooltip placement='topLeft' title={date}>
          {date}
        </Tooltip>
      ),
    },
    {
      title: 'Total Number',
      dataIndex: 'totalNumber',
      key: 'totalNumber',
      width: 80,
      ellipsis: {
        showTitle: false,
      },
      render: (number) => (
        <Tooltip placement='topLeft' title={number}>
          {number}
        </Tooltip>
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
        } else if (status?.includes('Refuse')) {
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
    //   dataIndex: 'notif',
    //   key: 'notif',
    //   width: 80,
    //   render: (text, record) => (
    //     <StyledRecentPatientBadge
    //       style={{
    //         color: record.color,
    //         backgroundColor: record.color + '44',
    //       }}
    //     >
    //       {record.notif}
    //     </StyledRecentPatientBadge>
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


        </div>

      ),

    }
  ];
  const rowClassName = (record) => {
    if (record.notif === 2) {
      return 'row-red';
    }
    return '';
  };

  return (
    <>
      <StyledOrderTable
        hoverColor
        data={allrecruitementbelow}
        columns={columns}
        rowClassName={rowClassName}
        scroll={{ x: 'auto', y: tableHeight }}
      //scroll={{ x: 'auto', y: 200 }}

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


export default AllRecruitementConstruction;
