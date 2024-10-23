import React, { useEffect, useState } from "react";
import { Card, Col, Table,Tooltip, Typography, Menu, Dropdown, Button, notification, Input, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../../../@crema/components/AppsContainer";
import Pagination from '../../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../../@crema/components/AppPageMeta";
import AppCard from '../../../../../@crema/components/AppCard';
import {

  StyledAnChar,
  StyledOrderHeader,
  StyledOrderHeaderRight,
  StyledOrderTable

} from '../../../../../styles/index.styled';

import { useIntl } from 'react-intl';
import AppsHeader from '../../../../../@crema/components/AppsContainer/AppsHeader';
 
const AllRequestPaymentRejectedTab = ({ user }) => {
  const { messages } = useIntl();
  const [AllRequetPending, setAllRequestPending] = useState([]);

  const token = localStorage.getItem("token")
  //const [reason , setreason]=useState("");
  const navigate = useNavigate();
  const getHRStatus = (notificationValue) => {
    if (notificationValue === 10) {
      return <p>Refuse  </p>;
    }
    return <p></p>; 
  };
  

  const getBODStatus = (record) => {
    if (record.notif === 30 && record.approvedByBod1 === "false") {
      return <p>Refuse by BOD1</p>;
    }
    if (record.notif === 30 && record.approvedByBod2 === "false") {
      return <p>Refuseby BOD2</p>;
    }
    return <p></p>; 
  };
  //To get classs
  const getBODStatusClass = (record) => {
    if (record.notif === 3 && record.approvedByBod1 === "true") {
      return 'approved-bod1-status';  // Example class for BOD1 approval
    }
    if (record.notif === 3 && record.approvedByBod2 === "true") {
      return 'approved-bod2-status';  // Example class for BOD2 approval
    }
    return 'pending-bod-status';  // Fallback class for pending approval
  };
  const getHRStatusClass = (notificationValue) => {
    if (notificationValue === 0) {
      return 'pending-hr-status';  
    }
    return 'unknown-hr-status';  
  };
  

  //TabHeight
  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.5;
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);


  const AllRequestPayment = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log("data Requets Payment", data)
      const filterData = data.filter(p => 
        p.notif === 10 || 
        (p.notif === 30 && p.approvedByBod1 === "false") || 
        (p.notif === 30 && p.approvedByBod2 === "false")
      );
      
      ///////////////////////
      const flattenedData = filterData.flatMap(item =>
        item.listRequestPayments.map(req => ({
          id: item.id,
          dateInput: item.dateInput,
          cosCenter: item.cosCenter,
          projName: item.projName,
          paymentType: item.paymentType,
          object: item.object,
          getsId: req.getsId,
          fullName: req.fullName,
          position:req.position,
          monthBy:item.monthBy,
          otherDescription:req.otherDescription,
          companyType:item.companyType,
          amount:req.amount,
          prinRreq:item.prinRreq,
          nameCheque:item.nameCheque,
          transferNumber:item.transferNumber,
          transferRef:item.transferRef,
          fromBankCheque:item.fromBankCheque,
          ibanCheque: item.ibanCheque,
          idPaid:item.idPaid,
          paymentRefDate:item.paymentRefDate,
          notif:item.notif
         







        }))
      );
      console.log("flattenedData", flattenedData)

      /////////////////End

      setAllRequestPending(flattenedData);

      //setreason(data.reason);
    } catch (error) {
      console.error('Error fetching Request Payment:', error);
    }
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Delete Vacation',
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
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Succes Delete Vacation',
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

  const handleViewVac = (record) => {
    navigate(`/Hr/Vacation&Leave/View/${record.idv}`, {
      state: {
        id: record.idv,
        getsid: record.getsId,
        notif: record.notif,
        name: record.name,
        type: record.type,
        reason: record.reason,
        numberdays: getLeaveData(record, 'nuberdays'),
        startDate: getLeaveData(record, 'startDate'),
        endDate: getLeaveData(record, 'endDate'),
      },
    });
  };
 
  
  useEffect(() => {
    AllRequestPayment();

  }, []);

  const items = (record) => [
    { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: () => handleViewVac(record) },

  ];

  const getLeaveData = (record, field) => {
    switch (record.type) {
      case 'Permission':
        if (field === 'startDate') return record.livePerm;
        if (field === 'endDate') return record.endPermission;
        if (field === 'nuberdays') return record.durationPermiss;
        break;
      case 'MaternityPaternity':
        if (field === 'startDate') return record.startMatern;
        if (field === 'endDate') return record.joinEndMatern;
        if (field === 'nuberdays') return record.nuberdays;
        break;
      case 'Justified Absent':
        if (field === 'startDate') return record.startDateJus;
        if (field === 'endDate') return record.endDateJus;
        if (field === 'nuberdays') return record.nuberdaysJus;
        break;
      case 'Vacation':
        if (field === 'startDate') return record.startDate;
        if (field === 'endDate') return record.endDate;
        if (field === 'nuberdays') return record.nuberdays;
        break;
      default:
        return record[field];
    }
  };
  const year = new Date().getFullYear();
  
  const hasCheque = AllRequetPending.some(item => item?.paymentType?.toUpperCase() === "CHEQUE");
  const columns = [
    {
      title: 'Information',
    
      children: [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      render: (text) => text ? <StyledAnChar>DAF-FR-{text}- {year}</StyledAnChar> : null,
    },
    {
      title: 'REQUESTED BY',
      dataIndex: 'requstor',
      key: 'requstor',
      fixed: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'DATE',
      dataIndex: 'dateInput',
      key: 'dateInput',
      fixed: 'left',
    },
    {
      title: 'COST CENTER',
      dataIndex: 'cosCenter',
      key: 'cosCenter',
      fixed: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),

    },
    {
      title: 'PROJECT',
      dataIndex: 'projName',
      key: 'projName',
      fixed: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),

    },
    {
      title: 'PAYMENT TYPE',
      dataIndex: 'paymentType',
      key: 'paymentType',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),

    },
    {
      title: 'REQUEST SUBJECT',
      dataIndex: 'object',
      key: 'object',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),

    },
    {
      title: 'Gets  ID',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'NAME',
      dataIndex: 'fullName',
      key: 'fullName',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'POSITION',
      dataIndex: 'position',
      key: 'position',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'PAYMENT MONTH OF',
      dataIndex: 'monthBy',
      key: 'monthBy',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
   
    {
      title: 'OTHER DESCRIPTION',
      dataIndex: 'otherDescription',
      key: 'otherDescription',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'GETS COMPANY/TRADE',
      dataIndex: 'companyType',
      key: 'companyType',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'PRINT REQUEST/TRANSFER',
      dataIndex: 'prinRreq',
      key: 'prinRreq',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement='topLeft' title={text}>
          {text}
        </Tooltip>
      ),
    },
    
    {
      title: 'CHEQUE RECEIVER NAME',
      dataIndex: 'nameCheque',
      key: 'nameCheque',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
      onCell: (record) => {  
        return {
          style: {
            backgroundColor: record?.paymentType === "CHEQUE" ? 'white' : '#212E53', 
          },
        };
      },
    },
    {
      title: 'TRANSFER NUMBER',
      dataIndex: 'transferNumber',
      key: 'transferNumber',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
      onCell: (record) => {  
        return {
          style: {
            backgroundColor: record?.paymentType?.includes("Transfer") ? 'white' : '#317AC1', 
          },
        };
      },
    },
    {
      title: 'TRANSFER REFERENCE',
      dataIndex: 'transferRef',
      key: 'transferRef',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
      onCell: (record) => {  
        return {
          style: {
            backgroundColor: record?.paymentType?.includes("Transfer") ? 'white' : '#317AC1', 
          },
        };
      },
    },
  ],
},
    {
      title: 'IF TRANSFER REMITTANCE OR CHEQUE',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ), 

      children: [
        {
          title: 'FROM BANK ACCOUNT',
          dataIndex: 'fromBankCheque',
          key: 'fromBankCheque', 
          ellipsis: { showTitle: false },
          render: (text) => (
            <Tooltip placement="topLeft" title={text}>
              {text}
            </Tooltip>
          ), 
          onCell: (record) => {  
            return {
              style: {
                backgroundColor: record?.paymentType?.includes("Transfer") ? 'white' : '#2CCED2', 
              },
            };
          },    
        },
        {
          title: 'IBAN NUMBER',
          dataIndex: 'ibanCheque',
          key: 'ibanCheque',  
          ellipsis: { showTitle: false },
          render: (text) => (
            <Tooltip placement="topLeft" title={text}>
              {text}
            </Tooltip>
          ),  
          onCell: (record) => {  
            return {
              style: {
                backgroundColor: record?.paymentType?.includes("Transfer") ? 'white' : '#5D7052', 
              },
            };
          },    
        },
      ], 
    },
    // {
    //   title: 'IF TRANSFER TO TRAVEL AGENCY',
    //   children: [
    //     {
    //       title: 'TRAVEL AGENCY ',
    //       dataIndex: 'id',//Afaire
    //       key: 'id', //Afaire
    //       ellipsis: { showTitle: false },
    //       render: (text) => (
    //         <Tooltip placement="topLeft" title={text}>
    //           {text}
    //         </Tooltip>
    //       ), 
             
    //     },
    //     {
    //       title: 'BANK NAME',
    //       dataIndex: 'id',//Afaire
    //       key: 'id', //Afaire 
    //       ellipsis: { showTitle: false },
    //       render: (text) => (
    //         <Tooltip placement="topLeft" title={text}>
    //           {text}
    //         </Tooltip>
    //       ),  
          
    //     },
    //     {
    //       title: 'IBAN NUMBER',
    //       dataIndex: 'id',//Afaire
    //       key: 'id', //Afaire 

    //       render: (text) => (
    //         <Tooltip placement="topLeft" title={text}>
    //           {text}
    //         </Tooltip>
    //       ),  
           
    //     },
      
    //   ], 
    // },
    {
      title: 'PAID /NOT',
      dataIndex: 'idPaid',
      key: 'idPaid',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    
    },
    {
      title: 'PAYMENT DATE',
      dataIndex: 'paymentRefDate',
      key: 'paymentRefDate',
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    
    },
    {
      title: 'NOTIF',
      dataIndex: 'notif',
      key: 'notif',
   
    },
     
    {
      title: 'HR Status',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => {
        const status = getHRStatus(record.notif);
        const statusClass = getHRStatusClass(record.notif);
        return <span className={statusClass}>{status}</span>;
      },
    },
    
    {
      title: 'BOD Approval',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => {
        const status = getBODStatus(record);
        const statusClass = getBODStatusClass(record);
        return <span className={statusClass}>{status}</span>;
      },
    },
    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   fixed: 'right',
    //   className: 'customer-table-actions',
    //   render: (text, record) => (
    //     <Dropdown menu={{ items: items(record) }} trigger={['click']}>
    //       <Button type='circle'>
    //         <MoreOutlined />
    //       </Button>
    //     </Dropdown>
    //   ),
    // }
  ];

  return (
    <div style={{ marginBottom: "2rem" }}>
      <AppPageMeta title='AllRequestPayment' />
      <div style={{ marginBottom: "2rem" }}>

        <AppsHeader>
          <StyledOrderHeader>
            <div style={{ marginRight: 20, boxShadow: "none !important", width: "20%" }}>
              <Input.Search
                placeholder='Search Here'
                type="text"
                // value={nameFilter}
                // onChange={handleNameFilterChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event);
                  }
                }}
              />
              {/* {isDropdownOpen && (
                <List
                  style={{
                    zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                    background: "white", position: "absolute", top: "6rem", width: "18%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                  }}
                  dataSource={employeesFiltrer}
                  renderItem={(item) => (
                    <List.Item onClick={() => handleListItemClick(item)}>
                      {item.name}
                    </List.Item>
                  )}
                />
              )} */}
            </div>


          </StyledOrderHeader>
        </AppsHeader>
        <AppCard
          className='no-card-space-ltr-rtl'
          title={messages['dashboard.RequestPayment']}>
          <Space direction='vertical' style={{ width: '100%', marginBottom: "8rem" }}>
            <div>
              <h4 style={{ padding: "1rem" }}> Approved Request Payment</h4>
              <StyledOrderTable
                hoverColor
                data={AllRequetPending}

                columns={columns}
                scroll={{ x: 'auto', y: tableHeight }}
              />


            </div>
          </Space>

        </AppCard>


      </div>



    </div>

  );
};

export default AllRequestPaymentRejectedTab;
