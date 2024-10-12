import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, DatePicker,notification
  ,Checkbox} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import { useLocation } from 'react-router-dom';
const ViewTransfer = () => { 
   const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem("role");
  const id = location.state ? location.state.id : null;
  const    findIdData = location.state ? location.state.findIdData :null;


  
  const handleCancelTransfer = () => {
      navigate(-1)
  }
  useEffect(() => {

    

  }, []);




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
            <Typography.Title level={4}>Employee Transfer Permission</Typography.Title>
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
                  <Form.Item  label='Reference' name='Code'>
                    <Input placeholder={"ETP-" + id} 
                    readOnly={true} />
                  </Form.Item>
                </Col>
                <Col  xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                  <Input
                      
                      placeholder={findIdData?.inputDate}
                      readOnly
                     
                     />

                  
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Id Requestor' name='idRequestor'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.empId}
                      readOnly
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='PersonName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.requestor}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Position' name='Function'>
                    <Input
                      readOnly={true}
                      placeholder={findIdData?.position}
                      className='Input'
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
            <Typography.Title level={5}>Employee Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
               
                    
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='GetsidEmployee '>
                    <Input
                      className='Input'
                      placeholder={findIdData?.getsId}                    
                      readOnly/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Name' name='EmployeeName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?. empName} 
                     
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='FunctionEmployee'>
                    <Input
                      
                      className='Input'
                      placeholder={findIdData?.requiredPosition} 
                      readOnly
                     />
                  </Form.Item>
                </Col>
  
                <Col xs={24} md={12}>
                  <Form.Item label='Actual Working Projet' name='ActualWorkingProjet'
                    >
                       <Input
                      readOnly={true}
                      className='Input'
                      placeholder={findIdData?.actualProj} 
                     
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
            <Typography.Title level={5}>Desired Transfer Location</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                                 
                <Col xs={24} md={12}>
                  <Form.Item label='Tansfer From' name='TansferFrom '>
                    <Input
                      className='Input'
                      placeholder={findIdData?.transferFrom} 
                      readOnly
                  
                      
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='To' name='To'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.transferTo} 
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Flight' name='Flight'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.transferByLand} 
                      readOnly />
                  </Form.Item>
                </Col>
  
                <Col xs={24} md={18}>
      
              <AppRowContainer>
                <Col xs={24} md={18}>
                  <StyledInput>
                    <Form.Item
                      label=''
                      name='employeeTransferPermission'>
                      <Checkbox 
                      checked={findIdData?.positionToBeReplaced}
                      readOnly
                      >

                        <IntlMessages id='employeeTransferPermission.PositionToBeReplacedByHR' />
                      </Checkbox>
                      <Checkbox 
                      checked={findIdData?.newRecruitement}
                      readOnly
                      >
                        <IntlMessages id='employeeTransferPermission.NewRecruitement' />
                      </Checkbox>
                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
          
          </Col>
             
          <Col xs={24} md={24}>
                  <Form.Item label='Reason For Transfer' name='ReasonFor'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.reasonForTransfer}
                       />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='New Working Project'
                    name='ProjectName'
                 >
                  <Input
                      className='Input'
                      placeholder={findIdData?.newWorkingProj}
                      readOnly />
                  </Form.Item>
                </Col> 

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Code'
                    name='ProjectCode'

                  >
                    <Input
                     placeholder={findIdData?.projRef}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired Transfer Date'
                    name='DateDesiredTransfer'>
                   <Input
                      className='Input'
                      placeholder={findIdData?.desiredTransfDate}
                      readOnly />
                  </Form.Item>
                </Col>
               
             

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*PMO iNPUT*/}
        { user.includes('PMO')  || user.includes('admin') ?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>PMO INPUTS </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>


                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='As per :'
                        name='As per'
 >
                      
                      <Checkbox  checked={findIdData?.extraDeploymentSchedule} >

                          <IntlMessages id='Exdep.planner' />
                        </Checkbox>
                        <Checkbox checked={findIdData?.originalDeploSchedule}>
                          <IntlMessages id='Ordep.planner' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

          : null}



        {/*pmo input*/}
    
        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={handleCancelTransfer}>Return</Button>
         
        </Space>
      </Form>
    
    </>
  );
};

export default ViewTransfer;
