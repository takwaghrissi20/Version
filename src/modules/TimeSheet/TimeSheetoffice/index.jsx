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
import { FiDownload } from "react-icons/fi";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import AllPdf from './GeneratePdf'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
const { MonthPicker } = DatePicker;

const TimeSheetOffice = () => {
  const targetRef = useRef();
  const currentDate = moment();
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [totalRecords, setTotalRecords] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month() + 1); // Les mois de moment vont de 0 à 11
  const [selectedYear, setSelectedYear] = useState(currentDate.year());
  // const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  // const [selectedYear, setSelectedYear] = useState(moment().year());
  const [filterType, setFilterType] = useState(null);
  const [okClicked, setOkClicked] = useState(false) // Nouvel état pour le type de filtrage
  const [pdfVisible, setPdfVisible] = useState(false);

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize, selectedMonth, selectedYear, filterType]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByType?type=office&page=${currentPage - 1}&size=${pageSize}&month=${selectedMonth}&year=${selectedYear}`);
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
      <Menu.Item style={{ padding: "1rem" }} key="month">Filter by Month && Year</Menu.Item>
      {/* <Menu.Item style={{padding:"1rem"}} key="year">Filter by Year</Menu.Item> */}
      <Menu.Item style={{ padding: "1rem" }} key="name">Filter by Name</Menu.Item>
    </Menu>
  );
  const handleOkClick = () => {
    setOkClicked(!okClicked); // Toggle okClicked state to trigger useEffect
  };
  //Generate pdf

  const handleGeneratePDF = async () => {
    try {
      // Fetch data from the API
      const response = await axios.get('https://dev-gateway.gets-company.com/api/v1/emp/list');
      const employees = response.data;

      // Create a new jsPDF instance with landscape orientation
      const doc = new jsPDF('landscape');

      // Get the current year and month
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1; // Months are zero-based

      // Generate an array of all dates in the current month
      const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
      const dates = Array.from({ length: daysInMonth }, (_, i) => `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`);

      // Prepare table header
      const tableHeaders = ['Employee Name', 'Position', 'GetsID', ...dates];

      // Prepare table data
      const tableData = employees.map(employee => {
        const { name, position, getsId, officepointages } = employee;

        // Create a row with the employee's name, position, getsId, and empty pointage fields
        const row = Array(daysInMonth + 3).fill('');
        row[0] = name;
        row[1] = position;
        row[2] = getsId;

        // Fill in the pointages for the current month
        officepointages.forEach(pointage => {
          if (pointage.date.startsWith(`${currentYear}-${String(currentMonth).padStart(2, '0')}`)) {
            const day = parseInt(pointage.date.split('-')[2], 10);
            row[day + 2] = pointage.pointage;
          }
        });

        return row;
      });

      // Adjust font size to fit content on one page
      const fontSize = 5; // Adjust as needed
      doc.setFontSize(fontSize);

      // Add title to PDF
      doc.text(`Employee Pointages for ${now.toLocaleString('default', { month: 'long' })} ${currentYear}`, 14, 22);

      // Add table to PDF
      doc.autoTable({
        head: [tableHeaders],
        body: tableData,
        startY: 30,
        styles: {
          fontSize,
          cellPadding: 1,
          halign: 'center',
          valign: 'middle',
        },
        theme: 'grid',
        columnStyles: {
          0: { cellWidth: 30 }, // Employee Name column width
          1: { cellWidth: 20 }, // Position column width
          2: { cellWidth: 20 }, // GetsID column width
          // Adjust other column widths as needed
        },
      });

      // Save the PDF
      doc.save(`Employee_Pointages_${now.toLocaleString('default', { month: 'long' })}_${currentYear}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Office' />
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Office Summary Attendence - ${currentMonthName} ${selectedYear}`}>
        <Space style={{ margin: '1rem', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Dropdown overlay={filterMenu}>
            <Button>
              <FcClearFilters style={{ marginTop: '0.1rem', marginRight: "0.1rem", fontSize: "1rem" }} />
            </Button>
          </Dropdown>

          {filterType === 'month' && (
            <>
              <MonthPicker
                value={moment().month(selectedMonth - 1).year(selectedYear)}
                onChange={handleMonthChange}
                format="MMMM YYYY"
                style={{ height: "2rem" }}
                placeholder="Select Month and Year"
              />
              <Button style={{ backgroundColor: "#41b3f8", borderColor: 'transparent', color: "white" }} onClick={handleOkClick}>Filter</Button>
            </>
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
    
  
   
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
      <Button onClick={handleGeneratePDF} className='downloadbutton'>
        <FiDownload /> Download pdf
      </Button>
    </div>
          {/* <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
            <Button onClick={handleGeneratePDF} className='downloadbutton'> <FiDownload />Download pdf</Button>
   
          
          </div> */}
        </Space>
        <table style={{ marginTop: "2rem" }}>
          <thead>
            <tr>
              <th style={{ fontSize: "1.5rem" }}>Year</th>
              <th style={{ fontSize: "1.5rem" }}> Month</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontSize: "1rem" }}>{currentMonthName}</td>
              <td style={{ fontSize: "1rem" }}>{selectedYear}</td>

            </tr>


          </tbody>
        </table>
        {isDropdownOpen && filterType === 'name' && (
          <List
            style={{
              zIndex: 5,
              borderRadius: "6px",
              maxHeight: '200px',
              marginLeft: '5rem',
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
     {/* <div ref={targetRef} id="pdf-content" style={{ visibility: pdfVisible ? "visible" : "hidden" }}> */}
        <OrderTable orderData={nameFilter ? employeesFiltered : employeesOffice} selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(50 / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
 
      <div ref={targetRef} id="pdf-content" style={{ visibility: pdfVisible ? "visible" : "hidden" }}> 
        <AllPdf></AllPdf>

        </div>  

           

    </div>
  );
};

export default TimeSheetOffice;
