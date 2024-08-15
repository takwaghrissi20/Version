import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import OrderActions from './OrderActions';
import { StyledCustomerTable } from '../index.styled';
import { Dropdown, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { StyledOrderTable, StyledAction } from '../../../../styles/index.styled';
import { all } from 'axios';
import { Table, Tooltip,notification } from 'antd';
import { useNavigate } from "react-router-dom";
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
const OrderTable = ({ loading,AllRecruitement, listRecruitementId}) => {
  const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  //TabHeight
  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.4; 
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, [listRecruitementId]);
    //View Recruitement
    const handleAddRecruitementOpen = () => {
      navigate(`/Hr/Recruitement&Interview/Recruitement/View/codeJob=${id}`, {
        state: {
          id:id,
          dep:findIdData?.dep,
          idemp:findIdData?.idemp,
          requestName:findIdData?.requestName,
          position:findIdData?.position,
          DesiredDate:findIdData?.desiredDate,
          projectName:findIdData?.projectName,
          projRef:findIdData?.projRef,
          type:findIdData?.type,
          affectedTo:findIdData?.affectedTo,
          requestedDicipline:findIdData?.requestedDicipline,
          Level:findIdData?.experience,
          Numbervacancies:findIdData?.totalNumber,
          certif:findIdData?.certif,
          nbExperience:findIdData?.nbExperience,
          recruttrequestDate:findIdData?.recruttrequestDate,
          projCode:findIdData?.projRef,
          type:findIdData?.type,
          exDep:findIdData?.exDep,
          oDep:findIdData?.oDep,
          comentPlaner:findIdData?.comentPlaner,
          signatureBod:findIdData?.signatureBod,
          signatureHod:findIdData?.signatureHod,
        
        }
  
      });
    
      //onViewRecruitement(true);
    };
  const handleAddRecruitementClose = () => {
    setFindIdData(null);
    onViewRecruitement(false);
  };

  const   handleEditRecruitementOpen= () => {
    navigate(`/Hr/Recruitement&Interview/AllRecruitement/Update/codeJob=${id}`, {
      state: {
        id:id,
        dep:findIdData?.dep,
        idemp:findIdData?.idemp,
        requestName:findIdData?.requestName,
        position:findIdData?.position,
        DesiredDate:findIdData?.desiredDate,
        projectName:findIdData?.projectName,
        projRef:findIdData?.projRef,
        type:findIdData?.type,
        affectedTo:findIdData?.affectedTo,
        requestedDicipline:findIdData?.requestedDicipline,
        Level:findIdData?.experience,
        Numbervacancies:findIdData?.totalNumber,
        certif:findIdData?.certif,
        nbExperience:findIdData?.nbExperience,
        recruttrequestDate:findIdData?.recruttrequestDate,
        projCode:findIdData?.projRef,
        exDep:findIdData?.exDep,
        oDep:findIdData?.oDep,
        comentPlaner:findIdData?.comentPlaner,
        signatureBod:findIdData?.signatureBod,
        signatureHod:findIdData?.signatureHod,
        

      }

    });
  }

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
  
  const handleDeleteRecruitement = () => {

    onDeleteRecruitement(true);
  };
  const userRoles = localStorage.getItem("role");

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddRecruitementOpen },
    ...(userRoles.includes('admin') ? [
      { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
      { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement }
    ] : [])
    // { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>,
   
    
    // onClick: handleEditRecruitementOpen },
    // { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteRecruitement },
    // { key: 3, label: <span style={{ fontSize: 14 }}>generate the interview sheet</span>, onClick: handleAddInterviewSheet },
  ];
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'deleted successfully Recruitement',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error deleted  Recruitement',
      style: {
        backgroundColor: '#dc35450',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
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
            openNotificationError('bottomRight')
            throw new Error('La requête a échoué avec le code ' + response.status);
        }

        if (response.ok) {
          
          
            const data = await response.text();
            openNotification('bottomRight')
            setTimeout(() => {
              onDeleteRecruitement(false);
              window.location.reload(); 
          }, 1000);
        
            // alert(data);
            // onDeleteRecruitement(false);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("La réponse n'est pas au format JSON");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}
/////////////////////////
  const [isViewEmp, onViewEmp] = useState(false);
  const [isEditEmp, onEditEmp] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);
  const [allConge, setAllConge] = useState(0);

  const handleAddEmpOpen = () => {

    onViewEmp(true);
  };
  const handleAddEmpClose = () => {
    setFindIdData(null);
    onViewEmp(false);
  };

  const handleEditEmpOpen = () => {
    onEditEmp(true);
  };

  const handleEditEmpClose = () => {
    onEditEmp(false);
  };
  // const calculateVacationDays = (vacations) => {
  //   const congeVacations = vacations?.filter(vacation => vacation?.type === 'congé');
    
  
  //   const totalDays = congeVacations?.reduce((sum, vacation) => sum + vacation.nuberdays, 0);
  
  //   return totalDays;
  // };


 
  const getDesiredDateColor = (desiredDate) => {
    const daysDifference = desiredDate ? Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24)) : '';
    return daysDifference < 0 ? 'red' : 'green';
  };
  const columns = [
    {
      title: 'JobCode',
      dataIndex: 'jobCode',
      key: 'jobCode',
      width: 80,
  
    },
    {
      title: 'Position',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
      render: (text) => <a>{text}</a>,
      width: 80,
    },
    {
      title: 'POSITION LEFT',
      dataIndex: 'totalNumber',
      key: 'totalNumber',
      width: 80,
    },
    {
      title: 'Department',
      dataIndex: 'dep',
      key: 'dep',
      width: 80,
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
      title: 'Project Reference',
      dataIndex: 'projRef',
      key: 'projRef',
      width: 80,
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
      title: '#Experiences',
      dataIndex: 'nbExperience',
      key: 'nbExperience',
      width: 80,
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
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (desiredDate) => (
        desiredDate ? new Date(desiredDate).toLocaleDateString() : ""
      ),
   
  
   
  
    },
    {
      title: 'OVERDUE DATE DAYS',
      dataIndex: 'desiredDate',
      key: 'overdueDateDays',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (desiredDate) => (
            desiredDate ? (
          <Tooltip placement='topLeft' style={{ color: getDesiredDateColor(desiredDate) }}>
            {Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24))}
          </Tooltip>
        ) : ''
      ),
     
    },
  
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
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
  const user = localStorage.getItem("role");
  console.log("listRecruitementId",listRecruitementId)
  return (
    <> 
{/* {(!user.includes('admin')) ||(!user.includes('Administrator')) && (
  <StyledOrderTable
    hoverColor
    data={listRecruitementId}
    loading={loading}
    columns={columns}
    scroll={{ x: 'auto', y: tableHeight }}
  />  
)}
{user.includes('admin')  && (
 <StyledOrderTable
      hoverColor
      data={AllRecruitement}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      //scroll={{ x: 'auto', y: 150 }
    />
   
  )} */}
{/**/}
{(user.includes('admin') || user.includes('Administrator') )?
  <StyledOrderTable
      hoverColor
      data={AllRecruitement}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      //scroll={{ x: 'auto', y: 150 }
    />


:
<StyledOrderTable
hoverColor
data={listRecruitementId}
loading={loading}
columns={columns}
scroll={{ x: 'auto', y: tableHeight }}
/> 



}




{/**/}




   {isDelteRecruitement? (
        <ConfirmationModal
          open={isDelteRecruitement}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={onDeleteRecruitement}
          onConfirm={DeleteRecruitement}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
     


    </>
  );
};


export default OrderTable;
