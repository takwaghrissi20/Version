import React, { useState, useEffect, useRef } from 'react';
import { Input, List } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../@crema/components/AppsPagination';
import AppPageMeta from "../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
} from '../../styles/index.styled';
import AppsHeader from '../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../@crema/components/AppCard';
import { useIntl } from 'react-intl';

const PersonOntheBord = () => {
  const { messages } = useIntl();
  const [mobilization, setMobilization] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageSize]);

  const fetchEmployees = async () => {
    try {
      const countMob = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/countGoBack?type=0&token=${token}`);
      const datacount = await countMob.json();
      setCount(datacount);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/goBackBypage?type=0&page=${currentPage}&size=${pageSize}&token=${token}`);
      if (!response.ok) {
        throw new Error('Failed to fetch mob');
      }
      const data = await response.json();
      setMobilization(data);
    } catch (error) {
      console.error('Error fetching mob:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/listTrByName?name=${nameFilter}&token=${token}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();
      setEmployeesFiltrer(data);
      setMobilization(data);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name); // Mettre le nom de l'élément dans le champ de saisie
    handleSearch({ target: { value: item.name } }); // Simuler l'événement pour le filtrage
    setIsDropdownOpen(false);
  };

  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/listTrByName?name=${filterValue}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to filter mobilization');
        }
        const data = await response.json();

        // Utiliser un Set pour rendre les noms uniques
        const uniqueEmployees = Array.from(new Set(data.map(item => item.name)))
          .map(name => data.find(item => item.name === name));

        setEmployeesFiltrer(uniqueEmployees);
        setMobilization(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering mobilization:', error);
      }
    } else {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <AppPageMeta title='Person On Board' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <div ref={searchContainerRef} style={{ marginRight: 20, width: "20%" }}>
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
                    zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto',
                    background: "white", position: "absolute", top: "6rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={employeesFiltrer}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.name}
                    </List.Item>
                  )}
                />
              )}
            </div>
          </StyledOrderHeader>
        </AppsHeader>
        <AppCard className='no-card-space-ltr-rtl' title={messages['hr.PersonBoard']}>
          <OrderTable className={clsx("item-hover")} mobilization={mobilization} />
        </AppCard>
        <StyledOrderHeaderRight>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={setCurrentPage}
          />
        </StyledOrderHeaderRight>
        <div style={{ height: "20px" }}></div>
      </div>
    </div>
  );
};

export default PersonOntheBord;
