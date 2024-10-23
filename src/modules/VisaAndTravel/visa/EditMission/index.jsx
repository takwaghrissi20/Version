import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, DatePicker, notification } from 'antd';
import {
  StyledShadowWrapper,
} from './index.styled';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
import FloatLabel from "./FloatLabel";
const UpdateMission = () => {
  const navigate = useNavigate();
  const [getsId, setGetsId] = useState("");
  const [newgetsId, setNewGetsId] = useState(getsId);
  const [newMissionStartDate, setNewMissionStartDate] = useState("");
  const [newprojName, setNewprojName] = useState("");
  const [starTDateMis, setStarTDateMis] = useState(null);
  const [comments, setComments] = useState("");
  const [missionId, setMissionId] = useState(null);

  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const location = useLocation();
  const [profile, setProfile] = useState("");
  const id = location.state ? location.state.id : null;
  const token = localStorage.getItem("token");
  const [mission, setMission] = useState("");
  const handleComments = (event) => {
    setComments(event.target.value);
  };
  const findIdMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getById?id=${id}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setMissionId(responseData)
      console.log("idMission", responseData)
    } catch (error) {
      console.error("Erreur lors de la récupération du id Mission:", error);
    }
  };
  const [newstarTDateMis, setNewstarTDateMis] = useState(starTDateMis);
 
  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setProfile(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du employees:", error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleCancelMission = () => {
    navigate(-1);
  };
  const handleDateChange = (date, dateString) => {
    setStarTDateMis(date ? dayjs(date) : null);
  };
  useEffect(() => {
    findIdMission();
  }, [id]);

  useEffect(() => {
    if (getsId) {
      findId();
      setNewGetsId(getsId);
    }
  }, [getsId, starTDateMis]);
  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };
  ////////////////////////////////
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
      },
      placement: 'topRight',
    });
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update Mission Assignment Order',
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
  const GetMissionById = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getById?id=${id}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("Mission By Id", responseData)



    } catch (error) {
      console.error("Erreur lors de la récupération du MissionId:", error);
    }
  };

  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/update?id=${id}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          idMiss:id,
          getsId: getsId,
          starTDateMiss: newstarTDateMis,
          comentaire: comments,
          refMiss: missionId?.refMiss,
          idproj:missionId?.idproj,
          location:missionId?.location,
          empName:missionId?. empName,
          fonct:missionId?.fonct,
          destination: missionId?.destination,
          projRef:missionId?.projRef,
          missOrdre:missionId?.missOrdre,
          projName:missionId?.projName,
          endDateMiss:missionId?.endDateMiss,
          inputMiss:missionId?.inputMiss,
          dureMiss:missionId?.dureMiss

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

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
            <Typography.Title level={4}>Mission Assignment Order</Typography.Title>
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
                  <Form.Item label='Reference' name='MAO'>
                    <Input placeholder={"MAO-" + id} readOnly={true} />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'>
                    <Input
                      placeholder={formattedDate}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id'>
                    <Input
                      type='number'
                      className='Input'
                      placeholder={missionId?.getsId}
                      value={newgetsId}
                      onChange={handleInputGetsIdChange}
                      readOnly
                      

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={missionId?.empName}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={missionId?.fonct}
                       />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Destination ' name='Destination'>
                    <Input
                      className='Input'
                      placeholder={missionId?.location}
                      name='Destination'
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col style={{ marginTop: "0.78rem" }} xs={24} md={12}>
                  <span >Mission Start Date</span>
                  <Form.Item >

                    <DatePicker
                      style={{ height: "30px", width: '100%', marginTop: "1px" }}
                      placeholder={missionId?.starTDateMiss}
                      onChange={(value) => setNewstarTDateMis(dayjs(value))}
                      value={newstarTDateMis} />

                  </Form.Item>

                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Duration' name='Duration'>
                    <Input
                      placeholder={missionId?.dureMiss}
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
            <Typography.Title level={5}>Project Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='projectName' name='projectName'>
                    <Input
                      placeholder={missionId?.projName}
                      readOnly

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Location' name='Location'>
                    <Input
                      placeholder={missionId?.location}
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
            <Typography.Title level={5}>Comments</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments'>
                    <Input
                      className='InputComment'
                      placeholder={comments}
                      value={comments}
                      onChange={(e) =>setComments(e.target.value)}
                    
                  
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
          <Button onClick={handleCancelMission}>Cancel</Button>
          <Button onClick={Update}
          >Save</Button>
        </Space>
      </Form>
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Mission "
          handleMission={handleCancelMission}
        />
      ) : null}
    </>
  );
};

export default UpdateMission;
