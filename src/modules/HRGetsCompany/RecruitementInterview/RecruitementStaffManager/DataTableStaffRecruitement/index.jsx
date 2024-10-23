import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable, StyledAnChar, StyledRecentPatientBadge }
  from '../../../../../styles/index.styled';

import { Button, Alert, Tooltip, Spin } from 'antd';
import RecruitementView from "../../../../Model/RecruitementView"
import RecruitementEdit from "../../../../Model/RecruitementEdit"
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
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
  handleInterview,
  recruitementTypeIdAbovePMO,
  recruitementTypeIdAboveBOD,
  recruitementTypeIdAboveOperationManager,
  recruitementTypeIdAbove,
  allrecruitementAbove




}) => {
  console.log("recruitementTypeIdAbove", allrecruitementAbove)

  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const navigate = useNavigate();
  const [loading1, setLoading1] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading1(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
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
        chekedBod1: findIdData?.chekedBod1,
        chekedBod2: findIdData?.chekedBod2,

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
      const tableHeight = pageHeight*0.35;
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  const handleEditRecruitement = () => {
    navigate(`/Hr/Recruitement-Request/Update/codeJob=${id}`, {
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
        signaturepolead: findIdData?.signaturepolead,
        signatureBod2: findIdData?.signatureBod2,
        totalNumber: findIdData?.totalNumber


      }

    });
  }
  const handleEditRecruitementOpen = () => {
    navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${id}`, {
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
        signaturepolead: findIdData?.signaturepolead,
        signatureBod2: findIdData?.signatureBod2,
        chekedBod2: findIdData?.chekedBod2,
        chekedBod1: findIdData?.chekedBod1,


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

    setTimeout(() => {
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
          signaturepolead: findIdData?.signaturepolead,
          signatureBod2: findIdData?.signatureBod2,
          chekedBod2: findIdData?.chekedBod2,
          chekedBod1: findIdData?.chekedBod1,
        }
      });

    }, 100);
  };

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View  </span>, onClick: handleAddRecruitementOpen },
    // { key: 3, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview },
    ...(roles?.includes('Manager') || roles?.includes('Human Ressource') || roles?.includes('Leader') ? [
      ...(findIdData?.notif !== 3 && findIdData?.notif !== 8
        && findIdData?.notif !== 80
        && findIdData?.notif !== 4
        && findIdData?.notif !== 20 &&
        findIdData?.notif !== 7

        ? [

          { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitement }
        ] : []),
    ] : []),

    //Approved Hr 
    ...(roles?.includes('Cordinator') || roles?.includes('admin') ? [
      ...(findIdData?.notif == 3 && findIdData?.chekedBod2 === "true" || findIdData?.notif == 8 && findIdData?.chekedBod1 === "true" ? [
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

    ...((
      ((roles.includes('PMO') &&
        findIdData?.projectName !== "Office" &&
        (
          (findIdData?.signatureHod === "true") &&
          (!findIdData?.notif === 7 || !findIdData?.notif === 3 || !findIdData?.notif === 8)
        ))

        ||
        (roles.includes('PMO') &&
          findIdData?.projectName !== "Office" &&
          (
            (findIdData?.signatureHod === "true") &&
            (findIdData?.notif === 7 || !findIdData?.notif === 3 || !findIdData?.notif === 8)
          ))

        ||
        (
          roles.includes('PMO') &&
          !(findIdData?.notif === 7) &&
          !(findIdData?.notif === 3) &&
          !(findIdData?.notif === 8) &&
          findIdData?.position?.includes("Leader") &&
          findIdData?.signatureHod === "false"
        )
      )
    ) ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>, onClick: handleApprovedRecruitement },
    ] : []),

    ...((findIdData?.projectName !== "Office" && roles.includes('bod') &&
      findIdData?.signatureHod === "true" && ((findIdData?.oDep === "true" && findIdData?.exDep === "false")
        || (findIdData?.oDep === "false" || findIdData?.exDep === "true"))
      && (findIdData?.notif === 4 || findIdData?.notif === 7 || findIdData?.notif === 3 || findIdData?.notif === 8)) ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>, onClick: handleApprovedRecruitement },

    ] : []),
    ...((findIdData?.projectName == "Office" && roles.includes('bod') &&
      findIdData?.signatureHod === "true") ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>, onClick: handleApprovedRecruitement },

    ] : []),
    //Operation Take Action
    ...(((findIdData?.projectName !== "Office" &&
      findIdData?.signatureHod === "false" && ((findIdData?.oDep === "true"
        && findIdData?.exDep === "false")
        || (findIdData?.oDep === "false" && findIdData?.exDep === "true"))
      && findIdData?.notif === 4 && roles.includes('Manager') &&
      findIdData?.dep.includes("Operation")) ||

      (findIdData?.projectName !== "Office" &&
        findIdData?.signatureHod === "true" && ((findIdData?.oDep === "true"
          && findIdData?.exDep === "false")
          || (findIdData?.oDep === "false" && findIdData?.exDep === "true"))
        && findIdData?.notif === 7 && roles.includes('Manager') &&
        findIdData?.dep.includes("Operation"))





    ) ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>, onClick: handleApprovedRecruitement },
    ] : []),

  ];
  const year = new Date().getFullYear();
  const statusBadges = {
    pending: { label: "Pending", bgColor: "#C0C0C0", color: "white" },
    checkedByPMO: { label: "Checked By PMO", bgColor: "#C0C0C0", color: "white" },
    approvedByHOD: { label: "Approved By HOD", bgColor: "#32CD32", color: "white" },
    refusedByHOD: { label: "Refuse By HOD Operation", bgColor: "#FF2400", color: "white" },
    approvedByHODOperation: { label: "Approved By HOD Operation", bgColor: "#32CD32", color: "white" },
    cisGenerate: { label: "CIS Generate", bgColor: "#5784BA", color: "white" }
  };
  
  const renderStatus = (record) => {
    if (record.notif === 3 ) {
      return <StyledRecentPatientBadge
       style={{ backgroundColor: statusBadges.approvedByHOD.bgColor, 
        color: statusBadges.approvedByHOD.color }}>{statusBadges.approvedByHOD.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 8 ) {
      return <StyledRecentPatientBadge
       style={{ backgroundColor: statusBadges.approvedByHOD.bgColor, 
        color: statusBadges.approvedByHOD.color }}>{statusBadges.approvedByHOD.label}</StyledRecentPatientBadge>;
    }

    if (record.notif === 4 && (record.oDep === "true" || record.exDep === "true")) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.checkedByPMO.bgColor, color: statusBadges.checkedByPMO.color }}>{statusBadges.checkedByPMO.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 7 && 
      (record.oDep === "true" || record.exDep === "true")) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.approvedByHODOperation.bgColor, color: statusBadges.approvedByHODOperation.color }}>{statusBadges.approvedByHODOperation.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 70) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.refusedByHOD.bgColor, color: statusBadges.refusedByHOD.color }}>{statusBadges.refusedByHOD.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 2) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.approvedByHOD.bgColor, color: statusBadges.approvedByHOD.color }}>{statusBadges.approvedByHOD.label}</StyledRecentPatientBadge>;
    }
    if (record.interviewsc.length > 0) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.cisGenerate.bgColor, color: statusBadges.cisGenerate.color }}>{statusBadges.cisGenerate.label}</StyledRecentPatientBadge>;
    }
    return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.pending.bgColor, color: statusBadges.pending.color }}>{statusBadges.pending.label}</StyledRecentPatientBadge>;
  };
  const columns = [
    {
      title: 'Recruitement Reference',
      dataIndex: 'jobCode',
      key: 'jobCode',
      render: (text) => text ? <StyledAnChar>RRS-{text}- {year}</StyledAnChar> : null,

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
      title: 'RRS Status',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => renderStatus(record),
    },

    {
      title: 'BOD Approval',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => {
        if (record.notif === 3 && record.chekedBod1 === "true" && record.chekedBod2 === null) {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#4AA3A2",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Pending
            </StyledRecentPatientBadge>
          );
        } else if (record.notif === 8 && record.chekedBod2 === "true" && record.chekedBod1 === null) {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#4AA3A2",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Pending
            </StyledRecentPatientBadge>
          );
        }
        else if (record?.chekedBod1 === "true" && record?.chekedBod2 === "true") {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#32CD32",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Approved By Bod
            </StyledRecentPatientBadge>
          );
        }
        else if (record.notif === 80 && record.chekedBod2 === "false") {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#FF2400",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}>
              Refuse By Bod Nidhal
            </StyledRecentPatientBadge>
          );
        }
        else if (record.notif === 20 && record.chekedBod1 === "false") {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#FF2400",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}>
              Refuse By Bod Ali
            </StyledRecentPatientBadge>
          );
        }
        else if (record.chekedBod2 === "true" && record.chekedBod1 === "false") {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#F27438",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}>
              Approved By Bod Nidhal And Refuse Bu Bod Ali
            </StyledRecentPatientBadge>
          );
        }
        else if (record.chekedBod2 === "false" && record.chekedBod1 === "true") {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#F27438",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}>
              Approved By Bod Ali And Refuse By Bod Nidhal
            </StyledRecentPatientBadge>
          );
        }
        else if (record.notif === 2) {
          return (
            <StyledRecentPatientBadge
              style={{
                backgroundColor: "#C0C0C0",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}>
              Pending
            </StyledRecentPatientBadge>
          );
        }

        return "Pending";
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
  const rowClassName = (record) => {
    if (record.notif === 2 && record?.projectName == "Office" && roles.includes('bod')) {
      return 'row-red';
    }
    else if (record.notif === 3 && record.chekedBod2 === null) {
      return 'row-bod';
    }
    else if (record.notif === 8 && record.chekedBod1 === null) {
      return 'row-bod';
    }
    else if ((record?.projectName == "Office") && roles.includes('PMO') &&
      record?.signatureHod === "true") {
      return 'row-bod';
    }
    else if ((!record.projectName.includes("Office")) && roles.includes('PMO') &&
      record?.notif === 6) {
      return 'row-bod';
    }


    return '';
  };

  return (
    <>
      {loading1 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <>   
  
        {(roles.includes('admin') || roles.includes('Cordinator') ||
        roles.includes('Administrator')  ) &&
              <>
                <StyledOrderTable
                  hoverColor
                  data={allrecruitementAbove}
                  columns={columns}
                  scroll={{ x: 'auto', y: tableHeight }}
                  // rowClassName={rowClassName}
                  border


                />
              </>
            
          }
          {roles.includes('bod')
            && (
              <>
                <StyledOrderTable
                  hoverColor
                  data={recruitementTypeIdAboveBOD}
                  columns={columns}
                  scroll={{ x: 'auto', y: tableHeight }}
                  // rowClassName={rowClassName}
                  border


                />
              </>
            )
          }
          {((roles.includes('Manager') && !roles.includes('Human Ressource') && !roles.includes('Operation')) ||
            roles.includes('Leader'))
            && (
              <>
          
                <StyledOrderTable
                  hoverColor
                  data={allrecruitementabove}
                  columns={columns}
                  scroll={{ x: 'auto', y: tableHeight }}
                  // rowClassName={rowClassName}
                  border


                />
              </>
            )
          }
          {roles.includes('PMO') && (
            <>
              <StyledOrderTable
                hoverColor
                data={recruitementTypeIdAbovePMO}
                columns={columns}
                scroll={{ x: 'auto', y: tableHeight }}
                // rowClassName={rowClassName}
                border

              />
            </>
          )
          }
          {!roles.includes('bod') &&
            !roles.includes('PMO') &&
            !roles.includes('Operation Manager') &&
            roles.includes('Human Ressource') &&
            roles.includes('Cordinator') && (
              <>
            
              <StyledOrderTable
                hoverColor
                data={allrecruitementAbove}
                columns={columns}
                scroll={{ x: 'auto', y: tableHeight }}
                // rowClassName={rowClassName}
                border
              />
              </>
            )}
            {
            
            roles.includes('Human Ressource') &&
          (
              <>
            
              <StyledOrderTable
                hoverColor
                data={allrecruitementAbove}
                columns={columns}
                scroll={{ x: 'auto', y: tableHeight }}
                // rowClassName={rowClassName}
                border
              />
              </>
            )}


          {roles === "Operation Manager" && (
            <>
              <StyledOrderTable
                hoverColor
                data={recruitementTypeIdAboveOperationManager}
                columns={columns}
                scroll={{ x: 'auto', y: tableHeight }}
                // rowClassName={rowClassName}
                border

              />
            </>
          )
          }
        </>
      )}




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
