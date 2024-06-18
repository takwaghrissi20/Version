import React, { useState, useEffect } from 'react';
import { Input, List, notification, Select } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import { StyledOrderHeader, StyledOrderHeaderRight } from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';

const LocationTripTrack = () => {
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [selectedProject, setSelectedProject] = useState('');

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Failed to fetch employees',
      style: {
        backgroundColor: '#dc3545',
        border: '1px solid #dc3545',
        color: '#FFFFFF',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
      },
      placement: 'topRight',
    });
  };

  const projects = [
    { proj: 'All Projects' },
    { proj: 'ERP' },
    { proj: 'TK2' },
    { proj: 'ERPFLOW' },
  ];

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageSize, selectedProject]);

  const fetchEmployees = async () => {
    try {
      const countEmployeesResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/countByType?type=DeMobilization`);
      const datacount = await countEmployeesResponse.json();
      setCount(datacount);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/list?page=${currentPage - 1}&size=${pageSize}`);
      if (!response.ok) {
        openNotificationError();
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);
      setFilteredEmployees(selectedProject && selectedProject !== 'All Projects' 
        ? data.filter(emp => emp.projName === selectedProject) 
        : data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
    setFilteredEmployees(value && value !== 'All Projects' 
      ? employees.filter(emp => emp.projName === value) 
      : employees);
  };

  return (
    <div>
      <AppPageMeta title='LocationTrackRecord' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <Select
              placeholder='Project Name'
              onChange={handleProjectChange}
              value={selectedProject}
              style={{ width: 200 }}
            >
              {projects.map((p, index) => (
                <Select.Option key={index} value={p.proj}>
                  {p.proj}
                </Select.Option>
              ))}
            </Select>
          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['sidebar.hr.ManpowerLocationTrackRecord']}
        >
          <OrderTable className={clsx("item-hover")} dataemployees={filteredEmployees} />
        </AppCard>
        <StyledOrderHeaderRight>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChange}
          />
        </StyledOrderHeaderRight>
      </div>
    </div>
  );
};

export default LocationTripTrack;
