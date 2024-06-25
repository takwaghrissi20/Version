import React, { useEffect, useState } from 'react';
import { Card, List, Input, Select, Space, Dropdown, Button, Menu, DatePicker } from 'antd';
import moment from 'moment';
import { FcEmptyFilter } from 'react-icons/fc'; // Import de l'icône
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView } from '../../../styles/index.styled';
import { FcClearFilters } from "react-icons/fc";

const { MonthPicker } = DatePicker;

const TimeSheetSite = () => {
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [filterType, setFilterType] = useState(null); // Nouvel état pour le type de filtrage

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize, selectedMonth, selectedYear, filterType]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByType?type=site&page=${currentPage - 1}&size=${pageSize}&month=${selectedMonth}&year=${selectedYear}`);
      const data = await response.json();
  
      setEmployeesOffice(data); 
      setTotalRecords(data.totalElements || 0); 
    } catch (error) {
      console.error('Error fetching site employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleMonthChange = (date) => {
    if (date) {
      setSelectedMonth(date.month() + 1);
      setSelectedYear(date.year());
    }
  };

  const handleFilterTypeChange = ({ key }) => {
    setFilterType(key);
  };

  const currentMonthName = moment().month(selectedMonth - 1).format('MMMM').toUpperCase();

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
      }, 300);
      setTypingTimeout(timeoutId);
    } else {
      setIsDropdownOpen(false);
      setEmployeesFiltered([]);
      fetchEmployeesByType();
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (nameFilter !== '') {
      fetchFilteredEmployees(nameFilter);
    } else {
      fetchEmployeesByType();
    }
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name);
    setEmployeesFiltered([item]);
    setIsDropdownOpen(false);
  };

  const filterMenu = (
    <Menu onClick={handleFilterTypeChange}>
      <Menu.Item style={{padding:"1rem"}} key="month">Filter by Month && Year</Menu.Item>
      {/* <Menu.Item style={{padding:"1rem"}} key="year">Filter by Year</Menu.Item> */}
      <Menu.Item style={{padding:"1rem"}} key="name">Filter by Name</Menu.Item>
    </Menu>
  );

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Site' />
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Site Time Sheet - ${currentMonthName} ${selectedYear}`}>
        <Space style={{ margin: '1rem' }}>
          <Dropdown overlay={filterMenu}>
            <Button>
              <FcClearFilters style={{marginTop:'0.1rem',marginRight:"0.1rem",fontSize:"1rem"}} /> 
            </Button>
          </Dropdown>
          {filterType === 'month' && (
            <MonthPicker
              value={moment().month(selectedMonth - 1).year(selectedYear)}
              onChange={handleMonthChange}
              format="MMMM YYYY"
              style={{ height: "2rem" }}
              placeholder="Select Month and Year"
            />
          )}
          {filterType === 'name' && (
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
          )}
        </Space>
        {isDropdownOpen && filterType === 'name' && (
          <List
            style={{
              zIndex: 5,
              borderRadius: "6px",
              maxHeight: '200px',
              marginLeft:'5rem',
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
        <OrderTable orderData={nameFilter ? employeesFiltered : employeesOffice} selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalRecords / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>
  );
};

export default TimeSheetSite;
