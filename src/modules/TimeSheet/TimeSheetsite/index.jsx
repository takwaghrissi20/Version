import React, { useEffect, useState } from 'react';
import { Card, List, Input } from 'antd';
import moment from 'moment';

import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView, StyledCustomerHeaderRight,StyledCustomerHeader
} from '../../../styles/index.styled';

const TimeSheetSite = () => {
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByType?type=site&page=${currentPage - 1}&size=${pageSize}`);
      const data = await response.json();
      setEmployeesOffice(data);
      setTotalRecords(data.length);  // Adjust as per the actual response
    } catch (error) {
      console.error('Error fetching site employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentDate = new Date();
  const currentMonthName = currentDate.toLocaleString('en-US', { month: 'long' }).toUpperCase();

  // Filtering by Name
  const fetchFilteredEmployees = async (filterValue) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${filterValue}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();
      setEmployeesFiltered(data);  
      setIsDropdownOpen(true);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handleNameFilterChange = (event) => {
    const filterValue = event.target.value.trim();
    setNameFilter(filterValue);
    if (filterValue !== '') {
      clearTimeout(typingTimeout);
      const timeoutId = setTimeout(() => {
        fetchFilteredEmployees(filterValue);
        setIsDropdownOpen(true);
      }, 300); // Wait 300 ms after typing stops to trigger the search
      setTypingTimeout(timeoutId);
    } else {
      setIsDropdownOpen(false);
      setEmployeesFiltered([]);
      fetchEmployeesByType(); // Fetch all employees if the input is cleared
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (nameFilter !== '') {
      fetchFilteredEmployees(nameFilter);
    } else {
      fetchEmployeesByType(); // Fetch all employees if the input is empty
    }
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name);
    setEmployeesFiltered([]);
    setIsDropdownOpen(false);
  };

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Office' />
    
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Site Time Sheet - ${currentMonthName}`}>
          <StyledCustomerInputView style={{margin:"1rem"}}>
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
              zIndex: 5,
              borderRadius: "6px",
              maxHeight: '200px',
              overflowY: 'auto',
              paddingLeft: "10px",
              background: "white",
              position: "absolute",
              top: "6rem",
              width: "18%",
              boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
            }}
            dataSource={employeesFiltered}
            renderItem={(item) => (
              <List.Item onClick={() => handleListItemClick(item)}>
                {item.name}
              </List.Item>
            )}
          />
        )}
      </StyledCustomerInputView>

      {/* <StyledCustomerHeader>
      <StyledCustomerInputView>
      
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
              zIndex: 5,
              borderRadius: "6px",
              maxHeight: '200px',
              overflowY: 'auto',
              paddingLeft: "10px",
              background: "white",
              position: "absolute",
              top: "6rem",
              width: "18%",
              boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
            }}
            dataSource={employeesFiltered}
            renderItem={(item) => (
              <List.Item onClick={() => handleListItemClick(item)}>
                {item.name}
              </List.Item>
            )}
          />
        )}





        </StyledCustomerInputView>
        <StyledCustomerHeaderRight>
     
    
     
      </StyledCustomerHeaderRight>
     </StyledCustomerHeader> */}

      
        <OrderTable orderData={nameFilter ? employeesFiltered : employeesOffice} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(130 / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>
  );
};

export default TimeSheetSite;
