import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Table, Row, Col, DatePicker, Popconfirm, notification, Space } from 'antd';
import AppAnimate from '../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable, StyledScrumBoardDatePicker } from '../../../../styles/index.styled';
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import moment from 'moment';

const OrderTable = ({ dataSalary, fetchEmployees }) => {
  const [editingRow, setEditingRow] = useState("");
  const [editingData, setEditingData] = useState(dataSalary);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const token = localStorage.getItem("token");
  const { Option } = Select;

  const startEdit = (record) => {
    setBackgroundColor('#ECF8F6');
    setEditingRow(record.id);

    const formattedData = {
      id: record.id,
      dateInput: record.dateInput,
      object: record.object,
      fromReq: record.fromReq,
      paymentType: record.paymentType || null,
      amount: record.total,
      payrollSign: null,
      checkedByHod: null,
      approvedByBod1: null,
      approvedByBod2: null,
      notif: 0,
      cashpayment: null,
      transfertPayment: null,
      paymentRefDate: null,
      requstor: null,
      payrolDate: null,
      otherDescription: record.otherDescription,
      prinRreq: null,
      companyType: null,
      nameCheque: null,
      fromBankCheque: null,
      ibanCheque: null,
      travelAgent: null,
      bankNameTravel: null,
      ibnTravel: null,
      idPaid: null,
      virementOrdre: null,
      listRequestPayments: dataSalary.flatMap((request) => {
        return request.listRequestPayments.map(payment => ({
          key: payment?.getsId,
          id: request?.id,
          dateInput: request?.dateInput,
          fromReq: request?.fromReq,
          projName: request?.projName,
          costCenter: request?.costCenter,
          paymentType: payment?.paymentType,
          object: request?.object,
          getsId: payment?.getsId,
          fullName: payment?.fullName,
          position: payment?.position,
          numero: payment?.numero,
          otherDescription: payment?.otherDescription,
          companyType: request?.companyType,
          amount: payment?.amount,
          prinRreq: request?.prinRreq,
        }));
      }),

    };

    setEditingData(formattedData);



  };

  const handleChange = (key, value) => {
    const mappedValue = value === 'Yes' ? 1 : 0;
    setEditingData({ ...editingData, [key]: mappedValue });
  };
  const handleChangeEditDateRequest= (key, value) => {
    setEditingData({ ...editingData,paymentRefDate: dateString });
  };


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Save Request Payment',
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
        fontSize: '30px',
        lineHeight: '150%',
        marginBottom: 0,
        marginTop: 0,
        maxWidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Save Request Employees',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontSize: '30px',
        lineHeight: '150%',
        marginBottom: 0,
        marginTop: 0,
        maxWidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const saveEdit2 = async (id) => {
    try {
      const updatedData = {

        id: id,
        dateInput: editingData?.dateInput,
        object: editingData?.object,
        fromReq: editingData?.fromReq,
        paymentType: editingData?.paymentType,
        total: editingData?.total,
        payrollSign: editingData?.payrollSign,
        checkedByHod: editingData?.checkedByHod,
        approvedByBod1: editingData?.approvedByBod1,
        approvedByBod2: editingData?.approvedByBod2,
        notif: editingData?.notif,
        cashpayment: editingData?.cashpayment,
        transfertPayment: editingData?.transfertPayment,
        paymentRefDate: editingData?.paymentRefDate,
        requstor: editingData?.requstor,
        payrolDate: editingData?.payrolDate ,
        otherDescription: editingData?.otherDescription,
        prinRreq: editingData?.prinRreq,
        companyType: editingData?.companyType ,
        nameCheque: editingData?.nameCheque ,
        fromBankCheque: editingData?.fromBankCheque ,
        ibanCheque: editingData?.ibanCheque ,
        travelAgent: editingData?.travelAgent,
        bankNameTravel: editingData?.bankNameTravel ,
        ibnTravel: editingData?.ibnTravel ,
        idPaid: editingData?.idPaid ,
    
        prinRreq: editingData?.prinRreq,
        listRequestPayments: editingData.listRequestPayments.map(payment => ({
          getsId: payment?.getsId,
          projName: payment?.projName,
          costCenter: payment?.costCenter,
          fullName: payment?.fullName,
          position: payment?.position,
          amount: payment?.amount,
        })),


      };
console.log("pdatedData",updatedData)
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?id=${id}&token=${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Network response was not ok: ${response.statusText}, ${errorResponse}`);
      }

      const responseData = await response.text();
      console.log("RequestPaymentUpdate", responseData);
      setBackgroundColor('transparent');
      openNotification();
    } catch (error) {
      console.error("Error updating payment request:", error);
      openNotificationError();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
    }
  };



  const cancelEdit = () => {
    setEditingRow(null);
    setEditingData({});
    setBackgroundColor('transparent');
  };

  const prinRreq = [{ type: 'Yes' }, { type: 'No' }];
  const year = new Date().getFullYear();

  const getPaymentTypeDisplay = (record) => {
    if (record.paymentType === "true") {
      return "CHEQUE";
    } else if (record.cashpayment === "true") {
      return "CASH";
    } else if (record.transfertPayment === "true") {
      return "Transfer Remittance";
    }
    return ""; // Default value if no condition is met
  };
  const dataSource = dataSalary.flatMap((request) => {
    return request.listRequestPayments.map(payment => {
      return {
        key: payment?.getsId,
        prinRreq: request?.prinRreq, 
        id:request?.id,
        fromReq:request?.fromReq,
        prinRreq:request?.prinRreq,
        dateInput:request?.dateInput,
        paymentRefDate:request?.paymentRefDate
      };
    });
  });
  

  console.log("ryyyyyy", dataSource)
  const columns = [
    {
      title: '',
      fixed: 'left',
      children: [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
          width: '10%',
          render: (text) => text ? <StyledAnChar>{text}</StyledAnChar> : null,
        },
        {
          title: 'REQUEST REF',
          dataIndex: 'dateInput',
          key: 'dateInput',
          fixed: 'left',
          width: '20%',
          render: (text) => text ? <StyledAnChar>DAF-FR{text}- {year}</StyledAnChar> : null,
        },
        {
          title: 'REQUESTED BY',
          dataIndex: 'fromReq',
          key: 'fromReq',
          fixed: 'left',
          width: '15%',
        },
        {
          title: 'Date',
          dataIndex: 'paymentRefDate',
          key: 'paymentRefDate',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (
              <DatePicker
                placeholder="Select Date"
                value={editingData.paymentRefDate ? moment(editingData.paymentRefDate) : null}
                onChange={(date, dateString) => handleChangeEditDateRequest('paymentRefDate', dateString)}
              />
            ) : (
              <p>{record.paymentRefDate ? moment(record.paymentRefDate).format('YYYY-MM-DD') : ''}</p>
            )
          ),
        },
        
        {
          title: 'PROJECT',
          dataIndex: 'projName',
          key: 'projName',
          width: '15%',
        },
        {
          title: 'COST CENTER',
          dataIndex: 'costCenter',
          key: 'costCenter',
          width: '15%',
        },
        {
          title: 'PAYMENT TYPE',
          dataIndex: 'paymentType',
          key: 'paymentType',
          width: '15%',
          render: (text, record) => getPaymentTypeDisplay(record),
        },
        {
          title: 'REQUEST SUBJECT',
          dataIndex: 'object',
          key: 'object',
          width: '15%',
        },
        {
          title: 'GETS ID',
          dataIndex: 'getsId',
          key: 'getsId',
          width: '20%',
          render: (text) => text ? <StyledAnChar>{text}</StyledAnChar> : null,
        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          key: 'fullName',
          width: '30%',
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          width: '20%',
        },
        {
          title: 'PAYMENT MONTH OF',
          dataIndex: 'numero',
          key: 'numero',
          width: '20%',
        },
        {
          title: 'OTHER DESCRIPTION',
          dataIndex: 'otherDescription',
          key: 'otherDescription',
          width: '20%',
        },
        {
          title: 'GETS COMPANY/TRADE',
          dataIndex: 'companyType',
          key: 'companyType',
          width: '20%',
        },
        {
          title: 'AMOUNT',
          dataIndex: 'amount',
          key: 'amount',
          width: '20%',
        },
        {
          title: 'PRINT REQUEST/TRANSFER',
          dataIndex: 'prinRreq',
          key: 'prinRreq',
          width: '15%',
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
                placeholder="PRINT REQUEST/TRANSFER"
                value={editingData.prinRreq ? 'Yes' : 'No'}
                onChange={(value) => handleChange('prinRreq', value === 'Yes' ? true : false)}
              >
                {prinRreq.map((p) => (
                  <Option key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>
            ) : (
              <p>{record.prinRreq ? 'Yes' : 'No'}</p>
            )
          ),
        },
        
        {
          title: 'Action',
          key: 'action',
          width: '20%',
          render: (text, record) => (
            editingRow === record.id ? (
              <>
                <Popconfirm title="Are you sure you want to save this row?" onConfirm={() => saveEdit2(record.id)}>
                  <CiSaveUp1 className="editIcon" />
                </Popconfirm>
                <MdCancel onClick={cancelEdit} className="editIcon" />
              </>
            ) : (
              <AiFillEdit onClick={() => startEdit(record)} className="editIcon" />
            )
          ),
        },
      ],
    },
  ];

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Row>
        <Col span={24}>

          <StyledOrderTable
            className="request-table"
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </Col>
      </Row>
    </AppAnimate>
  );
};



export default OrderTable;
