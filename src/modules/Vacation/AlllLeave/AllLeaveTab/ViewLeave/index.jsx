import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Modal,notification } from 'antd';
import { StyledShadowWrapper } from '../../../index.styled';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewLeave = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emp, setEmp] = useState([]);
  const [description, setDescription] = useState("");
  const [actionForm] = Form.useForm();
  const location = useLocation();
  const state = location.state || {};
  const [selectedStatus, setSelectedStatus] = useState("Default");
  const token = localStorage.getItem("token");
  const id = state.id || null;
  const getsId = state.getsid || null;
  const name = state.name || null;
  const type = state.type || null;
  const reason = state.reason || null;
  const numberdays = state.numberdays || null;
  const startDate = state.startDate || null;
  const endDate = state.endDate || null;
  const notif = state.notif ?? null;
  const Status = [
    { status: 'Approved' },
    { status: 'Rejected' },


  ];
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Save Vacation With Status',
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
  const handleStatus = (value) => {
    setSelectedStatus(value);
  };
  console.log("Statuuusss",selectedStatus)

  console.log("notif", notif);

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

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  ////Updata Action Vacation
  const Update = async () => {
    let notificationValue;
    if (selectedStatus === 'Approved') {
      notificationValue = 2;
    } else if (selectedStatus === 'Rejected') {
      notificationValue = 10;
    } else {
      notificationValue = notif;  
    }

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/update?token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },

        body: JSON.stringify({
          idv: id,
          notif: notificationValue,
          description:description


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.text();
        console.log("ffffhjjjj",response)
        openNotification('bottomRight')
   

        console.log("responseData ", responseData);
        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };




  //End UpdataActionVACAtion
  const handleOk = () => {
    actionForm.validateFields()
      .then(values => {
        console.log('Action Taken:', values);
        setIsModalVisible(false);
        Update()
        // actionForm.resetFields();
      })
      .catch(info => {
        console.log('Validation Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    actionForm.resetFields();
  };

  const findEmp = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      setEmp(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    if (getsId) {
      findEmp();
    }
  }, [getsId]);

  useEffect(() => {
    console.log('Employee data:', emp);
  }, [emp]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault(); }}
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
                    <Input placeholder={name} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Email Address' name='emailAddress'>
                    <Input placeholder={emp.email} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gender' name='gender'>
                    <Input placeholder={emp.gender} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Phone Number' name='phoneNumber'>
                    <Input placeholder={emp.phoneNumber} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Leave Type' name='leaveType'>
                    <Input placeholder={type} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Applied Date' name='appliedDate'>
                    <Input placeholder={getCurrentDate()} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Applied No. of Days' name='appliedDays'>
                    <Input placeholder={numberdays} readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Leave Period' name='leavePeriod'>
                    <Input placeholder={`From ${startDate} To ${endDate}`} readOnly />
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
                    <Input.TextArea placeholder={reason} autoSize={{ minRows: 4, maxRows: 6 }} readOnly />
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
                  <Form.Item label='HOD Remarks' name='hodRemarks'>
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
                      defaultValue='NA'
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
        <Space size={15} style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}>
          <Button onClick={goBack}>Cancel</Button>
          <Button type='primary' onClick={showModal}>Take Action</Button>
        </Space>
      </Form>

      <Modal
        title='Take Action'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      
        <Form form={actionForm}

          layout='vertical'>
          <Form.Item label='Action' name='action'
            rules={[{ required: true, message: 'Please select an action' }]}>
            <Select onChange={handleStatus}
              placeholder="Please select an action"
              allowClear>
              {Status.map(p => (
                <Option key={p.status} value={p.status}>
                  {p.status}
                </Option>
              ))}
            </Select>
        
          </Form.Item>
          <Form.Item label='Description'
           name='description' 
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           >
            <Input.TextArea placeholder='Enter description' autoSize={{ minRows: 4, maxRows: 6 }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ViewLeave;
