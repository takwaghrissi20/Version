import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, notification } from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
} from '../../../styles/index.styled';
import {

  StyledContactFormBtn,

  StyledContactFormFooter,

} from './index.styled';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
const UploadContractList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  const id = location.state ? location.state.id : null;
  const name = location.state ? location.state.name : null;
  const departement = location.state ? location.state.departement : null;
  const familyStatus = location.state ? location.state.familyStatus : null;
  const position = location.state ? location.state.position : null;
  const traveldate = location.state ? location.state.traveldate : null;
  const destination = location.state ? location.state.destination : null;
  const companyType = location.state ? location.state.companyType : null;
  const contractCategory = location.state ? location.state.contractCategory : null;
  const visaReady = location.state ? location.state.visaReady : null;
  const contratctCopy = location.state ? location.state.contratctCopy : null;
  const paymentCategory = location.state ? location.state.paymentCategory : null;
  const rib = location.state ? location.state.rib : null;
  const bankName = location.state ? location.state.bankName : null;
  const altenativeNameBank = location.state ? location.state.altenativeNameBank : null;
  const checkHolderName = location.state ? location.state.checkHolderName : null;
  const contractType = location.state ? location.state.contractType : null;
  const primeProductivity = location.state ? location.state.primeProductivity : null;
  const salary = location.state ? location.state.salary : null;
  const dailyRate = location.state ? location.state.dailyRate : null;
  const actStatus = location.state ? location.state.actStatus : null;
  const approvalStatus = location.state ? location.state.approvalStatus : null;
  const arDestination = location.state ? location.state.arDestination : null;
  const arName = location.state ? location.state.arName : null;
  const arPosition = location.state ? location.state.arPosition : null;
  const arResidenceAdress = location.state ? location.state.arResidenceAdress : null;
  const birthDate = location.state ? location.state.birthDate : null;
  const category = location.state ? location.state.category : null;
  const cin = location.state ? location.state.cin : null;
  const cinDate = location.state ? location.state.cinDate : null;
  const cnss = location.state ? location.state.cnss : null;
  const cnssCopy = location.state ? location.state.cnssCopy : null;
  const contractNumb = location.state ? location.state.contractNumb : null;
  const cvCopy = location.state ? location.state.cvCopy : null;
  const dateVisa = location.state ? location.state.dateVisa : null;
  const deductionAmount = location.state ? location.state.deductionAmount : null;
  const desertPass_finish_date = location.state ? location.state.desertPass_finish_date : null;
  const desert_pass = location.state ? location.state.desert_pass : null;
  const duration = location.state ? location.duration : null;
  const email = location.state ? location.email : null;
  const emergencyName = location.state ? location.emergencyName : null;
  const emergencyRelation = location.state ? location.emergencyRelation : null;
  const endTravelDate = location.state ? location.endTravelDate : null;
  const exitRentryType = location.state ? location.exitRentryType : null;
  const exitRentry_finish_date = location.state ? location.exitRentry_finish_date : null;
  const exrentry_date = location.state ? location.exrentry_date : null;
  const finalVisaReceive = location.state ? location.finalVisaReceive : null;
  const finalVisaReceiveDate = location.state ? location.finalVisaReceiveDate : null;
  const finishDate = location.state ? location.finishDate : null;
  const finishDateVisa = location.state ? location.finishDateVisa : null;
  const gender = location.state ? location.gender : null;
  const joinDate = location.state ? location.joinDate : null;
  const nationality = location.state ? location.nationality : null;
  const nbExperience = location.state ? location.nbExperience : null;
  const passportCopy = location.state ? location.passportCopy : null;
  const passportSubmit = location.state ? location.passportSubmit : null;
  const passportSubmitdate = location.state ? location.passportSubmitdate : null;
  const passport_finish_date = location.state ? location.passport_finish_date : null;
  const passportnumber = location.state ? location.passportnumber : null;
  const paymentType = location.state ? location.paymentType : null;
  const phoneEmergency = location.state ? location.phoneEmergency : null;
  const phoneNumber = location.state ? location.phoneNumber : null;
  const requestSendVisa = location.state ? location.requestSendVisa : null;
  const residance_finish_date = location.state ? location.residance_finish_date : null;
  const residenceAdress = location.state ? location.residenceAdress : null;
  const toApplyForVisa = location.state ? location.toApplyForVisa : null;
  const type_Emp = location.state ? location.type_Emp : null;
  const vCableReceive = location.state ? location.vCableReceive : null;
  const vCabledate = location.state ? location.vCabledate : null;
  const visa_Nb = location.state ? location.visa_Nb : null;



  const [selectedTypePayment, setSelectedTypePayment] = useState("Default");
  const [selectedBankName, setSelectedBankName] = useState("");
  const [selectedCompanyType, setSelectedCompanyType] = useState(companyType);
  const [newpaymentCategory, setNewpaymentCategory] = useState(paymentCategory);
  const [newbankName, setNewbankName] = useState(bankName);
  const [newAlternativename, setNewAlternativename] = useState(altenativeNameBank);
  const [newcontratctCopy, setNewcontratctCopy] = useState(contratctCopy);
  const [newrib, setNewrib] = useState(rib);
  const [newcheckHolderName, setNewcheckHolderName] = useState(checkHolderName);
  const handlePaymentType = (value) => {
    setSelectedTypePayment(value);
  };
  const handleBankName = (value) => {
    setSelectedBankName(value);
  };
  const handleCompanyType = (value) => {
    setSelectedCompanyType(value);
  };
  const goBack = () => {
    navigate(-1)

  }
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Employee Gets ',
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
  const openNotificationUpdate = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update',
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
      description: 'Error Save',
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
  const TypePayment = [
    { type: 'Check' },
    { type: 'Bank Transfer' },

  ];
  const BankName = [
    { name: 'Poste' },
    { name: 'BT' },
    { name: 'attijari bank' },
    { name: 'Zitouna' },
    { name: 'STB' },

  ];
  const CompanyType = [
    { Type: 'Gets Company' },
    { Type: 'Trade' },


  ];
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/update?id=${id}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          id: id,
          name: name,
          position: position,
          destination: destination,
          traveldate: traveldate,
          companyType: selectedCompanyType,
          contractCategory: contractCategory,
          familyStatus: familyStatus,
          contratctCopy: newcontratctCopy,
          visaReady: visaReady,
          departement: departement,
          checkHolderName: newcheckHolderName,
          PaymentType: selectedTypePayment,
          contractType: contractType,
          primeProductivity: primeProductivity,
          salary: salary,
          dailyRate: dailyRate,
          // idVisa,
          // arName,
          // arPosition,
          // arDestination,
          // nbchildren,
          // actStatus,
          // phoneNumber,
          // email,
          // joinDate,
          // finishDate,
          // nationality,
          // passport_finish_date,
          // residance_finish_date,
          // exitRentry_finish_date,
          // desertPass_finish_date,
          // exrentry_date,
          // birthDate,
          // nbExperience,
          // cnss,
          // passportnumber,
          // phoneEmergency,
          // contractType,
          // contractNumb,
          // getsEmail,
          // desert_pass,
          // visa_Nb,
          // type_Emp,
          // toApplyForVisa,
          // requestSendVisa,
          // dateVisa,
          // vCableReceive,
          // vCabledate,
          // passportSubmit,
          // passportSubmitdate,
          // endTravelDate:newEndtravelDate,
          // finalVisaReceive,
          // finalVisaReceiveDate,
          // finishDateVisa,
          // idJoys, exitRentryType,
          // cin, gender, residenceAdress,
          // arResidenceAdress, salary, duration,
          // emergencyName, emergencyRelation,
          rib: newrib,
          bankName: selectedBankName

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("eerrrr",responseData)
        openNotificationUpdate('bottomRight')
        // setDataEdit(responseData)
        // window.location.reload();
        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //Add Employee Gets 
  const AddEmployeesGets = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/create`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },

        body: JSON.stringify({

          name: name,
          departement: departement,
          familyStatus: familyStatus,
          position: position,
          destination: destination,
          traveldate: traveldate,
          companyType: selectedCompanyType,
          paymentCategory: newpaymentCategory,
          visaReady: visaReady,
          bankName: selectedBankName,
          rib: newrib,
          altenativeNameBank: newAlternativename,
          contratctCopy: newcontratctCopy,
          contractCategory: contractCategory,
          actStatus: actStatus,
          approvalStatus: approvalStatus,
          arDestination: arDestination,
          arName: arName,
          arPosition: arPosition,
          arResidenceAdress: arResidenceAdress,
          birthDate: birthDate,
          category: category,
          checkHolderName: checkHolderName,
          cin: cin,
          cinDate: cinDate,
          cnss: cnss,
          cnssCopy: cnssCopy,
          contractNumb: contractNumb,
          cvCopy: cvCopy,
          dailyRate: dailyRate,
          dateVisa: dateVisa,
          departement: departement,
          deductionAmount: deductionAmount,
          desertPass_finish_date: desertPass_finish_date,
          desert_pass: desert_pass,
          duration: duration,
          email: email,
          emergencyName: emergencyName,
          emergencyRelation: emergencyRelation,
          endTravelDate: endTravelDate,
          exitRentryType: exitRentryType,
          exitRentry_finish_date: exitRentry_finish_date,
          exrentry_date: exrentry_date,
          finalVisaReceive: finalVisaReceive,
          finalVisaReceiveDate: finalVisaReceiveDate,
          finishDate: finishDate,
          finishDateVisa: finishDateVisa,
          gender: gender,
          joinDate: joinDate,
          nationality: nationality,
          nbExperience: nbExperience,
          passportCopy: passportCopy,
          passportSubmit: passportSubmit,
          passportSubmitdate: passportSubmitdate,
          passport_finish_date: passport_finish_date,
          passportnumber: passportnumber,
          paymentType: paymentType,
          phoneEmergency: phoneEmergency,
          phoneNumber: phoneNumber,
          requestSendVisa: requestSendVisa,
          residance_finish_date: residance_finish_date,
          residenceAdress: residenceAdress,
          salary: salary,
          toApplyForVisa: toApplyForVisa,
          type_Emp: type_Emp,
          vCableReceive: vCableReceive,
          vCabledate: vCabledate,
          visa_Nb: visa_Nb

          // idVisa,
          // arName,
          // arPosition,
          // arDestination,
          // nbchildren,
          // actStatus,
          // phoneNumber,
          // email,
          // joinDate,
          // finishDate,
          // nationality,
          // passport_finish_date,
          // residance_finish_date,
          // exitRentry_finish_date,
          // desertPass_finish_date,
          // exrentry_date,
          // birthDate,
          // nbExperience,
          // cnss,
          // passportnumber,
          // phoneEmergency,
          // contractType,
          // contractNumb,
          // getsEmail,
          // desert_pass,
          // visa_Nb,
          // type_Emp,
          // toApplyForVisa,
          // requestSendVisa,
          // dateVisa,
          // vCableReceive,
          // vCabledate,
          // passportSubmit,
          // passportSubmitdate,
          // endTravelDate,
          // finalVisaReceive,
          // finalVisaReceiveDate,
          // finishDateVisa,
          // idJoys, exitRentryType,
          // cin, gender, residenceAdress,
          // arResidenceAdress, salary, duration,
          // emergencyName, emergencyRelation

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("testttttttt Contart List", responseData)
        openNotification('bottomRight')
        // handleAddContactClose(true)

      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur Add EmployeeS Gets:", error);
    }
  };
  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>


      <>

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
              <Typography.Title level={4}>Contract and Financial Data</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Contract && Financial Data</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12} >
                    <Form.Item label='Gets Id' name='GetsId'>
                      <Input
                        className='Input'
                        placeholder={id}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Name' name='name'>
                      <Input
                        className='Input'
                        placeholder={name}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Position:' name='position'>
                      <Input
                        className='Input'
                        placeholder={position}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Payment Category :' name='paymentCategory'>
                      <Input
                        className='Input'
                        placeholder={paymentCategory}
                        value={newpaymentCategory}
                        onChange={(e) => setNewpaymentCategory(e.target.value)} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item
                      label='Payment Type :'
                      name="PaymentType"

                      rules={[{ required: true, message: 'Please select PaymentType' }]}
                    >
                      <Select
                        onChange={handlePaymentType}
                        placeholder="Payment Type"
                        allowClear>
                        {TypePayment.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  {/*Selectionner PaymentType*/}
                  {selectedTypePayment === "Check" &&
                    <Col xs={24} md={12} >
                      <Form.Item label='Check Holder Name :' name='CheckHolderName'>
                        <Input
                          className='Input'
                          placeholder="Check Holder Name"
                          value={newcheckHolderName}
                          onChange={(e) => setNewcheckHolderName(e.target.value)}
                        />
                      </Form.Item>
                    </Col>




                  }
                  {selectedTypePayment === "Bank Transfer" &&
                    <>
                      <Col xs={24} md={12} >
                        <Form.Item label='Bank Account :' name='Bank Account'>
                          <Input
                            className='Input'
                            placeholder={rib}
                            value={newrib}
                            onChange={(e) => setNewrib(e.target.value)}
                          />
                        </Form.Item>
                      </Col>


                      <Col xs={24} md={12} >
                        <Form.Item
                          label='Bank Name :'
                          name="Bank Name"

                          rules={[{ required: true, message: 'Please select Bank Name' }]}
                        >
                          <Select
                            onChange={handleBankName}
                            placeholder="Bank Name"
                            defaultValue={bankName}
                            allowClear>
                            {BankName.map(p => (
                              <Option key={p.name} value={p.name}>
                                {p.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} >
                        <Form.Item label='Alternative name for Bank Account :' name='Alternativename'>
                          <Input
                            className='Input'
                            placeholder={altenativeNameBank}
                            value={newAlternativename}

                            onChange={(e) => setNewAlternativename(e.target.value)}

                          />
                        </Form.Item>
                      </Col>
                    </>


                  }



                  {/*End Selectionner PaymentType*/}

                  <Col xs={24} md={12} >
                    <Form.Item
                      label='Company Type :'
                      name="companyType"
                      defaultValue={companyType}
                      rules={[{ required: true, message: 'Please select Company Type' }]}
                    >
                      <Select
                        onChange={handleCompanyType}
                        placeholder="Company Type"
                        defaultOpen={selectedCompanyType}
                        allowClear>
                        {CompanyType.map(p => (
                          <Option key={p.Type} value={p.Type}>
                            {p.Type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>



                  <Col xs={24} md={12} >
                    <Form.Item label='Contract Category' name='contractCategory'>
                      <Input
                        className='Input'
                        placeholder={contractCategory}
                        readOnly={true} />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12} >
                    <Form.Item label='Scanned Contract Nextcloud link' name='Scanned'>
                      <Input
                        className='Input'
                        placeholder={contratctCopy}
                        value={newcontratctCopy}
                        onChange={(e) => setNewcontratctCopy(e.target.value)} />
                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <h2 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "20px" }}>Please insert the scanned contract link and after save & confirm a GETS ID will be generated</h2>

          <StyledContactFormFooter>

            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={goBack}

            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={() => Update()}
            >
              <IntlMessages id='common.Edit' />
            </StyledContactFormBtn>
            <StyledContactFormBtn
              type='primary'
              ghost
              disabled={newcontratctCopy == ''}
              onClick={AddEmployeesGets}
            >
              <IntlMessages id='Comfirm & save' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </Form>

      </>
















    </div>

  );
};


export default UploadContractList;
