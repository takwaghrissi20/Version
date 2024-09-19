import React, { useState, useEffect } from 'react';
import { Input, List, Col } from 'antd';
import OrderTable from './TabsForms';
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

const ContratList = () => {
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(500);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem("token")
  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageSize, nameFilter]);

  const fetchEmployees = async () => {
    try {
      const countEmployeesResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/countAll`);
      
      if (!countEmployeesResponse.ok) {
        throw new Error('Failed to fetch employee count');
      }
      
      const countData = await countEmployeesResponse.json();
      setCount(countData);
  
      try {
        // const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/list`);
        const response= await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/contract?page=${currentPage}&size=${pageSize}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
  
        const data = await response.json();
        console.log("Original Data:", data);
        /////////////////////////////////////////
        const filteredEmployees2 = data.filter(employee => {
          const isManagementStaff = employee.category === "Management Staff";
          const isConstructionStaffOnSite = employee.category === "Construction Staff" && employee.type_Emp === "site" && employee.dateVisa !== null;
          const isSiteOrSiteOffice = employee.type_Emp === "site&office";
          
          return isManagementStaff || isConstructionStaffOnSite || isSiteOrSiteOffice;
        });
  
  
        const filteredEmployees = data.filter(employee => {
          const isManagementOrConstruction = employee.category === "Management Staff" || employee.category === "Construction Staff";
           
        return isManagementOrConstruction;
        });
  
        console.log("Filtered Data:", data);
        // setEmployees(filteredEmployees);
        setEmployees(data)
  
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    } catch (error) {
      console.error('Error fetching employee count:', error);
    }
  }
     
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

  return (
    <div>
      <AppPageMeta title='Employees Category Contract' />
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
                    background: "white", position: "absolute", top: "6rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
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
          title={messages['dashboard.EmployeesCategoryContract']}
        >
         
            <OrderTable className={clsx("item-hover")} dataemployees={employees} />
            {/* <StyledOrderHeaderRight>

              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(count / pageSize)}
                handlePageChange={handlePageChange}
              />



            </StyledOrderHeaderRight> */}
      
        </AppCard>




      </div>
    </div>
  );
};

export default ContratList;
