import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Select, DatePicker, Button } from 'antd';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,
} from './index.styled';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import { useIntl } from "react-intl";
import dayjs from 'dayjs';
import Pagination from '../../../../@crema/components/AppsPagination';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import CashAdvance from './CashAdvance';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';

const Table = () => {
  const currentYear = new Date().getFullYear();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(30);
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [employee, setEmployees] = useState([]);
  const [allemployee, setAllemployee] = useState([]);
  const [count, setCount] = useState(0);
  const [projName, setProjName] = useState([]);
  const [costCenters, setCostCenters] = useState([]);
  const [deductionMonth, setDeductionMonth] = useState(dayjs());
  const [selectType, setSelectType] = useState("");
  const [selectedProject, setSelectedProject] = useState('');

  const [{ loading }, { setQueryParams }] = useGetDataApi(
    {},
    {},
    false,
  );

  useEffect(() => {
    fetchListEmployee();
   
  }, [currentPage, pageSize]);

  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onPageChange = (page) => {
    setPage(page);
  };

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const fetchCountEmployees = async () => {
    try {
      const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/countAll`);

      if (!countEmployees.ok) {
        throw new Error('Failed to fetch employees');
      }

      const datacount = await countEmployees.json();
      setCount(datacount);

    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchListEmployee = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/AdvSalary/list?page=${currentPage}&size=${pageSize}&sortBy=month`);

      if (!response.ok) {
        throw new Error('Failed to fetch AdvSalary');
      }

      const data = await response.json();
      console.log("AdvSalary", data)
      // Filtrer les données pour n'inclure que celles de l'année actuelle
      const filteredData = data.filter(item => {
        const date = new Date(item.month);
        return date.getFullYear() === currentYear;
      });

      setEmployees(data);

    } catch (error) {
      console.error('Erreur lors de la récupération des données AdvSalary:', error);
    }
  };


  const items = [
    {
      label: 'Cash Advance & Deduction From Salaries',
      key: '1',
      children:
        <div>
          <StyledOrderHeaderRight style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <AppsHeader>
                <StyledOrderHeader>
                  <StyledOrderHeaderInputView>
                    <Input
                      id='user-name'
                      placeholder='Search'
                      type='search'
                      onChange={onSearchOrder}
                    />
                  </StyledOrderHeaderInputView>
                </StyledOrderHeader>
              </AppsHeader>
              <div style={{ flex: 1 }}>
                <CashAdvance employee={employee} />
              </div>
              <div style={{ marginTop: "auto", marginBottom: "10px",marginTop:"10px" ,display: "flex", justifyContent: "flex-end" }}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(20 / pageSize)}
                  handlePageChange={onPageChange}
                />
              </div>
            </div>
          </StyledOrderHeaderRight>
        </div>
    },

  ];

  return (
    <div>
      <h2 className="Title">Cash Advance & Deduction From Salaries</h2>
      <div style={{ marginBottom: "20px" }}>
        <StyledBuyCellCard style={{ paddingLeft: "10px" }} title="Cash Advance & Deduction From Salaries">
          <StyledTabs defaultActiveKey="1">
            {items.map(item => (
              <StyledTabs.TabPane key={item.key} tab={item.label}>
                {item.children}
              </StyledTabs.TabPane>
            ))}
          </StyledTabs>
        </StyledBuyCellCard>
      </div>
    </div>
  );
};

export default Table;
