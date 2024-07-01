import React, { useEffect, useState } from 'react';
import { Card, List, Input, Select, Space, Dropdown, Button, Menu, Row, Col } from 'antd';
import moment from 'moment';
import { FcEmptyFilter } from 'react-icons/fc';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight, StyledCustomerInputView } from '../../../styles/index.styled';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddTimeSheetSite = () => {
  const [employeesSite, setEmployeesSite] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Commence à 1 pour la pagination
  const [pageSize, setPageSize] = useState(10); // Taille par défaut de la page
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [filterDate, setFilterDate] = useState(new Date(selectedYear, selectedMonth - 1));
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [showFilters, setShowFilters] = useState(false);
  const currentDate = new Date();

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize, selectedProject]); // Ne plus surveiller selectedMonth, selectedYear, filterDate ici

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      const data = await response.json();
      const filteredData = data.filter(item =>
        item.rich_DateToSite !== null && new Date(item.endDateMiss) > filterDate &&
        (selectedProject === "All Projects" || item.projName === selectedProject)
      );

      const projectNames = [...new Set(data.map(item => item.projName))];
      setProjects(["All Projects", ...projectNames]);
      setTotalRecords(filteredData.length);

      // Calculer l'index de départ pour la pagination
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = filteredData.slice(startIndex, endIndex);
      setEmployeesSite(paginatedData);
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
      setFilterDate(date);
    }
  };

  const handleFilterClick = () => {
    fetchEmployeesByType(); // Appel du filtrage lors du clic sur le bouton "Filter"
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Time Sheet Site' />
      <AppCard
        className='no-card-space-ltr-rtl'
        title={`Add Site Time Sheet`}>

        <IoFilterSharp style={{ color: "#0083ff", fontSize: "1rem", marginLeft: "1rem", marginBottom: "1rem" }} onClick={toggleFilters} />

        {showFilters && (
          <Row style={{ marginTop: '0.5rem' }}>
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
              <Button type="primary" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} onClick={handleFilterClick}>Filter </Button>
              <Select
                placeholder="Select Project"
                onChange={handleProjectChange}
                value={selectedProject}
                style={{ width: 230 }}
              >
                {projects.map(project => (
                  <Select.Option key={project} value={project}>
                    {project}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        )}

        <OrderTable orderData={employeesSite} />
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

export default AddTimeSheetSite;
