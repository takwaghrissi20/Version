import React, { useState, useEffect } from 'react';
import { StyledOrderTable } from '../../../../styles/index.styled';
import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AllDemob = ({ employeessite, findIdData, id, findId,handleInterview }) => {

  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const navigate = useNavigate();
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const token = localStorage.getItem("token")
useEffect(() => {
  const extractFilteredEmployees = () => {
    return employeessite.filter(employee => {
      let latestDemobDate = new Date(0);
      let hasLaterDemob = false;
      employee.projects.forEach(project => {
        project.miss.forEach(mission => {
          mission.travels.forEach(travel => {
            travel.mob.forEach(mob => {
              const travelDate = new Date(mob.dateDemob);
              if (travelDate > latestDemobDate && mob.type === "DeMobilization") {
                latestDemobDate = travelDate;
                hasLaterDemob = true;
              }
            });
          });
        });
      });

      return hasLaterDemob;
    });
  };

  const filteredData = extractFilteredEmployees();
  setFilteredEmployees(filteredData);
}, [employeessite]);
console.log("filteredEmployees",filteredEmployees)

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
        chekedBod1:findIdData?.chekedBod1,
        chekedBod2:findIdData?.chekedBod2,
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
  };

  const handleEditRecruitementClose = () => {
    onEditRecruitement(false);
  };

  const handleDeleteRecruitement = () => {
    onDeleteRecruitement(true);
  };

  const DeleteRecruitement = async () => {
    try {
      const endPoint = process.env.NODE_ENV === "development" ? "https://dev-gateway.gets-company.com" : "";
      const response = await fetch(`${endPoint}/api/v1/re/delete?code=${id}&token=${token}`, {
        method: 'DELETE',
      });

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
  };

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddRecruitementOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
    { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement },
    { key: 4, label: <span style={{ fontSize: 14 }}>Generate the interview sheet</span>, onClick: handleInterview },
  ];

  const columns = [
    {
      title: 'Reference /Scan Copy',
      dataIndex: 'ref',
      key: 'ref',
    },
    {
      title: 'ID_Total',
      dataIndex: 'IDTotal',
      key: 'IDTotal',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
      render: (text, record) => {
        const project = record.projects.find(proj => proj.projName);
        return project ? project.projName : null;
      },
    },
    
    {
      title: 'Actual Location',
      dataIndex: 'ActualLocation',
      key: 'ActualLocation',
    },
    {
      title: 'Exit Reentry /Final Exit',
      dataIndex: 'Exit Reentry /Final Exit',
      key: 'Exit Reentry /Final Exit',
    },
    {
      title: 'To Location',
      dataIndex: 'To Location',
      key: 'To Location',
    },
    {
      title: 'Back To Back Requirement',
      dataIndex: 'Back To Back Requirement',
      key: 'Back To Back Requirement',
    },
    {
      title: 'Back To Back Site',
      dataIndex: 'Back To Back Site',
      key: 'Back To Back Site',
    },
    {
      title: 'Desired Demob Date from Site',
      dataIndex: 'Back To Back Site',
      key: 'Back To Back Site',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.jobCode)}>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <>
      <StyledOrderTable
        hoverColor
        data={filteredEmployees}
        columns={columns}
        scroll={{ x: 'auto', y: 200 }}
      />
      {isDelteRecruitement && (
        <ConfirmationModal
          open={isDelteRecruitement}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={onDeleteRecruitement}
          onConfirm={DeleteRecruitement}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      )}
    </>
  );
};

export default AllDemob;
