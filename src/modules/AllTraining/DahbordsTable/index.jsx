import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import EmployeeView from "../../Model/EmployeeView";
import AppIconButton from "../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const OrderTable = ({ all,user }) => {
  
  const [findIdData, setFindIdData] = useState(null);
  const navigate = useNavigate();

 
  const handleViewTraining = () => {
    navigate(`/Hr/AllTraining/View/ref=${findIdData.id}`, {
      state: {
        id:findIdData?.id
      
      }

    });

  };
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span> },
    ...(user.includes('admin') ? [
      { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>},
      { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span>}
    ] : [])
  ];

  const token = localStorage.getItem("token");
  //Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/allByid?id=${code}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("responseData ",responseData);
        setFindIdData(responseData);
          
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id Training:", error);
    }
  };



  

  const columns = [
    {
      title: 'Ref',
      dataIndex: 'ref',
      key: 'ref',
      width: 150,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'requestor',
      key: 'requestor',
    },
    {
      title: 'Departement',
      dataIndex: 'desp',
      key: 'desp',
    },
    {
      title: 'EXACT AGREED DATE',
      dataIndex: 'desiredDate',
      key: 'desiredDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={()=>findId(record.id)}>
          <Dropdown menu={{ items }} trigger={['click']}  >
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
  
        </div>
  
      ),
    },
  ];
  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      // Vous pouvez ajuster le pourcentage selon vos besoins
      const tableHeight = pageHeight * 0.7; // La table occupe 70% de la hauteur de la page
      setTableHeight(tableHeight);
    };

    // Mettre à jour la hauteur de la table à chaque redimensionnement de la fenêtre
    window.addEventListener('resize', updateTableHeight);
    // Appeler la fonction une fois au chargement pour fixer la hauteur initiale
    updateTableHeight();

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []); 

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}    >
     
      <StyledOrderTable
        hoverColor
        data={all}
        columns={columns}
        scroll={{ x: 'auto',  y: tableHeight }}
      
      />
        
    </AppAnimate>
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};

export default OrderTable;
