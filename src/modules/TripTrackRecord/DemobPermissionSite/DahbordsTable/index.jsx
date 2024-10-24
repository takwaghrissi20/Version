import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import AppAnimate from '../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../styles/index.styled';
import AppIconButton from "../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";

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
  const token = localStorage.getItem("token");
  //Find By Id
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
        console.log("responseData ",responseData);
        setFindIdData(responseData);
        setFindIdDataMatriel(responseData?.materials)
        console.log("responseData?.projects ",responseData?.projects);
        const projects = responseData?.projects || [];
    // Initialize an array to store all travels
    let allTravels = [];

    // Iterate over each project
    projects.forEach(project => {
      // Check if the project has missions
      if (project.miss) {
        // Iterate over each mission
        project.miss.forEach(mission => {
          // Check if the mission has travels
          if (mission.travels) {
            // Add all travels of the mission to the allTravels array
            allTravels = allTravels.concat(mission.travels);
          }
        });
      }
    });

    // Now you can set the state or process the allTravels array as needed
    console.log("All Travels: ", allTravels);


   
        setFindIdDataTravel(allTravels)
     
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
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
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
      title: 'Actual Location',
      dataIndex: 'actualLocation',
      key: 'actualLocation',
    },
    {
      title: 'To Location',
      dataIndex: 'toLocation',
      key: 'toLocation',
    },
    {
      title: 'Back To Back Requirement',
      dataIndex: 'backToBackNeed',
      key: 'backToBackNeed',
    },
    {
      title: 'Office Back To Back',
      dataIndex: 'officeBackToback',
      key: 'officeBackToback',
    },
    {
      title: 'Site Back to back',
      dataIndex: 'backToBackType',
      key: 'backToBackType',
    },
    {
      title: 'New Recruitment',
      dataIndex: 'newRecruitment',
      key: 'newRecruitment',
    },
    {
      title: 'Desired Demob Date From Site',
      dataIndex: 'desiredDate',
      key: 'desiredDate',
    },

    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   fixed: 'center',
    //   className: 'customer-table-actions',
    //   render: renderActions,
    // }
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
