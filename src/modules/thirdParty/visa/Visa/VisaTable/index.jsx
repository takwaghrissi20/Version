import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown,Select } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate'
import { StyledAnChar, StyledOrderTable,StyledAction } from '../../../../../styles/index.styled';
import VisaStatusEdit from "../../../../../modules/Model/VisaStatusEdit";
import { AiFillEdit } from "react-icons/ai";
const OrderTable = ({ dataemployeesVisa }) => {

  const [findIdData, setFindIdData] = useState(null);
  const [isEditVisa, onEditVisa] = useState(false);
  const [projects, setProjects] = useState([]);
  const { Option } = Select;
  const  handleEditVisa =() => {
    onEditVisa(true)
  }
  const  handleEditVisaClose =() => { 
    setFindIdData(null)
    onEditVisa(false)
  }

  //Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
 
        setFindIdData(responseData); 
        const projects = responseData?.projects?.flatMap(employee => employee.projName);
      
        setProjects(projects)
        onEditVisa(true)
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };

;



  const columns = [
    {
      title: 'APPLICATION NUMBER',
      dataIndex: 'idVisa',
      key: 'idVisa',
      render: (id) => <StyledAnChar>V{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'PASSPORT NUMBER',
      dataIndex: 'passportnumber',
      key: 'passportnumber',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Date VISA',
      dataIndex: 'dateVisa',
      key: 'dateVisa',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'COUNTRY',
      dataIndex: 'destination',
      key: 'destination',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Visa Cable ',
      dataIndex: 'vCableReceive',
      key: 'vCableReceive',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Date Visa Cable',
      dataIndex: 'vCabledate',
      key: 'vCabledate',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'Visa Ready',
      dataIndex: ' visaReady',
      key: ' visaReady',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
    {
      title: 'FINISH DATE',
      dataIndex: 'finishDateVisa',
      key: 'finishDateVisa',
      render: (text) => text === null || text === undefined ? 'null' : text
    },
   
   
    
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'center',
      className: 'customer-table-actions',
      render: (text, record) => (
        <StyledAction>
          <AiFillEdit onClick={() => findId(record?.getsId)} className='iconeEdit' />
        </StyledAction>
      ),
    },
  ];
  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.7; 
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []); 

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}   
    >
     
      <StyledOrderTable
        hoverColor
        data={dataemployeesVisa}
        columns={columns}
        scroll={{ x: 'auto',  y: tableHeight }}
      
      />
       {isEditVisa && (
        <VisaStatusEdit
        isEditVisa={isEditVisa}
            handleAddContactClose={handleEditVisaClose}
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
            idVisa={findIdData?.idVisa}
            dateVisa={findIdData?.dateVisa}
            toApplyForVisa={findIdData?.toApplyForVisa}
            projects={projects}
       
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
