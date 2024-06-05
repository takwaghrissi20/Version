import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;

const Mission = () => {
  const [lastIdMission, setLastIdMission] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectsCountry, setProjectsCountry] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedProjectCountry, setSelectedProjectCountry] = useState("");
  const [comments, setComments] = useState("");

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
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

  const findId = async () => {
    try {
      console.log("getsIdtestttt", getsId);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setName(responseData?.name);
      setPosition(responseData?.position);
      setCountry(responseData?.destination);

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId
      }));

      const projectscountry = responseData?.projects?.flatMap(project => project.country);
     
      const projectstesttt = responseData?.projects?.flatMap(project => project);
      setProjectsCountry(projectscountry);
      setProjects(projectsData);
      console.log("Projects Data:", projectstesttt);
      
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const handleAddMission = async () => {
    try {
      const requestBody = {
        name: name,
        passportnumber: passportnumber,
        position: position,
        projName: selectedProject,
        projId: selectedProjectId,
        toApplyForVisa: "true",
      };
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/add?id=${searchValue}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        alert("Request failed");
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      alert("Success Visa");
      navigate(-1);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  useEffect(() => {
    LastIndexMission();
    if (getsId) {
      findId();
    }
  }, [getsId]);

  const handleProjectChange = (value, option) => {
    console.log('Select project :', value);
    setSelectedProject(value);
    setSelectedProjectId(option.key); 
  };

  const handleProjectLocationChange = (value) => {
    console.log('Select project :', value);
    setSelectedProjectCountry(value);
  };

  console.log("selectedProject",selectedProjectId);
  return (
    <>
      <Form
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
                    rules={[
                      { required: true, message: 'Please input your Mission Date!' },
                    ]}>
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
                    label='Destination' name='Destination'>
                    <Input
                      className='Input'
                      placeholder={country}
                      name='Destination'
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Mission Date' name='Date :'
                    rules={[
                      { required: true, message: 'Please input your Mission Date!' },
                    ]}>
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
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
            <Typography.Title level={5}>Project Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Location">
                      <span className='modallabel'>Project Name:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Location Projects"
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
                  <Form.Item className='form-field'>
                    <FloatLabel name="Project">
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
                <Col xs={24} md={12}>
                  <Form.Item label='Comments' name='Comments'>
                    <Input
                      className='InputComment'
                      value={comments}
                      onChange={handleCommentsChange}
                      placeholder="Comments"
                      readOnly={true} />
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
          <Button>Cancel</Button>
          <Button
            // onClick={handleAddMission}
            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default Mission;
