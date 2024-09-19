import React, { useState, useEffect } from 'react';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, DatePicker, InputNumber, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import moment from 'moment';
import { StyledShadowWrapper } from '../../../styles/index.styled';
import ConfirmationModal from '../../../@crema/components/AppConfirmationModal';

const Vacation = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
  const [profile, setProfile] = useState("")
  const [restPermission, setRestPermission] = useState(0)
  const [restJustify, setRestJustify] = useState(0)
  const [restVacation, setRestVacation] = useState(0)
  const [restMaternity, setRestMaternity] = useState(0)
  const userRole = localStorage.getItem("role")
  const token = localStorage.getItem("token");
  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      console.log("data profile", data)
      setProfile(data)
      setId(data?.getsId)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  ////Get By Id Vacation
  const GetIdVacationEmployess = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(` https://dev-gateway.gets-company.com/api/v1/vac/listByEmp?id=${id}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      console.log("dahuuyyy",data)
      //  Permission
      const FilterPermission=data.filter(p =>p.type==="Permission")
      console.log("dahuuyyyFilterPermission",FilterPermission)
    
    // Calculer la somme des durées de permission en secondes
    const totalPermissionDurationInSeconds = FilterPermission.reduce((sum, permission) => {
      const livePerm = new Date(permission.livePerm).getTime();
      const endPermission = new Date(permission.endPermission).getTime();
      const durationInSeconds = (endPermission - livePerm) / 1000; // Convertir en secondes
      console.log(`Duration for permission ${permission.idv}: ${durationInSeconds} seconds`); 
      return sum + durationInSeconds;
    }, 0);

    console.log("Total Permission Duration in Seconds:", totalPermissionDurationInSeconds);

    // Durée maximale de permission en secondes (60 minutes)
    const maxPermissionDurationInSeconds = 120 * 60;

    // Calculer le reste de permission
    const remainingPermissionDurationInSeconds = maxPermissionDurationInSeconds - totalPermissionDurationInSeconds;
    setRestPermission(remainingPermissionDurationInSeconds)
    console.log("Remaining Permission Duration in Seconds:", remainingPermissionDurationInSeconds);
    //Justify Absent
    const FilterJustifyAbsent=data.filter(p =>p.type==="Justified Absent")
    console.log("dahuuyyyJustify Absent",FilterJustifyAbsent) 
    // Calculer la somme des jours de justification d'absence
    const totalJustifyAbsentInDays = FilterJustifyAbsent.reduce((sum, absence) => {
      const startDateJus = new Date(absence.startDateJus).getTime();
      const endDateJus = new Date(absence.endDateJus).getTime();
      const durationInDays = (endDateJus - startDateJus) / (1000 * 60 * 60 * 24); // Convertir en jours
      console.log(`Duration for justified absence ${absence.idv}: ${durationInDays} days`); // Ligne de débogage
      return sum + durationInDays;
    }, 0);

    console.log("Total Justified Absent Duration in Days:", totalJustifyAbsentInDays);

    // Durée maximale justifiée en jours (5 jours)
    const maxJustifyDurationInDays = 5;

    // Calculer le reste de jours justifiés
    const remainingJustifyDurationInDays = maxJustifyDurationInDays - totalJustifyAbsentInDays;
    setRestJustify(remainingJustifyDurationInDays)

    console.log("Remaining Justified Absent Duration in Days:", remainingJustifyDurationInDays);
    //////Vacation
    const FilterVacation=data.filter(p =>p.type==="Vacation")
    console.log("dahuuyyy Vacation",FilterVacation) 
     // Calculer la somme des jours de vacances
     const totalVacationInDays = FilterVacation.reduce((sum, vacation) => {
      const startDate = new Date(vacation.startDate).getTime();
      const endDate = new Date(vacation.endDate).getTime();
      const durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24); // Convertir en jours
      console.log(`Duration for vacation ${vacation.idv}: ${durationInDays} days`); // Ligne de débogage
      return sum + durationInDays;
    }, 0);

    console.log("Total Vacation Duration in Days:", totalVacationInDays);

    // Durée maximale de vacances en jours (18 jours)
    const maxVacationDurationInDays = 18;

    // Calculer le reste de jours de vacances
    const remainingVacationDurationInDays = maxVacationDurationInDays - totalVacationInDays;
    setRestVacation(remainingVacationDurationInDays)
    console.log("Remaining Vacation Duration in Days:", remainingVacationDurationInDays);
    ///MaternityPaternity
    const FilterMaternityPaternity=data.filter(p =>p.type==="MaternityPaternity")

    // Calculer la somme des jours de congé de maternité/paternité
    const totalMaternityPaternityInDays = FilterMaternityPaternity.reduce((sum, leave) => {
      const startMatern = new Date(leave.startMatern).getTime();
      const joinEndMatern = new Date(leave.joinEndMatern).getTime();
      const durationInDays = (joinEndMatern - startMatern) / (1000 * 60 * 60 * 24); // Convertir en jours
      console.log(`Duration for maternity/paternity leave ${leave.idv}: ${durationInDays} days`); // Ligne de débogage
      return sum + durationInDays;
    }, 0);

    console.log("Total Maternity/Paternity Leave Duration in Days:", totalMaternityPaternityInDays);

    // Durée maximale de congé de maternité/paternité en jours (30 jours)
    const maxMaternityPaternityDurationInDays = 30;

    // Calculer le reste de jours de congé de maternité/paternité
    const remainingMaternityPaternityDurationInDays = maxMaternityPaternityDurationInDays - totalMaternityPaternityInDays;

    console.log("Remaining Maternity/Paternity Leave Duration in Days:", remainingMaternityPaternityDurationInDays);
    setRestMaternity(remainingMaternityPaternityDurationInDays)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
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
      availableLeaveDays,
      leaveType,
      reason,
   




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
      name: profile?.name,
      position: profile?.position,
      numberdays: leaveType === 'Permission' ? 0 : availableLeaveDays,
      type: leaveType,
      reason,
      getsId: profile?.getsId,
      notif:3,
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
      bodyData = {
        ...bodyData,
        startMatern: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        joinEndMatern: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    } else if (leaveType === 'Vacation') {
      bodyData = {
        ...bodyData,
        startDate: startDate ? startDate.format('YYYY-MM-DD HH:mm:ss') : null,
        endDate: endDate ? endDate.format('YYYY-MM-DD HH:mm:ss') : null,
      };
    }
    console.log('Request payload:', bodyData);

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/add?type=${leaveType}&id=${id}&token=${token}`, {
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
      if (response.ok) {
      const result = await response.json();
      console.log("result",result)
      openNotification('bottomRight')
      setTimeout(() => {
        window.location.reload();
       
      }, 1000);
 
    
    }

    } catch (error) {
    console.error("Employeees Vacation",error)
    }
  };

  useEffect(() => {

      GetProfileEmployess()
      GetIdVacationEmployess ()
    
  }, [id]);




  const BeforeSaveVacation = () => {
    //setIsModalVisible(true)
    form.validateFields([ 'leaveType'
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
  const isSubmitDisabled = () => {
    switch (leaveType) {
      case 'Permission':
        return restPermission <=0;
      case 'Justified Absent':
        return  restJustify<=0;
      case 'Vacation':
        return restVacation<=0;
      case 'MaternityPaternity':
        return restMaternity<=0;
      default:
        return false;
    }
  };

  return (
    <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
      <Form
        form={form}
        layout='vertical'
        // onFinish={onSubmitVac}
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
                  <Form.Item label='GETS ID' name='GETS ID'>
                    <Input
                      className='Input'
                      placeholder={profile?.getsId}
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Name' name='Name'>
                    <Input
                      className='Input'
                      placeholder={profile?.name}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position'>
                    <Input
                      className='Input'
                      placeholder={profile?.position}

                      readOnly
                    />
                  </Form.Item>
                </Col>
                {leaveType==="Justified Absent" &&
                  <Col xs={24} md={12}>
                  <Form.Item label='Justified Absent' name='JustifiedAbsent'>
                    <Input
                      className='Input'
                      placeholder={ restJustify + " Days" } 

                      readOnly
                    />
                  </Form.Item>
                </Col>               
                
                }
                  {leaveType==="MaternityPaternity" &&
                  <Col xs={24} md={12}>
                  <Form.Item label='Maternity Paternity' name='MaternityPaternity'>
                    <Input
                      className='Input'
                      placeholder={restMaternity + " Days" }

                      readOnly
                    />
                  </Form.Item>
                </Col>               
                
                }
                {leaveType==="Permission" &&
                  <Col xs={24} md={12}>
                  <Form.Item label='Permission' name='Permission'>
                    <Input
                      className='Input'
                      placeholder={ restPermission + " Second" } 
                      
                      

                      readOnly
                    />
                  </Form.Item>
                </Col>               
                
                }
                  {leaveType==="Vacation" &&
                  <Col xs={24} md={12}>
                  <Form.Item label='Vacation' name='Vacation'>
                    <Input
                      className='Input'
                      placeholder={ restVacation + " Days" }

                      readOnly
                    />
                  </Form.Item>
                </Col>               
                
                }
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
                    <Select placeholder='Select Leave Type'
                     onChange={value => setLeaveType(value)} size="large" style={{ height: "30px" }}>
                      <Select.Option value='Justified Absent'>Justified Absent</Select.Option>
                      <Select.Option value='MaternityPaternity'>Maternity&Paternity</Select.Option>
                      <Select.Option value='Permission'>Permission</Select.Option>
                      <Select.Option value='Vacation'>Vacation</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                {leaveType !== 'Permission' && (
                  <Col xs={24} md={12}>
                    <Form.Item label='Leave Days' name='availableLeaveDays' rules={[{ required: leaveType !== 'Permission', message: 'Please enter available leave days' }]}>
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
         
          <Button type='primary' htmlType='submit' disabled={isSubmitDisabled()} onClick={BeforeSaveVacation}>Apply Leave</Button>
        </Space>
      </Form>



    
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


    </div>
  );
};

export default Vacation;
