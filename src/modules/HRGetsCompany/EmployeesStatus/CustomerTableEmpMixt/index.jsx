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

const OrderTable = ({ employeesmixt, loading }) => {

  const [findIdData, setFindIdData] = useState(null);
  const [isViewEmp, onViewEmp] = useState(false);
  const [isEditEmp, onEditEmp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [findIdDataMatriel, setFindIdDataMatriel] = useState(null);
  const [findIdDataTravel, setFindIdDataTravel] = useState(null);

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
        setFindIdData(responseData);
     





      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddEmpOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditEmpOpen },


  ];

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
      title: 'position',
      dataIndex: 'position',
      key: 'position',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Standby',
      dataIndex: 'Standby',
      key: 'Standby',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Working Site',
      dataIndex: 'Working Site',
      key: 'Working Site',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Travel Back',
      dataIndex: 'Travel Back',
      key: 'Travel Back',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'TravelGo',
      dataIndex: 'TravelGo',
      key: 'TravelGo',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Vacation',
      dataIndex: 'Vacation',
      key: 'Vacation',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Rest',
      dataIndex: 'Rest',
      key: 'Rest',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Return Office',
      dataIndex: 'Return Office',
      key: 'Return Office',
      render: (text) => text === null || text === undefined ? 'null' : text
    },

    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
  
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
        data={employeesmixt}
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