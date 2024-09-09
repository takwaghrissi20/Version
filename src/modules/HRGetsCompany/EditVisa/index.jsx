import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledContactForm,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
  StyledScrumBoardDatePicker,
  StyledSecondaryText,
  StyledShadowWrapper
} from './index.styled';
import IntlMessages from '../../../@crema/helpers/IntlMessages';

import FloatLabel from "./FloatLabel";
import { useIntl } from 'react-intl';
import { useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
const AddVisa = () => {
  const location = useLocation();
  const name = location.state ? location.state.name : null;
  const position = location.state ? location.state.Position: null;
  const  passportnumber = location.state ? location.state. passportnumber : null;
  const projName = location.state ? location.state.projName : null;
  const requestSendVisa = location.state ? location.state.requestSendVisa : null;
  const  dateVisa = location.state ? location.state. dateVisa : null;
  const  vCableReceive = location.state ? location.state. vCableReceive : null;
  const   vCabledate = location.state ? location.state.  vCabledate : null;
  const     passportSubmit = location.state ? location.state.  passportSubmit : null;
  const    passportSubmitdate = location.state ? location.state.   passportSubmitdate : null;
  const  visaReady = location.state ? location.state.visaReady : null;
  const  finalVisaReceiveDate = location.state ? location.state. finalVisaReceiveDate : null;
  const finishDateVisa = location.state ? location.state. finishDateVisa : null;
  const id = location.state ? location.state.id : null;
  const { messages } = useIntl();
  console.log("id responseData?.id",id)
  console.log( "name", name)


  const [selectedProject, setSelectedProject] = useState("")
  const [projects, setProjects] = useState([]);
  const [selectedRequestVisa, setSelectedRequestVisa] = useState("")
  const [newDateRequestVisa, setNewDateRequestVisa] = useState("")
  const [selectedVisaCableReceive, setSelectedVisaCableReceive] = useState("")
  const [newvCabledate, setNewvCabledate] = useState("")
  const [selectedPASSPORTSUBMITTED, setSelectedPASSPORTSUBMITTED] = useState("")
 
  const [selectedFinalVisa, setSelectedFinalVisa] = useState("")
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const handleRequestVisaChange = (value) => {
    console.log('Select  :', value);
    setSelectedRequestVisa(value);
  };
  const handleProjectChange = (value) => {
    console.log('Select project :', value);
    setSelectedProject(value);
  };
  const handleRequestVisaCableChange = (value) => {

    setSelectedVisaCableReceive(value);
  };
  const handlePASSPORTSUBMITTEDChange = (value) => {

    setSelectedPASSPORTSUBMITTED(value);
  };
  const handleFinalVisaChange = (value) => {

    setSelectedFinalVisa(value);
  };



  const handleInputPassortNumberChange = (event) => {
    setPassportnumber(event.target.value);
  };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${id}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();

        setName(responseData?.name)
        setPosition(responseData?.position)
        setPassportnumber(responseData?.passportnumber)
        setCountry(responseData?.destination)
        const projects = responseData?.projects?.flatMap(employee => employee.projName);
        setProjects(projects)



      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const handleAddVisa = async () => {
    try {

      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const requestBody = {

       name:name ,
      passportnumber:passportnumber ,    
       position:position,
       projName:selectedProject,
       requestSendVisa :selectedRequestVisa,
       dateVisa:newDateRequestVisa,
       vCableReceive:selectedVisaCableReceive,
       vCabledate:newvCabledate,
       passportSubmit:selectedPASSPORTSUBMITTED,
       passportSubmitdate:passportSubmitdate,
       finalVisaReceive:selectedFinalVisa,
       finalVisaReceiveDate:finalVisaReceiveDate,
       finishDate:finishDateVisa






      };
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/add?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Gérer la réponse du serveur
      if (!response.ok) {
       alert("Request failed")
        throw new Error('La requête a échoué avec le code ' + response.status);

      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      alert("Success Visa")
       navigate(-1)

    
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }

  };
  const handleCancel = () => {
  
    // setName("");
    // setPosition("");
    // setPassportnumber("");
    // setCountry("");
    // setSelectedProject("");
    // setProjects([]);
    // setSelectedRequestVisa("");
    // setNewDateRequestVisa(null);
    // setSelectedVisaCableReceive("");
    // setNewvCabledate(null);
    // setSelectedPASSPORTSUBMITTED("");
    // setPassportSubmitdate(null);
    // setSelectedFinalVisa("");
    // setFinalVisaReceiveDate(null);
    // setFinishDateVisa(null);
  };



  useEffect(() => {
    findId()
    // setIsSaveDisabled(!getsId || !name);
  }, []);

  return (
   <Form
      layout='vertical'
      style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
    // initialValues={settings}

    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={4}>Updta Visa</Typography.Title>
          <StyledSecondaryText>
          
          </StyledSecondaryText>
        </div>

      </div>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer> 
      <Col xs={24} md={6}>
          <Typography.Title level={5}>Update Visa Information </Typography.Title>
         
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
      

              <Col xs={24} md={12}>
                <Form.Item className='form-field'>
                  <FloatLabel name="Full Name ">
                    <span className='modallabel'>Full Name :</span>
                    <Input
                      className='Input'
                      placeholder="Full Name "
                      value={name}
                      readOnly // Correction de la fonction de changement
                    />
                  </FloatLabel>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item className='form-field'>
                  <FloatLabel name="Position">
                    <span className='modallabel'>Position :</span>
                    <Input
                      className='Input'
                      placeholder="¨Position"
                      value={position}
                      readOnly // Correction de la fonction de changement
                    />
                  </FloatLabel>
                </Form.Item>
              </Col>

           

              {/* <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Passport Number">
                      <span className='modallabel'>Passport Number:</span>
                      <Input
                        className='Input'
                        placeholder="Passport Number"
                        value={passportnumber}
                        onChange={handleInputPassortNumberChange} // Correction de la fonction de changement
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Project">
                      <span className='modallabel'>Project :</span>
                      <Select
                        placeholder="Select Projets"
                        onChange={handleProjectChange}
                        value={selectedProject}

                      >

                        {projects.map(project => (
                          <Option key={project} value={project}>
                            {project}
                          </Option>
                        ))}
                      </Select>

                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="REQUESTVISA">
                      <span className='modallabel'>REQUEST VISA :</span>
                      <Select
                        placeholder="Requested Visa"
                        onChange={handleRequestVisaChange}
                        value={selectedRequestVisa}

                      >

                        {Visa.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>              
             
                <Col xs={24} md={12}>
                  <span className='modallabel'> Date Request For Visa :</span>
                  <Form.Item
                    className='form-field'
                    name='Date Request For Visa'>

                    <StyledScrumBoardDatePicker
                      value={newDateRequestVisa}
                      onChange={() => setNewDateRequestVisa()}
                    />
                  </Form.Item>

                </Col>

                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="vCableReceive"

                    >
                      <span className='modallabel'>Visa Cable :</span>

                      <Select
                        className='SelectModal'
                        placeholder="Select Visa Cable Receive "
                        onChange={handleRequestVisaCableChange}
                        value={selectedVisaCableReceive}

                      >

                        {vCableReceive.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>


                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="vCabledate">
                      <span className='modallabel'>Date Visa Cable :</span>
                      <StyledScrumBoardDatePicker
                        value={newvCabledate}
                        onChange={() => setNewvCabledate()}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
          
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="PASSPORT SUBMITTED TO EMBASSY">
                      <span className='modallabel'>PASSPORT SUBMITTED TO EMBASSY :</span>
                      <Select
                        className='form-field'
                        placeholder="PASSPORT SUBMITTED TO EMBASSY "
                        onChange={handlePASSPORTSUBMITTEDChange}
                        value={selectedPASSPORTSUBMITTED}

                      >

                        {PASSPORTSUBMITTED.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>

                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="passportSubmitdate">
                      <span className='modallabel'>Date PASSPORT SUBMITTED TO EMBASSY :</span>
                      <StyledScrumBoardDatePicker
                        value={passportSubmitdate}
                        onChange={() => setPassportSubmitdate()}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="FINAL VISA RECEIVED ">
                      <span className='modallabel'>VISA Ready :</span>
                      <Select
                        placeholder="FINAL VISA RECEIVED "
                        onChange={handleFinalVisaChange}
                        value={selectedFinalVisa}

                      >

                        {finalVisaReceive.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>
       
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finalVisaReceiveDate">
                      <span className='modallabel'>Date FINAL VISA Ready :</span>
                      <StyledScrumBoardDatePicker
                        value={finalVisaReceiveDate}
                        onChange={() => setFinalVisaReceiveDate()}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}> 
                  <Form.Item className='form-field'>
                    <FloatLabel

                      name="finishDateVisa">
                      <span className='modallabel'>FINISH DATE :</span>

                      <StyledScrumBoardDatePicker

                        value={finishDateVisa}
                        onChange={() => setFinishDateVisa()}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col> */}


            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
  
  
      <Space
        size={15}
        style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
      >
        <Button onClick={handleCancel}>Cancel</Button>
        <Button   
        
        disabled={isSaveDisabled}
        onClick={handleAddVisa} type='primary' htmlType='submit'>
         Visa  Save 
        </Button>
      </Space>

      </Form>

  
  );
};


export default AddVisa;
