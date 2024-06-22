import React, { useState, useEffect } from 'react';
import { Input, List, Col } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../@crema/components/AppsPagination';
import AppPageMeta from "../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,

} from '../../styles/index.styled';
import AppsContainer from "../../@crema/components/AppsContainer";
import AppsHeader from '../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import LastDemobilization from './LastDemobilization';


import AppRowContainer from '../../@crema/components/AppRowContainer';

const HeadOfficeEmployees = () => {
  const { messages } = useIntl();
  const [demobilization, setDeMobilization] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0); 
   const [countMobilization, setCountMobilization] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [latestDeMobilization, setLatestDeMobilization] = useState(null);

  useEffect(() => {
    fetchDemobilization();
  }, [currentPage, pageSize, nameFilter]);

  const fetchDemobilization = async () => {
    try {
      const countMob = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/countByType?type=DeMobilization`);
      const datacount = await countMob.json();
      setCount(datacount);
      //CountMobilization
      const lastDemobilization = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/getAll`);
      const allDemobilizations = await lastDemobilization.json();
  

      allDemobilizations.sort((a, b) => new Date(b.demobilizationDate) - new Date(a.demobilizationDate));

      const latestDemobilization = allDemobilizations[0];
    
      setLatestDeMobilization(latestDemobilization);
     


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/list?page=${currentPage}&size=${pageSize}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setDeMobilization(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${nameFilter}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();

      setEmployeesFiltrer(data)
      setDeMobilization(data);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };
  // const handleNameFilterChange = (event) => {
  //   setNameFilter(event.target.value);
  //   handleSearch(event.target.value)
  //   setIsDropdownOpen(event.target.value.trim() !== '');

  // };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name); // Mettre le nom de l'élément dans le champ de saisie
    handleSearch({ target: { value: item.name } }); // Simuler l'événement pour le filtrage
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${filterValue}`);
        if (!response.ok) {
          throw new Error('Failed to filter mobilization');
        }
        const data = await response.json();
        setEmployeesFiltrer(data);
        setDeMobilization(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering  mobilization:', error);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };

  return (
    <div style={{marginBottom:"2rem"}}>
      <AppPageMeta title='Demobilization Direct  mobilization' />

    <h2 className="Title">Details Person Retun in the Office </h2>
      <AppRowContainer ease={'easeInSine'}>
        <Col xs={24} sm={12} lg={8}>
          <LastDemobilization latestDeMobilization={latestDeMobilization}></LastDemobilization>

        </Col>
      
      </AppRowContainer>
    

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
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.HeadOffice']}
        >

          <OrderTable className={clsx("item-hover")} demobilization={demobilization} />
        </AppCard>
        <div style={{marginTop:"1rem",paddingBottom:"1rem"}}>
        <StyledOrderHeaderRight>

          <Pagination
             currentPage={currentPage}
             totalPages={Math.ceil(count / pageSize)}
             handlePageChange={handlePageChange}
          />



        </StyledOrderHeaderRight>
        </div>




      </div>
    </div>
  );
};

export default HeadOfficeEmployees;
