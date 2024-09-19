import React, { useState, useEffect } from 'react';
import { Input, Col, Select } from 'antd';
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
import AppsContainer from "../../@crema/components/AppsContainer";
import StaticSalary from './StaticSalary';
import AppRowContainer from '../../@crema/components/AppRowContainer';

const { Option } = Select;

const ListSalary = () => {
  const { messages } = useIntl();
  const [salary, setSalary] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [positionFilter, setPositionFilter] = useState('');
  const [count, setCount] = useState(0);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || '');
  const [projetUserName, setProjetUserName] = useState([]);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("role");
  const [salaryInc, setSalaryInc] = useState(0);
  const [changepos, setChangepos] = useState(0);
  const [both, setBoth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2024);

  useEffect(() => {
    fetchSalary();
    fetchProjectEmail();
  }, [currentPage, pageSize, positionFilter, selectedYear]);

  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${encodeURIComponent(userEmail)}&token=${token}`;
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setProjetUserName(data.map(project => project.projName));
      } else {
        console.error("Error fetching project email:", response.status);
      }
    } catch (error) {
      console.error("Error fetching project email:", error);
    }
  };

  const fetchSalary = async () => {
    try {
      const countResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/position/list?token=${token}`);
      const datacount = await countResponse.json();
      const filteredData = datacount.filter(p => new Date(p.inputDate).getFullYear() === selectedYear);
      const FilterSalary = filteredData.filter(p => p.checkSalaryIncrease === true);
      const FilterPos = filteredData.filter(p => p.chekPositionChange === true);
      const FilterBoth = filteredData.filter(p => p.checkBoth === true);

      setSalaryInc(FilterSalary.length);
      setChangepos(FilterPos.length);
      setBoth(FilterBoth.length);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/position/listBypage?page=${currentPage}&size=${pageSize}&sortBy=inputDate&token=${token}`);
      if (!response.ok) throw new Error('Failed to fetch Salary Data');
      const data = await response.json();

      const filteredDataPosition = positionFilter
        ? data.filter(item => item?.newPosition?.toLowerCase().includes(positionFilter.toLowerCase()))
        : data;

      setCount(datacount.length); // Update count for pagination
      setSalary(filteredDataPosition);
    } catch (error) {
      console.error('Error fetching salary data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setPositionFilter(e.target.value);
  };

  const listSalary = [
    { title: 'Salary Increase', number: salaryInc, subtitle: "Salary Increase", icon: <img src='/assets/images/salaryincrease.png' style={{ width: '15%' }} alt="Salary Increase" /> },
    { title: 'Position change', number: changepos, subtitle: "Position change", icon: <img src='/assets/images/positionChange.png' style={{ width: '15%' }} alt="Position Change" /> },
    { title: 'Both', number: both, subtitle: "Both", icon: <img src='/assets/images/both.png' style={{ width: '15%' }} alt="Both" /> },
  ];

  return (
    <div>
      <AppPageMeta title='SALARY INCREASE _POSITION CHANGE' />

      <Select
        defaultValue={2024}
        style={{
          width: 300,
          marginBottom: '1rem',
          height: '3rem',
          borderRadius: '20px',
          boxShadow: '0 7px 15px rgba(0, 0, 0, 0.1)',
          borderColor: '#5782d9',
        }}
        onChange={(value) => setSelectedYear(value)}
      >
        {[...Array(25).keys()].map(year => {
          const yearValue = 2000 + year;
          return <Option key={yearValue} value={yearValue}>{yearValue}</Option>;
        })}
      </Select>

      <AppRowContainer ease={'easeInSine'}>
        {listSalary.map((data, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <StaticSalary data={data} />
          </Col>
        ))}
      </AppRowContainer>

      <div style={{ backgroundColor: "white", borderRadius: "20px", marginBottom: "3rem" }}>
        <AppsHeader>
          <StyledOrderHeader>
            <Input.Search
              placeholder="Filter By New Position"
              value={positionFilter}
              onChange={handleFilterChange}
              style={{ width: "350px" }}
            />
          </StyledOrderHeader>
        </AppsHeader>

        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.SALARYINCREASEPOSITIONCHANGE']}
        >
          <OrderTable
            className={clsx("item-hover")}
            salary={salary}
            user={user}
          />
        </AppCard>

        <StyledOrderHeaderRight>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChange}
          />
          <div style={{ marginBottom: "3rem" }}></div>
        </StyledOrderHeaderRight>
      </div>
    </div>
  );
};

export default ListSalary;
