import React , {useState,useEffect} from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Modal } from 'antd';
import { StyledShadowWrapper } from '../../index.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DetailsLeaves = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const [emp,setemp]=useState([]);
  const [notif,setNotif]=useState('')
  const state = location.state || {};
  const navigate = useNavigate();
  const id = state.id || null;
  const getsId = state.getsid || null;
  const name = state.name || null;
  const type = state.type || null;
  const reason = state.reason || null;
  const numberdays = state.numberdays || null;
  const startDate = state.startDate || null;
  const endDate = state.endDate || null;

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };
  const token = localStorage.getItem("token");
  const findEmp = async () => {
    try{
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
          method: "GET",
          headers:{
            'Content-Type': 'application/json',
          },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    setemp(data);
    setNotif(data.notif)
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

useEffect(() => {
  if (getsId) {
    findEmp();
  }
}, [getsId]);
const goBack = () => {
  navigate(-1)
}
const getStatus = (notificationValue) => {
  switch (notificationValue) {
    case 3:
      return 'Pending';
    case 2:
      return 'Approved by HOD';
    case 0:
      return 'Approved by HR';
    case 20:
      return 'Rejected by HOD';
    case 10:
      return 'Rejected by HR';
    default:
      return 'Unknown Status';
  }
};

const statusText = notif !== null ? getStatus(notif) : 'Unknown Status';
  return (
    
    <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSumbit={e => {e.preventDefault()}}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Leave Details</Typography.Title>
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
                  <Form.Item label='Full Name' name='fullName'>
                    <Input placeholder={`${name} `}
                    readOnly={true}/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Email Address' name='emailAddress'>
                    <Input style={{ width: "100%", height: "30px" }} placeholder={emp.email} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gender' name='gender'>
                    <Input placeholder= {emp.gender}
                     readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Phone Number' name='phoneNumber'>
                    <Input  placeholder={emp.phoneNumber}
                    readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Leave Type' name='leaveType'>
                    <Input placeholder={type} 
                    readOnly= {true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Applied Date' name='appliedDate'>
                    <Input placeholder={getCurrentDate()}
                    readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Applied No. of Days' name='appliedDays'>
                    <Input placeholder={numberdays} 
                    readOnly ={true}/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Leave Period' name='leavePeriod'>
                    <Input placeholder={`${startDate} - ${endDate}`}
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
            <Typography.Title level={5}>Reason</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={24}>
                  <Form.Item label='Reason for Leave' name='reason'>
                    <Input.TextArea placeholder={reason}autoSize={{ minRows: 4, maxRows: 6 }} readOnly />
                  </Form.Item>
                </Col>
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>HOD & HR Remarks</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={24}>
                  <Form.Item 
                  label='HOD Remarks'
                   name='hodRemarks'>
                    <Input 
                    placeholder={statusText}
                    readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='HR Remarks' name='hrRemarks'>
                    <Input 
                   placeholder={statusText}
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
            <Typography.Title level={5}>Leave Status</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={8}>
                  <Form.Item label='Action Taken Date' name='actionTakenDate'>
                    <Input
                     defaultValue='N/A'
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label='Leave Status From HOD' name='hodStatus'>
                    <Input 
                     placeholder={statusText}
                    readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label='Leave Status From HR' name='hrStatus'>
                    <Input 
                     placeholder={statusText} 
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
          <Button onClick={goBack} >Cancel</Button>

        </Space>
      </Form>
  );
};

export default DetailsLeaves;
