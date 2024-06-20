import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Select } from 'antd';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../../@crema/components/AppCard';
import { StyledOrderHeader, StyledOrderHeaderRight } from '../../../../styles/index.styled';
import OrderTable from './Table';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import Total from "./TotalPerson";
import HystogramManpiwerLocation from './TotalPerson/HystogramManpiwerLocation';

const localizer = momentLocalizer(moment);

const AllocationPerProject = () => {
  const { messages } = useIntl();
  const [lastFivedata, setLastFivedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [mob, setMob] = useState([]);
  const [filteredMob, setFilteredMob] = useState([]);
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [count, setCount] = useState(0);
  const [allProjects, setAllProjects] = useState([]);
  const [locationCounts, setLocationCounts] = useState({});
  const [totalTravels, setTotalTravels] = useState(0);

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
    fetchFiveDemobilization();
    fetchAllProjects();
  }, []);

  useEffect(() => {
    fetchMob();
    fetchTravel();
  }, [currentPage, pageSize, selectedProject]);

  const fetchMobTest = async () => {
    try {
      const countResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/countGoBack?type=0`);
      const datacount = await countResponse.json();
      setCount(datacount);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/listByPage?page=${currentPage}&size=${pageSize}`);
      if (!response.ok) {
        openNotificationError();
        throw new Error('Failed to fetch mob');
      }
      const data = await response.json();
      console.log("dattttaa",data)
      setMob(data);
      setFilteredMob(selectedProject !== 'All Projects'
        ? data.filter(p => p.projName === selectedProject)
        : data);
    } catch (error) {
      console.error('Error fetching mob:', error);
      openNotificationError();
    }
  };
  const fetchMob = async () => {
    try {
      const countResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/countGoBack?type=0`);
      const datacount = await countResponse.json();
      setCount(datacount);
  
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      if (!response.ok) {
        openNotificationError();
        throw new Error('Failed to fetch mob');
      }
      const data = await response.json();
      
  
      // Créer un objet pour stocker la dernière mobilisation pour chaque getsId
      const latestMobPerEmployee = {};
  
      data.forEach(mob => {
        const existing = latestMobPerEmployee[mob.getsId];
        if (!existing || new Date(mob.dateMob) > new Date(existing.dateMob)) {
          latestMobPerEmployee[mob.getsId] = mob;
        }
      });
  
      // Convertir l'objet en tableau
      const latestMobList = Object.values(latestMobPerEmployee);
  
      setMob(latestMobList);
      setCount(latestMobList.length)
      setFilteredMob(selectedProject !== 'All Projects'
        ? latestMobList.filter(p => p.projName === selectedProject)
        : latestMobList);
    } catch (error) {
      console.error('Error fetching mob:', error);
      openNotificationError();
    }
  };
  
  

  const fetchFiveDemobilization = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/fiveLast?type=DeMobilization`);
      if (!response.ok) {
        throw new Error('Failed to fetch MobDemob');
      }
      const data = await response.json();
      setLastFivedata(data);
    } catch (error) {
      console.error('Error fetching MobDemob:', error);
    }
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchAllProjects = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list`);
      if (!response.ok) {
        throw new Error('Failed to fetch Projects');
      }
      const data = await response.json();
      const projectNames = [...new Set(data.map(project => project.projName))];
      setAllProjects(projectNames);
    } catch (error) {
      console.error('Error fetching mob:', error);
      openNotificationError();
    }
  };

  const fetchTravel = async () => {
    try {
      const countEmployeesResponse = await fetch('https://dev-gateway.gets-company.com/api/v1/travel/list');
      const data = await countEmployeesResponse.json();

      const counts = {};
      let total = 0; 
      data.forEach(travel => {
        const { actualLocationFrom, rich_DateToSite } = travel;

        if (!actualLocationFrom) return;

        if (!counts[actualLocationFrom]) {
          counts[actualLocationFrom] = 0;
        }

        if (rich_DateToSite) {
          counts[actualLocationFrom]++;
          total++; // Increment total count
        }
      });

      setLocationCounts(counts);
      setTotalTravels(total); // Set total count

    } catch (error) {
      console.error('Error fetching travel', error);
    }
  };

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='ManpowerAllocationPerProject' />

      <Row gutter={16}>
        <Col span={14}>
          <Card>
            <HystogramManpiwerLocation totalVisitors={locationCounts} totalTravels={totalTravels} />
          </Card>
        </Col>
        <Col span={10}>
          <Card>
            <Total totalVisitors={locationCounts} totalTravels={totalTravels} />
          </Card>
        </Col>
      </Row>

      <AppCard
        className='no-card-space-ltr-rtl'
        title={messages['sidebar.hr.ManpowerLocationTrackPerProject']}
      >
        <AppsHeader>
          <StyledOrderHeader>
            <Select
              placeholder='Project Name'
              onChange={handleProjectChange}
              value={selectedProject}
              style={{ width: 200 }}
            >
              {allProjects.map((p, index) => (
                <Select.Option key={index} value={p}>
                  {p}
                </Select.Option>
              ))}
            </Select>
          </StyledOrderHeader>
        </AppsHeader>
        <OrderTable className={clsx("item-hover")} orderData={filteredMob} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(count / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>
  );
};

export default AllocationPerProject;
