
import React, { useState, useEffect } from 'react';
import { Input, Spin, Button, Modal, Select, DatePicker,notification } from 'antd';
import Salarypayment from './salarypayment';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';

import dayjs from 'dayjs';
const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [allemployee, setAllemployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employeeId, setEmployeeId] = useState("")
  const [dataemployeeId, setDataEmployeeId] = useState('');
  const [isWelcomeModalVisible, setIsWelcomeModalVisible] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const token = localStorage.getItem("token");
  const now = new Date();
  const currentYear = now.getFullYear();
  const [selectedFinalSetement, setSelectedFinalSetement] = useState('');
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [newDateFinish, setNewDateFinish] = useState('');
  const [monthSetelement, setMonthSetelement] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [settelment, setSettelment] = useState('');
  const [dateemp, setDateemp] = useState("");
  const [getsId, setGetsId] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const handleFinalSetement = (value) => {
    setSelectedFinalSetement(value);
  };
  const FS = [
    { type: 'Finance Settlement' },


  ];
  const monthNames = {
  "01": "JANUARY",
  "02": "FEBRUARY",
  "03": "MARCH",
  "04": "APRIL",
  "05": "MAY",
  "06": "JUNE",
  "07": "JULY",
  "08": "AUGUST",
  "09": "SEPTEMBER",
  "10": "OCTOBER",
  "11": "NOVEMBER",
  "12": "DECEMBER"
};
const openNotification = () => {
  notification.open({
    message: 'Success',
    description: 'Success Calculate Setlement',
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

const openNotificationError = () => {
  notification.open({
    message: 'Error',
    description: 'Error Success Calculate Setlement ',
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
  const CalculateList = async () => {
    try {
     
      const selectedIds = [employeeId];  
      const numericSelectedIds = selectedIds.map(id => Number(id)); 
      const selectedMonth = monthSetelement;  
      const monthName = monthNames[selectedMonth];
 
     const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetOffice/calculateListSetelment?month=${monthName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body:JSON.stringify(numericSelectedIds),
       
      });
  
      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
       
      }
  
      const responseData = await response.json();
      console.log("Settlement Calculation Response:", responseData);
      setAllemployee(responseData);
      setIsWelcomeModalVisible(false)
      openNotification('bottomRight')
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
  
    } catch (error) {
      console.error("Error calculating settlement:", error);
    }
  };
  
  useEffect(() => {
    findId()
  }, [currentPage, pageSize,getsId]);
  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${employeeId}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setDateemp(responseData)
        setGetsId(responseData?.getsId)
        setName(responseData?.name)
        setPosition(responseData?.position)
        setFinishDate(responseData?.finishDate)
        setSettelment(responseData?.settelment)

      }
    } catch (error) {
      console.error("Erreur lors de la récupération du employees:", error);
    }
  };
  const fetchEmployeeSalary = async () => {
    if (!employeeId) {
      alert("Please enter an employee ID.");
      return;
    }

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/sheetOffice/filterById?id=${employeeId}`);
      const data = await response.json();
      setDataEmployeeId(data);

      console.log("Employee Settlement Data: ", data);
    } catch (error) {
      console.error('Error fetching employee salary data:', error);
    }
  };
  const handleCalculateSettlement = () => {
    //setIsConfirmModalVisible(true);
    setIsWelcomeModalVisible(true)
    findId()
  };

  const handleConfirm = () => {
    setIsConfirmModalVisible(false);
    //setIsWelcomeModalVisible(true);
    Update()
  };

  const handleCancel = () => {
    setIsConfirmModalVisible(false);
    setIsWelcomeModalVisible(false)
  };
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update?token=${token}&id=${getsId}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          getsId: dateemp?.getsId,
          passport_finish_date: dateemp?.passport_finish_date,
          finishDateVisa: dateemp?.finishDateVisa,
          password: dateemp?.password,
          idVisa: dateemp?.idVisa,
          name: dateemp?.name,
          arName: dateemp?.arName,
          position: dateemp?.position,
          arPosition: dateemp?.arPosition,
          destination: dateemp?.destination,
          arDestination: dateemp?.arDestination,
          departement: dateemp?.departement,
          nbchildren: dateemp?.nbchildren,
          dailyRate: dateemp?.dailyRate,
          actStatus: dateemp?.actStatus,
          phoneNumber: dateemp?.phoneNumber,
          email: dateemp?.email,
          joinDate: dateemp?.joinDate,
          nationality: dateemp?.nationality,
          residance_finish_date: dateemp?.residance_finish_date,
          exitRentry_finish_date: dateemp?.exitRentry_finish_date,
          desertPass_finish_date: dateemp?.desertPass_finish_date,
          exrentry_date: dateemp?.exrentry_date,
          birthDate: dateemp?.birthDate,
          nbExperience: dateemp?.nbExperience,
          familyStatus: dateemp?.familyStatus,
          cnss: dateemp?.cnss,
          passportnumber: dateemp?.passportnumber,
          phoneEmergency: dateemp?.phoneEmergency,
          contractType: dateemp?.contractType,
          contractNumb: dateemp?.contractNumb,
          getsEmail: dateemp?.getsEmail,
          companyType: dateemp?.companyType,
          desert_pass: dateemp?.desert_pass,
          visa_Nb: dateemp?.visa_Nb,
          type_Emp: dateemp?.type_Emp,
          toApplyForVisa: dateemp?.toApplyForVisa,
          requestSendVisa: dateemp?.requestSendVisa,
          visaReady: dateemp?.visaReady,
          contratctCopy: dateemp?.contratctCopy,
          dateVisa: dateemp?.dateVisa,
          vCableReceive: dateemp?.vCableReceive,
          vCabledate: dateemp?.vCabledate,
          passportSubmit: dateemp?.passportSubmit,
          passportSubmitdate: dateemp?.passportSubmitdate,
          traveldate: dateemp?.traveldate,
          endTravelDate: dateemp?.endTravelDate,
          finalVisaReceive: dateemp?.finalVisaReceive,
          finalVisaReceiveDate: dateemp?.finalVisaReceiveDate,
          idJoys: dateemp?.idJoys,
          exitRentryType: dateemp?.exitRentryType,
          cin: dateemp?.cin,
          gender: dateemp?.gender,
          residenceAdress: dateemp?.residenceAdress,
          arResidenceAdress: dateemp?.arResidenceAdress,
          salary: dateemp?.salary,
          duration: dateemp?.duration,
          emergencyName: dateemp?.emergencyName,
          emergencyRelation: dateemp?.emergencyRelation,
          contractCategory: dateemp?.contractCategory,
          dateReturnToOffice: dateemp?.dateReturnToOffice,
          cvCopy: dateemp?.cvCopy,
          passportCopy: dateemp?.passportCopy,
          cnssCopy: dateemp?.cnssCopy,
          approvalStatus: dateemp?.approvalStatus,
          projName: dateemp?.projName,
          notif: dateemp?.notif,
          cinDate: dateemp?.cinDate,
          primeProductivity: dateemp?.primeProductivity,
          category: dateemp?.category,
          bankName: dateemp?.bankName,
          deductionAmount: dateemp?.deductionAmount,
          gradeSite: dateemp?.gradeSite,
          gradeOffice: dateemp?.gradeOffice,
          netOfice: dateemp?.netOfice,
          netSite: dateemp?.netSite,
          lastMonth: dateemp?.lastMonth,
          rib: dateemp?.rib,
          altenativeNameBank: dateemp?.altenativeNameBank,
          paymentCategory: dateemp?.paymentCategory,
          paymentType: dateemp?.paymentType,
          checkHolderName: dateemp?.checkHolderName,
          settelment: selectedFinalSetement,
          finishDate: newDateFinish,



        })
      });

      if (!response.ok) {
        // setUpdateSuccess(false)
        // openNotificationError('bottomRight')
      }
      if (response.ok) {


        const responseData = await response.text();
        console.log("responseData 555", responseData)
        setUpdateSuccess(true);
      

      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  const handleSetelmentOk = () => {

    setIsConfirmModalVisible(true)

    // Update()

  };
  const handleCancelSetelment = () => {
    setIsWelcomeModalVisible(false);

    findId()

  };


  const items = [
    {
      label: 'Calculate Employee Settlement',
      key: '1',
      children: (
        <div style={{ margin: "1rem" }}>
          <Input
            placeholder="Search by Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            style={{ marginBottom: '1rem', width: "20%", marginRight: "20px" }}
          />
          <Button type="primary" onClick={fetchEmployeeSalary}>Search</Button>
          <p>Full Name :<span style={{fontFamily:"revert",fontWeight:"bold"}}>{name}</span></p>
          <br />
          <Button type="primary" onClick={handleCalculateSettlement}>Calcul Settlement</Button>

          {/* Other content such as Salarypayment */}
          <Salarypayment
            allemployee={allemployee}
            currentYear={currentYear}
            dataemployeeId={dataemployeeId}
            employeeId={employeeId}
            token={token}
            dateemp={dateemp}
            findId={findId}
          
          />
        </div>
      )
    }
  ];

  return (
    <div>
      <h2 className="Title">Final Settlement</h2>
      <div style={{ marginBottom: "20px" }}>
        <StyledBuyCellCard style={{ paddingLeft: "10px" }} title="Final Settlement">
          <StyledTabs defaultActiveKey="1">
            {items.map(item => (
              <StyledTabs.TabPane key={item.key} tab={item.label}>
                {item.children}
              </StyledTabs.TabPane>
            ))}
          </StyledTabs>
        </StyledBuyCellCard>
      </div>

      {/* Confirmation Modal */}
      <Modal
        title="Confirm Calculation"
        visible={isConfirmModalVisible}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to calculate the settlement for employee ID {employeeId}?</p>
      </Modal>
      <Modal
        title="FINANCE SITTLEMT"
        visible={isWelcomeModalVisible}
        onCancel={handleCancelSetelment}
        footer={[
          <Button
            key="calculate"
            disabled={selectedFinalSetement === ""}
            onClick={CalculateList }>
            Calculate
          </Button>,
          // <Button key="cancel" onClick={handleCancelSetelment}>
          //   No
          // </Button>,
          <Button key="ok" type="primary" onClick={handleSetelmentOk}>
            Update
          </Button>,
        ]}
      >
        <div>
          <p> FINANCE SITTLEMT (END COTRACT)</p>
          <Select
            defaultValue={settelment}
            placeholder='Select FINANCE SITTLEMT'
            onChange={handleFinalSetement}
            style={{ width: "100%" }}
          >
            {FS && FS.map((p, index) => (
              <Select.Option
                key={index} value={p.type}>
                {p.type}
              </Select.Option>
            ))}
          </Select>
          <p style={{paddingTop:"1rem"}}>LAST WORKING MONTH (END COTRACT)</p>
          <DatePicker
            placeholder={finishDate}
            style={{ width: "100%", height: "2rem", marginTop: "0.5rem" }}
            onChange={(value) => setNewDateFinish(dayjs(value).format('YYYY-MM-DD'))}
          />
          <p style={{paddingTop:"1rem"}}>LAST WORKING MONTH (END COTRACT)</p>
          <DatePicker
            placeholder="Select Month"
            picker="month"
            style={{ width: "100%", height: "2rem", marginTop: "0.5rem" }}
            onChange={(value) => setMonthSetelement(dayjs(value).format('MM'))}
          />

        </div>

        {updateSuccess &&
               
        <p style={{padding:"1rem",marginTop:"0.5rem",marginBottom:"0.5rem",
          fontSize:"20px",color:"#226D68"


        }}>ID:<span style={{fontWeight:"bold",fontStyle:"italic"}}>{employeeId}</span> update</p>}
      </Modal>
    </div>
  );
};

export default Table;
