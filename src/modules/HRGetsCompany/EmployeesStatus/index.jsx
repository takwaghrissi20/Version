import React, { useEffect, useState } from 'react';
import AppsContainer from '../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/components/AppsContainer/AppsContent';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Input, List } from 'antd';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import Pagination from '../../../@crema/components/AppsPagination';
import CustomerTableOffice from './CustomerTable';
import CustomerTableSite from './CustomerTableEmpSite';
import CustomerTableMixt from './CustomerTableEmpMixt';

import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import {
  StyledCustomerFooterPagination,
  StyledCustomerHeader,
  StyledCustomerHeaderPagination,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,

} from './index.styled';

const EmployeesStatus = () => {
  
  const user = localStorage.getItem("role");
  const { messages } = useIntl();
  const [employeesoffice, setEmployeesoffice] = useState([]);
  const [employeessite, setEmployeessite] = useState([]);
  const [employeesmixt, setEmployeesmixt] = useState([]); 
  const [employeesofficeFiltrer, setEmployeesofficeFiltrer] = useState([]);
  const [employeessiteFiltrer, setEmployeessiteFiltrer] = useState([]);
  const [employeesmixtFiltrer, setEmployeesmixtFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [nameSiteFilter, setNameSiteFilter] = useState('');
  const [nameMixtFilter, setNameMixtFilter] = useState('');
  const [countOffice, setCountOffice] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handlePageChangeOffice = (page) => {
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
      setEmployeesofficeFiltrer(data);
      setEmployeessiteFiltrer(data)
      setEmployeesmixtFiltrer(data)
      setIsDropdownOpen(true);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.name);
    setNameSiteFilter(item.name)
    setEmployeesofficeFiltrer([]);

   
    setIsDropdownOpen(false);
  };
  const handleListSitetemClick = (item) => {
  ;
    setNameSiteFilter(item.name)
;
    setEmployeessiteFiltrer([]);
 
   
    setIsDropdownOpen(false);
  };

  const handleListMixttemClick = (item) => {

      setNameMixtFilter(item.name)
  ;
      setEmployeesmixtFiltrer([]);
   
     
      setIsDropdownOpen(false);
    };
  useEffect(() => {
    AllEmployeesFilter();
  }, [currentPage, pageSize]);
 

  const fetchEmployeesByType = async (type) => {
    
    try {
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
      const officeEmployees = await fetchEmployeesByType('office');
      setEmployeesoffice(officeEmployees);
      setCountOffice(officeEmployees.length);
  
      const siteEmployees = await fetchEmployeesByType('site');
      setEmployeessite(siteEmployees);

  
      const mixtEmployees = await fetchEmployeesByType('office & site');
      setEmployeesmixt(mixtEmployees);
  
    } 
    catch (error) {
      console.error('Error in AllEmployeesFilter:', error);
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
      setEmployeesofficeFiltrer(data)
      setEmployeesoffice(data);
   
    } catch (error) {
      console.error('Error filtering employees:', error);
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
  const handleMixtSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/filterByName?name=${nameMixtFilter}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();

      setEmployeesmixtFiltrer(data)
  
      setEmployeesmixt(data)
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };


  const items = [
    {
      label: 'Employees Office',
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
                    handleSearch(event);
                  }
                }}
              />
          
            {isDropdownOpen && (
              <List
                style={{
                  zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                  background: "white", position: "absolute", top: "6rem", width:"18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                }}
                dataSource={employeesofficeFiltrer}
                renderItem={(item) => (
                  <List.Item onClick={() => handleListItemClick(item)}>
                    {item.name}
                  </List.Item>
                )}
              />
            )}
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
         
        
          </StyledCustomerHeaderRight>
         </StyledCustomerHeader>
         </AppsHeader>
          <CustomerTableOffice 
          loading={loading}
          user={user}

          employeesoffice={employeesoffice} />
          <div className='Pagination' >
            <Pagination
            currentPage={currentPage}
            //totalPages={Math.ceil(countOffice / pageSize)}
            totalPages={Math.ceil(42 / pageSize)}
            handlePageChange={handlePageChangeOffice}
          />
          </div>
        
        </>
      ),
    },
    {
      label: 'Employees Site',
      key: '2',
      children: 
      <>
      <AppsHeader key={'wrap'}>
      <StyledCustomerHeader>
      <StyledCustomerInputView>
        <Input.Search
            placeholder='Search Here by Name'
            type="text"
            value={nameSiteFilter}
            onChange={handleNameSiteFilterChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSiteSearch(event);
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
              <List.Item onClick={() => handleListSitetemClick(item)}>
                {item.name}
              </List.Item>
            )}
          />
        )}
        </StyledCustomerInputView>
        <StyledCustomerHeaderRight>
     
    
     
      </StyledCustomerHeaderRight>
     </StyledCustomerHeader>
     </AppsHeader>
      <CustomerTableSite 
      loading={loading} 
      user={user}
      employeessite={employeessite} />
      <div className='Pagination' >
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(289 / pageSize)}
        handlePageChange={handlePageChangeOffice}
      />
        </div>  
    </>,
    },
    {
      label: 'Employees Site && Office',
      key: '3',
      children:   <>
      <AppsHeader key={'wrap'}>
      <StyledCustomerHeader>
      <StyledCustomerInputView>
        <Input.Search
            placeholder='Search Here by Name'
            type="text"
            value={nameMixtFilter}
            onChange={handleNameMixtFilterChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleMixtSearch(event);
              }
            }}
          />
      
        {isDropdownOpen && (
          <List
            style={{
              zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
              background: "white", position: "absolute", top: "6rem", width:"18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
            }}
            dataSource={employeesmixtFiltrer}
            renderItem={(item) => (
              <List.Item onClick={() => handleListMixttemClick(item)}>
                {item.name}
              </List.Item>
            )}
          />
        )}
        </StyledCustomerInputView>
        <StyledCustomerHeaderRight>
     
    
     
      </StyledCustomerHeaderRight>
     </StyledCustomerHeader>
     </AppsHeader>
      <CustomerTableMixt loading={loading} 
      employeesmixt={employeesmixt}
      user={user}
       />
      <div className='Pagination' >
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(79 / pageSize)}
        handlePageChange={handlePageChangeOffice}
      />
        </div>
    
    </>,
    },
  ];

  return (
    <>
      <AppPageMeta title='Employees Status' />
      <AppsContainer
        title={messages['sidebar.hr.EmployeesOfficeSite']}
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

export default EmployeesStatus;
