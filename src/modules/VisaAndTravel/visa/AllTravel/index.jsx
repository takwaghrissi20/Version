import React, { useState, useEffect } from 'react';
import { Input, List } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
} from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';

const AllTravel = () => {
  const { messages } = useIntl();
  const [mission, setMission] = useState([]);
  const [filteredMission, setFilteredMission] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchMission();
  }, [currentPage, pageSize, nameFilter]);

  const fetchMission = async () => {
    try {
      const countMission = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/list`);
      const datacount = await countMission.json();
      setCount(datacount.length);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/listByPage?page=${currentPage}&size=${pageSize}`);

      if (!response.ok) {
        throw new Error('Failed to fetch Mission');
      }

      const data = await response.json();
      setMission(data);
      
    
    } catch (error) {
      console.error('Error fetching Mission:', error);
    }
  };

 


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <AppPageMeta title='All Travel' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
           
          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.AllTravel']}
        >
          <OrderTable className={clsx("item-hover")} datamission={ mission} />
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

export default AllTravel;
