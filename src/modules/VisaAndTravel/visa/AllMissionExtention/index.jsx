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

const AllMission = () => {
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
      const countMission = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getAll`);
      const datacount = await countMission.json();
      setCount(datacount.length);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/list?page=${currentPage}&size=${pageSize}`);

      if (!response.ok) {
        throw new Error('Failed to fetch Mission');
      }

      const data = await response.json();
      setMission(data);
      
      // Update filteredMission if nameFilter is set
      if (nameFilter) {
        const filteredData = data.filter(item => item.empName.toLowerCase().includes(nameFilter.toLowerCase()));
        setFilteredMission(filteredData);
      } else {
        setFilteredMission([]);
      }
    } catch (error) {
      console.error('Error fetching Mission:', error);
    }
  };

  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getByName?name=${filterValue}`);
        if (!response.ok) {
          throw new Error('Failed to filter employees');
        }
        const data = await response.json();
        setFilteredMission(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering employees:', error);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
      setFilteredMission([]);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getByName?name=${nameFilter}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();
      setFilteredMission(data);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.empName); 
    handleSearch({ target: { value: item.empName } }); 
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <AppPageMeta title='Mission Order' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <div style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
              <Input.Search
                placeholder='Search Here'
                type="text"
                value={nameFilter}
                onChange={handleNameFilterChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event);
                  }
                }}
              />
              {isDropdownOpen && (
                <List
                  style={{
                    zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                    background: "white", position: "absolute", top: "6rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={filteredMission}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.empName}
                    </List.Item>
                  )}
                />
              )}
            </div>
          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.MissionOrder']}
        >
          <OrderTable className={clsx("item-hover")} datamission={filteredMission.length > 0 ? filteredMission : mission} />
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

export default AllMission;