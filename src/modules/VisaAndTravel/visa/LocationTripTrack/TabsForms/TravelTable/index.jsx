import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown,notification } from 'antd';
import AppAnimate from '../../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../../styles/index.styled';
import AppIconButton from "../../../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";
import Hystorique from "../../../../../Model/HystoriqueMobilization";
const OrderTable = ({ orderData }) => {

  const [hoveredRow, setHoveredRow] = useState(null);
  const [findIdData, setFindIdData] = useState(null);
  const [idEmployee, setIdEmployee] = useState(null);
  const [isViewEmployee, onViewEmployee] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);

  const handleRowHover = (record) => {
    setHoveredRow(record);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };
  const handleAddEmployeeClose = () => {
    setFindIdData(null);
    onViewEmployee(false);
  };
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error No Gets Id',
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
  //Find By Id
  const token = localStorage.getItem("token");
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        handleAddEmployeeClose()
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
       
      }
      if (response.ok) {
        const responseData = await response.json();
        const travels = responseData?.projects?.flatMap(project => 
          project.miss?.flatMap(mission => 
              mission.travels.map(travel => ({
                  idTravel: travel.idTravel,
                  dateOfTravel: travel.dateOfTravel,
                  travelFromTo: travel.travelFromTo,
                  projName: travel.projName,
                  ticketRef: travel.ticketRef,
                  dateMob:travel.dateMob



              }))
          ) || []
      );
      
      console.log("Travel Data:", travels);
      setFindIdDataTravel(travels)
     

       
    
     
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };
  const handleRowClick = (index) => {
    findId(index)
    onViewEmployee(true)
   
  };

  const columns = [
    {
      title: 'Id Travel',
      dataIndex: 'idTravel',
      key: 'idTravel',
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 150,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Mobilization Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Location',
      dataIndex: 'actualLocationFrom',
      key: 'actualLocationFrom',
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
    <AppAnimate animation='transition.slideUpIn' delay={200}   
    >
     
      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto',  y: tableHeight }}
        onRow={(record, index) => ({        
          onClick: () => handleRowClick(record.getsId),
          onMouseEnter: () => handleRowHover(record.getsId),
          onMouseLeave: handleRowLeave,
        })}
       
      />
        {isViewEmployee && (
            <Hystorique
              isViewEmployee={isViewEmployee}
              handleAddContactClose={handleAddEmployeeClose}
              findIdData={findIdDataTravel}
             

              
            />
          )}
        
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
