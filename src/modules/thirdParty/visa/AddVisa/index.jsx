import React, { useState, useEffect } from 'react';
import { Input, List, Col, Button, Flex } from 'antd';
import OrderTable from './VisaTable';
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,

} from '../../../../styles/index.styled';

import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { padding } from 'polished';
import { GrTextAlignCenter } from 'react-icons/gr';
import AddEmpVisa from "../../../Model/AddVisa"
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { isAllSelected } from '@testing-library/user-event/dist/cjs/event/index.js';

const AddVisa = () => {
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

  const handleAddVisa = () => {
    navigate('/Hr/VisaHealth/AddVisa/GetsEmployee');
  };

  const handleOpenAddVisa = () => {
    onAddVisa(true);
  };


  const fetchEmployees = async () => {
    try {
      const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/list`);
      const datacount = await countEmployees.json();
      setCount(datacount.length);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/listBypage?page=${currentPage}&size=${pageSize}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);

    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/filterByName?name=${nameFilter}`);
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
  // const handleNameFilterChange = (event) => {
  //   setNameFilter(event.target.value);
  //   handleSearch(event.target.value)
  //   setIsDropdownOpen(event.target.value.trim() !== '');

  // };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name); // Mettre le nom de l'élément dans le champ de saisie
    handleSearch({ target: { value: item.name } }); // Simuler l'événement pour le filtrage
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/filterByName?name=${filterValue}`);
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/list`);


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

  const listVIsa = [
    { title: 'Total Visa', number: { totalVisa }, subtitle: "Total Visa" },
    { title: 'Number Of request Visa', number: { requestSend }, subtitle: "Number Of request Visa" },
    { title: 'Number of Passport Submitted', number: { passportSubmit }, subtitle: "Number of Passport Submitted" },
    { title: 'Number of Final Visa', number: { numberFinalVisa }, subtitle: "Number of Final Visa" },
  ];


console.log("parents",employees)
  return (
    <div>
      <AppPageMeta title='Visa Employees' />
      <Button
        style={{
          display: "flex", flexDirection: "right", float: "right", marginLeft: "10px",
          backgroundColor: "#2997ff", color: "white", paddingTop: "5px", paddingLeft: "2rem", paddingRight: "2rem",
          TextAlign: "center", fontsize: "30px"
        }}
        onClick={handleAddVisa }>
        Add Visa
      </Button>
      {/* <AddEmpVisa
            isVisa={isAddVisa}        
            handleAddContactClose={handleCloseAddVisa}
     
          />  */}
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
          title={messages['dashboard.Visa']}
        >

          <OrderTable className={clsx("item-hover")} dataemployeesVisa={employees} fetchEmployees={fetchEmployees} />
          <div style={{marginTop:"10px"}}></div>
          
          <StyledOrderHeaderRight>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(count / pageSize)}
              handlePageChange={handlePageChange}
            />



          </StyledOrderHeaderRight>
        </AppCard>


        {isAddVisa? (
        <ConfirmationModal
          open={isAddVisa}
          paragraph={'Are you sure you want to Add Visa For Gets Employee?'}
          onDeny={onAddVisa}
          onConfirm={handleAddVisa}
          modalTitle="Add Visa "
          handleInterview={handleOpenAddVisa}
        />
      ) : null}


      </div>
    </div>
  );
};

export default AddVisa;
