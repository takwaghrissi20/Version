import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select,
  Alert, Checkbox, DatePicker,notification
} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../@crema/components/AppConfirmationModal';
import { useDropzone } from 'react-dropzone';
import { values } from 'lodash';
import IntlMessages from '../../../@crema/helpers/IntlMessages';
const { MonthPicker } = DatePicker;
const AddExtensionMission = () => {
  const navigate = useNavigate();
  const [lastMission, setLastMission] = useState(0);
  const [missionExtentionId, setMissionExtentionId] = useState("");
  const [missionId, setMissionId] = useState("");

  const [projname, setProjname] = useState("");
  const [projref, setProjref] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [ location, setLocation] = useState("");
  const [endMission, setEndMission] = useState("");
  const [newMission, setNewMission] = useState("");
  const [reason, setReason] = useState("");
  const [comments, setComments] = useState("");
  

  const [confirmationDemob, setConfirmationDemob] = useState(false);
  const [isCancel, onCancel] = useState(false);

  const [dateInput, setDateInput] = useState("");
  const [dateoldMission, setDateoldMission] = useState("");
  const [isExDep, setIsExDep] = useState(false);
  const [isOrDep, setIsOrDep] = useState(false);
  function ExDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsExDep(e.target.checked)

  }
  function OrDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOrDep(e.target.checked)

  }
  useEffect(() => {
  setProjname("")
    setProjname("")
  
    // setName("");
    // setPosition("");
    // setPassportnumber("");
    // setCountry("");
    // setProjects([]);
    // setMissionOrder([]);
    // setSelectedProject("");
    // setSelectedMission("");
    // setSelectedType("");
    // setSelectedTrip("");
    // setSelectedRound("");
    // setSelectTypeValue(null);
    // setMobDate("");
    // setTravelDesert("");
    // setDemobDate("");
    // setDateTravel("");
    // setProjRef("");
    // setTypetripdessert("");
    // setUrlCopy("");
  }, [missionId])


  const handleReason = (event) => {
    setReason(event.target.value);
  };
  
  const handleComments = (event) => {
    setComments(event.target.value);
  };
 
  const [form] = Form.useForm();
  const handleInputMissionIdChange = (event) => {
    setMissionId(event.target.value);
  };
 
console.log("MissionId",missionId)

  const LastIndexmissionEx = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/last`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      setMissionExtentionId(data?.ref)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getById?id=${missionId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
     
      setProjname(responseData?.projName )
      setProjref(responseData?.projRef)
      setName(responseData?.empName)
      setPosition(responseData?.fonct)
      setLocation(responseData?.location)
      setEndMission(responseData?.endDateMiss)
      

     


    } catch (error) {
      console.error("Erreur lors de la récupération du Id:", error);
    }
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Mission Extension Request',
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
      description: 'Error Mission Extension Request',
      style: {
        backgroundColor: '#dc35450',
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

  const handleAddMisssionExtention= async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/add?id=${missionId}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          ref:LastMissionExtentionId,
          actualLocation:location,
          comments:comments,
          position:position,
          projRef:projref,
          projectTitle:projname,
          reasonForExtension:reason,
          refMiss:missionId,
          name:name,
          old_mission:endMission,
          new_mission:newMission,
          plannerInput:isOrDep,
          extraProject:isExDep,
          dateinput:dateInput


  

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        form.resetFields();
        openNotification('bottomRight')


      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };

  useEffect(() => {
    LastIndexmissionEx();
    if (missionId) {
      findId();
    }



  }, []);


  const LastMissionExtentionId = missionExtentionId + 1;
  const goBack = () => {
    navigate(-1)
  }
  const BeforeSaveExtention = () => {
    //const comment = form.getFieldValue('comments');
    const NewEndMissionDate = form.getFieldValue('NewEndMissionDate');
    const ReasonExtention = form.getFieldValue('Reason');
 
  
    if (!NewEndMissionDate || !ReasonExtention  ) {
    openNotificationWarning('bottomRight')
      return;
    }

    form.validateFields(['NewEndMissionDate', 'ReasonExtention'])
      .then(values => {
        handleAddMisssionExtention()
      })
      .catch(errorInfo => {
    openNotificationWarning('bottomRight')
      });
  };



  const handleCancelExtention = () => {
    onCancel(true);
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
            <Typography.Title level={4}>Mission Extension Request</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />

        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Information Extension</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='refdemob'>
                    <Input placeholder={"MER -" +LastMissionExtentionId } readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'
                   rules={[
                    { required: true, message: 'Please input your Date!' },
                  ]}
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder='YYYY-MM-DD'
                      value={dateInput ? dayjs(dateInput, 'YYYY-MM-DD') : null}
                      onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Numero Mission' name='NumeroMission '>
                    <Input
                    type="number"
                      className='Input'
                      placeholder="Numero Mission"
                      value={missionId}
                      onChange={handleInputMissionIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='Project Name '>
                    <Input
                      className='Input'
                      placeholder={projname}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Reference' name='Project Reference '>
                    <Input
                      className='Input'
                      placeholder={projref}
                      
                     readOnly/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Name' name='Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      
                     readOnly/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='Position'>
                    <Input
                      className='Input'
                      placeholder={position}
                      
                     readOnly/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Actual Location' name='Actual Location'>
                    <Input
                      className='Input'
                      placeholder={location}
                      
                     readOnly/>
                  </Form.Item>
                </Col>
              
          
            
             


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>New Information  Mission Extension </Typography.Title>
          </Col>

          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
              
              <Col xs={24} md={12}>
                  <Form.Item label='Old End Mission Date' name='Old End Mission Date'>
                    <Input
                    
                      className='Input'
                      placeholder={endMission}
                      value={dateoldMission ? dayjs(dateoldMission, 'YYYY-MM-DD') : null}
                     readOnly/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='New End Mission Date' name='NewEndMissionDate'
                   rules={[
                    { required: true, message: 'Please input your New End Mission Date!' },
                  ]}
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder='YYYY-MM-DD'
                      value={newMission ? dayjs(newMission, 'YYYY-MM-DD') : null}
                      onChange={(value) => setNewMission(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Reason For Extention' name='Reason'
                   rules={[
                    { required: true, message: 'Please input your Reason For Extention!' },
                  ]}
                  >
                    <Input
                      className='Input'
                      placeholder="Reason"
                      value={reason}
                      onChange={handleReason}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments'
                  >
                    <Input
                      className='InputComment'
                      placeholder="Comment"
                      value={comments}
                      onChange={handleComments}


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
            <Typography.Title level={5}>Planner Input</Typography.Title>
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
                        <Checkbox checked={isExDep} onChange={ExDep}>

                          <IntlMessages id='Exdep.plannerExtention' />
                        </Checkbox>
                        <Checkbox checked={isOrDep} onClick={OrDep}>
                          <IntlMessages id='Ordep.plannerExtention' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>








                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
        </AppRowContainer> 
      

        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={goBack}>Cancel</Button>
          <Button
            onClick={BeforeSaveExtention }
            disabled={!missionId}

            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
     
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Mission Extension Request"
          handleCancelExtention={handleCancelExtention}
        />
      ) : null}
    </>
  );
};

export default AddExtensionMission;