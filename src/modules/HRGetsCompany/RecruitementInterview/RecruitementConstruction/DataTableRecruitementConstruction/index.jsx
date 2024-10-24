import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import RecruitementView from "../../../../Model/RecruitementView"
import RecruitementEdit from "../../../../Model/RecruitementEdit"
import { MoreOutlined } from '@ant-design/icons'
import { StyledOrderTable, StyledAnChar, StyledRecentPatientBadge } from '../../../../../styles/index.styled';
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from "react-router-dom";
import { Button, Tooltip, Dropdown, Spin } from 'antd';
const AllRecruitementConstruction = ({ roles, recruitementTypeIdbelowBOD,
  recruitementTypeIdbelowPMO,
  allrecruitementbelow, findIdData, id, findId, setFindIdData,
  recruitementTypeIdBelowOperationManager,
  open, handleInterview }) => {

  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const [tableHeight, setTableHeight] = useState('auto');
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  console.log("tettfindIdData", findIdData)
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.34;
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
        chekedBod1: findIdData?.chekedBod1,
        chekedBod2: findIdData?.chekedBod2,


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
          chekedBod2: findIdData?.chekedBod2,
          chekedBod1: findIdData?.chekedBod1,


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
        signaturepolead: findIdData?.signaturepolead,
        signatureBod2: findIdData?.signatureBod2,
        chekedBod2: findIdData?.chekedBod2,
        chekedBod1: findIdData?.chekedBod1,

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
        chekedBod2: findIdData?.chekedBod2,
        chekedBod1: findIdData?.chekedBod1,


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
  const handleEditRecruitement = () => {
    navigate(`/Hr/Recruitement-Request-Construction/Update/codeJob=${id}`, {
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

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleAddRecruitementOpen },
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

      //Take Action PMO
      (
        (roles.includes('PMO') &&
          findIdData?.projectName !== "Office" &&
          findIdData?.signatureHod === "true" &&
          (
            !(findIdData?.notif === 7) &&
            !(findIdData?.notif === 3) &&
            !(findIdData?.notif === 8)
          )
        )
        ||
        (roles.includes('PMO') &&
          findIdData?.projectName !== "Office" &&
          findIdData?.signatureHod === "true" &&
          (
            (findIdData?.notif === 7) &&
            !(findIdData?.notif === 3) &&
            !(findIdData?.notif === 8)
          )
        )
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
    //eND Take Action PMO

    ...((findIdData?.projectName !== "Office" && roles.includes('bod')
      &&
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
      findIdData?.signatureHod === "false" &&
      ((findIdData?.oDep === "true"
        && findIdData?.exDep === "false")
        || (findIdData?.oDep === "false" &&
          findIdData?.exDep === "true"))

      && findIdData?.notif === 4 && roles.includes('Manager') &&
      findIdData?.dep.includes("Operation"))

      ||

      (findIdData?.projectName !== "Office" &&
        findIdData?.signatureHod === "true" &&
        ((findIdData?.oDep === "true"
          && findIdData?.exDep === "false")
          ||
          (findIdData?.oDep === "false" && findIdData?.exDep === "true"))
        && findIdData?.notif === 7 && roles.includes('Manager') &&
        findIdData?.dep.includes("Operation"))
    ) ? [
      { key: 3, label: <span style={{ fontSize: 14 }}>Take Action</span>, onClick: handleApprovedRecruitement },
    ] : []),

  ];

  const year = new Date().getFullYear();
  const statusBadges = {
    pending: { label: "Approved By HOD", bgColor: "#32CD32", color: "white" },
    checkedByPMO: { label: "Checked By PMO", bgColor: "#C0C0C0", color: "white" },
    approvedByHOD: { label: "Approved By HOD", bgColor: "#32CD32", color: "white" },
    refusedByHOD: { label: "Refuse By HOD Operation", bgColor: "#FF2400", color: "white" },
    approvedByHODOperation: { label: "Approved By HOD Operation", bgColor: "#32CD32", color: "white" },
    cisGenerate: { label: "CIS Generate", bgColor: "#5784BA", color: "white" }
  };
  
  const renderStatus = (record) => {
    if (record.notif === 3 && 
      record.chekedBod1 === "true" 
      && record.chekedBod2 === null) {
      return <StyledRecentPatientBadge
       style={{ backgroundColor: statusBadges.pending.bgColor, color: statusBadges.pending.color }}>{statusBadges.pending.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 4 && (record.oDep === "true" || record.exDep === "true")) {
      return <StyledRecentPatientBadge style={{ backgroundColor: statusBadges.checkedByPMO.bgColor, color: statusBadges.checkedByPMO.color }}>{statusBadges.checkedByPMO.label}</StyledRecentPatientBadge>;
    }
    if (record.notif === 7 && (record.oDep === "true" || record.exDep === "true")) {
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
      title: 'Project Code',
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
      ellipsis: {
        showTitle: false,
      },
      render: (number) => (
        <Tooltip placement='topLeft' title={number}>
          {number}
        </Tooltip>
      ),
    },
    // {
    //   title: 'RRS Status',
    //   dataIndex: 'notif',
    //   key: 'notif',
    //   render: (text, record) => {
    //     if (record.notif === 2) {
    //       return (
    //         <StyledRecentPatientBadge
    //         style={{            
    //           backgroundColor:"#37463D",
    //           color:"white",
    //           fontFamily:"inherit"
    //         }}
    //         >
    //          Pending
    //         </StyledRecentPatientBadge>
    //       );
    //     } 


    //     return null;
    //   },
    // },
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

                backgroundColor: "#C0C0C0",
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

                backgroundColor: "#C0C0C0",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Pending
            </StyledRecentPatientBadge>
          );
        }
        else if (record?.chekedBod1 === "true" &&
          record?.chekedBod2 === "true") {
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
        else if ((record?.chekedBod1 === "false" &&
          record?.chekedBod2 === "true") || (record?.chekedBod1 === "true" &&
            record?.chekedBod2 === "false")) {
          return (
            <StyledRecentPatientBadge
              style={{

                backgroundColor: "#FF2400",
                color: "white",
                fontFamily: "inherit",
                width: "100%",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Refuse By Bod
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
              Refuse By Bod
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
              Refuse By Bod
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
    //   render: (status,record) => {
    //     let backgroundColor;
    //     let color = 'white';
    //     if (status?.includes('Pending')) {
    //       backgroundColor = '#C0C0C0';
    //     } else if (status?.includes('Approved') ) {
    //       backgroundColor = '#32CD32';
    //     } else if (status?.includes('Refuse')) {
    //       backgroundColor = '#FF2400';
    //     }


    //     return (
    //       <div style={{ backgroundColor, color, padding: '4px', borderRadius: '4px', textAlign: 'center' }}>
    //         {status}
    //       </div>
    //     );
    //   },
    // },

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

    return '';
  };

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          {roles.includes('bod') && !roles.includes('PMO') && (
            <StyledOrderTable
              hoverColor
              data={recruitementTypeIdbelowBOD}
              columns={columns}
              // rowClassName={rowClassName}
              scroll={{ x: 'auto', y: tableHeight }}
            />
          )}
          {roles.includes('PMO') && (
            <StyledOrderTable
              hoverColor
              data={recruitementTypeIdbelowPMO}
              columns={columns}
              // rowClassName={rowClassName}
              scroll={{ x: 'auto', y: tableHeight }}
            />
          )}
          {!roles.includes('bod')
            && !roles.includes('PMO')
            && (!roles.includes('Manager'))
            && !roles.includes('Operation') &&


            (
              <StyledOrderTable
                hoverColor
                data={allrecruitementbelow}
                columns={columns}
                // rowClassName={rowClassName}
                scroll={{ x: 'auto', y: tableHeight }}
              />
            )}
          {
            roles.includes('Manager')
            && roles.includes('Human Ressource') &&
            (
              <StyledOrderTable
                hoverColor
                data={allrecruitementbelow}
                columns={columns}
                // rowClassName={rowClassName}
                scroll={{ x: 'auto', y: tableHeight }}
              />
            )}

          {(((roles.includes('Manager') && !roles.includes('Human Ressource')))
            &&
            roles.includes('Operation')) && (
              <StyledOrderTable
                hoverColor
                data={recruitementTypeIdBelowOperationManager}
                columns={columns}
                // rowClassName={rowClassName}
                scroll={{ x: 'auto', y: tableHeight }}
              />
            )}
          {/*Table Pf Recruitement Manager sauf Operation Manager*/}
          {/*Manager sauf Operation Or Human*/}
          {(((roles.includes('Manager') && !roles.includes('Human Ressource')))
            &&
            !roles.includes('Operation')) && (
              <StyledOrderTable
                hoverColor
                data={allrecruitementbelow}
                columns={columns}
                // rowClassName={rowClassName}
                scroll={{ x: 'auto', y: tableHeight }}
              />
            )}



          {isDelteRecruitement ? (
            <ConfirmationModal
              open={isDelteRecruitement}
              paragraph="Are you sure you want to delete this?"
              onDeny={onDeleteRecruitement}
              onConfirm={DeleteRecruitement}
              modalTitle={<IntlMessages id='common.deleteItem' />}
            />
          ) : null}
        </>
      )}
    </>
  );
};


export default AllRecruitementConstruction;
