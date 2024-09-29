import React, { useState, useEffect } from 'react';
import { Input, List, Col, Button, Flex } from 'antd';
import OrderTable from './RequestFinacial';
import Pagination from '../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,

} from '../../../styles/index.styled';

import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { padding } from 'polished';
import { GrTextAlignCenter } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { isAllSelected } from '@testing-library/user-event/dist/cjs/event/index.js';

const PAYMENTOrDERFIANACIAL = () => {
  const navigate = useNavigate();
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [totalVisa, setTotalVisa] = useState(0);
  const [requestSend, setRequestSend] = useState(0);
  const [passportSubmit, setPassportSubmit] = useState(0);
  const [numberFinalVisa, setNumberFinalVisa] = useState(0);
  const [isAddVisa, onAddVisa] = useState(false);
  const [findIdData, setFindIdData] = useState(null)
  const token = localStorage.getItem("token")


  const fetchEmployees = async () => {
    try {
      const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/list?token=${token}`);
      const datacount = await countEmployees.json();
      setCount(datacount.length);

     // const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/listBypage?page=${currentPage}&size=${pageSize}&token=${token}`);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/list?token=${token}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      if (response.ok) {
      const data = await response.json();
      console.log("RequestPayment",data)
      setEmployees(data);


      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/filterByName?name=${nameFilter}&token=${token}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();

      setEmployeesFiltrer(data)
      setEmployees(data);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name); 
    handleSearch({ target: { value: item.name } }); 
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); 
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/filterByName?name=${filterValue}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to filter employees');
        }
        const data = await response.json();
        setEmployeesFiltrer(data);
        setEmployees(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering employees:', error);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };


  const fetchCountVisa = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/list?token=${token}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();

      const filteredData = data.filter(employee => employee.dateVisa !== null && employee.dateVisa.trim() !== '');
      const filteredDataRequestSend = data.filter(employee => employee.requestSendVisa === "REQUEST SENT");
      const filteredDatapassportSubmit = data.filter(employee => employee.passportSubmit === "SUBMITTED");
      const filteredDatafinalVisa = data.filter(employee => employee.finalVisaReceive === "FINAL RECEIVED");

      setPassportSubmit(filteredDatapassportSubmit.length)
      setNumberFinalVisa(filteredDatafinalVisa)
      setRequestSend(filteredDataRequestSend.length)
      setTotalVisa(filteredData.length)



    } catch (error) {
      console.error('Error fetching employees:', error);
    }

  }
  useEffect(() => {
    fetchEmployees();
    fetchCountVisa()
  }, [currentPage, pageSize, nameFilter, totalVisa, requestSend]);



  return (
    <div>
      <AppPageMeta title='Financial Request Management System Record For Payroll Admin' />
  
      <div style={{ marginTop: "4rem" }}></div>
      {/* < StatsDirCardStatics
          listVIsa={listVIsa}/> */}
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <div style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
              <Input.Search
                placeholder='Search Here'
                type="text"
                value={nameFilter}
                onChange={handleNameFilterChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event);
                  }
                }}
              />
              {isDropdownOpen && (
                <List
                  style={{
                    zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                    background: "white", position: "absolute", top: "9.5rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={employeesFiltrer}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.name}
                    </List.Item>
                  )}
                />
              )}
            </div>

          </StyledOrderHeader>
        </AppsHeader>
      
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['sidebar.general.OrDERFIANACIALCOORDINATOR']}>

          <OrderTable 
          className={clsx("item-hover")}
           dataSalary={employees} 
           fetchEmployees={fetchEmployees} />
          <div style={{marginTop:"10px"}}></div>
          
          <StyledOrderHeaderRight>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(count / pageSize)}
              handlePageChange={handlePageChange}
            />



          </StyledOrderHeaderRight>
        </AppCard>



      </div>
    </div>
  );
};

export default PAYMENTOrDERFIANACIAL;
