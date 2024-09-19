import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, Col,notification } from 'antd';

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
  StyledScrumBoardDatePicker,
} from './index.styled';
import FloatLabel from "./FloatLabel";


import AppCard from '../../../@crema/components/AppCard';

const EditTravel = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    josId,
    desertPassfinishdate,
    idTravel,
    dateOfTravel,
    travelFromTo,
    projName,
    name,
    actualLocationFrom,
    actualLocationTo,
    bookingStatusDesert,
    bookingStatusJoys,
    dateDemob,
    dateMob,
    dateTravelDesert,
    dateTravelJoys,
    dayRest,
    daySinceMob,
    departureDateFromFiled,
    goBack,
    idendityCopy,
    refTicket,
    returnDateIfRound,
    rich_DateToSite,
    round,
    ticketRef,
    tripTypeDesert,
    tripTypeJoys,
    type,
    inputDate,
    getsId,
    position,
    endDateMiss,




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

  const { messages } = useIntl();
  const token = localStorage.getItem("token");
 console.log("josIdnnnnn",josId)
  const [newidjos, setNewidjos] = useState(josId);
  const [newExpiryDate, setNewExpiryDate] = useState(desertPassfinishdate);
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
      description: 'Error Update  Desert Pass',
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
      description: 'Success Desert Pass',
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
    console.log("uodate")
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/updateTr?id=${idTravel}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          idTravel: idTravel,
          josId:josId,
          desertPass_finish_date:newExpiryDate,
          dateOfTravel: dateOfTravel,
          travelFromTo: travelFromTo,
          projName: projName,
          name: name,
          actualLocationFrom: actualLocationFrom,
          actualLocationTo: actualLocationTo,
          bookingStatusDesert: bookingStatusDesert,
          bookingStatusJoys: bookingStatusJoys,
          dateDemob: dateDemob,
          dateMob: dateMob,
          dateTravelDesert: dateTravelDesert,
          dateTravelJoys: dateTravelJoys,
          dayRest: dayRest,
          daySinceMob: daySinceMob,
          departureDateFromFiled: departureDateFromFiled,
          goBack: goBack,
          idendityCopy: idendityCopy,
          refTicket: refTicket,
          returnDateIfRound: returnDateIfRound,
          rich_DateToSite: rich_DateToSite,
          round: round,
          ticketRef: ticketRef,
          tripTypeDesert: tripTypeDesert,
          tripTypeJoys: tripTypeJoys,
          type: type,
          inputDate: inputDate,
          getsId: getsId,
          position: position,
          endDateMiss: endDateMiss


        })
      });
     

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();    
        openNotification('bottomRight')
        // window.location.reload();
     
          setTimeout(() => {
              window.location.reload();
          }, 2000); // 2000 milliseconds = 2 seconds
    
      
      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  useEffect(() => {

  }, [josId, desertPassfinishdate, newidjos]);
  const handleExpiryDateChange = (value) => {
    setNewExpiryDate(value); 
  };
  const handleNewJosId= (value) => {
    setNewidjos(value); 
  };
  console.log("newExpiryDate", newExpiryDate)
  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >

              <p className='TitleModal'>SITE CLERCK SHALL INSERT THE DESERT PASS ID AND EXPIRY DATE OF EACH EMPLOYEE AS PER THE ASSIGNED PROJECT</p>

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
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
              <p className='SousTitle'>Update </p>
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className='form-field'>
                <FloatLabel name="Id Jos">
                  <span className='modallabel'> Id Jos:</span>
                  <Input
                    className='Input'
                    placeholder={josId}
                    classNames="ViewInput"
                    readOnly

                    
                    
                
                    // onChange={(e) => setNewidjos(e.target.value)}

                  // value={newidemp}
                  // onChange={(e) =>setNewidemp(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>

              <span className='modallabel'> Expiry Date :</span>
              <Form.Item name='Expiry Date'>

                <StyledScrumBoardDatePicker
                 placeholder={desertPassfinishdate}
                  value={newExpiryDate}
                  onChange={handleExpiryDateChange} 
                   
                 
                />
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
            <p style={{ textAlign: "center", paddingTop: "9px" }}>Cancel</p>
            {/* <IntlMessages id='common.cancel' /> */}
          </StyledContactFormBtn>

          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={() => Update()}>


            <p style={{ textAlign: "center", paddingTop: "9px" }}>Update</p>
            {/* <IntlMessages id='common.cancel' /> */}
          </StyledContactFormBtn>

        </StyledContactFormFooter>

      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default EditTravel;

