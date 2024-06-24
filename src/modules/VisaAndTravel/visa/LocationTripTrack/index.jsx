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
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const [count, setCount] = useState(0);
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [allProjects, setAllProjects] = useState([]);

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error',
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

  useEffect(() => {

    fetchAllProjects()
    fetchEmployees()

  }, [currentPage, pageSize, selectedProject]);


  ////////////////////Test

  const fetchEmployees = async () => {
    try {
      const countEmployeesResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      const data = await countEmployeesResponse.json();
      const latestMobPerEmployee = {};

      data.forEach(mob => {
        const existing = latestMobPerEmployee[mob.getsId];
        if (!existing || new Date(mob.dateMob) > new Date(existing.dateMob)) {
          latestMobPerEmployee[mob.getsId] = mob;
        }
      });

      const latestMobList = Object.values(latestMobPerEmployee);
      console.log("latestMobList", latestMobList)
      setEmployees(latestMobList);
      setFilteredEmployees(selectedProject !== 'All Projects'
        ? latestMobList.filter(emp => emp.projName === selectedProject)
        : latestMobList);
       
        setCount(latestMobList.length);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error gracefully
      throw error;
    }
  };



  const fetchEmployees3 = async () => {
    try {
      const countEmployeesResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      const data = await countEmployeesResponse.json();

      // Assuming data is an array of travel objects as shown in your example
      // Sort data by dateMob in descending order (latest date first)
      data.sort((a, b) => {
        // Convert date strings to Date objects for comparison
        const dateA = new Date(a.dateMob);
        const dateB = new Date(b.dateMob);

        // Sort descending
        return dateB - dateA;
      });

      // Get the latest dateMob value for each employee
      const latestDateMobs = {};

      data.forEach(employee => {
        const { getsId, dateMob } = employee;
        if (!(getsId in latestDateMobs) || new Date(dateMob) > new Date(latestDateMobs[getsId])) {
          latestDateMobs[getsId] = dateMob;
        }
      });

      // Log or use latestDateMobs as needed
      console.log('Latest dateMob for each employee:', latestDateMobs);

      // Return latestDateMobs or use it as needed in your application
      return latestDateMobs;

    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error gracefully
      throw error;
    }
  };


  const fetchEmployeesTest = async () => {
    try {
      const countEmployeesResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      const datacount = await countEmployeesResponse.json();
      setCount(datacount.length);


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list?page=${currentPage}&size=${pageSize}`);
      if (!response.ok) {
        openNotificationError();
        throw new Error('Failed to fetch travel');
      }
      const data = await response.json();
      setEmployees(data);
      setFilteredEmployees(selectedProject !== 'All Projects'
        ? data.filter(emp => emp.projName === selectedProject)
        : data);
        
    } catch (error) {
      console.error('Error fetching travel', error);
      openNotificationError();
    }
  };
  const fetchAllProjects = async () => {
    try {


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list`);
      if (!response.ok) {

        throw new Error('Failed to fetch Projects');
      }

      const data = await response.json();
      const projectNames = [...new Set(data.map(project => project.projName))];
      console.log("Project Names:", projectNames);
      setAllProjects(projectNames.map(projName => ({ proj: projName })));
      setAllProjects(projectNames)

    } catch (error) {
      console.error('Error fetching employees:', error);
      openNotificationError();
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
    setFilteredEmployees(value !== 'All Projects'
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
              {allProjects.length > 0 ? allProjects.map((p, index) => (
                <Select.Option key={index} value={p}>
                  {p}
                </Select.Option>
              )) : (
                <Select.Option key="no-data" disabled>
                  No Projects Available
                </Select.Option>
              )}
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
