import React, { useEffect, useState } from 'react';
import AppsContainer from '../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/components/AppsContainer/AppsContent';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Input, List } from 'antd';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import Pagination from '../../../@crema/components/AppsPagination';
import CustomerTableSite from './DemobPermissionSite';

import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import {

  StyledCustomerHeader,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,

} from './index.styled';

const DemobTripTrack = () => {
  const { messages } = useIntl();

  const [employeesoffice, setEmployeesoffice] = useState([]);
  const [employeessite, setEmployeessite] = useState([]);
  const [employeesmixt, setEmployeesmixt] = useState([]); 

  const [employeessiteFiltrer, setEmployeessiteFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [nameSiteFilter, setNameSiteFilter] = useState('');
  const [nameMixtFilter, setNameMixtFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handlePageChangeSite = (page) => {
    setCurrentPage(page);
  };

  const handleNameFilterChange = (event) => {
    const filterValue = event.target.value.trim();
    
    setNameFilter(filterValue);
    setNameSiteFilter(filterValue);
    if (filterValue !== '') {

      clearTimeout(typingTimeout);
      const timeoutId = setTimeout(() => {
        fetchFilteredEmployees(filterValue);
        setIsDropdownOpen(true);
      }, 300); // Attendre 300 ms après la fin de la saisie pour déclencher la recherche
      setTypingTimeout(timeoutId);

      
    }else{
      setIsDropdownOpen(false);
    }

   
  };
  const handleNameSiteFilterChange = (event) => {
    const filterValue = event.target.value.trim();
    
    setNameSiteFilter(filterValue);
    if (filterValue !== '') {

      clearTimeout(typingTimeout);
      const timeoutId = setTimeout(() => {
        fetchFilteredEmployees(filterValue);
        setIsDropdownOpen(true);
      }, 300); // Attendre 300 ms après la fin de la saisie pour déclencher la recherche
      setTypingTimeout(timeoutId);

      
    }else{
      setIsDropdownOpen(false);
    }

   
  };
  const handleNameMixtFilterChange = (event) => {
    const filterValue = event.target.value.trim();
    
    setNameMixtFilter(filterValue);
    if (filterValue !== '') {

      clearTimeout(typingTimeout);
      const timeoutId = setTimeout(() => {
        fetchFilteredEmployees(filterValue);
        setIsDropdownOpen(true);
      }, 300); // Attendre 300 ms après la fin de la saisie pour déclencher la recherche
      setTypingTimeout(timeoutId);

      
    }else{
      setIsDropdownOpen(false);
    }

   
  };

  const fetchFilteredEmployees = async (filterValue) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${filterValue}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();
     
      setEmployeessiteFiltrer(data)     
      setIsDropdownOpen(true);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handleListItemClick = (item) => {
 
    setNameSiteFilter(item.name)
  
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    AllEmployeesFilter();
  }, [currentPage, pageSize]);
 

  const fetchEmployeesByType = async (type) => {
    
    try {
      const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/countAll?type=site`);
      const datacount = await countEmployees.json();
      console.log("datacount ",datacount )
      setCount(datacount);

      const endPoint = process.env.NODE_ENV === 'development' ? 'https://dev-gateway.gets-company.com' : '';
      const url = `${endPoint}/api/v1/emp/getEmByType?type=${type}&page=${currentPage}&size=${pageSize}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      } 
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error(`Error fetching ${type} employees:`, error);
      return [];
    }

  };
  
  const AllEmployeesFilter = async () => {
    try {
      const siteEmployees = await fetchEmployeesByType('site');
      setEmployeessite(siteEmployees);

    } 
    catch (error) {
      console.error('Error in AllEmployeesFilter:', error);
    }
  };
   

  const handleSiteSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${nameSiteFilter}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();

      setEmployeessiteFiltrer(data)
  
      setEmployeessite(data)
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };



  const items = [
    {
      label: 'Demobilization Trip Track Record',
      key: '1',
      children: (
        <>
          <AppsHeader key={'wrap'}>
          <StyledCustomerHeader>
          <StyledCustomerInputView>
            <Input.Search
                placeholder='Search Here'
                type="text"
                value={nameFilter}
                onChange={handleNameFilterChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSiteSearch (event);
                  }
                }}
              />
          
            {isDropdownOpen && (
              <List
                style={{
                  zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                  background: "white", position: "absolute", top: "6rem", width:"18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                }}
                dataSource={employeessiteFiltrer}
                renderItem={(item) => (
                  <List.Item onClick={() => handleListItemClick(item)}>
                    {item.name}
                  </List.Item>
                )}
              />
            )}
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
         
          <Pagination
            currentPage={currentPage}
            //totalPages={Math.ceil(countOffice / pageSize)}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChangeSite}
          />
         
          </StyledCustomerHeaderRight>
         </StyledCustomerHeader>
         </AppsHeader>
          <CustomerTableSite loading={loading} employeessite={employeessite} />
        
        </>
      ),
    },
   
  ];
  return (
    <>
  
      <AppPageMeta title='Demobilization Trip Track Record' />
      <AppsContainer
        title={messages['sidebar.hr.DemobTripTrack']}
        fullView
        type='bottom'
      >
        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <StyledBuyCellCard style={{ paddingLeft: '10px' }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
        </AppsContent>
      </AppsContainer>

      <AppInfoView />
    </>
  );
};


export default DemobTripTrack  ;
