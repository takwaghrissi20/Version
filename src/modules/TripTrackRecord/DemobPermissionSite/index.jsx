import React, { useState, useEffect } from 'react';
import { Input, List, Col } from 'antd';
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

const DemobPermissionSite = () => {
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [mob, setMob] = useState([]);
  const [employeesFiltrer, setEmployeesFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchMobilization();
  }, [currentPage, pageSize, nameFilter]);

  const fetchMobilization = async () => {
    try {
      // const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/countAll`);
      // const datacount = await countEmployees.json();
      // setCount(datacount);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/list?page=${currentPage}&size=${pageSize}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
    const filteredData = data.filter(item => item.type === "DeMobilization");
      console.log("ggghhh",filteredData)
      setMob(filteredData)
    } catch (error) {
      console.error('Error fetching Mob employees:', error);
    }
  };



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div>
      <AppPageMeta title='Demob Permission Site' />
      <div style={{backgroundColor:"white",borderRadius:"20px"}}>
        <AppsHeader>
          <StyledOrderHeader>
        <div style={{ marginRight: 20, boxShadow: "none !important",width:"20%"}}>
             
            </div>

            <StyledOrderHeaderRight>

              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(15 / pageSize)}
                handlePageChange={handlePageChange}
              />



            </StyledOrderHeaderRight>
          </StyledOrderHeader>
        </AppsHeader>
            <AppCard
              className='no-card-space-ltr-rtl'
              title={messages['sidebar.general.demonpermissionSite']}
            >

              <OrderTable className={clsx("item-hover")} mob={mob} />
            </AppCard>
    
       



      </div>
    </div>
  );
};

export default DemobPermissionSite;
