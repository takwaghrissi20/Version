import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../../styles/index.styled';
import AppIconButton from "../../../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";

const OrderTable = ({ orderData }) => {

console.log("orderData ggggg",orderData )



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
