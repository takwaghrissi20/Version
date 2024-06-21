import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import moment from 'moment';

import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppCard from '../../../@crema/components/AppCard';
import OrderTable from './Table';
import Pagination from '../../../@crema/components/AppsPagination';
import { StyledOrderHeaderRight } from '../../../styles/index.styled';

const TimeSheetOffice = () => {
  const [employeesOffice, setEmployeesOffice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchEmployeesByType();
  }, [currentPage, pageSize]);

  const fetchEmployeesByType = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getEmByType?type=office&page=${currentPage - 1}&size=${pageSize}`);
      const data = await response.json();
      setEmployeesOffice(data);
      setTotalRecords(data.length);  // Adjust as per the actual response
    } catch (error) {
      console.error('Error fetching office employees:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='Manpower Allocation Per Project' />

      <AppCard
        className='no-card-space-ltr-rtl'
        title='Office Time Sheet'
      >
        <OrderTable orderData={employeesOffice} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(150 / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>
    </div>
  );
};

export default TimeSheetOffice;
