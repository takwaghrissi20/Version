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
import FinancialData from './FinancialData';
import Salarypayment from './salarypayment';
import Pagination from '../../../../@crema/components/AppsPagination';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import CashDeduction from './Cash Deduction';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
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
  console.log("deductionMonth1111", deductionMonth)
  useEffect(() => {
    fetchListEmployee();
    fetchCountEmployees();
    fetchAllListEmployee();
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/listBypage?page=${currentPage}&size=${pageSize}`);

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const fetchAllListEmployee = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list`);

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setAllemployee(data);

      // Extract unique project names and cost centers
      const projectInfoSet = new Set();
      const costCenterSet = new Set();
      data.forEach(employee => {
        if (employee.projects && employee.projects.length > 0) {
          employee.projects.forEach(project => {
            const info = {
              projName: project.projName ? project.projName.trim() : '',
              cosCenter: project.cosCenter ? project.cosCenter.trim() : ''
            };
            projectInfoSet.add(info);
            if (project.cosCenter && project.cosCenter.trim() !== '') {
              costCenterSet.add(project.cosCenter.trim());
            }
          });
        }
      });
      setProjName(Array.from(projectInfoSet));
      setCostCenters(Array.from(costCenterSet));

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const Type = [
    { type: "office" },
    { type: "site" },
  ];

  const handletype = (value) => {
    setSelectType(value);
  };

  const handleCostCenterChange = (selectedCostCenter) => {
    const project = projName.find(proj => proj.cosCenter === selectedCostCenter);
    setSelectedProject(project ? project.projName : '');
  };
  const handleFilterApply = () => {
   
    let filteredEmployees = allemployee;

    if (selectType) {
      filteredEmployees = filteredEmployees.filter(employee => employee.type_Emp === selectType);
    }

    if (selectedProject) {
      filteredEmployees = filteredEmployees.filter(employee => {
        return employee.projects.some(project => project.projName === selectedProject);
      });
    }

    if (deductionMonth) {
      filteredEmployees = filteredEmployees.filter(employee => {
        return dayjs(employee.month).isSame(deductionMonth, 'month');
      });
    }

    setAllemployee(filteredEmployees);
    console.log("tthhjjkkki",filteredEmployees)
  };


  const items = [
    {
      label: 'Financial Data',
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
                <FinancialData employee={employee} />
              </div>
              <div style={{ marginTop: "auto", marginBottom: "10px", display: "flex", justifyContent: "flex-end" }}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(count / pageSize)}
                  handlePageChange={onPageChange}
                />
              </div>
            </div>
          </StyledOrderHeaderRight>
        </div>
    },
    {
      label: 'Cash Deduction ',
      key: '2',
      children:
        <CashDeduction />
    },
    {
      label: 'Salary Payment ',
      key: '3',
      children:
        <div style={{ margin: "1rem" }}>
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span className='TitleInput'>Cost Center :</span>
              <Select
                style={{ width: "100%",marginTop:"0.5rem"}}
                placeholder="Cost Center"
                allowClear
                onChange={handleCostCenterChange}
              >
                {costCenters?.map(costCenter => (
                  <Select.Option key={costCenter} value={costCenter}>
                    {costCenter}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={10}>
              <span>Project Cost Center</span>
              <Input
               style={{marginTop:"0.5rem"}}
              
              value={selectedProject} disabled />
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }} gutter={16} justify="center">
            <Col span={10}>
              <span>Month of</span>
              <DatePicker
                style={{ width: "100%", height: "30px" }}
                picker="month"
                placeholder="For Month"
                onChange={(value) => setDeductionMonth(value)}
                value={deductionMonth}
                format="YYYY-MM"
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span>Site / Office</span>
              <Select
                  style={{ width: "100%",marginTop:"0.5rem"}}
                placeholder='Type'
                onChange={handletype}
              >
                {Type.map((p, index) => (
                  <Select.Option key={index} value={p.type}>
                    {p.type}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={10}>
              <span>Total</span>
              <Input 
              
              style={{ marginTop:"0.5rem"}}
              placeholder='Total' readOnly />
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={handleFilterApply}>Apply Filter</Button>
          </div>
          <Salarypayment allemployee={allemployee} />
        </div>
    },
    {
      label: 'Salaries Increase Request',
      key: '4',
      children: <p>Salaries Increase Request</p>,
    },
  ];

  return (
    <div>
      <h2 className="Title">Staries Tracker</h2>
      <div style={{ marginBottom: "20px" }}>
        <StyledBuyCellCard style={{ paddingLeft: "10px" }} title="Staries Tracker">
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
