import React, { useState } from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography } from 'antd';
import {
  StyledSecondaryText,
  StyledSecondaryText1,
  StyledShadowWrapper,
} from '../index.styled';
import { MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

const Accounting = ({ settings, onUpdateSettings }) => {


  return (
    <Form
      initialValues={settings}
      layout='vertical'
      onFinish={(data) => {
        onUpdateSettings('accounting', data);
      
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={4}>Accounting Settings</Typography.Title>
          <StyledSecondaryText>
            Manage your accounting settings
          </StyledSecondaryText>
        </div>
       
      </div>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Bank Details</Typography.Title>
          <StyledSecondaryText1>
            View/Edit your bank details.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Account Holder' name='accountHolder'>
                  <Input placeholder='Account Holder' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Bank Name' name='bankName'>
                  <Input placeholder='Bank Name'  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Country of bank' name='countryOfBank'>
                  <Input placeholder='Country of bank'  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Account Number' name='accountNumber'>
                  <Input.Password
                    placeholder='Account Number'
                    readOnly={!isEdit}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Swift Bic' name='swiftBic'>
                  <Input.Password placeholder='Swift Bic' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='IFSC' name='ifsc'>
                  <Input placeholder='IFSC'  />
                </Form.Item>
              </Col>
            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Taxes</Typography.Title>
          <StyledSecondaryText1>Update your tax rates.</StyledSecondaryText1>
        </Col>

        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Tax ID' name='taxId'>
                  <Input placeholder='Tax ID' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='VAT ID' name='vatId'>
                  <Input placeholder='VAT ID'  />
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
          <Button >Cancel</Button>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </Space>
  
    </Form>
  );
};


export default Accounting;
