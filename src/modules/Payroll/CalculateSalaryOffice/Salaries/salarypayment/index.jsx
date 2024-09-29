
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { Button, Checkbox, Modal, Table, Select, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderTable = ({ allemployee, loading, deductionMonth, costCenter, selectedProject, subject,
  selectedTypePament, typecompany, chequeName, bancAccount, ibanNumber, transfer, transferRef,
  listprojName, lastNumberTransferNumberIncrement,
  lastNumberTransferNumber

}) => {
  const dateObject = new Date(deductionMonth);
  const month = dateObject.getMonth() + 1;
  const monthName = dateObject.toLocaleString('en-US', { month: 'long' }).toUpperCase();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterProject, setFilterProject] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [salaries, setSalaries] = useState({});
  const [listsalaries, setListSalaries] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const openRefuseNotification = () => {
    notification.open({
      message: 'Refuse',
      description: 'Calculate salary not successful',
      style: {
        backgroundColor: '#335F8A',
        border: '1px solid #335F8A',
        color: 'red !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
    });
  };

  const openCalculateNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Calculate salary with success',
      style: {
        backgroundColor: '#335F8A',
        border: '1px solid #335F8A',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openCalculateNotificationSalaryNull = () => {
    notification.open({
      message: 'Success',
      description: 'Employee With Salary 0 DT',
      style: {
        backgroundColor: '#de980d',
        border: '1px solid #de980d',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #de980d',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const Calculate = async (id) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/calculate?id=${id}&month=${monthName}`, {
        method: 'POST',
      });
      if (!response.ok) {
        openRefuseNotification();
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("salary Id", responseData)
      if (responseData === 0) {
        openCalculateNotificationSalaryNull('bottomRight')
      } else {
        setSalaries(prevSalaries => ({ ...prevSalaries, [id]: responseData }));
        openCalculateNotification('bottomRight')
      }
      
    } catch (error) {
      console.error("Error calculating salary:", error);
    }
  };

  const CalculateList = async (record) => {
    try {
      console.log('Calculating salary for:', record);
      const selectedIds = selectedRows.map(row => row.getsId);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetSite/calculateList?month=${monthName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
 
        },

        body: JSON.stringify(selectedIds),
      });
  
      if (!response.ok) {
        openRefuseNotification();
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
      const responseData = await response.json();
  
   
     responseData?.forEach((salaryData, index) => {
      setListSalaries(prevSalaries => ({ ...prevSalaries, [selectedIds[index]]: salaryData }));
      });

      openCalculateNotification('bottomRight');
    }
  
    } catch (error) {
      console.error("Error calculating salary:", error);
    }
  };
  
  
  
  
  useEffect(() => {
    if (selectAll) {
      setSelectedRows([...allemployee]);
    } else {
      setSelectedRows([]);
    }
  }, [selectAll, allemployee]);

  useEffect(() => {
    setFilteredEmployees(selectedRows);
  }, [selectedRows]);

  const handleCheckboxChange = (e, record) => {
    const { checked } = e.target;
    const newSelectedRows = checked
      ? [...selectedRows, record]
      : selectedRows.filter(row => row.id !== record.id);
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFilterTypeChange = (value) => {
    setFilterType(value);
  };

  const handleFilterProjectChange = (value) => {
    setFilterProject(value);
  };
  console.log("setSelectedRows",selectedRows)
  const applyFilter = () => {
    let newFilteredEmployees = selectedRows;

    if (filterType) {
      newFilteredEmployees = newFilteredEmployees.filter(employee => employee.type_Emp === filterType);
    }

    if (filterProject) {
      newFilteredEmployees = newFilteredEmployees.filter(employee =>
        employee.projects.some(project => project.projName === filterProject)
      );
    }

    setFilteredEmployees(newFilteredEmployees);
  };

  const columns = [
    {
      title: <Checkbox checked={selectAll} onChange={handleSelectAllChange} />,
      dataIndex: 'selectAll',
      key: 'selectAll',
      render: (text, record) => (
        <Checkbox
          checked={selectedRows.includes(record)}
          onChange={(e) => handleCheckboxChange(e, record)}
        />
      ),
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },

    ...(subject === "SALARY PAYMENT Site" || subject === "SALARY PAYMENT OFFICE"
      ? selectedRows.length > 0
        ? [{
            title: 'Salary',
            key: 'salary',
            render: (text, record) => (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button 
                  style={{ whiteSpace: 'nowrap' }} 
                  onClick={() => CalculateList(record)}
                >
                  Calculate All Salary
                </Button>
              </div>
            ),
          }]
        : []
      : []),
     
    

    // ...(subject === "SALARY PAYMENT Site" || subject === "SALARY PAYMENT OFFICE"
    //   ? [{
    //     title: 'Salary',
    //     dataIndex: 'salary',
    //     key: 'salary',
    //     render: (text, record) => (
    //       salaries[record.getsId] ? (
    //         <span>{salaries[record.getsId]} DT </span>
    //       ) : (
    //         <Button onClick={() => Calculate(record.getsId)}>
    //           Calculate Salary
    //         </Button>
    //       )
    //     ),
    //   }]
    //   : []),
  ];


  const modalColumns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  const handleRequestPayment = () => {
    navigate(`/Payroll/PAYMENT_ORDER_REQUESTS`, {
      state: {
        calculateSalary: salaries,
        filteredEmployees: filteredEmployees,
        costCenter: costCenter,
        selectedProject: selectedProject,
        subject:subject,
        selectedTypePament:selectedTypePament,
        typecompany:typecompany,
        chequeName:chequeName,
        bancAccount:bancAccount,
        ibanNumber:ibanNumber,
        transfer: transfer,
        transferRef: transferRef,
        listprojName: listprojName,
        monthName:monthName, 
        lastNumberTransferNumberIncrement: lastNumberTransferNumberIncrement,
        lastNumberTransferNumber:lastNumberTransferNumber,
        listsalaries:listsalaries,
        selectedRows:selectedRows

      }
    });
  };
console.log("lastNumberTransferNumberIncrement",lastNumberTransferNumberIncrement)
  return (
    <>
      <Button
        style={{ margin: "1rem" }}
        type="primary"
        onClick={handleRequestPayment}
        disabled={
          selectedRows.length === 0 || 
          !subject || 
          !selectedTypePament || 
          !typecompany
        }
      >
        Request For Payment
      </Button>
      <StyledOrderTable
        hoverColor
        data={allemployee}
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
      <Modal
        title="Order Request"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <div style={{ marginBottom: 16 }}>
          <Select
            placeholder="Select Type"
            style={{ width: 200, marginRight: 16 }}
            onChange={handleFilterTypeChange}
            allowClear
          >
            <Select.Option value="office">Office</Select.Option>
            <Select.Option value="site">Site</Select.Option>
          </Select>
          <Select
            placeholder="Select Project"
            style={{ width: 200, marginRight: 16 }}
            onChange={handleFilterProjectChange}
            allowClear
          >
            {allemployee?.reduce((uniqueProjects, employee) => {
              employee?.projects?.forEach(project => {
                if (!uniqueProjects.includes(project.projName)) {
                  uniqueProjects.push(project.projName);
                }
              });
              return uniqueProjects;
            }, []).map(projectName => (
              <Select.Option key={projectName} value={projectName}>
                {projectName}
              </Select.Option>
            ))}
          </Select>
          <Button type="primary" onClick={applyFilter}>Apply Filter</Button>
        </div>
        <Table
          dataSource={filteredEmployees}
          columns={modalColumns}
          rowKey="id"
        />
      </Modal>
    </>
  );
};

OrderTable.defaultProps = {
  allemployee: [],
};

OrderTable.propTypes = {
  allemployee: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
