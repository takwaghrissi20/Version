import React, { useEffect, useState, useRef } from 'react';
import { Card, List, Input, Select, Space, Dropdown, Button, Menu, Row,Col } from 'antd';
import moment from 'moment';
import { FcEmptyFilter, FcClearFilters } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView } from '../../../styles/index.styled';
import generatePDF from 'react-to-pdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";

const TimeSheetOffice = () => {
  const targetRef = useRef();
  const currentDate = moment();
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employeesFiltered, setEmployeesFiltered] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month() + 1);
  const [selectedYear, setSelectedYear] = useState(currentDate.year());
  const [filterType, setFilterType] = useState(null);
  const [okClicked, setOkClicked] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState(new Date(selectedYear, selectedMonth - 1));
  const [tempSelectedMonth, setTempSelectedMonth] = useState(selectedMonth);
  const [tempSelectedYear, setTempSelectedYear] = useState(selectedYear);

  useEffect(() => {
    fetchEmployeesByType();
    fetchCountEmployeesOffice()
  }, [currentPage, pageSize, selectedMonth, selectedYear, filterType]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeStatus?type=office&status=Active &page=${currentPage}&size=${pageSize}&month=${selectedMonth}&year=${selectedYear}`);
      const data = await response.json();
      setEmployeesOffice(data);
     
    } catch (error) {
      console.error('Error fetching site employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleMonthChange = (date) => {
    if (date) {
      const newMoment = moment(date);
      setTempSelectedMonth(newMoment.month() + 1);
      setTempSelectedYear(newMoment.year());
      setPickerValue(date);
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
      <Menu.Item style={{ padding: "1rem" }} key="name">Filter by Name</Menu.Item>
    </Menu>
  );

  const handleOkClick = () => {
    setSelectedMonth(tempSelectedMonth);
    setSelectedYear(tempSelectedYear);
    setOkClicked(!okClicked);
  };
  //Count All Employyees are type=office
  const fetchCountEmployeesOffice = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué list Employees ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
     
      const dataOffice=data.filter(p=>p.type_Emp==="office" && p.actStatus==="Active ")
     
      setTotalRecords(dataOffice.length)
   


    } catch (error) {
      console.error('Erreur lors de la récupération list Employees', error);
    }
  };

  const handleGeneratePDF = async () => {
    try {
      const response = await axios.get('https://dev-gateway.gets-company.com/api/v1/emp/list');
      const employees = response.data;
      const doc = new jsPDF('landscape');
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
      const dates = Array.from({ length: daysInMonth }, (_, i) => `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`);
      const tableHeaders = ['Employee Name', 'Position', 'GetsID', ...dates];
      const tableData = employees.map(employee => {
        const { name, position, getsId, officepointages } = employee;
        const row = Array(daysInMonth + 3).fill('');
        row[0] = name;
        row[1] = position;
        row[2] = getsId;
        officepointages.forEach(pointage => {
          if (pointage.date.startsWith(`${currentYear}-${String(currentMonth).padStart(2, '0')}`)) {
            const day = parseInt(pointage.date.split('-')[2], 10);
            row[day + 2] = pointage.pointage;
          }
        });
        return row;
      });
      const fontSize = 5;
      doc.setFontSize(fontSize);
      doc.text(`Office Summary Attendence ${now.toLocaleString('en-US', { month: 'long' })} ${currentYear}`, 14, 22);
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
          0: { cellWidth: 30 },
          1: { cellWidth: 20 },
          2: { cellWidth: 20 },
        },
      });
      doc.save(`Office Summary Attendence_${now.toLocaleString('en-US', { month: 'long' })}_${currentYear}.pdf`);
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
       
        <Row  className="row"gutter={16} style={{marginTop:"1rem"}}>
        <Col span={5}>  
                 
          </Col> 
                      
          <Col  className="calendar" style={{display:"flex"}} span={15}>   
          <span style={{display:"flex", justifyContent: "center", textAlign:"center",marginTop:'-1.25rem',marginRight:"-3rem",fontWeight:"bold"}}>Month <span style={{color:'red'}}>*</span></span> 
          <FaRegCalendarAlt style={{ position: 'absolute',  zIndex: 2, marginLeft: '0.5rem', marginTop: '0.75rem',color:"#767375" }} />
  
            <DatePicker
              selected={pickerValue}
              onChange={handleMonthChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              placeholderText="Select Month and Year"
              style={{ zIndex: 2,  width:"100%" }}
            />
            <Button
              style={{ marginLeft:"0.5rem" ,backgroundColor: '#41b3f8', borderColor: 'transparent', color: 'white',paddingRight:"2rem",paddingLeft:"2rem" }}
              onClick={handleOkClick}
            >
              Filter
            </Button>
          </Col>
       
          <Col  span={4}>
          <Button onClick={handleGeneratePDF} className='downloadbutton'>
              <FiDownload /> Download pdf
            </Button>
          
          </Col>
        </Row>
        {/* <Row>
          <div style={{ position: 'relative', padding: '1rem' }}>
            <FaRegCalendarAlt style={{ position: 'absolute', zIndex: 2, marginLeft: '0.5rem', marginTop: '0.5rem' }} />
            <DatePicker
              selected={pickerValue}
              onChange={handleMonthChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              placeholderText="Select Month and Year"
              style={{ zIndex: 2 }}
            />
            <Button
              style={{ position: 'absolute', backgroundColor: '#41b3f8', borderColor: 'transparent', color: 'white', marginLeft: '12rem', marginTop: '0.5rem' }}
              onClick={handleOkClick}
            >
              Filter
            </Button>
          </div>
        </Row> */}

        <Space style={{ margin: '1rem', display: 'flex', justifyContent: 'space-between', width: '100%', }}>
        
        </Space>
        <table style={{ marginTop: "2rem",marginLeft:"4.5rem",backgroundColor:"#fafafa"}}>
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

export default TimeSheetOffice;
