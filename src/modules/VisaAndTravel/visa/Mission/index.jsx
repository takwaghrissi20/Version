import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker,notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
const Mission = () => {
  const navigate = useNavigate();
  const [lastIdMission, setLastIdMission] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectsCountry, setProjectsCountry] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedProjectCountry, setSelectedProjectCountry] = useState("");
  const [comments, setComments] = useState("");
  const [idProject, setIdProject] = useState("");
  const [missionDate, setMissionDate] = useState("");
  const [missionEndDate, setMissionEndDate] = useState("");
  const [projRef, setProjRef] = useState("");
  const [duration, setDuration] = useState(0);
  const [confirmationMission, setConfirmationMission] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (missionDate && missionEndDate) {
      const start = dayjs(missionDate, 'YYYY-MM-DD');
      const end = dayjs(missionEndDate, 'YYYY-MM-DD');
      const diffInDays = end.diff(start, 'day');
      setDuration(diffInDays);
    } else {
      setDuration(null);
    }
  }, [missionDate, missionEndDate]);

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };


  const handleInputGetsIdChange  = (event) => {
    const value = event.target.value;
    setGetsId(event.target.value);
    console.log(value); // Log the input value to the console
  };
 

  const LastIndexMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/last`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log(data);
      setLastIdMission(data.idMiss);
    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastMission = lastIdMission + 1;
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Mission',
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
      description: 'Error Add Mission',
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
  const findId = async () => {
    try {
      console.log("testttttt",getsId)
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setName(responseData?.name);
        setPosition(responseData?.position);
        setCountry(responseData?.destination);
  
        const projectsData = responseData?.projects?.map(project => ({
          projName: project.projName,
          projId: project.projId
        }));
  
        const projectscountry = responseData?.projects?.flatMap(project => project.country);
        setProjectsCountry(projectscountry);
        setProjects(projectsData);


      }
     


    } catch (error) {
      console.error("Erreur lors de la récupération du employess:", error);
    }
  };
  const findIdrrr = async () => {
    try {

      console.log("rrrrtrrr",getsId)
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
       console.log("ggggggggg",responseData )


      }
     
    } catch (error) {
      console.error("Erreur lors de la récupération du employess", error);
    }
  };
  useEffect(() => {
    LastIndexMission();
   
      findId();
      findIdrrr()
    
    GetIdProject()
  }, [getsId, selectedProject, idProject,name]);
  const GetIdProject = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/getByname?name=${selectedProject}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setIdProject(responseData?.[0]?.idProject)
      setProjRef(responseData?.[0]?.projRef)



    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const handleAddMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/add?id=${idProject}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          empName: name,
          getsId: getsId,
          fonct: position,
          destination: country,
          location: selectedProjectCountry,
          projRef: projRef,
          projName: selectedProject,
          starTDateMiss: missionDate,
          endDateMiss: missionEndDate,
          dureMiss: duration,
          refMiss: LastMission
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

 

  const handleProjectChange = (value, option) => {

    setSelectedProject(value);

  };

  const handleProjectLocationChange = (value) => {
    console.log('Select project :', value);
    setSelectedProjectCountry(value);
  };
  const goBack = () => {
    navigate(-1)
  }
  const BeforeSaveMission = () => {
    form.validateFields(['Destination', 'missionStartDate', 'missionEndDate'])
      .then(values => {
        handleAddMission()
      })
      .catch(errorInfo => {
        
        openNotificationWarning('bottomRight')


      });
  };

  const handleConfirmationAddMission = () => {
    setConfirmationMission(true)
  }
  const handleCancelMission = () => {
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
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input placeholder={"MAO-" + LastMission} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={position} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Destination ' name='Destination'

                    rules={[
                      { required: true, message: 'Please input your Destination!' },
                    ]}


                  >
                    <Input
                      className='Input'
                      placeholder={country}
                      name='Destination'
                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission Start Date'
                    name='missionStartDate'
                    rules={[
                      { required: true, message: 'Please input your Mission Start Date!' },
                    ]}
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder='YYYY-MM-DD'
                      value={missionDate ? dayjs(missionDate, 'YYYY-MM-DD') : null}
                      onChange={(value) => setMissionDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission End Date'
                    name='missionEndDate'
                    rules={[
                      { required: true, message: 'Please input your Mission End Date!' },
                    ]}
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder='YYYY-MM-DD'
                      value={missionEndDate ? dayjs(missionEndDate, 'YYYY-MM-DD') : null}
                      onChange={(value) => setMissionEndDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Duration' name='Duration'>
                    <Input
                      placeholder={duration + "Days"}
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
                  <Form.Item className='form-field'
                    name='projectName'
                  //  rules={[
                  //   { required: true, message: 'Please input your Project Name' },
                  // ]}


                  >
                    <FloatLabel >
                      <span className='modallabel'>Project Name:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Your Project Name"

                        onChange={handleProjectChange}
                        value={selectedProject}
                      >
                        {projects.map(project => (
                          <Option key={project.projId} value={project.projName}>
                            {project.projName}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    name="location"
                  //  rules={[
                  //   { required: true, message: 'Please input your  Location' },
                  // ]}
>
                    <FloatLabel name="Location">
                      <span className='modallabel'>Location:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Projects"
                        onChange={handleProjectLocationChange}
                        value={selectedProjectCountry} >
                        {projectsCountry.map(project => (
                          <Option key={project} value={project}>
                            {project}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
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
                      value={comments}
                      onChange={handleCommentsChange}
                      placeholder="Comments"
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
          <Button
            onClick={BeforeSaveMission}
            type='primary'
            disabled={!selectedProjectCountry || !selectedProject}
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
      {confirmationMission ? (
        <ConfirmationModal
          open={confirmationMission}
          paragraph={'Are you sure you Add Mission Assignment Order'}
          onDeny={setConfirmationMission}
          onConfirm={handleAddMission}
          modalTitle="Add Mission "
          handleConfirmationAddMission={handleConfirmationAddMission}
        />
      ) : null}
        {isCancel? (
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

export default Mission;
