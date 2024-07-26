import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable} from '../../../../../../../../styles/index.styled';

import { Button,Alert} from 'antd';
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import ConfirmationModal from '../../../../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
const TableHealth = ({vaccin}) => {
    
  //const [findIdData, setFindIdData] = useState(null);

  const [isDelteVaccin, onDeleteVaccin] = useState(false);
  const [idv, setIdv] = useState("");
  const [data, setData] = useState("");
  const [getsId, setGetsId] = useState("");

  const navigate = useNavigate();



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


 

  const handleDeleteVaccin = () => {

    onDeleteVaccin(true);
  };

  const DeleteVaccin= async () => {
 
    try {
        const endPoint =
            process.env.NODE_ENV === "development"
                ? "https://dev-gateway.gets-company.com"
                : "";

        const response = await fetch(`${endPoint}/api/v1/vacin/delete?code=${getsId}&id=${idv}`, {
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
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vacin/findId?code=${code}`, {
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
      render: (text) => text === null || text === undefined ? 'null' : text
    },
   
  
    {
      title: 'VACCINE TYPE',
      dataIndex: 'typeVccin',
      key: 'typeVccin',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Result Fetness',
      dataIndex: 'resultFitness',
      key: 'resultFitness',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Date Fetness Certificate',
      dataIndex: 'dateTestWork',
      key: 'dateTestWork',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Result Hepatite Certificate',
      dataIndex: 'hepatitResult',
      key: 'hepatitResult',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Date Hepatite Certificate',
      dataIndex: 'hypatitDare',
      key: 'hypatitDare',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Result IDZ/HIV tEST',
      dataIndex: 'idzresult',
      key: 'idzresult',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Date IDZ/HIV tEST',
      dataIndex: 'idzdate',
      key: 'idzdate',
      render: (text) => text === null || text === undefined ? 'null' : text
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
