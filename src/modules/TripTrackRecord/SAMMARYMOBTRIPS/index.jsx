import React, { useState, useEffect } from 'react';
import { Input, List, Col, Select, DatePicker } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
} from '../../../styles/index.styled';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import moment from 'moment';

const { Option } = Select;
const { MonthPicker } = DatePicker;

const SummarymobTrip = () => {
  const { messages } = useIntl();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [demopTrips, setDemopTrips] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    fetchDemobTrips();
  }, [currentPage, pageSize, selectedProject, selectedDate]);

  const fetchDemobTrips = async () => {
    try {
      let url = `https://dev-gateway.gets-company.com/api/v1/travel/list?page=${currentPage}&size=${pageSize}`;

      if (selectedProject) {
        url += `&project=${selectedProject}`;
      }

      if (selectedDate) {
        const startDate = selectedDate.startOf('month').format('YYYY-MM-DD');
        const endDate = selectedDate.endOf('month').format('YYYY-MM-DD');
        url += `&startDate=${startDate}&endDate=${endDate}`;
      }

      console.log('Fetching data from URL:', url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch Demob Trips');
      }

      const data = await response.json();
      const filteredData = data.filter(item => item.goBack === true);
      setDemopTrips(filteredData);
      setCount(data.length); // Update the count with the total data length
    } catch (error) {
      console.error('Error fetching Demob Trips:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <AppPageMeta title='Summary Demob Trip' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <div style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
         
              {/* <Select
                style={{ width: '100%', marginBottom: 20 }}
                placeholder="Select Project"
                onChange={handleProjectChange}
              >
                <Option value="Labor">Labor</Option>
                <Option value="Project2">Project2</Option>
              
              </Select>

              <MonthPicker
                style={{ width: '100%' }}
                defaultValue={moment()}
                placeholder="Select Month"
                onChange={handleDateChange}
              /> */}
            </div> 
            <StyledOrderHeaderRight>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(count / pageSize)}
                handlePageChange={handlePageChange}
              />
            </StyledOrderHeaderRight>
          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.SummarymobTrip']}
        >
          <OrderTable className={clsx("item-hover")} demopTrips={demopTrips} />
        </AppCard>
      </div>
    </div>
  );
};

export default SummarymobTrip;
