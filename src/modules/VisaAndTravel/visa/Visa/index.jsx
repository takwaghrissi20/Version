import React, { useState, useEffect } from 'react';
import { Input, List, Col } from 'antd';
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
import StatsDirCardStatics from './StatisticVisa';


const AddVisa = () => {
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${nameFilter}`);
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
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${filterValue}`);
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


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list`);


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
  }, [currentPage, pageSize, nameFilter, totalVisa, requestSend,employees]);

  const listVIsa = [
    { title: 'Total Visa', number: { totalVisa }, subtitle: "Total Visa" },
    { title: 'Number Of request Visa', number: { requestSend }, subtitle: "Number Of request Visa" },
    { title: 'Number of Passport Submitted', number: { passportSubmit }, subtitle: "Number of Passport Submitted" },
    { title: 'Number of Final Visa', number: { numberFinalVisa }, subtitle: "Number of Final Visa" },
  ];

  return (
    <div>
      <AppPageMeta title='Visa Employees' />

      < StatsDirCardStatics
        listVIsa={listVIsa} />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            {/* <div style={{ marginRight: 20, boxShadow: "none !important",width:"20%"}}>
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
                    background: "white", position: "absolute", top: "6rem", width:"18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={employeesFiltrer}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.name}
                    </List.Item>
                  )}
                />
              )}
            </div> */}


          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.Sammary.Visa']}
        >

          <OrderTable className={clsx("item-hover")} dataemployeesVisa={employees} />
        </AppCard>
     <div style={{marginTop:"10px",marginBottom:"10px"}}>
        <StyledOrderHeaderRight>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChange}
          />



        </StyledOrderHeaderRight>
        </div>


      </div>
    </div>
  );
};

export default AddVisa;
