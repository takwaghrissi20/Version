import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { Button, Checkbox, Modal, Table, Select, Input, notification, Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";


const OrderTable = ({ allemployee, loading, deductionMonth,  subject,

 }) => {

  const dateObject = new Date(deductionMonth);
  const monthName = dateObject.toLocaleString('en-US', { month: 'long' }).toUpperCase();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [filterProject, setFilterProject] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [salaries, setSalaries] = useState({});
  const [listsalaries, setListSalaries] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false); 
  const [loadingAll, setLoadingAll] = useState(false);  
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const openRefuseNotification = () => {
    notification.open({
      message: 'Refuse',
      description: 'Calculate salary not successful',
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
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
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
      style: { /* styles */ },
      placement: 'topRight',
    });
  };

  const CalculateList = async () => {
    setIsCalculating(true);
    setLoadingAll(true); 
    try {
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

      const responseData = await response.json();
      responseData?.forEach((salaryData, index) => {
        setListSalaries(prevSalaries => ({ ...prevSalaries, [selectedIds[index]]: salaryData }));
      });
      openCalculateNotification();
    } catch (error) {
      console.error("Error calculating salary:", error);
    } finally {
      setIsCalculating(false); 
      setLoadingAll(false); 
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
    { title: 'Gets Id', dataIndex: 'getsId', key: 'getsId' },
    { title: 'Full Name', dataIndex: 'name', key: 'name' },
  ];

  return (
    <>
       {loadingAll && (
        <div className='FullPageLoader'>
          <Spin size="large" tip="Calculating Salaries..." />
        </div>
      )}
      <Row gutter={24} style={{ margin: "1rem" }}>
        {(subject === "SALARY PAYMENT Site" || subject === "SALARY PAYMENT OFFICE") && selectedRows.length > 0 ? (
          <>
            <p>Selected: <span style={{ fontWeight: "bold", color: "#212E53" }}>{selectedRows.length}</span></p>
            <Button
              style={{ height: "1.5rem", fontSize: '0.75rem', marginLeft: "0.5rem", borderColor: "#5784BA", color: "#384454" }}
              onClick={CalculateList}
              disabled={isCalculating} 
            >
              <FcMoneyTransfer style={{ marginRight: '0.5rem' }} />
              {isCalculating ? <Spin size="small" /> : "Calculate All Salary"} 
            </Button>
          </>
        ) : null}
      </Row>

      <StyledOrderTable
        hoverColor
        data={allemployee}
        loading={loading || isCalculating} 
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
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
