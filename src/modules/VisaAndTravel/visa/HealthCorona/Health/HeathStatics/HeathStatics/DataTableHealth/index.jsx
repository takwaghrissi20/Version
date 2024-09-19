import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable} from '../../../../../../../../styles/index.styled';

import { Button,Alert,notification} from 'antd';
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import ConfirmationModal from '../../../../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
const TableHealth = ({vaccin,user}) => {
    
  //const [findIdData, setFindIdData] = useState(null);

  const [isDelteVaccin, onDeleteVaccin] = useState(false);
  const [idv, setIdv] = useState("");
  const [data, setData] = useState("");
  const [getsId, setGetsId] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const   handleEditHealth= () => {
    navigate(`/Hr/VisaHealth/EditHealthCertification/idV=${idv}`, {
      state: {
        idv:data?.idv,
        getsid:data?.getsId,
        name:data?.name,
        projName:data?.projName,
        vaccinType:data?.typeVccin,
        DateFetness:data?.dateTestWork,
        resultFitness:data?.resultFitness,
        hypatitDare:data?.hypatitDare,
        hepatitResult:data?.hepatitResult,
        idzresult:data?.idzresult,
        idzdate:data?.idzdate
  
  
      }
  
    });
  }
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Delete',
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
      description: 'Error Delate',
      style: {
        backgroundColor: 'red',
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

 

  const handleDeleteVaccin = () => {

    onDeleteVaccin(true);
  };

  const DeleteVaccin= async () => {
 
    try {
        const endPoint =
            process.env.NODE_ENV === "development"
                ? "https://dev-gateway.gets-company.com"
                : "";

        const response = await fetch(`${endPoint}/api/v1/vacin/delete?code=${getsId}&id=${idv}&token=${token}`, {
            method: 'DELETE',
        });

        // Handle server response
        if (!response.ok) {
            console.log("Error: Response not OK", response.status);
            openNotificationError('bottomRight')
        
            throw new Error('La requête a échoué avec le code ' + response.status);
        }

        if (response.ok) {
                   
            const data = await response.json();       
            openNotification('bottomRight')
            setTimeout(() => {
              onDeleteVaccin(false);
              window.location.reload();
          }, 100);
         
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("La réponse n'est pas au format JSON");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}
const findId = async (code) => {
  try {
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vacin/findId?code=${code}&token=${token}`, {
      method: 'Get',

    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (response.ok) {
      const responseData = await response.json();
      setData(responseData)
      setIdv(responseData?.idv)
      setGetsId(data?.getsId)
  

    }  
  } catch (error) {
    console.error("Erreur lors de la récupération du vaccin:", error);
  }
};
const  handleViewHealth = () => {
   
  navigate(`/Hr/VisaHealth/ViewHealthCertification/idV=${idv}`, {
    state: {
      id:data?.idv,
      getsid:data?.getsId,
      name:data?.name,
      projName:data?.projName,
      vaccinType:data?.typeVccin,
      DateFetness:data?.dateTestWork,
      resultFitness:data?.resultFitness,
      hypatitDare:data?.hypatitDare,
      hepatitResult:data?.hepatitResult,
      idzresult:data?.idzresult,
      idzdate:data?.idzdate

 

    }

  });




  
  //onViewRecruitement(true);
};
const items= user?.includes("admin") ? [
  { 
    key: 1, 
    label: <span style={{ fontSize: 14 }}>View</span>, 
    onClick: handleViewHealth 
  },
  { 
    key: 2, 
    label: <span style={{ fontSize: 14 }}>Edit</span>, 
    onClick: handleEditHealth 
  },
  { 
    key: 2, 
    label: <span style={{ fontSize: 14 }}>Delete</span>, 
    onClick: handleDeleteVaccin
  }
] : [
  { 
    key: 1, 
    label: <span style={{ fontSize: 14 }}>View</span>, 
    onClick: handleViewHealth
  }
];

  const itemstest = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleViewHealth },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick:  handleEditHealth},
    { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span> ,onClick: handleDeleteVaccin},
   
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'getsId',
      key: 'getsId',
    
    },
  
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'project Name',
      dataIndex: 'projName',
      key: 'projName',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),

 
     
    },
   
  
    {
      title: 'VACCINE TYPE',
      dataIndex: 'typeVccin',
      key: 'typeVccin',
     
    },
    {
      title: 'Result Fetness',
      dataIndex: 'resultFitness',
      key: 'resultFitness',
   
    },
    {
      title: 'Date Fetness Certificate',
      dataIndex: 'dateTestWork',
      key: 'dateTestWork',
    
    },
    {
      title: 'Result Hepatite Certificate',
      dataIndex: 'hepatitResult',
      key: 'hepatitResult',
    
    },
    {
      title: 'Date Hepatite Certificate',
      dataIndex: 'hypatitDare',
      key: 'hypatitDare',
     
    },
    {
      title: 'Result IDZ/HIV tEST',
      dataIndex: 'idzresult',
      key: 'idzresult',
      
    },
    {
      title: 'Date IDZ/HIV tEST',
      dataIndex: 'idzdate',
      key: 'idzdate',
     
    },
   
   
   
   
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={() => findId(record?.idv)}>
          <Dropdown menu={{ items }} trigger={['click']}  >
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
         data={vaccin}
        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />
         {isDelteVaccin? (
        <ConfirmationModal
          open={isDelteVaccin}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={onDeleteVaccin}
          onConfirm={DeleteVaccin}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    
    
   

    </>
  );
};



export default TableHealth;
