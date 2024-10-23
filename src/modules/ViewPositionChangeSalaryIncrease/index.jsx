
 import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, DatePicker, notification
  , Checkbox
} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import UpdateOfficeEmployee from "../../modules/Model/UpdateEmpAfterIncrese"
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '../../@crema/helpers/IntlMessages';
import { useLocation } from 'react-router-dom';
const ViewSalary = () => {
  const navigate = useNavigate();
  ///////////////////////
  const location = useLocation();
  const  id=location.state ? location.state.id : null;
  const  findIdData=location.state ? location.state.findIdData: null;
  const [form] = Form.useForm();
  const handleCancel = () => {
    //onCancel(true);

    navigate(-1)

  }
  return (
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
            <Typography.Title level={4}>Office-SALARY INCREASE _POSITION CHANGE</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Requestor</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12} >
                  <Form.Item label='Reference' name='Code'>
                    <Input placeholder={"SIF-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                    <Input

                      placeholder={findIdData?.inputDate}
                      readOnly />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Id Requestor' name='idRequestor'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.idRequestor}
                      readOnly
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='PersonName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.nameRequestor}
                      readOnly />
                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>DESIGNATED EMPLOYEE DETAILS</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>


                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='GetsidEmployee '>
                    <Input
                      className='Input'
                      placeholder={findIdData?.getsId} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Name' name='EmployeeName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Assignement Project' name='Assignement Project'
  
                    >
                   <Input
                      className='Input'
                      placeholder={findIdData?.assignementProject}
                      readOnly />




                  </Form.Item>
                </Col>






              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>REQUEST TYPE</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >
                  <StyledShadowWrapper>
                    <AppRowContainer>

                      <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                        <StyledInput>
                          <Form.Item
                            label=''
                            name='REQUEST TYPE'>
                            <Checkbox checked={findIdData?.checkSalaryIncrease} >

                              <IntlMessages id='hr.Salaryincrease' />
                            </Checkbox>
                            <Checkbox checked={findIdData?.chekPositionChange}>
                              <IntlMessages id='hr.Positionchange' />
                            </Checkbox>
                            <Checkbox checked={findIdData?.checkBoth}>
                              <IntlMessages id='hr.Both' />
                            </Checkbox>
                          </Form.Item>
                        </StyledInput>
                      </Col>

                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>







              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> OLD DATA </Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='Actual Salary' name='ActualSalary'>
                    <Input
                      type='number'
                      className='Input'
                      placeholder={findIdData?.actualSalary}
                      readOnly/>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Last Increment Date'
                    name='Last Increment Date'
                   >
                     <Input                  
                      className='Input'
                      placeholder={findIdData?.lastIncrementDate}
                      readOnly/>

                  </Form.Item>
                </Col>



                <Col xs={24} md={12}>
                  <Form.Item label='Old Position' name='Old Position'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.actualPosition}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Actual Level'
                    name='ActualLevel'

                  >
                    <Input
                      className='Input'
                      placeholder={findIdData?.actualLevel}
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Actual Contract Type'
                    name='ActualContractType'

                  >
                    <Input
                    placeholder={findIdData?.actualContractType}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>  NEW DATA  </Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='New Requested Salary' name='NewRequestedSalary'>
                    <Input
                      type='number'
                      className='Input'
                      placeholder={findIdData?.newSalary}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='New Requested Level' name='New Requested Level'>
                        
                        <Input
               
                      className='Input'
                      placeholder={findIdData?.newLevel}
                      readOnly
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='New Contract Type' name='New Contract Type'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.newContractTYpe}
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Starting Date'
                    name='Starting Date'
                  >
                   <Input
                      className='Input'
                      placeholder={findIdData?.startDate}
                      readOnly
                    />

                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='New Position' name='NewPosition'

                   >
                     <Input
                      className='Input'
                      placeholder={findIdData?.newPosition}
                      readOnly />




                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Reason' name='Reason'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.reason}
                      readOnly
                

                    />
                  </Form.Item>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Head of dep*/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>HEAD OF DEPARTEMENT APPROVAL</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >


                  <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                    <StyledInput>
                      <Form.Item
                        label=''
                        name='Head departement'>
                        <Checkbox checked={findIdData?.headDeapAproval}>

                          <IntlMessages id='common.yes' />
                        </Checkbox>

                        <Checkbox checked={!findIdData?.headDeapAproval} >
                          <IntlMessages id='common.no' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>


                </Col>

                <Col xs={24} md={24} style={{ marginTop: "0.5rem" }}>
                  <Form.Item label='Decline Reason' name='DeclineReasonBOD'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.declineHofDepReson}
                      />
                  </Form.Item>
                </Col>




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*BOD aPPROVAL*/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>TOP MANAGEMENT DECISION</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >

                  <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                    <StyledInput>
                      <Form.Item
                        label=''
                        name='BOD departement'>
                        <Checkbox checked={findIdData?.managementDesision} >

                          <IntlMessages id='common.yes' />
                        </Checkbox>

                        <Checkbox checked={!findIdData?.managementDesision} >
                          <IntlMessages id='common.no' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>


                </Col>

                <Col xs={24} md={24} style={{ marginTop: "0.5rem" }}>
                  <Form.Item label='Decline Reason' name='DeclineReason'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.delineManageReason}
                    

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
          <Button onClick={handleCancel }>Cancel</Button>
     
        </Space>
      </Form>

    </>
  );
};

export default ViewSalary;
