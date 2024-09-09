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

const OrderTable = ({  loading, user, siteWorkStatus }) => {
  const [findIdData, setFindIdData] = useState(null);
  const [isViewEmp, onViewEmp] = useState(false);
  const [isEditEmp, onEditEmp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);
  const [allConge, setAllConge] = useState(0);
  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.25; 
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
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
  const token = localStorage.getItem("token");
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        console.log("getsId", responseData)
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
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80,
     
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: 150,

    },
    {
      title: 'StandBy',
      dataIndex: 'standBy',
      key: 'standBy',
      width: 80,
   
    },
    {
      title: 'Working Site',
      dataIndex: '???',
      key: '??',
      width: 80,
   
    },
    {
      title: 'Work Site',
      dataIndex: 'workSite',
      key: 'workSite',
      width: 80,
 
 
    },
    {
      title: 'Work Home',
      dataIndex: '',
      key: '',
      width: 80,
   
    },
    {
      title: 'Absent',
      dataIndex: 'absent',
      key: 'absent',
      width: 80,
   
    },
    {
      title: 'Travel Back',
      dataIndex: 'travelBack',
      key: 'travelBack',
      width: 80,
   
    },
    {
      title: 'Travel Go',
      dataIndex: 'travelGo',
      key: 'travelGo',
      width: 80,
   
    },
   

    {
      title: 'Vacation',
      dataIndex: 'vacation',
      key: 'vacation',
      width: 80,
  

    },
    {
      title: 'Rest',
      dataIndex: 'rest',
      key: 'rest',
      width: 80,
   
    },
    {
      title: 'Over Time',
      dataIndex: 'overTime',
      key: 'overTime',
      width: 80,
     
    },
    
    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   fixed: 'right',
    //   className: 'customer-table-actions',
    //   width: 80,
    //   render: (text, record) => (

    //     <StyledAction onClick={() => findId(record?.getsId)}>
    //       <GrFormView className='iconeView'
    //         onClick={handleAddEmpOpen}
    //       ></GrFormView>
    //       <EmployeeView
    //         isViewEmployee={isViewEmp}
    //         handleAddContactClose={handleAddEmpClose}
    //         getsId={findIdData?.getsId}
    //         nationality={findIdData?.nationality}
    //         birthDate={findIdData?.birthDate}
    //         phoneNumber={findIdData?.phoneNumber}
    //         joinDate={findIdData?.joinDate}
    //         companyType={findIdData?.companyType}
    //         finishDate={findIdData?.finishDate}
    //         actStatus={findIdData?.actStatus}
    //         position={findIdData?.position}
    //         getsEmail={findIdData?.getsEmail}
    //         name={findIdData?.name}
    //         passportnumber={findIdData?.passportnumber}
    //         cnss={findIdData?.cnss}
    //         contractNumb={findIdData?.contractNumb}
    //         cvCopy={findIdData?.cvCopy}
    //         passportCopy={findIdData?.passportCopy}
    //         //corona1Date={findIdData?.vaccins}
    //         traveldate={findIdData?.traveldate}
    //         destination={findIdData?.destination}
    //         projName={findIdData?.projName}

    //       />
    //       {/* <AiFillEdit
    //         onClick={handleEditEmpOpen}


    //         className='iconeEdit'></AiFillEdit> */}
    //       {user?.includes('admin') && (
    //         <AiFillEdit
    //           onClick={() => {
    //             findId(record?.getsId);
    //             handleEditEmpOpen();
    //           }}
    //           className='iconeEdit'
    //         />
    //       )}

    //       <EmployeeStatusEdit
    //         isEditEmployee={isEditEmp}
    //         handleAddContactClose={handleEditEmpClose}
    //         getsId={findIdData?.getsId}
    //         nationality={findIdData?.nationality}
    //         birthDate={findIdData?.birthDate}
    //         phoneNumber={findIdData?.phoneNumber}
    //         joinDate={findIdData?.joinDate}
    //         companyType={findIdData?.companyType}
    //         finishDate={findIdData?.finishDate}
    //         actStatus={findIdData?.actStatus}
    //         position={findIdData?.position}
    //         getsEmail={findIdData?.getsEmail}
    //         name={findIdData?.name}
    //         passportnumber={findIdData?.passportnumber}
    //         cnss={findIdData?.cnss}
    //         contractNumb={findIdData?.contractNumb}
    //         cvCopy={findIdData?.cvCopy}
    //         passportCopy={findIdData?.passportCopy}
    //         //corona1Date={findIdData?.vaccins}
    //         traveldate={findIdData?.traveldate}
    //         destination={findIdData?.destination}
    //         projName={findIdData?.projName}



    //       />



    //       {/* <AiFillEdit 
    //          onClick={handleEditContratOpen}
           
    //        className='iconeEdit'></AiFillEdit> */}




    //     </StyledAction>









    //   ),


    // }
  ];

  return (
    <>
      <StyledCustomerTable
        hoverColor
        data={ siteWorkStatus  }
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight}}


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