import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown,Image } from 'antd';
import AppAnimate from '../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../../styles/index.styled';
import CategoryTEmp from "../../../Model/EmployeeCategoryTEmp";
import AppIconButton from "../../../../@crema/components/AppIconButton";
import { MdLabelOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CloseCircleOutlined } from '@ant-design/icons';
const OrderTable = ({ orderData }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [findIdData, setFindIdData] = useState([]);
  const [idEmployee, setIdEmployee] = useState(null);
  const [isCategoryTEmployee, onCategoryTEmployee] = useState(false);
  const [lastId, setLastId] = useState(0);
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  
  const handleRowHover = (record) => {
    setHoveredRow(record);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  //Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/getById?id=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json()
        setFindIdData(responseData);

      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };
  console.log("findIdData testttg ",findIdData)
  ///Find 
  const handleRowClickPage = (index) => {
    findId(index)
    navigate(`/Hr/EmployeesCategoryContract/${index}`, {
      state: {
        id:findIdData?.id,
        category:findIdData?.category,
        contractType:findIdData?.contractType,
        contractCategory:findIdData?.contractCategory,
        primeProductivity:findIdData?.primeProductivity,
        arName:findIdData?.arName,
        passportnumber:findIdData?.passportnumber,
        passportSubmitdate:findIdData?.passportSubmitdate,
        arDestination:findIdData?.arDestination,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arResidenceAdress:findIdData?.arResidenceAdress,
        arPosition:findIdData?.arPosition,
        salary:findIdData?.salary,
        dailyRate:findIdData?.dailyRate,         
        duration:findIdData?.duration,
        finishDate:findIdData?.finishDate,
        joinDate:findIdData?.joinDate,
        cin:findIdData?.cin,
        cinDate:findIdData?.cinDate,
        // id:findIdData?.id,
        name:findIdData?.name,


       
      }
    });


  };
console.log("findIdData?.name",findIdData?.name)

  const handleRowClick = (index) => {
    findId(index)
    onCategoryTEmployee(true)

  };

  const renderActions = (text, record, index) => {
    const isRowHovered = hoveredRow === record;
    //onViewEmployee(true)

    return (
      <div>
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
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <StyledAnChar>V-{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'departement',
      key: 'departement',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
      render: (text) => (
        <div
      style={{
        backgroundColor: !text ? 'transparent' : 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {!text ? <Image style={{width:"25px",height:"25px"}}src='../assets/images/nothing.png'></Image> : text}
    </div>
      ),
    },
  
    {
      title: 'Date Travel',
      dataIndex: 'traveldate',
      key: 'traveldate',
      render: (text) => (
        <div
      style={{
        backgroundColor: !text ? 'transparent' : 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {!text ? <Image style={{width:"25px",height:"25px"}}src='../assets/images/nothing.png'></Image> : text}
    </div>
      ),
    },
    
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
     
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
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, [findIdData]);
  const handleAddEmployeeClose = () => {
    setFindIdData(null);
    onCategoryTEmployee(false);
  };
  
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}
    >

      <StyledOrderTable
        hoverColor
        data={orderData}
        columns={columns}
        scroll={{
          x: 'auto', y: 300

        }}
        onRow={(record, index) => ({
          
          onClick: () => handleRowClick(record.id),
       
          onMouseEnter: () => handleRowHover(record.getsId),
          onMouseLeave: handleRowLeave,
        })}
      />
      {isCategoryTEmployee && (
        <CategoryTEmp
          isCategoryEmployee={isCategoryTEmployee}
          handleAddContactClose={handleAddEmployeeClose}
          getsId={findIdData?.id}
          category={findIdData?.category}
          contractType={findIdData?.contractType}
          contractCategory={findIdData?.contractCategory}
          primeProductivity={findIdData?.primeProductivity}
          arName={findIdData?.arName}
          passportnumber={findIdData?.passportnumber}
          passportSubmitdate={findIdData?.passportSubmitdate}
          arDestination={findIdData?.arDestination}
          companyType={findIdData?.companyType}
          traveldate={findIdData?.traveldate}
          endTravelDate={findIdData?.endTravelDate}
          arResidenceAdress={findIdData?.arResidenceAdress}
          arPosition={findIdData?.arPosition}
          salary={findIdData?.salary}        
          duration={findIdData?.duration}
          finishDate={findIdData?.finishDate}
          joinDate={findIdData?.joinDate}
          cin={findIdData?.cin}
          cinDate={findIdData?.cinDate}
          id={findIdData?.id}
          name={findIdData?.name}
          propsedsalary={findIdData?.propsedsalary}
          dailyRate={findIdData?.dailyRate}
          findIdData={findIdData}



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
