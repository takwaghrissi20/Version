import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Select, DatePicker, Button, Spin } from 'antd';
import { StyledOrderHeader, StyledOrderHeaderInputView, StyledOrderHeaderRight } from './index.styled';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import { useIntl } from "react-intl";
import dayjs from 'dayjs';
import Salarypayment from './salarypayment';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';

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
  const [costCenter, setCostCenter] = useState([]);
  const [deductionMonth, setDeductionMonth] = useState(dayjs());
  const [selectType, setSelectType] = useState("");
  const [selectedProject, setSelectedProject] = useState('');
  const [projectOptions, setProjectOptions] = useState([]);
  const [loading, setLoading] = useState(true);  // New loading state

  const [{ loading: apiLoading }, { setQueryParams }] = useGetDataApi({}, {}, false);

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
      setLoading(true);  // Set loading to true before fetch
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/listBypage?page=${currentPage}&size=${pageSize}`);
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
      setLoading(false);  // Set loading to false after fetch
    } catch (error) {
      console.error('Erreur lors de la récupération des données Employees:', error);
      setLoading(false);  // Set loading to false on error
    }
  };

  const fetchAllListEmployee = async () => {
    try {
      setLoading(true);  // Set loading to true before fetch
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list`);
    
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const json = await response.text();
      const data = JSON.parse(json);
  
      const dataFilter = data.filter(p => p.type_Emp === "office" || p.type_Emp === "office & site");
      console.log("dataFilter",dataFilter)

      setAllemployee(dataFilter);
      
      const projectInfoSet = new Set();
      const costCenterSet = new Set();
      data.forEach(employee => {
        if (employee.projects && employee.projects.length > 0) {
          employee.projects.forEach(project => {
            const info = {
              projName: project.projName ? project.projName.trim() : '',
              cosCenter: project.cosCenter ? project.cosCenter.trim() : ''
            };
            projectInfoSet.add(JSON.stringify(info));
            if (project.cosCenter && project.cosCenter.trim() !== '') {
              costCenterSet.add(project.cosCenter.trim());
            }
          });
        }
      });
      setProjName(Array.from(projectInfoSet).map(item => JSON.parse(item)));
      setCostCenters(Array.from(costCenterSet));
      setLoading(false);  
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setLoading(false);  
    }
  };



  const handleCostCenterChange = (selectedCostCenter) => {
    if (selectedCostCenter === "default") {
      setProjectOptions([]);
      setSelectedProject('');
      setAllemployee([]);
      window.location.reload();
    } else {
      const projects = projName.filter(proj => proj.cosCenter === selectedCostCenter);
      setProjectOptions(projects);
      setSelectedProject('');
      const uniqueCostCenters = [...new Set(projects.map(project => project.cosCenter))];
      setCostCenter(uniqueCostCenters[0])
      console.log("testttttttt unique",uniqueCostCenters[0]);
    }
  };

  const handleProjectChange = (value) => {
    setSelectedProject(value);
    if (value === 'default') {
      window.location.reload();
    }
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
    setAllemployee(filteredEmployees);
    console.log("Filtered Employees", filteredEmployees);
  };
  console.log("selectedProject",selectedProject)//Select le nom de projet
  console.log("projectOptions ",projectOptions)



  const items = [
    {
      label: 'Calculate Employee Office salaries',
      key: '1',
      children:
        <div style={{ margin: "1rem" }}>
          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span className='TitleInput'>Cost Center :</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder="Cost Center"
                allowClear
                onChange={handleCostCenterChange}
              >
                <Select.Option key="default" value="default">
                  Default
                </Select.Option>
                {costCenters?.map(costCenter => (
                  <Select.Option key={costCenter} value={costCenter}>
                    {costCenter}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={10}>
              <span>Project Name</span>
              <Select
                style={{ width: "100%", marginTop: "0.5rem" }}
                placeholder="Project Name"
                allowClear
                onChange={handleProjectChange}
                value={selectedProject}
              >
                <Select.Option key="default" value="default">
                  Default
                </Select.Option>
                {projectOptions.map(project => (
                  <Select.Option key={project.projName} value={project.projName}>
                    {project.projName}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>

          <Row style={{ marginBottom: "2rem" }} gutter={16}>
            <Col span={10}>
              <span>Month of</span>
              <DatePicker
                style={{ width: "100%", height: "30px", marginTop: "0.5rem" }}
                picker="month"
                placeholder="For Month"
                onChange={(value) => setDeductionMonth(value)}
                value={deductionMonth}
                format="MM"
              />
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={handleFilterApply}>Apply Filter</Button>
          </div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Spin size="large" />
            </div>
          ) : (
            <Salarypayment
            costCenter={costCenter}
            selectedProject={selectedProject}
            allemployee={allemployee} deductionMonth={deductionMonth} />
          )}
        </div>
    },
  ];

  return (
    <div>
      <h2 className="Title">Salary Employees Office</h2>
      <div style={{ marginBottom: "20px" }}>
        <StyledBuyCellCard style={{ paddingLeft: "10px" }} title="Salary Employees Office">
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
