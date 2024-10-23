import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, Col } from 'antd';

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
} from './index.styled';
import FloatLabel from "./FloatLabel";


import AppCard from '../../../@crema/components/AppCard';

const EmpViewForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    getsId,
    nationality,
    birthDate,
    familyStatus,
    phoneNumber,
    joinDate,
    companyType,
    finishDate,
    actStatus,
    position,
    getsEmail,
    name,
    passportnumber,
    cnss,
    contractNumb,
    cvCopy,
    passportCopy,
    traveldate,
    projName,
    destination,
    findIdDataMatriel,
    findIdDataTravel

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


  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Sammary</p>

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
              <p className='SousTitle'>Personnal Information</p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Gets Id">
                      <span className='modallabel'> Gets Id :</span>
                      <Input
                        className='Input'
                        placeholder="Gets Id"
                        value={getsId}
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="name">
                      <span className='modallabel'> Full Name :</span>
                      <Input
                        className='Input'
                        placeholder="Full Name"
                        value={name}
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Nationality">
                      <span className='modallabel'> Nationality :</span>
                      <Input
                        className='Input'
                        placeholder="Nationality"
                        value={nationality}
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
                    <FloatLabel name="Databirth">
                      <span className='modallabel'> Date Of Birth :</span>
                      <Input
                        className='Input'
                        placeholder="Date Of Birth"
                        value={birthDate}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>

                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="familyStatus">
                      <span className='modallabel'> Marital Status :</span>
                      <Input
                        className='Input'
                        placeholder="Marital Status"
                        value={familyStatus}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="phoneNumber">
                      <span className='modallabel'>Tel Number :</span>
                      <Input
                        className='Input'
                        placeholder="Tel Number"
                        value={phoneNumber}
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
                    <FloatLabel name="phoneNumber">
                      <span className='modallabel'>Join Date :</span>
                      <Input
                        className='Input'
                        placeholder="Join Date"
                        value={joinDate}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="companyType">
                      <span className='modallabel'>Company Name :</span>
                      <Input
                        className='Input'
                        placeholder="Company Name"
                        value={companyType}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finishDate">
                      <span className='modallabel'>End Contract :</span>
                      <Input
                        className='Input'
                        placeholder="End Contract"
                        value={finishDate}
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
                    <FloatLabel name="actStatus">
                      <span className='modallabel'>Actual Status :</span>
                      <Input
                        className='Input'
                        placeholder="Actual Status"
                        value={actStatus}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="position">
                      <span className='modallabel'>Position :</span>
                      <Input
                        className='Input'
                        placeholder="Position"
                        value={position}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="getsEmail">
                      <span className='modallabel'>E-mail Adress :</span>
                      <Input
                        className='Input'
                        placeholder="E-mail Adress"
                        value={getsEmail}
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
                    <FloatLabel name="passportnumber">
                      <span className='modallabel'>Passport Number :</span>
                      <Input
                        className='Input'
                        placeholder="Passport Number"
                        value={passportnumber}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name=" passportCopy">
                      <span className='modallabel'>Passport Copy :</span>
                      <Input
                        className='Input'
                        placeholder="https://cloud.gets-company.com.tn/"
                        value={passportCopy}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="cnss">
                      <span className='modallabel'>CNSS Number :</span>
                      <Input
                        className='Input'
                        placeholder="CNSS Number"
                        value={cnss}
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
                    <FloatLabel name="contractNumb">
                      <span className='modallabel'>Contract Number :</span>
                      <Input
                        className='Input'
                        placeholder="Contract Number"
                        value={contractNumb}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="cvCopy">
                      <span className='modallabel'>CV :</span>
                      <Input
                        className='Input'
                        placeholder="https://cloud.gets-company.com.tn/"
                        value={cvCopy}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="CovidFirtsDoseDate">
                      <span className='modallabel'>Covid First Dose Date :</span>
                      <Input
                        className='Input'
                        placeholder="Covid First Dose Date"
                        value="Covid Firts Dose Date"
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
                <FloatLabel name="CovidSecondDoseDate">
                  <span className='modallabel'>Covid Second Dose Date :</span>
                  <Input
                    className='Input'
                    placeholder="Covid Second Dose Date"
                    value="Covid Scond Dose Date"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
                  </Col>
                  </Row>








            

            </StyledContactFormContentField>
          </StyledContactFormContentItem>
      

          <StyledContactFormFooter>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={handleAddContactClose}
            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default EmpViewForm;

