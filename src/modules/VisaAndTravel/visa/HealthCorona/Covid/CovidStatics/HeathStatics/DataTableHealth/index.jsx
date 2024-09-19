import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable} from '../../../../../../../../styles/index.styled';

import { Button,Alert,Tooltip } from 'antd';
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import ConfirmationModal from '../../../../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
const TableCovidHealth = ({vaccin}) => {
    
  //const [findIdData, setFindIdData] = useState(null);

  const [isDelteVaccin, onDeleteVaccin] = useState(false);
  const [idv, setIdv] = useState("");
  const [getsId, setGetsId] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const   handleEditHealth= () => {
    navigate(`/Hr/VisaHealth/EditCovid/idV=${idv}`, {
      state: {
        idv:data?.idv,
        getsid:data?.getsId,
        name:data?.name,
        projName:data?.projName,
        vaccinType:data?.typeVccin,
        corona1Date: data?.corona1Date,
        typeCorona:  data?.typeCorona,
        corona2Date:data?.corona2Date,
       
  
  
      }
  
    });
  }


 

  const handleDeleteVaccin = () => {

    onDeleteVaccin(true);
  };

  const DeleteVaccin= async () => {
 
    try {
        const endPoint =
            process.env.NODE_ENV === "development"
                ? "https://dev-gateway.gets-company.com"
                : "";
//Ajouter delete par type
        const response = await fetch(`${endPoint}/api/v1/vacin/delete?code=${getsId}&id=${idv}&token=${token}`, {
            method: 'DELETE',
        });

        // Handle server response
        if (!response.ok) {
            console.log("Error: Response not OK", response.status);
            alert("Error Not Vaccin Delete");
            throw new Error('La requête a échoué avec le code ' + response.status);
        }

        if (response.ok) {
                   
            const data = await response.text();
            console.log("deletee", data);         
            alert(data);
            onDeleteVaccin(false);
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
      setGetsId(data?.getsId)
      
      setIdv(responseData?.idv)
    


    }
  } catch (error) {
    console.error("Erreur lors de la récupération du vaccin:", error);
  }
};
const  handleViewHealth = () => {
   
  navigate(`/Hr/VisaHealth/ViewCovid/idV=${idv}`, {
    state: {
      idv:data?.idv,
        getsid:data?.getsId,
        name:data?.name,
        projName:data?.projName,
        vaccinType:data?.typeVccin,
        corona1Date: data?.corona1Date,
        typeCorona:  data?.typeCorona,
        corona2Date:data?.corona2Date,
 

    }

  });


  
  //onViewRecruitement(true);
};

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleViewHealth },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick:  handleEditHealth},
    { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span> ,onClick: handleDeleteVaccin},
   
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 80
    
    },
  
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
      width: 150,
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
      title: 'Type Covid',
      dataIndex: 'typeCorona',
      key: 'typeCorona',
  
    },
    {
      title: 'Date First Dose',
      dataIndex: 'corona1Date',
      key: 'corona1Date',

    },
    {
      title: 'Date Second Dose',
      dataIndex: 'corona2Date',
      key: 'corona2Date',

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



export default TableCovidHealth;
