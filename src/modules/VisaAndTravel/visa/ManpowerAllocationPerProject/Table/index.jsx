import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown,Tooltip } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../../styles/index.styled';
import AppIconButton from "../../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";
import Hystorique from "../../../../Model/HystoriqueMobilization";
import moment from 'moment';
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

  //Find By Id
  const token = localStorage.getItem("token");
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
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
      
      setFindIdDataTravel(travels)
      //   const mobilization = responseData?.projects?.map(project => {
      //     console.log("Project:", project);
      
      //     // Check if the project has missions
      //     if (project.miss && Array.isArray(project.miss)) {
      //         project.miss.forEach(mission => {
      //             console.log("Mission:", mission);
      
      //             // Check if the mission has travels
      //             if (mission.travels && Array.isArray(mission.travels)) {
      //                 mission.travels.forEach(travel => {
      //                    setFindIdData(travel);
      //                     console.log("Travel:", travel);
      //                 });
      //             }
      //         });
      //     }
      // });
      
 
      //   //const Mobilization=responseData?.projects?.map(p=>console.log("gghhhhhh",p))
      //  // console.log("responseData ",Mobilization);

       
    
     
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };
  const handleRowClick = (index) => {
    findId(index)
    onViewEmployee(true)
   
  };

  const renderActions = (text, record, index)  => {
    const isRowHovered = hoveredRow === record;
    //onViewEmployee(true)
      
    return (
      <div onClick={() => findId(record?.getsId)}>
        {isRowHovered && (
      <Dropdown
      visible={true}
     
      overlay={() => (
        <div style={{ marginTop: "-2.5rem" }}>
          <AppIconButton
            title="View Information Employee"
            icon={<MdLabelOutline />} // Utilisation de l'icône MdLabelOutline
          />
        </div>
      )}
    >
      <Button type="link" />
    </Dropdown>
        )}
      </div>
    );
  };

  const columns = [
    {
      title: 'Id Travel',
      dataIndex: 'idTravel',
      key: 'idTravel',
      width: 80,
  
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'jOS Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
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
      title: 'Location',
      dataIndex: 'toLocation',
      key: 'toLocation',
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
      title: 'Mob Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
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
      title: 'Days Since Mob',
      dataIndex: 'dateMob',
      key: 'daySinceMob',
      width: 50,
      render: (dateMob) => {
        const daysSinceMob = moment().diff(moment(dateMob), 'days');
        return <span>{daysSinceMob}</span>;
      },
    },
    {
      title: 'End Mission Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
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
  const handleAddEmployeeClose = () => {
    setFindIdData(null);
    onViewEmployee(false);
  };


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



export default OrderTable;
