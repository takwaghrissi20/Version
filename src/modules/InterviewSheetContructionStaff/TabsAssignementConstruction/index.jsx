import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledSecondaryText,
  StyledSecondaryText1,
  StyledShadowWrapper,
  StyledTodoDetailDatePicker,
  StyledInput,

} from '../index.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import dayjs from 'dayjs';
import IntlMessages from '../../../@crema/helpers/IntlMessages';

const TabsAssignement = ({ isSaveDisabled,inputInterview }) => {
  console.log("isSaveDisabled2", isSaveDisabled)

  const location = useLocation();
  const roles = window.localStorage.getItem("role");

  const JobCode = location.state ? location.state.JobCode : null;
  const interviewCode = location.state ? location.state.interviewCode: null;
  console.log("interviewCode",interviewCode)
  const level = location.state ? location.state.level : null;
  const projectName = location.state ? location.state.projectName : null;
  const position = location.state ? location.state.position : null;
  const experienceRequired = location.state ? location.state.experience : null;
  const totalNumber = location.state ? location.state.totalNumber : null;
  const [isConfirmationInterview, setIsConfirmationInterview] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertConfirmation, setShowAlertConfirmation] = useState(false);
  const [dataInterview, setDataInterview] = useState([]);

  const [interviewDate, setInterviewDate] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [expectedJoinDate, setExpectedJoinDate] = useState("");
  const [datalastIdinterview, setDatalastIdinterview] = useState("")
  const [fullname, setFullName] = useState("");

  const [contactFullNumber, setContactFullNumber] = useState("");
  const [contactEmail, setcontactEmail] = useState("");
  const [departement, setDepartement] = useState("");
  const [selectedSituation, setSelectedSituation] = useState('');
  const [selectedValidation, setSelectedValidation] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [selectedPersonalityHR, setSelectedPersonalityHR] = useState('');
  const [selectedMotivation, setSelectedMotivation] = useState('');
  const [selectedMotivationHR, setSelectedMotivationHR] = useState('');
  const [selectedHumainquality, setSelectedHumainquality] = useState('');
  const [selectedHumainqualityHR, setSelectedHumainqualityHR] = useState('');
  const [selectedIntelligence, setSelectedIntelligence] = useState('');
  const [selectedIntelligenceHR, setSelectedIntelligenceHR] = useState('');
  const [selectedLevelHR, setSelectedLevelHR] = useState('');
  const [selectedSkillls, setSelectedSkillls] = useState('');
  const [diploma, setDiploma] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [requiredQualification, setRequiredQualification] = useState("");
  const [requiredExperinece, setRequiredExperinece] = useState("");
  const [evaluator, setEvaluator] = useState("");
  const [comment, setComments] = useState("");
  const [commentHr, setCommentsHr] = useState("");
  const [proposedSalary, setProposedSalary] = useState("");
  const [proposedDailyRate, setProposedDailyRate] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [isOkChecked, setIsOkChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isOkChecked3, setIsOkChecked3] = useState(false);
  const [isNoChecked3, setIsNoChecked3] = useState(false);
  const [isOkCheckedProfile, setIsOkCheckedProfile] = useState(false);
  const [isNoCheckedProfile, setIsNoCheckedProfile] = useState(false);
  const [isOkCheckedEvaluator, setIsOkCheckedEvaluator] = useState(false);
  const [isNoCheckedEvaluator, setIsNoCheckedEvaluator] = useState(false);
  const [isOkCheckedHead, setIsOkCheckedHead] = useState(false);
  const [isNoCheckedHead, setIsNoCheckedHead] = useState(false);
  const [isOkCheckedHRDecision, setIsOkCheckedHRDecision] = useState(false);
  const [isNoCheckedHRDecision, setIsNoCheckedHRDecision] = useState(false);
  const [isOkCheckedBod, setIsOkCheckedBod] = useState(false);
  const [isNoCheckedBOD, setIsNoCheckedBOD] = useState(false);
  const [isHoldCheckedBOD, setIsHoldCheckedBOD] = useState(false);
  const [isOkcheckedHSE, setIsOkcheckedHSE] = useState(false);
  const [isNocheckedHSE, setIsNocheckedHSE] = useState(false);
  const [evaluationDate, setEvaluationDate] = useState(dayjs().format('DD/MM/YYYY'));
  const [selectedEducationTraining, setSelectedEducationTraining] = useState('');
  const [selectedworkExperience, setSelectedWorkExperience] = useState('');
  const [selectedDiversity, setSelectedDiversity] = useState('');
  const [selectedIntellectualCapability, setSelectedIntellectualCapability] = useState('');
  const [selectedEmotionalIntelligence, setSelectedEmotionalIntelligence] = useState('');
  const [selectedSelfconfidence, setSelectedSelfconfidence] = useState('');
  const [selectedCommunicationSkills, setSelectedCommunicationSkills] = useState('');
  const [selectedPassion, setSelectedPassion] = useState('');
  const [selectedCreativity, setSelectedCreativity] = useState('');
  const [selectedLeadershipQualities, setSelectedLeadershipQualities] = useState('');
  const [selectedPhysicalpresentation, setSelectedPhysicalpresentation] = useState('');
  const [selectedHSECertificates, setSelectedHSECertificates] = useState('');
  const [selectedSitehazardscontrol, setSelectedSitehazardscontrol] = useState('');
  const [selectedProperuse, setSelectedProperuse] = useState('');
  const [selectedHazardousmaterials, setSelectedHazardousmaterials] = useState('');
  const [selectedEmergenceEvacuation, setSelectedEmergenceEvacuation] = useState('');
  const [selectedPTWknowledge, setSelectedPTWknowledge] = useState('');
  const [selectedHSEPolicies, setSelectedHSEPolicies] = useState('');
  const [selectedOthers, setSelectedOthers] = useState('');
  const currentYear = new Date().getFullYear();
