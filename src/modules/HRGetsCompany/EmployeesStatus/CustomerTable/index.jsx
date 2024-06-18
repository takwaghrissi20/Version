import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import OrderActions from './OrderActions';
import { StyledCustomerTable } from '../index.styled';
import { Dropdown, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import EmployeeView from "../../../../modules/Model/EmployeeStatusView";
import EmployeeStatusEdit from "../../../../modules/Model/EmployeeStatusEdit";
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { StyledOrderTable, StyledAction } from '../../../../styles/index.styled';
import { all } from 'axios';

const OrderTable = ({ employeesoffice, loading }) => {

  const [findIdData, setFindIdData] = useState(null);
  const [isViewEmp, onViewEmp] = useState(false);
  const [isEditEmp, onEditEmp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);
  const [allConge, setAllConge] = useState(0);

  const handleAddEmpOpen = () => {

    onViewEmp(true);
  };
  const handleAddEmpClose = () => {
    setFindIdData(null);
    onViewEmp(false);
  };

  const handleEditEmpOpen = () => {
    onEditEmp(true);
  };

  const handleEditEmpClose = () => {
    onEditEmp(false);
  };
  // const calculateVacationDays = (vacations) => {
  //   const congeVacations = vacations?.filter(vacation => vacation?.type === 'congé');
    
  
  //   const totalDays = congeVacations?.reduce((sum, vacation) => sum + vacation.nuberdays, 0);
  
  //   return totalDays;
  // };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        console.log("getsId",responseData)
        setFindIdData(responseData);
        const totalVacationDays = calculateVacationDays(responseData.vacations);
         console.log("Total vacation days of type 'congé':", totalVacationDays);
        // setAllConge(totalVacationDays)


      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddEmpOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditEmpOpen },


  ];
  // useEffect(() => {
  //   const totalVacationDays = calculateVacationDays(findIdData?.vacations);
  //   console.log("Total vacation days of type Congeee0000 'congé':", totalVacationDays);
  //   setAllConge(totalVacationDays)
  
  // }, [allConge]);


  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Working Office Day',
      dataIndex: 'Working Office Day',
      key: 'Working Office Day',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Working From Home',
      dataIndex: 'Working From Home',
      key: 'Working From Home',
      render: (text) => text === null || text === undefined ? 'null' : text
      // render: (actStatus) => (
      //   <>
      //     <span className={`badge ${actStatus === "Resigned " ? 'red' : ''}`}>
      //       {actStatus} {actStatus === "Active " && <StarFilled />}

      //     </span>
      //   </>
      // ),
    },
    {
      title: 'Absend Day',
      dataIndex: 'Absend Day',
      key: 'Absend Day',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Vacation',
      key: 'Vacation',
      render: (text, record) => (
        <p>{record?.allConge}</p>
    
            
    ),
   
    },
    {
      title: 'Rest',
      dataIndex: 'Working Office Day',
      key: 'Working Office Day',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'JA',
      dataIndex: 'Working Office Day',
      key: 'Working Office Day',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'WR',
      dataIndex: 'Working Office Day',
      key: 'Working Office Day',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => (
        
          <StyledAction onClick={() => findId(record?.getsId)}>
            <GrFormView className='iconeView'
              onClick={handleAddEmpOpen}
            ></GrFormView>
            <EmployeeView
              isViewEmployee={isViewEmp}
              handleAddContactClose={handleAddEmpClose}
              getsId={findIdData?.getsId}
              nationality={findIdData?.nationality}
              birthDate={findIdData?.birthDate}
              phoneNumber={findIdData?.phoneNumber}
              joinDate={findIdData?.joinDate}
              companyType={findIdData?.companyType}
              finishDate={findIdData?.finishDate}
              actStatus={findIdData?.actStatus}
              position={findIdData?.position}
              getsEmail={findIdData?.getsEmail}
              name={findIdData?.name}
              passportnumber={findIdData?.passportnumber}
              cnss={findIdData?.cnss}
              contractNumb={findIdData?.contractNumb}
              cvCopy={findIdData?.cvCopy}
              passportCopy={findIdData?.passportCopy}
              //corona1Date={findIdData?.vaccins}
              traveldate={findIdData?.traveldate}
              destination={findIdData?.destination}
              projName={findIdData?.projName}
             
            />
              <AiFillEdit
              onClick={handleEditEmpOpen}
         

              className='iconeEdit'></AiFillEdit>
        
            <EmployeeStatusEdit
              isEditEmployee={isEditEmp}
              handleAddContactClose={handleEditEmpClose}
              getsId={findIdData?.getsId}
              nationality={findIdData?.nationality}
              birthDate={findIdData?.birthDate}
              phoneNumber={findIdData?.phoneNumber}
              joinDate={findIdData?.joinDate}
              companyType={findIdData?.companyType}
              finishDate={findIdData?.finishDate}
              actStatus={findIdData?.actStatus}
              position={findIdData?.position}
              getsEmail={findIdData?.getsEmail}
              name={findIdData?.name}
              passportnumber={findIdData?.passportnumber}
              cnss={findIdData?.cnss}
              contractNumb={findIdData?.contractNumb}
              cvCopy={findIdData?.cvCopy}
              passportCopy={findIdData?.passportCopy}
              //corona1Date={findIdData?.vaccins}
              traveldate={findIdData?.traveldate}
              destination={findIdData?.destination}
              projName={findIdData?.projName}
             
          

            />



            {/* <AiFillEdit 
             onClick={handleEditContratOpen}
           
           className='iconeEdit'></AiFillEdit> */}




          </StyledAction>









      ),


    }
  ];

  return (
    <>
      <StyledCustomerTable
        hoverColor
        data={employeesoffice}
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: 200 }}


      />


    </>
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
0