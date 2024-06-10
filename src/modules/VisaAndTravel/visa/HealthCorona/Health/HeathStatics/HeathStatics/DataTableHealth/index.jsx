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
const TableHealth = ({}) => {
    
  //const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [isDelteRecruitement, onDeleteRecruitement] = useState(false);
  const navigate = useNavigate();

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
    navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${id}`, {
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
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditRecruitementOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span> ,onClick: handleDeleteRecruitement},
   
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
    
    },
  
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
 
  
    {
      title: 'VACCINE TYPE',
      dataIndex: 'VACCINE TYPE',
      key: 'VACCINE TYPE',
    },
   
   
    {
      title: 'DATE OF TEST',
      dataIndex: 'DATE OF TEST',
      key: 'DATE OF TEST',
    },
    {
      title: 'RESULT',
      dataIndex: 'RESULT',
      key: 'RESULT',
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
            
        </div>
  
      ),
  
  
    },
   
  ];
 


  return (
    <>
      <StyledOrderTable
        hoverColor
        // data={}
        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />
    
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



export default TableHealth;
