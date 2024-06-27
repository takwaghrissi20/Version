import React, { useEffect, useState } from 'react';
import { Card, List, Input, Select, Space, Dropdown, Button, Menu, Row, Col } from 'antd';
import moment from 'moment';
import { FcEmptyFilter } from 'react-icons/fc'; // Import de l'icône
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView } from '../../../styles/index.styled';
import { FcClearFilters } from "react-icons/fc";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
const AddTimeSheetSite = () => {
  const [employeesSite, setEmployeesSite] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [filterType, setFilterType] = useState(null); // Nouvel état pour le type de filtrage
  const [pickerValue, setPickerValue] = useState(new Date(selectedYear, selectedMonth - 1));

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize, selectedMonth, selectedYear, filterType]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByType?type=site&page=${currentPage}&size=${pageSize}`);
      const data = await response.json();

      setEmployeesSite(data);
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
      const newMoment = moment(date);
      setSelectedMonth(newMoment.month() + 1);
      setSelectedYear(newMoment.year());
      setPickerValue(date);
    }
  };

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Site' />
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Add Site Time Sheet`}>

        <Col className="calendar" style={{ display: "flex", zIndex: 10, marginLeft: '3rem' }} span={15}>


          <div className="datepicker-wrapper">
            <FaRegCalendarAlt className="calendar-icon" />
            <DatePicker
                 selected={pickerValue}
                 onChange={handleMonthChange}
                 dateFormat="yyyy-MM-dd"
                 placeholderText="Select Month and Year"
                 className="custom-datepicker"
            />
          </div>

         
        </Col>
        {/* <div >
          <div style={{ zIndex: '10', right: '1rem' }}>
            <FaRegCalendarAlt className="calendar-icon" />
            <DatePicker
              selected={pickerValue}
              onChange={handleMonthChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Month and Year"
              className="custom-datepicker"
            />
          </div>
        </div> */}
        <Space style={{ margin: '1rem', display: 'flex', justifyContent: 'space-between', width: '100%', }}>

        </Space>

        <OrderTable orderData={employeesSite} pickerValue={pickerValue} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(50 / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>
  );
};

export default AddTimeSheetSite;
