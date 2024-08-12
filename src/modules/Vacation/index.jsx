import React, { useState, useEffect } from 'react';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, DatePicker, InputNumber, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import moment from 'moment';
import { StyledShadowWrapper } from './index.styled';
import ConfirmationModal from '../../@crema/components/AppConfirmationModal';

const Vacation = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [availableLeaveDays, setAvailableLeaveDays] = useState(0);
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');
  const [id, setId] = useState(null);
  const [duration, setDuration] = useState(0);
  const [modalWarning, setModalWarning] = useState(false);
  const [isSave, onSave] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [modalError, setModalError] = useState(false);
 

  const getCurrentTime = () => {
    return moment();
  };

  useEffect(() => {
    if (startDate) {
      if (leaveType === 'Permission' && duration) {
        const start = dayjs(startDate);
        const end = start.add(duration, 'minute');
        setEndDate(end);
      } else if (availableLeaveDays && leaveType !== 'Permission') {
        const start = dayjs(startDate);
        const end = start.add(availableLeaveDays, 'day');
        setEndDate(end);
      } else {
        setEndDate(null);
      }
    }
  }, [startDate, availableLeaveDays, leaveType, duration]);

  const handleSaveVacation = () => {
    onSave(true);
  };
  const handleCancelVacation = () => {
    const fieldsFilled = [
      name,
      position,
       availableLeaveDays,
       leaveType,
      reason,
       id,


      

    ].some(field => field && field !== "");

    if (fieldsFilled) {
      onCancel(true)

    } else {
      onCancel(true);

    }


  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Vacation Application Submitted Successfully',
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

  const openNotificationWarning = () => {
    notification.open({
      message: 'Warning',
      description: 'All Fields Not Complete',
      style: {
        backgroundColor: '#eab000',
        border: '1px solid #eab000',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #ce9c09',
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
      description: 'Error Application',
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

  const onSubmitVac = async () => {
    
    let bodyData = {
      name,
      position,
      numberdays: leaveType === 'Permission' ? 0 : availableLeaveDays,
      type: leaveType,
      reason,
      getsId: id,
    };

    if (leaveType === 'Justified Absent') {
      bodyData = {
        ...bodyData,
        startDateJus: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        endDateJus: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    } else if (leaveType === 'Permission') {
      if (duration > 120) {
        notification.error({
          message: 'Invalid Duration',
          description: 'The duration for Permission leave must be less than or equal to 2 hours.',
        });
        return;
      }

      bodyData = {
        ...bodyData,
        durationPermiss: duration,
        livePerm: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        endPermission: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    } else if (leaveType === 'MaternityPaternity') {
      console.log('Available Leave Days:', availableLeaveDays);
      bodyData = {
        ...bodyData,
        numberdays: availableLeaveDays,
        startMatern: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        joinEndMatern: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    }
    
    
    
    else if (leaveType === 'Vacation') {
      bodyData = {
        ...bodyData,
        startDate: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        endDate: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    }

    console.log('Request payload:', bodyData);

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/add?type=${leaveType}&id=${id}`, {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT",
        },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const result = await response.json();
      openNotification('bottomRight')

    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.message,
      });
    }
  };

  const findEmployeeById = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${id}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setName(responseData?.name);
      setPosition(responseData?.position);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  useEffect(() => {
    if (id) {
      findEmployeeById();
    }
  }, [id]);







  const BeforeSaveVacation = () => {
    //setIsModalVisible(true)
    form.validateFields(['GETS ID', 'Name', 'position', 'leaveType'
      , ' availableLeaveDays', ' duration', ' startDate', 'endDate', 'reason',

    ]).then(values => {
        onSubmitVac()

    }).catch(errorInfo => {
      openNotificationWarning('bottomRight')
      setTimeout(() => {
        setModalWarning(false);
      }, 500);
      // setIsModalVisible(false);

    });
  };






  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
      <Form
        form={form}
        layout='vertical'
        onFinish={onSubmitVac}
        style={{ backgroundColor: 'white', marginBottom: '20px', padding: '10px', borderRadius: '20px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Leave Application</Typography.Title>
          </div>
        </div>
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Employee Information</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='GETS ID' name='GETS ID' rules={[{ required: true, message: 'Please enter your GETS ID' }]}>
                    <InputNumber min={1} max={400} onChange={value => setId(value)} style={{ width: '100%', height: "30px" }} value={id} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Name' name='Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly
                      style={{ width: '100%', height: "30px" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position'>
                    <Input
                      className='Input'
                      placeholder={position}
                      style={{ height: "30px" }}
                      readOnly
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
            <Typography.Title level={5}>Leave Type</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Leave Type' name='leaveType' rules={[{ required: true, message: 'Please select a leave type' }]}>
                    <Select placeholder='Select Leave Type' onChange={value => setLeaveType(value)} size="large" style={{ height: "30px" }}>
                      <Select.Option value='Justified Absent'>Justified Absent</Select.Option>
                      <Select.Option value='MaternityPaternity'>MaternityPaternity</Select.Option>
                      <Select.Option value='Permission'>Permission</Select.Option>
                      <Select.Option value='Vacation'>Vacation</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                {leaveType !== 'Permission' && (
                  <Col xs={24} md={12}>
                    <Form.Item label='Available Leave Days' name='availableLeaveDays' rules={[{ required: leaveType !== 'Permission', message: 'Please enter available leave days' }]}>
                      <InputNumber min={0} onChange={value => setAvailableLeaveDays(value)} style={{ width: '100%', height: "30px" }} disabled={leaveType === 'Permission'} />
                    </Form.Item>
                  </Col>
                )}
                {leaveType === 'Permission' && (
                  <Col xs={24} md={12}>
                    <Form.Item label='Duration (minutes)' name='duration' rules={[{ required: leaveType === 'Permission', message: 'Please enter the duration in minutes' }]}>
                      <InputNumber min={0} max={120} onChange={value => setDuration(value)} style={{ width: '100%', height: "30px" }} value={duration} />
                    </Form.Item>
                  </Col>
                )}
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Start & End Leave Date</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Start Date' name='startDate' rules={[{ required: true, message: 'Please select the start date' }]}>
                    <DatePicker
                      showTime={leaveType === 'Permission'}
                      placeholder='Select Date and Time' 
                      format='YYYY-MM-DD HH:mm:ss'
                      value={startDate ? dayjs(startDate) : null}
                      
                      onChange={date => setStartDate(date)}
                      style={{ width: '100%', height: "30px" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='End Date' name='endDate'>
                    <DatePicker
                      showTime={leaveType === 'Permission'}
                      format='YYYY-MM-DD HH:mm:ss'
                      placeholder={endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : 'YYYY-MM-DD HH:mm:ss'}
                      value={endDate ? dayjs(endDate) : null}
                      disabled={leaveType !== 'Permission'}
                      onChange={date => setEndDate(date)}
                      style={{ width: '100%', height: "30px" }}
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
            <Typography.Title level={5}>Reason for Leave</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={24}>
                  <Form.Item label='Reason for Leave' name='reason' rules={[{ required: true, message: 'Please enter the reason for leave' }]}>
                    <Input.TextArea placeholder='Enter your reason for leave' autoSize={{ minRows: 4, maxRows: 6 }} onChange={e => setReason(e.target.value)} />
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
          <Button onClick={handleCancelVacation}>Cancel</Button>
          <Button type='primary' htmlType='submit' onClick={ BeforeSaveVacation}>Apply Leave</Button>
        </Space>
      </Form>



      {isSave ? (
        <ConfirmationModal
          open={isSave}
          paragraph={'Are you sure you want to Save Recruitement?'}
          onDeny={onSave}
          onConfirm={onSubmitVac}
          modalTitle="Save Recruitement "
          handleInterview={handleSaveVacation}
        />
      ) : null}
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Application "
          handleInterview={handleCancelVacation}
        />
      ) : null}


      {modalWarning && (
        <div style={{ position: 'relative', height: '10vh' }}>
          <Space direction='vertical' style={{ width: '90%', margin: 20, position: 'absolute', bottom: 0 }}>
            <Alert
              description='All Fields Not Complete'
              type='warning'
              showIcon
            />
          </Space>
        </div>
      )}
      {modalError && (
        <div style={{ position: 'relative', height: '10vh' }}>
          <Space direction='vertical' style={{ width: '90%', margin: 20, position: 'absolute', bottom: 0 }}>
            <Alert
              message='Error'
              description='Failed Recruitement.'
              type='error'
              showIcon

            />
          </Space>
        </div>
      )}
    </div>
  );
};

export default Vacation;
