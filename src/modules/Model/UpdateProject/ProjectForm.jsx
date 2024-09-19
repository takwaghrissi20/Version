import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Col,notification,Row } from 'antd';
import AppCard from '../../../@crema/components/AppCard';
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
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { DatePicker, Space ,Button} from 'antd';
import dayjs from 'dayjs';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
const ProjectForm = (props) => {
  const {
    setUserImage,

  handleProjetClose,
    findIdData,
    projName

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
  const token = localStorage.getItem("token")
  const { messages } = useIntl();
  const [newDateJointCandidate, setnewDateJointCandidate] = useState(findIdData?.agreedJoinedDate);
  const [selectedFedback, setSelectedFedback] = useState("Default");
  const Fedback = [
    { Fedback: 'Accepted Offer' },
    { Fedback: 'Not Accepted Offer' },];
  const handleFedback = (value) => {
    setSelectedFedback(value);
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Save Candidate Feedback After BOD Approval',
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
      description: 'Error Save Candidate Feedback After BOD Approval',
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


  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Projects Location Track Record</p>

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
              <p className='SousTitle'>Projet Information</p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="project Name">
                      <span className='modallabel'> project Name:</span>
                      <Input
                        className='Input'
                        placeholder={findIdData?.projName}
                        readOnly
                        
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
                
                         classNames="ViewInput"
                        
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
                  
                        classNames="ViewInput"
                   
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
                    
                        classNames="ViewInput"
                 
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
              onClick={handleProjetClose}
            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>

  );
};

export default ProjectForm;

