import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { Button, Checkbox, Modal, Table, Select, Input,notification } from 'antd';
import { useNavigate } from 'react-router-dom';
const OrderTableOffice = ({ allemployee, loading, deductionMonth, costCenter,
  selectedProject}) => {
  const dateObject = new Date(deductionMonth);
  const month = dateObject.getMonth() + 1;
  const monthName = dateObject.toLocaleString('en-US', { month: 'long' });
  const formattedMonth = month < 10 ? '0' + month : month.toString();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterProject, setFilterProject] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleRequestPayment = () => {
      navigate(`/Payroll/office/PAYMENT_ORDER_REQUESTS`, {
        state: {
         filteredEmployees: filteredEmployees,
         costCenter:costCenter,
         selectedProject: selectedProject
         
        }

      });
     
  
  
  //onEditInterviewStaff(true);
  
  
  };
  //Calculate
  const openRefuseNotification = () => {
    notification.open({
      message: 'Refuse',
      description: 'Calculate salary Not success',
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
  const Calculate = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetOffice/calculate?id=${code}&month=${monthName}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        openRefuseNotification('bottomRight')
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseData", responseData);
      openCalculateNotification('bottomRight')
      //openRefuseNotification('bottomRight')

    } catch (error) {
      console.error("Erreur lors de la calculate:", error);
    }
  };



  //Calculate
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
    {
      title: 'Calculate Salary',
      dataIndex: 'btnsalary',
      key: 'btnsalary',
      render: (text, record) => (
        record.netOfice === 0 ? (
          <>
          <Button onClick={() => Calculate(record.getsId)}>
            Calculate Salary
          </Button>
         
          </>
        ) : (
          <>
          <span>{record.netOfice}</span>
       
          </>
        )
      ),
    },
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
    // Add other columns you need to display in the modal
  ];

  return (
    <>
      <Button
      style={{margin:"1rem"}}
        type="primary"
        onClick={handleRequestPayment}
        disabled={selectedRows.length === 0}
      >
        Request For Payment
      </Button>
      {/* <Button
        type="primary"
        onClick={showModal}
        disabled={selectedRows.length === 0}
      >
        Order Request
      </Button> */}
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
              employee.projects.forEach(project => {
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

OrderTableOffice.defaultProps = {
  allemployee: [],
};

OrderTableOffice.propTypes = {
  allemployee: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTableOffice;
