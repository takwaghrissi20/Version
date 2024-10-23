import React, { useState, useEffect ,useRef} from 'react';
import { Input, List, Col } from 'antd';
import OrderTable from './DahbordsTable';
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

const AllTraining = () => {
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [all, setAll] = useState([]);
  const user = localStorage.getItem("role");
  const searchContainerRef = useRef(null);
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
  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageSize, nameFilter]);
  const token = localStorage.getItem("token");
  const fetchEmployees = async () => {
    try {
     
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/all?page=${currentPage}&size=${pageSize}&sortBy=desiredDate`);

      if (!response.ok) {
        throw new Error('Failed to fetch training List By Page');
      }

      const data = await response.json();
      console.log("ggghhhhdddd",data)
      setAll(data)
     
    } catch (error) {
      console.error('Error fetching training By Pageess:', error);
    }
  };
 
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/allByid?id=${nameFilter}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();

      setEmployeesFiltrer(data)
      setEmployees(data);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.id); 
    handleSearch({ target: { value: item.id } }); 
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);

    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/allByid?id=${filterValue}`);
        if (!response.ok) {
          throw new Error('Failed to filter employees');
        }
        const data = await response.json();
        const uniqueTraining = Array.from(new Set(data.map(item => item.id)))
        .map(id => data.find(item => item.id === id));
        setEmployeesFiltrer(uniqueTraining);
        setEmployees(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering employees:', error);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };

  return (
    <div>
      <AppPageMeta title='All Training' />
      <div style={{ backgroundColor: "white", borderRadius: "20px"}}>
        <AppsHeader>
          <StyledOrderHeader>
            <div ref={searchContainerRef} style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
              <Input.Search
                placeholder='Search Here By iD Gets'
                type="number"
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
                      {item.id}
                    </List.Item>
                  )}
                />
              )}
            </div>


          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.AllTraining']}
        >

          <OrderTable className={clsx("item-hover")}
          user={user}
           all={all} />
        </AppCard>
        
          <StyledOrderHeaderRight >
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(count / pageSize)}
              handlePageChange={handlePageChange}
            />



          </StyledOrderHeaderRight>

          <div style={{height:"10px"}}></div>

      </div>
     
    </div>
  );
};

export default AllTraining;
