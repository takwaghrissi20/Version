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

const AllTransferPermissionEmp = () => {
  const { messages } = useIntl();
  const [transferEmp, setTransferEmp] = useState([]);
  const [filteredMission, setFilteredMission] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = localStorage.getItem("role");
  const [projetUserName, setProjetUserName] = useState([]);
  const [filteredMissionUser, setFilteredMissionUser] = useState([]);
  const token = localStorage.getItem("token")
  useEffect(() => {
    fetchTransfer();
    fetchProjectEmail ()
  }, [currentPage, pageSize, nameFilter]);
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("projett Data", data)
        const ProjectName = data.map(project => project.projName);
        console.log("ProjectName User", ProjectName)
        setProjetUserName(ProjectName)
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };
  const fetchTransfer = async () => {
    try {
      const count = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/list?token=${token}`);
      const datacount = await count.json();
      setCount(datacount.length);
     
     const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/listBypage?page=${currentPage}&size=${pageSize}&sortBy=inputDate&token=${token}`);

      if (!response.ok) {
        throw new Error('Failed to fetch Transfer Emp');
      }

      const data = await response.json();

      setTransferEmp(data)

      

    } catch (error) {
      console.error('Error fetching Mission:', error);
    }
  };



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div >
      <AppPageMeta title='Employee Transfer Permission' />
      <div style={{ backgroundColor: "white", borderRadius: "20px",marginBottom:"3rem"}}>
        <AppsHeader>
          {/* <StyledOrderHeader>
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
          </StyledOrderHeader> */}
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.EmployeeTransferPermission']}
        >
          <OrderTable className={clsx("item-hover")} 
          transferEmp={transferEmp}
          user={user}
          />
       
          </AppCard>
         
        <StyledOrderHeaderRight>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChange}
          />
           <div style={{marginBottom:"3rem" }}></div>
        </StyledOrderHeaderRight>
    </div>
    </div>
  );
};

export default AllTransferPermissionEmp;
