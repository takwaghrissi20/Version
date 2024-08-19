import React, { useState, useEffect } from 'react';
import { StyledCustomerTable } from '../index.styled';
import { useNavigate } from "react-router-dom";
const ExpiredVisaData = ({VisaExpired ,loading,AllRecruitement,visaExperedProjet}) => {
  const [findIdData, setFindIdData] = useState(null);
  const [isViewRecruitement, onViewRecruitement] = useState(false);
  const [isEditRecruitement, onEditRecruitement] = useState(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  //TabHeight
  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.3; 
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
  
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
      render: (text) => <a>{text}</a>,
    
    },
    {
      title: 'Visa Finish Date',
     dataIndex: 'finishDateVisa',
     key: 'finishDateVisa',
   
    },

  
  ];
  const user = localStorage.getItem("role");
  return (
    <>
      {user.includes('It') && (
    <p>IT</p>
   
  )}
  {user.includes('admin')  && (
      <StyledCustomerTable
      hoverColor
      data={VisaExpired}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      //scroll={{ x: 'auto', y: 150 }}


    />
   
  )}
  {user.includes('Leader') && (
      <StyledCustomerTable
      hoverColor
      data={visaExperedProjet}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto',  y: tableHeight }}
      //scroll={{ x: 'auto', y: 150 }}


    />
   
  )}

     


    </>
  );
};


export default ExpiredVisaData;