console.log("selectedHSECertificates",selectedHSECertificates)
  const fetchData = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/last`, {
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
      setDatalastIdinterview(data.interviewCode)

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  useEffect(() => {
    fetchData()

  }, []);
  const NewLastInterview = datalastIdinterview + 1
  //Save InterViewSheet
  const navigate = useNavigate();
  const ShowAlertAfterSaveInterview = () => {
    setShowAlertConfirmation(true)


  }
  const Validation = [
    { vld: 'Valid for post' },
    { vld: 'Not Valid for post' },
    { vld: 'Pending' },
    { vld: 'File to complete' },

  ];
  const Rating = [
    { rate: 'Excellent' },
    { rate: 'Average' },
    { rate: 'Good' },
    { rate: 'Below Average' },

  ];
  const Rating1 = [
    { rate: 'Excellent' },
    { rate: 'Average' },
    { rate: 'Good' },
    { rate: 'Below Average' },

  ];
  const gobackTest = () => {
    navigate(-1)

  }
  const goback = () => {
    navigate(`/Hr/Recruitement&Interview/ConstructionStaffInterview/Update/${interviewCode}`, {
      state: {
        hseCertif:selectedHSECertificates,
        siteHazCont: selectedSitehazardscontrol,
        properUse:selectedProperuse,
        hzardousMater: selectedHazardousmaterials,
        emergency:selectedEmergenceEvacuation,
        ptw:selectedPTWknowledge,
        hsePolicies:selectedHSEPolicies,
        others:selectedOthers
        

      
      }
    });
  }

  const Save = async () => {
    try {
      console.log("selectedValidation", selectedValidation)
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/addintv?id=${JobCode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          interviewCode: NewLastInterview,
          jobcode1: JobCode,
          jobCode: JobCode,
          projname: projectName,
          department: departement,
          requiredExperinece: requiredExperinece,
          positionToBeFilled: position,
          fullName: fullname,
          //interviwDate:interviwDate,//???? A faire
          // interviwDate: DesiredDate,
          // fullName: fullname,
          // projname: projectName,
          // department: departement,
          // diploma: diploma,
          // requiredExperinece: requiredExperinece,
          // requiredQualification: requiredQualification,
          // birthayDate: scheduleDate,
          // familySituation: selectedSituation,
          // educationLevel: educationLevel,
          // requiredGrade: level,
          // experience: experience,
          // positionToBeFilled: position,



          //telCondidate:contactFullNumber,
          // validatesFor:selectedValidation,
          // goTotest2: CheckedFinalGotest2







        })
      });

      if (!response.ok) {
        setShowAlertError(true)
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      if (response.ok) {
        const data = await response.json();
        console.log("dattaaammmmm", data)
        setDataInterview(data)
        // navigate(-1);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };





  const CheckedFinalGotest2 = isOkChecked ? 1 : 0;

  function No(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoChecked(e.target.checked);
    setIsVisible(false);
    if (e.target.checked) {
      setIsOkChecked(false);
      setIsNoChecked(true);
    }
  }





  //HsE
  function OkHSE(e) {
    console.log(`checkedHSE = ${e.target.checked}`);
    setIsOkcheckedHSE(e.target.checked);

    if (e.target.checked) {
      setIsOkcheckedHSE(true);
      setIsNocheckedHSE(false);
    }
  }

  function NoHSE(e) {
    console.log(`NoHSE = ${e.target.checked}`);
    setIsNocheckedHSE(e.target.checked);

    if (e.target.checked) {
      setIsOkcheckedHSE(false);
      setIsNocheckedHSE(true);
    }
  }




  //HSE
  const validateCheckboxesBOD = (_, value) => {
    if (!isOkCheckedBod && !isNoCheckedBOD && !isHoldCheckedBOD) {
      return Promise.reject(new Error('At least one option must be selected!'));
    }
    return Promise.resolve();
  };

  return (
    <>
      <Form
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px", marginTop: "20px" }}
      // initialValues={settings}

      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>INTERVIEW ASSESMENT SHEET</Typography.Title>
            <StyledSecondaryText>
              Construction team
            </StyledSecondaryText>
          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>INTERVIEW ASSESMENT SHEET Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input
                      placeholder={`IAS-${NewLastInterview} -${currentYear}`}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
          
                  >{/*Date et temp de Interview bu Hr*/}
                  <Input
                  placeholder={inputInterview}
                  readOnly                 
                  ></Input>
                
                  </Form.Item>
                </Col>
            

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/* <Divider style={{ marginTop: 16, marginBottom: 16 }} /> */}
        {/* <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}> Required Position Information </Typography.Title>
         
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Project Name' name='projname'>
                  <Input placeholder={projectName}
                    readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Project Ref' name='Project Ref'>
                  <Input placeholder="Project Ref"
                    readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                  <Input placeholder={position} readOnly={true} />
                </Form.Item>
              </Col>
        

            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer> */}
        {/* <Divider style={{ marginTop: 16, marginBottom: 16 }} /> */}
        {/* <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Candidate Personal Information</Typography.Title>
          <StyledSecondaryText1>
            Update your Personal Information Candidate.
          </StyledSecondaryText1>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Full Name' name='fullName'
                  rules={[
                    { required: true, message: 'Please input your Full Name!' },
                  ]}
                
                >
                  <Input placeholder='Full Name'
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}

                  />
                </Form.Item>
              </Col>
             

            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer> */}
        {roles.includes("Hr") && (
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>ATTRIBUTES </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Education and Training -scholastic achievements, special 
                  studies, relevance to position applied for'
                      name='attribut1'
                      rules={[
                        { required: true, message: 'Please Select your Select Education and Training !' },

                      ]}
                      onChange={(value) => setSelectedEducationTraining(value)}
                    >
                      <Select
                        placeholder='Select Education and Training'

                        onChange={(value) => console.log('Select Education and Training:', value)}
                        value={selectedEducationTraining}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Work Experience achievements, relevance to position applied For'
                      name='attribut2'
                      rules={[
                        { required: true, message: 'Please Select your Select Work Experience achievements!' },

                      ]}
                      onChange={(value) => setSelectedWorkExperience(value)}
                    >
                      <Select
                        placeholder='Select Education and Training'

                        onChange={(value) => console.log('Select Education and Training:', value)}
                        value={selectedworkExperience}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Diversity of Talents/Interests  Hobbies ; sports"
                      name='attribut3'
                      rules={[
                        { required: true, message: 'Please Select your Select Diversity of Talents/Interests !' },

                      ]}
                      onChange={(value) => setSelectedDiversity(value)}
                    >
                      <Select
                        placeholder='Select Education and Training'

                        onChange={(value) => console.log('Select Education and Training:', value)}
                        value={selectedDiversity}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Intellectual Capability comprehension ; judgment; ability to reason;decision 
                  making-decision"
                      name='attribut4'
                      rules={[
                        { required: true, message: 'Please Select your Select Intellectual Capability comprehension  !' },

                      ]}
                      onChange={(value) => setSelectedIntellectualCapability(value)}
                    >
                      <Select
                        placeholder='Select Intellectual Capability comprehension '

                        onChange={(value) => console.log('Select Intellectual Capability comprehension :', value)}
                        value={selectedIntellectualCapability}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Emotional Intelligence ability to work/relate with others; 
                  attitude towards work/life; maturity"
                      name='attribut5'
                      rules={[
                        { required: true, message: 'Please Select your Select Emotional Intelligence  !' },

                      ]}
                      onChange={(value) => setSelectedEmotionalIntelligence(value)}
                    >
                      <Select
                        placeholder='Select Intellectual Emotional Intelligence '

                        onChange={(value) => console.log('Select Intellectual Emotional Intelligence :', value)}
                        value={selectedEmotionalIntelligence}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Self-confidence  self- assurance ; belief in one’s potential and
                  capability"
                      name='attribut6'
                      rules={[
                        { required: true, message: 'Please Select your Select Self-confidence  self- assurance   !' },

                      ]}
                      onChange={(value) => setSelectedSelfconfidence(value)}
                    >
                      <Select
                        placeholder='Select Self-confidence  self- assurance  '

                        onChange={(value) => console.log('Select Intellectual Self-confidence  self- assurance  :', value)}
                        value={selectedSelfconfidence}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Communication Skills ability to express/present ideas in clear ,concise manner
                "
                      name='attribut7'
                      rules={[
                        { required: true, message: 'Please Select your Select Communication Skills   !' },

                      ]}
                      onChange={(value) => setSelectedCommunicationSkills(value)}
                    >
                      <Select
                        placeholder='Select Communication Skills '

                        onChange={(value) => console.log('Select Intellectual Communication Skills  :', value)}
                        value={selectedCommunicationSkills}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Passion/Enthusiasm - energy & vitality in pursuing goals & 
                 objectives"
                      name='attribut8'
                      rules={[
                        { required: true, message: 'Please Select your Select Passion/Enthusiasm   !' },

                      ]}
                      onChange={(value) => setSelectedPassion(value)}
                    >
                      <Select
                        placeholder='Select Passion/Enthusiasm '

                        onChange={(value) => console.log('Select Intellectual Passion/Enthusiasm :', value)}
                        value={selectedPassion}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="   
                  Creativity / Imagination - ability to work/find solutions 
                       outside the boundaries of conventions."
                      name='attribut9'
                      rules={[
                        { required: true, message: 'Please Select your Select  Creativity / Imagination   !' },

                      ]}
                      onChange={(value) => setSelectedCreativity(value)}
                    >
                      <Select
                        placeholder='Select  Creativity / Imagination '

                        onChange={(value) => console.log('Select  Creativity / Imagination :', value)}
                        value={selectedCreativity}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="   
                  Ladership Qualities – initiative, ability to lead others; decisiveness"
                      name='attribut10'
                      rules={[
                        { required: true, message: 'Please Select your Select   Ladership Qualities  !' },

                      ]}
                      onChange={(value) => setSelectedLeadershipQualities(value)}
                    >
                      <Select
                        placeholder='Select   Ladership Qualities '

                        onChange={(value) => console.log('Select  Ladership Qualities :', value)}
                        value={selectedLeadershipQualities}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="   
                  Physical presentation during the interview"
                      name='attribut11'
                      rules={[
                        { required: true, message: 'Please Select your Select  Physical presentation  !' },

                      ]}
                      onChange={(value) => setSelectedPhysicalpresentation(value)}
                    >
                      <Select
                        placeholder='Select  Physical presentation '

                        onChange={(value) => console.log('Select Physical presentation :', value)}
                        value={selectedPhysicalpresentation}
                      >
                        {Rating.map((p, index) => (
                          <Select.Option key={index} value={p.rate}>
                            {p.rate}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
        )}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {/*Preliminary study of the application*/}
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>INTERVIEW ASSESMENT SHEET </Typography.Title>
            <StyledSecondaryText1>
              HSE REQUIREMENTS
            </StyledSecondaryText1>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="HSE Certificates : Working at hight/ H2S/ First Aid... (If
                    any)"
                    name='attribut13'
                    rules={[
                      { required: true, message: 'Please Select your Select  HSE Certificates  !' },

                    ]}
                  
                  >
                    <Select
                      placeholder='Select  HSE Certificates  '
                      onChange={(value) => setSelectedHSECertificates(value)}
                   
                      value={selectedHSECertificates}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Site hazards and control measures khowledge"
                    name='attribut14'
                    rules={[
                      { required: true, message: 'Please Select your Select  Site hazards and control  !' },

                    ]}
                   
                  >
                    <Select
                      placeholder='Select  Site hazards and control '
                      onChange={(value) => setSelectedSitehazardscontrol(value)}
                      value={selectedSitehazardscontrol}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Proper use of Personal Protective Equipment (PPE) "
                    name='attribut15'
                    rules={[
                      { required: true, message: 'Please Select your Select  Proper use of Personal Protective  !' },

                    ]}
                
                  >
                    <Select
                      placeholder='Select  Proper use of Personal Protective '
                      onChange={(value) => setSelectedProperuse(value)}
                      value={selectedProperuse}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Hazardous materials handling. "
                    name='attribut16'
                    rules={[
                      { required: true, message: 'Please Select your Select  Hazardous materials !' },

                    ]}
               
                  >
                    <Select
                      placeholder='Select  Proper use of Hazardous materials '
                      onChange={(value) => setSelectedHazardousmaterials(value)}
                      value={selectedHazardousmaterials}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Emergency and Evacuation knowledge. "
                    name='attribut17'
                    rules={[
                      { required: true, message: 'Please Select your Select  Emergency and Evacuation knowledge. !' },

                    ]}
                   
                  >
                    <Select
                      placeholder='Select Emergency and Evacuation knowledge. '
                      value={selectedEmergenceEvacuation}
                      onChange={(value) => setSelectedEmergenceEvacuation(value)}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="PTW knowledge "
                    name='attribut18'
                    rules={[
                      { required: true, message: 'Please Select your Select  PTW knowledge !' },

                    ]}
                   
                  >
                    <Select
                      placeholder='Select PTW knowledge. '
                      onChange={(value) => setSelectedPTWknowledge(value)}
                      value={selectedPTWknowledge}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="HSE Policies and Instructions "
                    name='attribut19'
                    rules={[
                      { required: true, message: 'Please Select your Select  HSE Policies and Instructions !' },

                    ]}
                   
                  >
                    <Select
                      placeholder='Select HSE Policies and Instructions '
                      onChange={(value) => setSelectedHSEPolicies(value)}
                      value={selectedHSEPolicies}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Others… "
                    name='attribut'
                    rules={[
                      { required: true, message: 'Please Select your Select  Others…  !' },

                    ]}
                   
                  >
                    <Select
                      placeholder='Select Others… '
                      onChange={(value) => setSelectedOthers(value)}
                      value={selectedOthers}
                    >
                      {Rating.map((p, index) => (
                        <Select.Option key={index} value={p.rate}>
                          {p.rate}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {/*Preliminary study of the application*/}
        {/* <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>INTERVIEW ASSESMENT SHEET </Typography.Title>
            <StyledSecondaryText1>
              HSE Decision
            </StyledSecondaryText1>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <StyledInput>
                    <Form.Item
                      label='HSE Decision
                  '
                      name='YesHSE' >
                      <Checkbox checked={isOkcheckedHSE} onChange={OkHSE}>

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={isNocheckedHSE} onClick={NoHSE}>
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>
                  </StyledInput>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer> */}



        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}>
          <Button onClick={goback}>previous</Button>

        </Space>

        {showAlertError && (
          <Alert
            message="Failed"
            description="Interview Not Save"
            type="error"
            showIcon
            closable
            onClose={() => setShowAlertError(false)}

          />
        )}
        {/* {showAlertConfirmation && (
        <div className="modal-container">
          <div className="modal-content">
            <p>Do you want to save an interview ?</p>
            <div className="button-container">
              <button className="red-button" onClick={Save }>Yes</button>
              <button className="green-button" onClick={() => setShowAlertConfirmation(dalse)}>Cancel</button>
            </div>
       
          </div>
        </div>
      )} */}


      </Form>
    </>
  );
};


export default TabsAssignement;
