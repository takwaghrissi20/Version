import React, { useEffect, useState, useRef } from 'react';
import { Card, List, Input, Select, Space, Dropdown, Button, Menu, Row, Col, Table } from 'antd';
import moment from 'moment';
import { FcEmptyFilter, FcClearFilters } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import OrderTableSite from './TableSite';
import TableSiteModal from './TableSiteModal';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView } from '../../../styles/index.styled';
import generatePDF from 'react-to-pdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";

const { Option } = Select;

const TimeSheetOffice = () => {
  const targetRef = useRef();
  const currentDate = moment();
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [siteTimeSheet, setSiteTimeSheet] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchEmployeesByType();
    fetchCountEmployeesOffice();
  }, [currentPage, pageSize, selectedMonth, selectedYear, filterType, startDate, endDate]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeStatus?type=office&status=Active&page=${currentPage}&size=${pageSize}&month=${selectedMonth}&year=${selectedYear}`);
      const data = await response.json();
      setEmployeesOffice(data);
    } catch (error) {
      console.error('Error fetching site employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const handleMonthChange = (date) => {
    if (date) {
      const newMoment = moment(date);
      setSelectedMonth(newMoment.month() + 1);
      setSelectedYear(newMoment.year());
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

  const filterMenu = (
    <Menu onClick={handleFilterTypeChange}>
      <Menu.Item style={{ padding: "1rem" }} key="custom_range">User Define</Menu.Item>
      <Menu.Item style={{ padding: "1rem" }} key="today">Today</Menu.Item>
      <Menu.Item style={{ padding: "1rem" }} key="yesterday">Yesterday</Menu.Item>
      <Menu.Item style={{ padding: "1rem" }} key="this_week">This Week</Menu.Item>
      <Menu.Item style={{ padding: "1rem" }} key="this_month">This Month</Menu.Item>
    </Menu>
  );

  const handleOkClick = () => {
    setOkClicked(!okClicked);
  };

  const fetchCountEmployeesOffice = async () => {
    try {
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
      const dataOffice = data.filter(p => p.type_Emp === "office" && p.actStatus === "Active ");
      setTotalRecords(dataOffice.length);
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

  const fetchSiteTimeSheet = async () => {
    if (!startDate || !endDate) return;

    const startDateString = startDate.toISOString().slice(0, 10);
    const endDateString = endDate.toISOString().slice(0, 10);

    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/poin/employees?page=${currentPage}&page_size=${pageSize}&start_date=${startDateString}&end_date=${endDateString}`;
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setSiteTimeSheet(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyFilter = () => {
    let start, end;
    switch (filterType) {
      case 'today':
        start = moment().startOf('day');
        end = moment().endOf('day');
        break;
      case 'yesterday':
        start = moment().subtract(1, 'days').startOf('day');
        end = moment().subtract(1, 'days').endOf('day');
        break;
      case 'this_week':
        start = moment().startOf('week');
        end = moment().endOf('week');
        break;
      case 'this_month':
        start = moment().startOf('month');
        end = moment().endOf('month');
        break;
      case 'custom_range':
        fetchSiteTimeSheet();
        return;
      default:
        return;
    }
    setStartDate(start);
    setEndDate(end);
    fetchSiteTimeSheet();
  };

  const Filter = () => {
    setModal(true);
  };

  const closeFilter = () => {
    setModal(false);
  };
  console.log("siteTimeSheet", siteTimeSheet);

  return (
    <>
      <AppPageMeta title="Office Employees" />
      <AppCard title="Office Employees" heightFull>
        <div ref={targetRef}>
          <StyledOrderHeaderRight>
        
            <Space className='time' direction="vertical" size={12}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
                style={{ marginBottom: '1rem' }}
                customInput={<Button icon={<FaRegCalendarAlt />}>
                  {startDate ? moment(startDate).format('yyyy-MM-DD') : 'Select Start Date'}</Button>}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                dateFormat="yyyy-MM-dd"
                style={{ marginBottom: '1rem' }}
                customInput={<Button icon={<FaRegCalendarAlt />}>{endDate ? moment(endDate).format('yyyy-MM-DD') : 'Select End Date'}</Button>}
              />
              <Button onClick={fetchSiteTimeSheet}>Filter</Button>
            </Space>
          </StyledOrderHeaderRight>
          <OrderTableSite siteTimeSheet={siteTimeSheet} />
        </div>
      </AppCard>
      {modal && (
        <>
          <p>Modal</p>
          <TableSiteModal siteTimeSheet={siteTimeSheet} />
        </>
      )}
    </>
  );
};

export default TimeSheetOffice;
