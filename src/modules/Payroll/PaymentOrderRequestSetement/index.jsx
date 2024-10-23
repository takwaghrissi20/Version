
import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select, Alert,
  Checkbox, DatePicker, InputNumber, notification
} from 'antd';

import {

  StyledShadowWrapper,
  StyledInput,

} from '../../../styles/index.styled'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '../../../@crema/helpers/IntlMessages';
import OrderTable from './TableOrderPaymentRequest';
import { useLocation } from 'react-router-dom';


const PaymentOrderRequestSetement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const filteredEmployees = location.state ? location.state.filteredEmployees : null;
  const costCenter = location.state ? location.state.costCenter : null;
  const selectedProject = location.state ? location.state.selectedProject : null;
  const calculateSalary = location.state ? location.state.calculateSalary : null;
  const subject = location.state ? location.state.subject : null;
  const selectedTypePament = location.state ? location.state.selectedTypePament : null;
  const typecompany = location.state ? location.state.typecompany : null;
  const chequeName = location.state ? location.state.chequeName : null;
  const bancAccount = location.state ? location.state.bancAccount : null;
  const ibanNumber = location.state ? location.state.ibanNumber : null;
  const transfer = location.state ? location.state.transfer : null;
  const transferRef = location.state ? location.state.transferRef : null;
  const listprojName = location.state ? location.state.listprojName : null;
  const monthName = location.state ? location.state.monthName : null;
  const lastNumberTransferNumberIncrement = location.state ? location.state.lastNumberTransferNumberIncrement : null;
  const lastNumberTransferNumber = location.state ? location.state.lastNumberTransferNumber : null;
  const listsalaries = location.state ? location.state.listsalaries : null;
  const selectedRows = location.state ? location.state.selectedRows : null;

  const [descriptions, setDescriptions] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const token = localStorage.getItem("token")
  const [getsId, setGetsId] = useState("");
  const [lastRequest, setLastRequest] = useState(0);
  const [objet, setObjet] = useState("");
  const [from, setFrom] = useState("Payroll Coordinator & Administrator");
  const [isCash, setIsCash] = useState(true);
  const [isTransfer, setIsTransfer] = useState(false);
  const [isCheque, setIsCheque] = useState(false);
  const [total, setTotal] = useState("");
  const [profile, setProfile] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const userRole = localStorage.getItem("role");
  const [isRequestPaymentVisible, setIsRequestPaymentVisible] = useState(true);
  //////////////
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [itemSave, setItemSave] = useState("");

  const handlePrint = () => {
    setIsPrintMode(true);
    setIsLoading(true);
    setTimeout(() => {
      window.print();
      setIsLoading(false);
      setIsPrintMode(false);
    }, 1000);
  };


  /////////////
  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      setProfile(data)
      setGetsId(data?.getsId)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  const handlePrinttest = () => {
    setIsRequestPaymentVisible(false);

    setTimeout(() => {
      window.print();
      setIsRequestPaymentVisible(true);
    }, 1000);
  };


  useEffect(() => {
    GetProfileEmployess()
    LastRequestPayment()
    //Calculate Total
    const total = Array.isArray(listsalaries)
      ? listsalaries.reduce((acc, salary) => acc + salary?.siteSaalary, 0)
      : Array.isArray(Object.values(listsalaries))
        ? Object.values(listsalaries).reduce((acc, salary) => acc + salary?.siteSaalary, 0)
        : 0;

    // Update the total state
    setTotal(total);

  }, [getsId, listsalaries]);

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Payment Request Order',
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

  const openNotificationWarning = () => {
    notification.open({
      message: 'Warning',
      description: 'All Fields Not Complete',
      style: {
        backgroundColor: '#eab000',
        border: '1px solid #eab000',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #ce9c09',
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
      description: 'Error Payment Order Request ',
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




  const goBack = () => {
    navigate(-1)
  }
  const user = localStorage.getItem("role");
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');

  ///Last Request Order
  const LastRequestPayment = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/last?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      setLastRequest(data?.id)

    } catch (error) {
      console.error('Erreur lors de la récupération Last RequestPayment', error);
    }
  };
  const LastIndexRequestPaymentIncremente = lastRequest + 1
  //Checkbox
  function Cash(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsCash(e.target.checked)
    if (e.target.checked) {
      setIsTransfer(false);
      setIsCheque(false);
    }

  }
  function Transfer(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsTransfer(e.target.checked)
    if (e.target.checked) {
      setIsCash(false);
      setIsCheque(false);
    }
  }
  function Cheque(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsCheque(e.target.checked)
    if (e.target.checked) {
      setIsCash(false);
      setIsTransfer(false);
    }
  }
  //Save Request Payment

  const SaveRequest = async () => {
    try {
      const listRequestPayments = filteredEmployees.map(employee => ({
        ...employee,
        otherDescription: descriptions[employee.getsId] || '',
        amount: calculateSalary[employee.getsId] || 0,
        fullName: employee?.name
      }));
      const transferNumber = selectedTypePament === 'Transfer Remittance'
        ? lastNumberTransferNumberIncrement
        : lastNumberTransferNumber;
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/add?token=${token}`, {

        method: 'POST',

        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          dateInput: formattedDate,
          object: subject,
          fromReq: from,
          paymentType: selectedTypePament,
          total: total,
          monthBy: monthName,
          requstor: "Syrine",
          companyType: typecompany,
          fromBankCheque: bancAccount,
          transferRef:transferRef,
          "payrollSign": null,
          "checkedByHod": null,
          "approvedByBod1": true,
          "approvedByBod2": null,
          notif: 0,
          "cashpayment": null,
          "transfertPayment": null,
          "paymentRefDate": null,
          "payrolDate": null,
          "otherDescription": null,
          "prinRreq": null,
          nameCheque: chequeName,
          cosCenter: costCenter,
          projName: selectedProject,
          "travelAgent": null,
          "bankNameTravel": null,
          "ibnTravel": null,
          "idPaid": null,
          "virementOrdre": null,
          transferNumber: transferNumber,
          listRequestPayments,
          ibanCheque: ibanNumber
         



        })
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("setItemSave", responseData)
        setItemSave(responseData)
        form.resetFields();
        openNotification('bottomRight')
        setIsSuccess(true);
        // setTimeout(() => {
        //   window.location.reload();

        // }, 100);

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
      {/**All Fied not empty */}
      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault() }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}

      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>REQUEST FOR PAYMENT :{typecompany}

            </Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Payment Request Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                {selectedTypePament === 'Transfer Remittance' ?
                 <Col xs={24} md={12}>
                 <Form.Item label='Request Reference' name='Requestref'>
                   <Input
                     readOnly
                     placeholder={transferRef}

                   />
                 </Form.Item>
               </Col>

                  :
                  <Col xs={24} md={12}>
                    <Form.Item label='Request Reference' name='Requestref'>
                      <Input
                        readOnly
                        placeholder={"Request ref-" + LastIndexRequestPaymentIncremente}

                      />
                    </Form.Item>
                  </Col>

                }

                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='date'>
                    <Input
                      placeholder={formattedDate}
                      readOnly

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='COST CENTE' name='COST CENTE'>
                    <Input
                      placeholder={costCenter}
                      readOnly

                    />

                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Payment Request Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='PROJECT NAME' name='PROJECTNAME'>
                    <Input

                      placeholder={selectedProject}
                    // value={objet}
                    // onChange={(e) => setObjet(e.target.value)}


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={24}>
                  <Form.Item label='Object :' name='Object'>
                    <Input
                      style={{ paddingTop: "1rem", paddingBottom: "1rem" }}

                      placeholder={subject}
                    // value={objet}
                    // onChange={(e) => setObjet(e.target.value)}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='REQUESTED BY' name='from'>
                    <Input
                      placeholder={from}
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='BANC ACCOUNT' name='BANCACCOUNT'>
                    <Input
                      placeholder={bancAccount}
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Total' name='Total'>
                    <Input
                      readOnly

                      placeholder={total + " DT"}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={24}>
                  <Form.Item label="Payment Type :" name="PaymentType">
                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={selectedTypePament === 'CASH'}
                        onChange={Cash}
                      >
                        <IntlMessages id='Cash' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={selectedTypePament === 'Transfer Remittance'}
                        onChange={Transfer}
                      >
                        <IntlMessages id='Transfer' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={selectedTypePament === 'CHEQUE'}
                        onChange={Cheque}
                      >
                        <IntlMessages id='Cheque' />
                      </Checkbox>
                    </Col>
                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Tabel **/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Payment Request Order</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <OrderTable
                  filteredEmployees={filteredEmployees}
                  costCenter={costCenter}
                  selectedProject={selectedProject}
                  calculateSalary={calculateSalary}
                  monthName={monthName}
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                  listsalaries={listsalaries}
                  selectedRows={selectedRows}

                />

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>


        <Divider style={{ marginTop: 16, marginBottom: 16 }} />




        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={goBack} >Cancel</Button>
          <Button onClick={SaveRequest}>Save</Button>
          {/* {!isSuccess ? (
            <Button onClick={SaveRequest}>Save</Button>
          ) : (
            <Button onClick={handlePrint} >Download</Button>
          )} */}

          <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
            {isLoading && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#5CAFE7',
                    animation: 'bounce 1s infinite alternate'
                  }} />
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#82CEF9',
                    animation: 'bounce 1s infinite alternate',
                    animationDelay: '0.5s'
                  }} />
                </div>
              </div>
            )}
          </div>

        </Space>

      </Form>
      {/** Conditionally render RequestPayment for print only */}
      {isPrintMode && (
        <div className="print-only">
          {typecompany === "GETS E&C" &&
            <RequestPayment
              itemSave={itemSave}
            />
          }
          {typecompany === "TRADE" &&
            <RequestPaymentTradeHTML
              itemSave={itemSave}
            />
          }
          {typecompany === "VAIC" &&
            <RequestPaymentViacHTML
              itemSave={itemSave}
            />
          }

        </div>
      )}



    </div>

  );
};


export default PaymentOrderRequestSetement;
