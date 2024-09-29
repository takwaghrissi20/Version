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
const UpdateRequestPayment = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const dateInput = location.state ? location.state.dateInput : null;
  const cosCenter = location.state ? location.state.cosCenter : null;
  const projName = location.state ? location.state.projName : null;
  const object = location.state ? location.state.object : null;
  const fromReq = location.state ? location.state.fromReq : null;
  const fromBankCheque = location.state ? location.state.fromBankCheque : null;
  const total = location.state ? location.state.total : null;
  const paymentType = location.state ? location.state.paymentType : null;
  const listRequestPayments = location.state ? location.state.listRequestPayments : null;
  const monthOf = location.state ? location.state.monthOf : null;
  const companyType = location.state ? location.state.companyType : null;
  const token = location.state ? location.state.token : null;
  const user = location.state ? location.state.user : null;
  const userRole = location.state ? location.state.userRole : null;
  const name = location.state ? location.state.name : null;
  const approvedByBod1 = location.state ? location.state.approvedByBod1 : null;
  const approvedByBod2 = location.state ? location.state.approvedByBod2 : null;
  const notif = location.state ? location.state.notif : null;
  const commentaire = location.state ? location.state.commentaire : null;


  const [form] = Form.useForm();
  const [isOkBod1, setIsOkBod1] = useState(null);
  const [isNoBod1, setIsNoBod1] = useState(null);
  const [isOkBod2, setIsOkBod2] = useState(null);
  const [isNoBod2, setIsNoBod2] = useState(false);
  const [commentsHr, setCommentsHr] = useState("");
  const [commentsBod1, setCommentsBod1] = useState("");
  const [commentsBod2, setCommentsBod2] = useState("");
  const [dataUpdate, setDataUpdate] = useState({});
  const [finId, setFinId] = useState("");

  function OkBOD1(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkBod1(e.target.checked)
    if (e.target.checked) {
      setIsNoBod1(false);
    }
  }
  function NOBOD1(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsNoBod1(e.target.checked)
    if (e.target.checked) {
      setIsOkBod1(false);
    }
  }
  //Bod2 Checked Nidhal
  function OkBOD2(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkBod2(e.target.checked)
    if (e.target.checked) {
      setIsNoBod2(false);
    }
  }
  function NOBOD2(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsNoBod2(e.target.checked)
    if (e.target.checked) {
      setIsOkBod2(false);
    }
  }
  const FindIdRequest = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/findId?code=${id}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFinId(responseData)


    } catch (error) {
      console.error("Erreur lors de la récupération du RequestPayment:", error);
    }
  }
  useEffect(() => {
    FindIdRequest();
  }, [dataUpdate, id])


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Approval Payment Request Order',
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
  const openRefudeNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Refuse Payment Request Order',
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
  //AddNewRequest
  const AddNewRequest = () => {
    navigate("/Payroll/CalculateSiteSalary")
  }
  // const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');


  //Save Request Order

  const UPDATERequest = async () => {

    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 1,
          projName: projName,
          approvedByBod1: "false",
          approvedByBod2: "false",
          commentaire: commentsHr,
          commentaireBod1: commentsBod1,
          commentaireBod2: commentsBod2,


          // "payrollSign": null,
          // "checkedByHod": null,
          // "approvedByBod1": null,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }

        )
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("setItemSave", responseData)
        openNotification('bottomRight')
        navigate("/dashboards/hr")


      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };
  //Refused Hr
  const RefusedRequest = async () => {

    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 10,
          projName: projName,
          approvedByBod1: "false",
          approvedByBod2: "false",
          commentaire: commentsHr,
          commentaireBod1: commentsBod1,
          commentaireBod2: commentsBod2,
          // "payrollSign": null,
          // "checkedByHod": null,
          // "approvedByBod1": null,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }

        )
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        if (responseData) {
          setDataUpdate(responseData);
        } else {
          console.error("responseData is null or undefined.");
        }
        openRefudeNotification('bottomRight');
        navigate("/dashboards/hr")



      }

      // if (response.ok) {

      //   const responseData = await response.json();

      //   console.log("responseData ",responseData )       
      //   openRefudeNotification('bottomRight')
      //   setDataUpdate(responseData)
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);


      //}
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };

  {/*UPDATERequestBOD1*/ }
  const UPDATERequestBOD1 = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 3,
          projName: projName,
          // "payrollSign": null,
          // "checkedByHod": null,
          approvedByBod1: isOkBod1,
          approvedByBod2: isOkBod2,
          commentaire: commentsHr,
          commentaireBod1: commentsBod1,
          commentaireBod2: finId?.commentaireBod2,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }



        )
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("setItemSave", responseData)
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };
  {/*Refused Bod1*/ }
  const RefusedRequestBOD1 = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 30,
          projName: projName,
          approvedByBod1: isOkBod1,
          approvedByBod2: isOkBod2,
          commentaire: commentsHr,
          commentaireBod1: commentsBod1,
          commentaireBod2: finId?.commentaireBod2,
          // "payrollSign": null,
          // "checkedByHod": null,
          // "approvedByBod1": null,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }

        )
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("setItemSave", responseData)
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };
  {/*UPDATERequestBOD2*/ }
  const UPDATERequestBOD2 = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 3,
          projName: projName,
          approvedByBod1: isOkBod1,
          approvedByBod2: isOkBod2,
          commentaire: commentsHr,
          commentaireBod1: finId?.commentaireBod1,
          commentaireBod2: commentsBod2,
          // "payrollSign": null,
          // "checkedByHod": null,
          // "approvedByBod1": null,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }

        )
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        if (responseData) {
          setDataUpdate(responseData);
        } else {
          console.error("responseData is null or undefined.");
        }
        openRefudeNotification('bottomRight');
        navigate("/dashboards/hr")
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };
  {/*Refused Bod2*/ }
  const RefusedRequestBOD2 = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/update?token=${token}&id=${id}`, {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          dateInput: dateInput,
          object: object,
          fromReq: fromReq,
          paymentType: paymentType,
          total: total,
          notif: 30,
          projName: projName,
          approvedByBod1: isOkBod1,
          approvedByBod2: isOkBod2,
          commentaire: commentsHr,
          commentaireBod1: finId?.commentaireBod1,
          commentaireBod2: commentsBod2,
          // "payrollSign": null,
          // "checkedByHod": null,
          // "approvedByBod1": null,
          // "approvedByBod2": null,

          // "cashpayment": null,
          // "transfertPayment": null,
          // "paymentRefDate": null,
          // "requstor": null,
          // "payrolDate": null,
          // "otherDescription": null,
          // "prinRreq": null,
          companyType: companyType,
          // "nameCheque": null,
          fromBankCheque: fromBankCheque,
          // "ibanCheque": null,
          // "travelAgent": null,
          // "bankNameTravel": null,
          // "ibnTravel": null,
          // "idPaid": null,
          // "virementOrdre": null,
          listRequestPayments: listRequestPayments
        }

        )
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("setItemSave", responseData)
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id Request  :", error);
    }
  };
  console.log("finId", finId?.approvedByBod2)
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
            <Typography.Title level={4}>REQUEST FOR PAYMENT :{companyType}

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
                <Col xs={24} md={12}>
                  <Form.Item label='Request Reference' name='Requestref'>
                    <Input
                      readOnly
                      placeholder={"Request ref-" + id}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='date'>
                    <Input
                      placeholder={dateInput}
                      readOnly

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='COST CENTE' name='COST CENTE'>
                    <Input
                      placeholder={cosCenter}
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
                <Col xs={24} md={24}>
                  <Form.Item label='PROJECT NAME' name='PROJECTNAME'>
                    <Input

                      placeholder={projName}
                      readOnly


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={24}>
                  <Form.Item label='Object :' name='Object'>
                    <Input
                      style={{ paddingTop: "1rem", paddingBottom: "1rem" }}

                      placeholder={object}
                      readOnly


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='REQUESTED BY' name='from'>
                    <Input
                      placeholder={fromReq}
                      readOnly

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='BANC ACCOUNT' name='BANCACCOUNT'>
                    <Input
                      placeholder={fromBankCheque}
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
                        checked={paymentType === "CASH"}
                        readOnly
                      >
                        <IntlMessages id='Cash' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={paymentType === "Transfer Remittance"}
                        readOnly
                      >
                        <IntlMessages id='Transfer' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={paymentType === "CHEQUE"}
                        readOnly
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
                  requestPayments={listRequestPayments}
                  monthOf={monthOf}
                />

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Refused Human Ressource Manager and add Comment when notif=10*/}
        {userRole?.includes("Human Ressource") ?
          <>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />
            <AppRowContainer>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>Comment </Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={24}>
                      <Form.Item label='Comments ' name='Comments'>
                        <Input

                          placeholder="Comments"
                          className='InputComment'
                          value={commentsHr}
                          onChange={(e) => setCommentsHr(e.target.value)}

                        />
                      </Form.Item>
                    </Col>
                    {/*Refuse One oF bOD */}


                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>

            {(finId?.approvedByBod1 || !finId?.approvedByBod2) ||
              (!finId?.approvedByBod1 && finId?.approvedByBod2) && (
                <>
                  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                  <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                    <Col xs={24} md={6}>
                      <Typography.Title level={5}>Decision BOD</Typography.Title>
                    </Col>
                    <Col xs={24} md={18}>
                      <StyledShadowWrapper>
                        <AppRowContainer>
                          <Col xs={24} md={18}>
                            <Form.Item
                              label='Executive Directors Approval Ali'
                              name='DirectorsApprovalAli'
                            >
                              <Checkbox checked={finId?.approvedByBod1} 
                              readOnly>
                                <IntlMessages id='accepted.BOD' />
                              </Checkbox>
                              <Checkbox checked={!finId?.approvedByBod1} readOnly>
                                <IntlMessages id='Refuse.BOD' />
                              </Checkbox>
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={24}>
                            <Form.Item label='Comments' name='CommentsAli'>
                              <Input
                                placeholder={finId?.commentaireBod1}
                                className='InputComment'
                                readOnly
                              />
                            </Form.Item>
                          </Col>

                          <Col xs={24} md={18}>
                            <Form.Item
                              label='Executive Directors Approval Nidhal'
                              name='DirectorsApprovalNidhal'
                            >
                              <Checkbox checked={finId?.approvedByBod2} readOnly>
                                <IntlMessages id='accepted.BOD' />
                              </Checkbox>
                              <Checkbox checked={!finId?.approvedByBod2} readOnly>
                                <IntlMessages id='Refuse.BOD' />
                              </Checkbox>
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={24}>
                            <Form.Item label='Comments' name='CommentsNidhal'>
                              <Input
                                placeholder={finId?.commentaireBod2}
                                className='InputComment'
                                readOnly
                              />
                            </Form.Item>
                          </Col>
                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>
                </>
              )}

          </>
          :
          <p></p>
        }
        {userRole?.includes("Payroll") ?
          <>
            {(finId?.approvedByBod1 || !finId?.approvedByBod2) ||
              (!finId?.approvedByBod1 && finId?.approvedByBod2) ? (
              <>
                <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                  <Col xs={24} md={6}>
                    <Typography.Title level={5}>Decision BOD</Typography.Title>
                  </Col>
                  <Col xs={24} md={18}>
                    <StyledShadowWrapper>
                      <AppRowContainer>
                        <Col xs={24} md={18}>
                          <Form.Item
                            label='Executive Directors Approval Ali'
                            name='DirectorsApprovalAli'
                          >
                            <Checkbox checked={finId?.approvedByBod1} 
                            readOnly>
                              <IntlMessages id='accepted.BOD' />
                            </Checkbox>
                            <Checkbox checked={!finId?.approvedByBod1} readOnly>
                              <IntlMessages id='Refuse.BOD' />
                            </Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={24}>
                          <Form.Item label='Comments' name='CommentsAli'>
                            <Input
                              placeholder={finId?.commentaireBod1}
                              className='InputComment'
                              readOnly
                            />
                          </Form.Item>
                        </Col>

                        <Col xs={24} md={18}>
                          <Form.Item
                            label='Executive Directors Approval Nidhal'
                            name='DirectorsApprovalNidhal'
                          >
                            <Checkbox checked={finId?.approvedByBod2} readOnly>
                              <IntlMessages id='accepted.BOD' />
                            </Checkbox>
                            <Checkbox checked={!finId?.approvedByBod2} readOnly>
                              <IntlMessages id='Refuse.BOD' />
                            </Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={24}>
                          <Form.Item label='Comments' name='CommentsNidhal'>
                            <Input
                              placeholder={finId?.commentaireBod2}
                              className='InputComment'
                              readOnly
                            />
                          </Form.Item>
                        </Col>
                      </AppRowContainer>
                    </StyledShadowWrapper>
                  </Col>

                </AppRowContainer>
              </>
            ) : null}

          </>

          : null}

        {notif === 10 && userRole?.includes("Payroll") ?
          <>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />
            <AppRowContainer>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>Comment </Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={24}>
                      <Form.Item label='Comments ' name='Comments'>
                        <Input

                          placeholder={commentaire}
                          className='InputComment'


                          readOnly



                        />
                      </Form.Item>
                    </Col>




                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          </>
          :
          <p></p>


        }


        {/*End Refused Human Ressource Manager and add Comment when notif=10*/}
        {/*Cheched BOD1 & BOD2*/}
       
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {userRole?.includes("bod") && name?.toLowerCase().includes("ali") &&
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Decision BOD </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={18}>

                    <Form.Item
                      label='Executive Directors Approval Ali'
                      name='DirectorsApproval'>
                      <Checkbox
                        Checkbox checked={isOkBod1} onChange={OkBOD1}>

                        <IntlMessages id='accepted.BOD' />
                      </Checkbox    >
                      <Checkbox checked={isNoBod1} onChange={NOBOD1}>
                        <IntlMessages id='Refuse.BOD' />
                      </Checkbox>
                    </Form.Item>


                  </Col>
                  <Col xs={24} md={24} >
                    <Form.Item label='Comments ' name='Comments'>
                      <Input

                        placeholder="Comments"
                        className='InputComment'
                        value={commentsBod1}
                        onChange={(e) => setCommentsBod1(e.target.value)}

                      />
                    </Form.Item>
                  </Col>

                  {/*nOTIF bOD 2*/}
                  {finId?.approvedByBod2=== "true" && (
                    <>
                    <Col xs={24} md={18}>
                      <Form.Item
                        label="Executive Directors Approval Nidhal"
                        name="DirectorsApproval" >
                        <Checkbox
                         checked={finId?.approvedByBod2 === "true"}
                  
                          readOnly>
                          <IntlMessages id="accepted.BOD" />
                        </Checkbox>

                        <Checkbox
                           checked={finId?.approvedByBod2 === "false"}
                          readOnly
                        >
                          <IntlMessages id="Refuse.BOD" />
                        </Checkbox>
                      </Form.Item>
               
                    </Col>
                    <Col xs={24} md={24} >
                    <Form.Item label='Comments ' name='Comments'>
                      <Input

                        placeholder={finId?.commentaireBod2}
                        className='InputComment'
                     
                      />
                    </Form.Item>
                  </Col>
                    </>
                    
                  )}


                  {/*End nOTIF bOD 2*/}


                </AppRowContainer>
              </StyledShadowWrapper>


            </Col>

          </AppRowContainer>
        }
        {/*BOD2*/}
        {userRole?.includes("bod") && name?.toLowerCase().includes("nidhal") &&
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Decision BOD </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={18}>

                    <Form.Item
                      label='Executive Directors Approval Nidhal'
                      name='DirectorsApproval'>
                      <Checkbox
                        Checkbox checked={isOkBod2} onChange={OkBOD2}>

                        <IntlMessages id='accepted.BOD' />
                      </Checkbox    >
                      <Checkbox checked={isNoBod2} onChange={NOBOD2}>
                        <IntlMessages id='Refuse.BOD' />
                      </Checkbox>
                    </Form.Item>

                  </Col>
                  <Col xs={24} md={24} >
                    <Form.Item label='Comments ' name='Comments'>
                      <Input

                        placeholder="Comments"
                        className='InputComment'
                        value={commentsBod1}
                        onChange={(e) => setCommentsBod2(e.target.value)}

                      />
                    </Form.Item>
                  </Col>
                  {/*nOTIF bOD 1*/}
                  {finId?.approvedByBod1 === "true" && ( 
                    <>
               
                    <Col xs={24} md={18}>
                      <Form.Item
                        label="Executive Directors Approval Ali"
                        name="DirectorsApproval"
                      >
                        <Checkbox
                           checked={finId?.approvedByBod1 === "true"}
                          readOnly
                        >
                          <IntlMessages id="accepted.BOD" />
                        </Checkbox>

                        <Checkbox
                         checked={finId?.approvedByBod1 ==="false"}
                       
                          readOnly
                        >
                          <IntlMessages id="Refuse.BOD" />
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24} >
                    <Form.Item label='Comments ' name='CommentsAli'>
                      <Input
                        placeholder={finId?.commentaireBod1}
                        className='InputComment'
                        
                      />
                    </Form.Item>
                  </Col>
                    
                    </>
                  )}



                  {/*End nOTIF bOD 1*/}
                </AppRowContainer>
              </StyledShadowWrapper>


            </Col>

          </AppRowContainer>
        }


        {/*Cheched BOD1 & BOD2*/}


        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {notif === 10 && userRole?.includes("Payroll") ?
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={AddNewRequest} >Add New Request</Button>

          </Space>

          : null
        }
        {userRole?.includes("admin") &&
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack} >Cancel</Button>

            <Button style={{ color: "green", borderColor: "green" }} onClick={UPDATERequest}>Approval</Button>

            <Button style={{ color: "red", borderColor: "red" }} onClick={RefusedRequest}>Refuse</Button>
          </Space>

        }

        {userRole?.includes("Human Ressource") &&
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack} >Cancel</Button>
            {finId?.commentaireBod1 == null && finId?.commentaireBod2 == null && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={UPDATERequest}>
                  Approval
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefusedRequest}>
                  Refuse
                </Button>
              </>
            )}



          </Space>

        }
        {userRole?.includes("bod") && name?.toLowerCase().includes("ali") &&
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack} >Cancel</Button>

            <Button style={{ color: "green", borderColor: "green" }} onClick={UPDATERequestBOD1}>Approval</Button>

            <Button style={{ color: "red", borderColor: "red" }} onClick={RefusedRequestBOD1}>Refuse</Button>
          </Space>

        }
        {userRole?.includes("bod") && name?.toLowerCase().includes("nidhal") &&
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack} >Cancel</Button>

            <Button style={{ color: "green", borderColor: "green" }} onClick={UPDATERequestBOD2}>Approval</Button>

            <Button style={{ color: "red", borderColor: "red" }} onClick={RefusedRequestBOD2}>Refuse</Button>
          </Space>

        }



        {/* <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={goBack} >Cancel</Button>
       
            <Button style={{ color: "green", borderColor: "green" }}  onClick={UPDATERequest}>Approval</Button>
            
            <Button style={{ color: "red", borderColor: "red" }}onClick={RefusedRequest}>Refuse</Button>
        </Space> */}
      </Form>

    </div>

  );
};


export default UpdateRequestPayment;
