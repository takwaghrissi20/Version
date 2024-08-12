import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, notification, Checkbox, DatePicker, InputNumber } from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from './index.styled';

import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const GenerateContract = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const name = location.state ? location.state.name : null;
  const  category = location.state ? location.state. category : null;
  const  contractType = location.state ? location.state. contractType : null;
  const  contractCategory = location.state ? location.state. contractCategory : null;
  const   primeProductivity = location.state ? location.state.  primeProductivity: null;

 console.log("ame",name)

  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
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
            <Typography.Title level={4}>Generate Contract Categorie</Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Contract Categorie For : <span>Type</span></Typography.Title>


          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Name :' 
                  name='Name :'
                   

                  >
                    <Input
                      className='Name'
                      placeholder={name}
    
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Type Contract :' name='Type Contract'
                  >
                    <Input
                      className='Input'
                      type="number"
                      placeholder="Type Contract :"
                
                    />
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
          <Button  >Cancel</Button>
          <Button
     
            type='primary'
            htmlType='submit'>
            Save

          </Button>
        </Space>

      </Form>




    </div>

  );
};


export default GenerateContract;
