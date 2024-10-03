import React, { useState, useEffect } from 'react';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { Table, notification ,DatePicker,Dropdown,Button} from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import SetellementViewDetails from "../../../../Model/SetellementViewDetails"
import { useNavigate } from "react-router-dom";
const OrderTable = ({ dataemployeeId, loading,employeeId,token,dateemp,findId }) => {
  console.log("findId()",findId)
  const [isViewDetails, setIsViewDetails] = useState(false);
  const navigate = useNavigate();
  const handleViewDetails = () => {
    setIsViewDetails(true);
   };
   /////////////

   const handleRequestForPayment= () => {
    navigate(`/Payroll/PAYMENT_For_REQUEST`, {
      state: {
        token:token,
        dateemp:dateemp
      }
    });
  }
   const handleCloseView = (code) => {
    setIsViewDetails(false);
    };
  
  const getMonthsUntilNow = () => {
    const currentMonth = new Date().getMonth(); 
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    return months.slice(0, currentMonth + 1); 
  };
  useEffect(() => {
    
  }, []);
  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View Details </span>,onClick:handleViewDetails },
    { key: 2, label: <span style={{ fontSize: 14 }}>Request Payment</span>,onClick:handleRequestForPayment},
     

  ]
  const mapMonthsWithSalaries = (data) => {
    const monthsUntilNow = getMonthsUntilNow();
    
    if (!Array.isArray(data)) {
      console.error("dataemployeeId n'est pas un tableau");
      return [];
    }

    const mappedData = monthsUntilNow.map(month => {
    const monthData = data.find(item => item.month === month && item.years === new Date().getFullYear());
      return {
        month,
  
        contractSalary: monthData ? monthData.contractSalary : 0.0, 
        advance:monthData ? monthData.advance : 0.0, 
        grandTotalSite:monthData ? monthData.grandTotalSite : 0.0, 
        grandTotalOffice:monthData ? monthData.grandTotalOffice : 0.0,
        paidOffice:monthData ? monthData.paidOffice : 0.0,
        restPaidSite:monthData ? monthData.restPaidSite : 0.0,
        restPaidOffcie:monthData ? monthData.restPaidOffcie : 0.0,
      };
    });
    return mappedData;
  };

  // Exécuter la fonction de mapping
  const salaryData = mapMonthsWithSalaries(dataemployeeId);
 
  const getCurrentMonthData = (data) => {
    const currentMonthIndex = new Date().getMonth(); 
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const currentMonth = months[currentMonthIndex]; 
    if (!Array.isArray(data)) {
      console.error("dataemployeeId n'est pas un tableau");
      return [];
    }

    const monthData = data?.find(item => item.month === currentMonth && item.years === new Date().getFullYear());

    return {
      month: currentMonth,
      contractSalary: monthData ? monthData.contractSalary : 0.0,
      advance: monthData ? monthData.advance : 0.0,
      grandTotalSite: monthData ? monthData.grandTotalSite : 0.0,
      grandTotalOffice: monthData ? monthData.grandTotalOffice : 0.0,
      paidSite: monthData ? monthData.paidSite : 0.0,
      paidOffice: monthData ? monthData.paidOffice : 0.0,
      restPaidSite: monthData ? monthData.restPaidSite : 0.0,
      restPaidOffcie: monthData ? monthData.restPaidOffcie : 0.0,
    };
  };
  const salaryDataMonthactuelle = [getCurrentMonthData(dataemployeeId)];
  const columns = [
    // {
    //   title: 'Name',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
    // {
    //   title: 'Position',
    //   dataIndex: 'month',
    //   key: 'month',
    // },
    // {
    //   title: 'REST AMOUNT',
    //   dataIndex: 'month',
    //   key: 'month',
    // },

    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Cash Ad &Ded',
      dataIndex: 'advance',
      key: 'advance',
    },
    {
      title: 'Gross Site',
      dataIndex: 'grandTotalSite',
      key: 'grandTotalSite',
    },
    {
      title: 'Net Site PAID',
      dataIndex: 'paidSite',
      key: 'paidSite',
    },
    {
      title: 'Gross Office ',
      dataIndex: 'grandTotalOffice',
      key: 'grandTotalOffice',
    },
    {
      title: 'Net Office PAID',
      dataIndex: 'paidOffice',
      key: 'paidOffice',
    },
    {
      title: 'Rest Office',
      dataIndex: 'restPaidOffcie',
      key: 'restPaidOffcie',
    },
    {
      title: 'Rest Site',
      dataIndex: 'restPaidSite',
      key: 'restPaidSite',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'customer-table-actions',
      render: (text, record) => (
        <div onClick={()=>findId()}>
          <Dropdown menu={{ items }} trigger={['click']}  >
            <Button type='circle'>
              <MoreOutlined />
            </Button>
          </Dropdown>
  
        </div>
  
      ),
  
    }
    // {
    //   title: 'Contract Salary',
    //   dataIndex: 'restPaidOffcie',
    //   key: 'restPaidOffcie',
    // },

    // {
    //   title: 'Contract Salary',
    //   dataIndex: 'contractSalary',
    //   key: 'contractSalary',
    // },
   
  ];

  return (
    <>
      <StyledOrderTable
        hoverColor
        data={salaryDataMonthactuelle}
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
         {isViewDetails && (
              <SetellementViewDetails
                isViewDetails={isViewDetails}
                handleCloseView={handleCloseView}
                salaryData={salaryData}
              

              />
            )}
    </>
  );
};

export default OrderTable;
