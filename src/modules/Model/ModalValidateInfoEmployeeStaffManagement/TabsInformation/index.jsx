import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../@crema/helpers/IntlMessages'
import { Form, Input, Select, Col,Row } from 'antd';
import moment from 'moment';
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
  StyledContactValidationFormBtn,
  StyledContactGenerationFormBtn,
 

} from './index.styled';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import FloatLabel from "./FloatLabel";
import { Alert } from 'antd';
import { useNavigate } from "react-router-dom";



const TabsViewInformationForm = ({}) => {

 

  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <IntlMessages id='Validate Employee Information' />

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
              <IntlMessages id='Personal Employee Information' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
            <StyledBuyCellCard   style={{ paddingLeft: "10px",boxShadow: "none" }} heightFull>
      <StyledTabs style={{boxShadow:"none"}} defaultActiveKey='1' items={items} />
    </StyledBuyCellCard>

            <Row gutter={16}>
                <Col span={8}>
              <Form.Item
                className='form-field'>

                <FloatLabel name="name">
                  <span className='modallabel'> Full Name :</span>
                  <Input
                    className='Input'

                    placeholder="Full Name"
                    value={name}
                    classNames="ViewInput"
                    readOnly={true} />
                </FloatLabel>

              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <FloatLabel name="arName">
                  <span className='modallabel'> Arabic Full name :</span>
                  <Input
                    className='Input'
                    placeholder="Arabic Full name"
                    value={arName}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> ID Card Number :</span>
                <FloatLabel name="CIN">
                  <Input
                    className='Input'
                    placeholder="ID Card Number"
                    value={CIN}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> Date ID Card Number :</span>
                <FloatLabel name="DateCIN">
                  <Input
                    className='Input'
                    placeholder="Date ID Card Number"
                    value={cinDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'>Nationality :</span>

                <FloatLabel name="nationality">
                  <Input
                    className='Input'
                    value={nationality}
                    placeholder="Nationality"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'>Date of Birth :</span>

                <FloatLabel name="birthDate">
                  <Input
                    className='Input'
                    value={birthDate}
                    placeholder="Date of Birth"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
             
              </Row>
              <Row  gutter={16}>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'>Telephone :</span>
                <FloatLabel name="phoneNumber">
                  <Input
                    className='Input'
                    value={phoneNumber}
                    placeholder="Telephone"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'>Marital Status :</span>
                <FloatLabel name="familyStatus">
                  <Input
                    className='Input'
                    value={familyStatus}
                    classNames="ViewInput"
                    placeholder="Marital Status"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> Residence Address :</span>

                <FloatLabel name="residenceAdress">
                  <Input
                    className='Input'
                    value={residenceAdress}
                    classNames="ViewInput"
                    placeholder="Residence Address"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
      
          
            
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> Passport Number :</span>
                <FloatLabel name="passportnumber">
                  <Input
                    className='Input'
                    value={passportnumber}
                    placeholder="Passport Number"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> Date of issue:</span>
                <FloatLabel name="passportSubmitdate">
                  <Input
                    className='Input'
                    placeholder="Date of issue"
                    classNames="ViewInput"
                    value={passportSubmitdate}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={8}>
              <Form.Item className='form-field'>
                <span className='modallabel'> Date of expiry :</span>
                <FloatLabel name="passport_finish_date">
                  <Input
                    className='Input'
                    placeholder="Date of expiry"
                    value={passport_finish_date}
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              </Col>
              </Row>





              {/***/}
            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="Job Information" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
              <span className='modallabel'>Position To be filled :</span>
           
                <FloatLabel  name="position">
                  <Input
                    className='Input'
                    value={position}
                    placeholder="Position To be filled"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>Arabic Position To be filled :</span>
                <FloatLabel  name="arPosition">
                  <Input
                    className='Input'
                    value={arPosition}
                    placeholder="Arabic Position To be filled"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>Departement :</span>
                <FloatLabel  name="departement">
                  <Input
                    className='Input'
                    value={departement}
                    placeholder="Departement"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Employee Type :</span>
             
                <FloatLabel  name="type_Emp">
                  <Input
                    className='Input'
                    value={type_Emp}
                    placeholder="Employee Type"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Project Name :</span>
              
                <FloatLabel name="projName">
                  <Input
                    className='Input'
                    placeholder="Project Name"
                    value={projName}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> E-mail Address :</span>
              
                <FloatLabel  name="email">
                  <Input
                    className='Input'
                    value={email}
                    placeholder="E-mail Address"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Contract start date :</span>
                <FloatLabel  name="joinDate">
                  <Input
                    className='Input'
                    value={joinDate}
                    placeholder="Contract start date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Contract End date :</span>
                <FloatLabel  name="finishDate">
                  <Input
                    className='Input'
                    value={finishDate}
                    placeholder="Contract End date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Company Type :</span>
                <FloatLabel  name="companyType">
                  <Input
                    className='Input'
                    value={companyType}
                    placeholder="companyType"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>Travel Date :</span>
             
                <FloatLabel  name="traveldate">
                  <Input
                    className='Input'
                    value={traveldate}
                    placeholder="Travel Date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>Travel End Date :</span>
              
                <FloatLabel  name="endTravelDate">
                  <Input
                    className='Input'
                    value={endTravelDate}
                    placeholder="Travel End Date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Location :</span>
             
                <FloatLabel  name="destination">
                  <Input
                    className='Input'
                    value={destination}
                    placeholder="Location"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Arabic Location:</span>
              
                <FloatLabel  name="arDestination">
                  <Input
                    className='Input'
                    value={destination}
                    placeholder="Arabic Location"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>Approved Office Salary :</span>
                <FloatLabel  name="salary">
                  <Input
                    className='Input'
                    value={salary}
                    placeholder="Approved Office Salary"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'>dailyRate :</span>
              
                <FloatLabel  name="dailyRate">
                  <Input
                    className='Input'
                    value={dailyRate}
                    placeholder="dailyRate"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              {/* <Form.Item className='form-field'>
              <span className='modallabel'> Contrat Type :</span>
             
                <FloatLabel name="contractType">
                  <Input
                    className='Input'
                    value={contractType}
                    placeholder="Contrat Type"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              <Form.Item className='form-field'>
              <span className='modallabel'> Duration:</span>
                <FloatLabel  name="duration">
                  <Input
                    className='Input'
                    value={duration}
                    placeholder="Duration"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
            </StyledContactFormContentField>


          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="EMERGENCY Contact Information" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
              <span className='modallabel'> Emergency Full Name:</span>
                <FloatLabel  name="emergencyName">
                  <Input
                    className='Input'
                    value={emergencyName}
                    placeholder="Emergency Full Name"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> RelationShip :</span>
                <FloatLabel  name="emergencyRelation">
                  <Input
                    className='Input'
                    placeholder="RelationShip"
                    value={emergencyRelation}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <span className='modallabel'> Emergency Telephone :</span>
                <FloatLabel  name="phoneEmergency">
                  <Input
                    className='Input'
                    value={phoneEmergency}
                    placeholder="Emergency Telephone"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


            </StyledContactFormContentField>
          </StyledContactFormContentItem>
          {/* <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="Contract Categorie" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
              <span className='modallabel'> Contract Category :</span>
                <FloatLabel  name="contractCategory">
                  <Input
                    className='Input'
                    value={contractCategory}
                    placeholder="Contract Category"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField>


          </StyledContactFormContentItem> */}

        </StyledContactFormContent>
        <h2 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "25px", color: "#317AC1" }}>Please Review The employee Information </h2>


        <StyledContactFormFooter style={{marginTop:"20px"}}>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            <IntlMessages id='common.cancel' />
          </StyledContactFormBtn>

          <StyledContactValidationFormBtn
           type='Button'
            ghost
            onClick={SaveEmployees}>

            <IntlMessages id='common.Validate' />
          </StyledContactValidationFormBtn>
          {/* <StyledContactFormBtn
            type='primary'
            ghost
            onClick={SaveEmployees}
          >
            <IntlMessages id='common.Validate' />
          </StyledContactFormBtn> */}
          {/* <StyledContactGenerationFormBtn
             type='Button'
            disabled={!generateBtnEnabled}
            onClick={SelectionnnerContrat}
          >
            Generate
          </StyledContactGenerationFormBtn> */}
          {/* <StyledContactFormBtn
            type='primary'
            ghost
            disabled={!generateBtnEnabled} 
            onClick={SelectionnnerContrat}
        
          
          >
            <IntlMessages id='common.Generate' />
          </StyledContactFormBtn> */}
        </StyledContactFormFooter>
        {showAlert && (
          <Alert
            message="Success"
            description="Employee data saved successfully"
            type="success"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            style={{ marginBottom: 16, marginTop: 20, height: 100 }}
          />
        )}
        {showAlertError && (
          <Alert
            message="Failed"
            description="Employee data saved Failed"
            type="error"
            showIcon
            closable
            onClose={() => setShowAlertError(false)}

          />
        )}
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default TabsViewInformationForm;


