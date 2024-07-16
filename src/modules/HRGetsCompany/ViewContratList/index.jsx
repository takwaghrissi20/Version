import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography } from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
} from '../../../styles/index.styled';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ViewContratList = () => {
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
  const contractCategory = location.state ? location.state. contractCategory : null;
  const visaReady= location.state ? location.state.visaReady : null;
  const contratctCopy= location.state ? location.state. contratctCopy: null;
 
  const goBack = () => {
    navigate(-1)

  }
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
              <Typography.Title level={4}>Contrat List</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Employee.Information</Typography.Title>
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
                    <Form.Item label='Departement' name='departement'>
                      <Input
                        className='Input'
                        placeholder={departement}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Family Status:' name='familyStatus'>
                      <Input
                        className='Input'
                        placeholder={familyStatus}
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









                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Contarct Information</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12} >
                    <Form.Item label='Travel Date' name='traveldate'>
                      <Input
                        className='Input'
                        placeholder={traveldate}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Destination' name='destination'>
                      <Input
                        className='Input'
                        placeholder={destination}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Company Type ' name='companyType'>
                      <Input
                        className='Input'
                        placeholder={companyType}
                        readOnly={true} />
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
                    <Form.Item label='Visa Ready' name='visaReady'>
                      <Input
                        className='Input'
                        placeholder={visaReady}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} >
                    <Form.Item label='Contratct Copy' name='contratctCopy'>
                      <Input
                        className='Input'
                        placeholder={contratctCopy}
                        readOnly={true} />
                    </Form.Item>
                  </Col>


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



          </Space>
        </Form>

      </>
















    </div>

  );
};


export default ViewContratList;
