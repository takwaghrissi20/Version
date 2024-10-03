import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, Col, Alert, DatePicker,notification } from 'antd';

import {
  StyledContactForm,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
  StyledContactGenerationFormBtn,
  StyledValidateContactFormBtn

} from './index.styled';
import FloatLabel from "./FloatLabel";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';


const UpdateVisa = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    dateemp,
    token
   


  } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });
 
  const [newPassportDate, setNewPassportDate] = useState(dayjs(dateemp?.passport_finish_date));
  ////////////////////Update Date Visa Expired
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Update Date Passport Finish',
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
      description: 'Success Update Date Passport Finish :',
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
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update?token=${token}&id=${dateemp?.getsId}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          getsId:dateemp?.getsId,
          passport_finish_date:newPassportDate,
          finishDateVisa:dateemp?.finishDateVisa,
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
          finishDate: dateemp?.finishDate,
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
          settelment: dateemp?.settelment,
          lastMonth: dateemp?.lastMonth,
          rib: dateemp?.rib,
          altenativeNameBank: dateemp?.altenativeNameBank,
          paymentCategory: dateemp?.paymentCategory,
          paymentType: dateemp?.paymentType,
          checkHolderName: dateemp?.checkHolderName
          

        })
      });

      if (!response.ok) {     
        openNotificationError('bottomRight')
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        handleAddContactClose()
        setTimeout(() => {
          window.location.reload();              
        }, 100);
 
      
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Update Passport Will Be Expired After 15 Days</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledContactFormHeaderTitle>

        </StyledContactFormHeaderTitle>

      </StyledContactFormHeader>
      <StyledContactModalScrollbar>
      <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Passport Date Information</p>

           
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>


              <Form.Item className='form-field'>
                <FloatLabel name="Gest Id ">
                  <span className='modallabel'> Gest Id :</span>
                  <Input
                    className='Input'
                    placeholder={dateemp?.getsId}
                    readOnly
                   
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Interview Date">
                  <span className='modallabel'> Date Passport Finish :</span>
                  <DatePicker
                    className='Input'
                    style={{height:"2rem",marginTop:"0.75rem"}}
                    placeholder={dateemp?.passport_finish_date}
                     onChange={(value) => setNewPassportDate(dayjs(value))}
                     value={newPassportDate}
                    classNames="ViewInput"


                  />
                </FloatLabel>
              </Form.Item>
             

            </StyledContactFormContentField>

          </StyledContactFormContentItem>
  

        </StyledContactFormContent>
        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            <p style={{ textAlign: "center", paddingTop: "9px" }}>Cancel </p>
          </StyledContactFormBtn>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={() => Update()} 
          >
            <IntlMessages id='common.Edit' />
          </StyledContactFormBtn>

        </StyledContactFormFooter>
        </StyledContactModalScrollbar>
     

    </StyledContactForm>
  );
};

export default UpdateVisa;

