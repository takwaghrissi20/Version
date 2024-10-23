import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { useIntl } from 'react-intl';
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../../@crema/components/AppConfirmationModal';
import AppPageMeta from '../../../../../../@crema/components/AppPageMeta';
import { useLocation } from 'react-router-dom';

import { useRef } from 'react';
const ViewHeath = () => {
  const location = useLocation();
  const [form] = Form.useForm();
  const id = location.state ? location.state.idv: null;
  const  getsid = location.state ? location.state. getsid: null;
  const  name = location.state ? location.state.name : null;
  const   projName = location.state ? location.state. projName : null;
  const   vaccinType = location.state ? location.state. vaccinType : null;
  const   typeCorona = location.state ? location.state. typeCorona : null;
  const   corona1Date = location.state ? location.state.corona1Date : null;
  const   corona2Date = location.state ? location.state. corona2Date : null;
 
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  
  
  }

  return (
    <>  
      <AppPageMeta title='Add Covid Vaccin' />
      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault() }}
     
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>View Covi Vaccin</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Assigned Person Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input placeholder={"Vaccin-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsid}
                      readOnly
                     />
                  </Form.Item>
                </Col>
             
               
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Divider style={{ marginTop: 16, marginBottom: 16 }} />
     
             
             
  
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
       <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Covid Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
              <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='Project Name'>
                    <Input
                      className='Input'
                      placeholder={projName}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Type Vaccin:' name='Type Vaccin:'>
                    <Input
                      className='Input'
                      placeholder={vaccinType}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Corona Type:' name='Corona Type:'>
                    <Input
                      className='Input'
                      placeholder={typeCorona}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='First Dose Covid Date :' name='First Dose Covid Date:'>
                    <Input
                      className='Input'
                      placeholder={corona1Date}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Second Dose Covid Date:' name='Date Of Second Test:'>
                    <Input
                      className='Input'
                      placeholder={corona2Date}
                      readOnly />
                  </Form.Item>
                </Col>
              
               
                
          
      
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
     
        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button 
           onClick={goBack}
          
          >Cancel</Button>
       
        </Space>
      </Form>
  
  
    </>
  );
};

export default ViewHeath ;
