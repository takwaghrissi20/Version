
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { Button, Checkbox, Modal, Table, Select, Input, notification, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";

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
 

  const CalculateList = async () => {
    try {

      const selectedIds = selectedRows.map(row => row.getsId);

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetOffice/calculateList?month=${monthName}`, {
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
  console.log("salary",listsalaries)

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
      
        filteredEmployees: filteredEmployees,
        costCenter: costCenter,
        selectedProject: selectedProject,
        subject: subject,
        selectedTypePament: selectedTypePament,
        typecompany: typecompany,
        chequeName: chequeName,
        bancAccount: bancAccount,
        ibanNumber: ibanNumber,
        transfer: transfer,
        transferRef: transferRef,
        listprojName: listprojName,
        monthName: monthName,
        lastNumberTransferNumberIncrement: lastNumberTransferNumberIncrement,
        lastNumberTransferNumber: lastNumberTransferNumber,
        listsalaries: listsalaries,
        selectedRows: selectedRows

      }
    });
  };
  console.log("lastNumberTransferNumberIncrement", lastNumberTransferNumberIncrement)
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
      <Row gutter={24} style={{ margin: "1rem" }}>

        {(subject === "SALARY PAYMENT Office") && selectedRows && selectedRows.length > 0 ? (
          <>
            <p>Selected: <span style={{ fontWeight: "bold", color: "#212E53" }}>{selectedRows.length}</span></p>
            <Button
              style={{
                height: "1.5rem",
                fontSize: '0.75rem',
                marginLeft: "0.5rem",
                borderColor: "#5784BA",
                color: "#384454"
              }}
              onClick={() => CalculateList()}
            >
              <FcMoneyTransfer style={{ marginRight: '0.5rem' }} />
              Calculate All Salary
            </Button>
            
          </>

        ) : null}

      </Row>

      <StyledOrderTable
        hoverColor
        data={allemployee}
        loading={loading}
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
