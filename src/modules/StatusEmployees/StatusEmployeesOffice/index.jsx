import React, { useState, useEffect } from 'react';
import { Input, List, Select, Button, Table, Space } from 'antd';
import OrderTable from './TabsForms';
import AppPageMeta from "../../../@crema/components/AppPageMeta";
import AppCard from '../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
const EmployeesStatusOffice = () => {
  const { messages } = useIntl();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [positionCount, setPositionCount] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [departmentCount, setDepartmentCount] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);
  const token = localStorage.getItem("token");
  const fetchEmployees = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);
      const data = await response.json();

      const dataFiter = data.filter(p => p.type_Emp === "office");
      setEmployees(dataFiter);
      console.log("Filtered Employees:", dataFiter);

      const positions = dataFiter.map(p => p.position).filter(Boolean);
      const uniquePositions = [...new Set(positions)];
      const positionCount = uniquePositions.map(position => {
        const count = positions.filter(p => p === position).length;
        return { position, count };
      });

      setPositionCount(positionCount);
      ///Departement

      const departments = dataFiter.map(p => p.departement).filter(Boolean);
      const uniqueDepartments = [...new Set(departments)];
      const departmentCount = uniqueDepartments.map(department => {
        const count = departments.filter(d => d === department).length;
        return { department, count };
      });

      setDepartmentCount(departmentCount);
      console.log("Department Counts:", departmentCount);
      //End Department
      // Total Employees
      const totalEmployees = dataFiter.length;
      console.log("Total Employees:", totalEmployees);
      setTotal(totalEmployees)

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const handleFilter = () => {
    if (selectedPosition) {
      const filtered = employees.filter(emp => emp.position === selectedPosition);
      console.log("tttgggjii", filtered)
      setFilteredEmployees(filtered);

    }
  };
  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',

    },
    {
      title: 'Name',
      dataIndex: 'name',

    },

    {
      title: 'Departement',
      dataIndex: 'departement',
    },
  ];

  return (
    <div>
      <AppPageMeta title='office employee status' />
      <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "20px", marginBottom: "2rem" }}>
        {/* Position filter dropdown */}
        <Select
          style={{ width: 200, marginBottom: '20px' }}
          placeholder="Select Position"
          onChange={(value) => setSelectedPosition(value)} // Set selected position
        >
          {positionCount.map(pos => (
            <Select.Option key={pos.position} value={pos.position}>
              {pos.position} ({pos.count})
            </Select.Option>
          ))}
        </Select>

        <Button type="primary" style={{ marginLeft: "1rem" }} onClick={handleFilter}>Filter</Button>

        {/* Display employees based on the selected position */}
        {filteredEmployees.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h4>Employees for Position: {selectedPosition}</h4>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Table
                columns={columns}
                dataSource={filteredEmployees}
                bordered
                pagination={{ pageSize: 50 }}
                scroll={{ y: 240 }}
              />
            </Space>
            {/* <List
              bordered
              dataSource={filteredEmployees}
              renderItem={item => (
                <List.Item>
                  <div>Name: {item.name}</div>
                  <div>Getsid: {item.getsid}</div>
                </List.Item>
              )}
            /> */}
          </div>
        )}
      </div>
      <AppCard
        className='no-card-space-ltr-rtl'
        title={messages['sidebar.hr.OfficeWorkingStatus']}
      >
        <OrderTable
          className={clsx("item-hover")}
          dataemployees={filteredEmployees}
          positionCount={positionCount}
          departmentCount={departmentCount}
          total={total}


        />
      </AppCard>
    </div>
  );
};

export default EmployeesStatusOffice;
