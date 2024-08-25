import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Select } from 'antd';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight } from '../../../styles/index.styled';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
const AddTimeSheetSite = () => {
  const [employeesSite, setEmployeesSite] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [filterDate, setFilterDate] = useState(new Date());
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('All Project');
  const [selectedPointage, setSelectedPointage] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize, selectedProject]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByTypeWithoutPage?type=office`);
      const data = await response.json();
      const filteredData = data.filter(item => item.actStatus==="Active ");
      setTotalRecords(filteredData.length);

      const startIndex = (currentPage ) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = filteredData.slice(startIndex, endIndex);
      setEmployeesSite(paginatedData);
    } catch (error) {
      console.error('Error fetching site employees:', error);
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleMonthChange = date => {
    if (date) {
      const newMoment = moment(date);
      setSelectedMonth(newMoment.month() + 1);
      setSelectedYear(newMoment.year());
      setFilterDate(date);
    }
  };

  const fetchPointages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/all`);
      const data = await response.json();
      const testdate = moment(filterDate).format('YYYY-MM-DD');
      const filteredData = data.filter(item => item.date === testdate);
      const pointageData = filteredData.reduce((acc, item) => {
        acc[item.getsId] = item.pointage;
        return acc;
      }, {});
      setSelectedPointage(pointageData);
    } catch (error) {
      console.error('Error fetching pointages:', error);
    }
    finally {
      setTimeout(() => {
        setLoading(false); // Désactiver le chargement après 1 seconde
      }, 1000);
    }
  };

  return (
    <>
  <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Site' />
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Add Office Time Sheet`}>
          <Row style={{ marginTop: '1rem',marginBottom:"1rem" }}>
            <Col className="calendar" style={{ display: "flex", zIndex: 10, marginLeft: '3rem', marginBottom: "1rem" }} span={15}>
              <div className="datepicker-wrapper">
                <FaRegCalendarAlt className="calendar-icon" />
                <DatePicker
                  selected={filterDate}
                  onChange={handleMonthChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select Month and Year"
                  className="custom-datepicker"
                />
              </div>
              <div style={{width:"10px"}}></div>
              {/* <Button type="primary" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} 
                      
              >Filter </Button> */}
         
              <Button type="primary" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}  
              onClick={fetchPointages}>Filter</Button>
            </Col>
            
          </Row>

        <OrderTable 
        style={{ backgroundcolor:"red"}}      
        selectedPointage={selectedPointage}
        loading={loading}
        setSelectedPointage={setSelectedPointage}
        orderData={employeesSite}
         filterDate={filterDate} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalRecords / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>

    </>
  );
};

export default AddTimeSheetSite;
