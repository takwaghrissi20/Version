import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox,  DatePicker, } from 'antd';
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




const TabsInterviewSheetConstructionId = ({isSaveDisabled,JobCode,totalNumber,level,projectName,position }) => {
  const location = useLocation();

  console.log("isSaveDisabled1",isSaveDisabled)
  const experienceRequired = location.state ? location.state.experience : null;
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
  const [selectedEducationTraining , setSelectedEducationTraining] = useState('');
  const [selectedworkExperience  , setSelectedWorkExperience ] = useState('');
  const [selectedDiversity  , setSelectedDiversity  ] = useState('');
  const [selectedIntellectualCapability  , setSelectedIntellectualCapability] = useState('');
  const [selectedEmotionalIntelligence , setSelectedEmotionalIntelligence ] = useState('');
  const [selectedSelfconfidence , setSelectedSelfconfidence] = useState('');
  const [selectedCommunicationSkills , setSelectedCommunicationSkills] = useState('');
  const [selectedPassion , setSelectedPassion] = useState('');
  const [selectedCreativity , setSelectedCreativity] = useState('');
  const [selectedLeadershipQualities , setSelectedLeadershipQualities] = useState('');
  const [selectedPhysicalpresentation, setSelectedPhysicalpresentation] = useState('');
  const [selectedHSECertificates , setSelectedHSECertificates] = useState('');
  const [selectedSitehazardscontrol , setSelectedSitehazardscontrol] = useState('');
  const [selectedProperuse , setSelectedProperuse] = useState('');
  const [selectedHazardousmaterials , setSelectedHazardousmaterials ] = useState('');
  const [selectedEmergenceEvacuation , setSelectedEmergenceEvacuation ] = useState('');
  const [selectedPTWknowledge, setSelectedPTWknowledge ] = useState('');
  const [selectedHSEPolicies, setSelectedHSEPolicies ] = useState('');
  const [selectedOthers, setSelectedOthers ] = useState('');
  const currentYear = new Date().getFullYear();
  const [salarylev1Error, setSalarylev1Error] = useState('');
  const [dailylev1Error, setDailylev1Error] = useState('');
  const [lev1SalaryMax, setLev1SalaryMax] = useState(0);
  const [lev1dailyRateMax, setLev1DailyRateMax] = useState(0);
  const [salarylev2Error, setSalarylev2Error] = useState('');
  const [dailylev2Error, setDailylev2Error] = useState('');
  const [lev2SalaryMax, setLev2SalaryMax] = useState(0);
  const [lev2dailyRateMax, setLev2DailyRateMax] = useState(0);
  const [salarylev3Error, setSalarylev3Error] = useState('');
  const [dailylev3Error, setDailylev3Error] = useState('');
  const [lev3SalaryMax, setLev3SalaryMax] = useState(0);
  const [lev3dailyRateMax, setLev3DailyRateMax] = useState(0);
  const [salarylev4Error, setSalarylev4Error] = useState('');
  const [dailylev4Error, setDailylev4Error] = useState('');
  const [lev4SalaryMax, setLev4SalaryMax] = useState(0);
  const [lev4dailyRateMax, setLev4DailyRateMax] = useState(0);
  const [salarylev5Error, setSalarylev5Error] = useState('');
  const [dailylev5Error, setDailylev5Error] = useState('');
  const [lev5SalaryMax, setLev5SalaryMax] = useState(0);
  const [lev5dailyRateMax, setLev5DailyRateMax] = useState(0);

  const situation = [
    { st: 'Single' },
    { st: 'Maried' },
    { st: 'Divored' },
    { st: 'windower' },
  ];
  const personality = [
    { pesonality: 'low' },
    { pesonality: 'bad' },
    { pesonality: 'Average' },
    { pesonality: 'Good' },
    { pesonality: 'Excellent' },

  ];
  const personalityHR = [
    { pesonality: 'low' },
    { pesonality: 'bad' },
    { pesonality: 'Average' },
    { pesonality: 'Good' },
    { pesonality: 'Excellent' },

  ];
  const qualityHR = [
    { qlt: 'low' },
    { qlt: 'bad' },
    { qlt: 'Average' },
    { qlt: 'Good' },
    { qlt: 'Excellent' },

  ];
  const motivationHR = [
    { mtv: 'low' },
    { mtv: 'bad' },
    { mtv: 'Average' },
    { mtv: 'Good' },
    { mtv: 'Excellent' },

  ];
  const intelligenceHR = [
    { intlg: 'low' },
    { intlg: 'bad' },
    { intlg: 'Average' },
    { intlg: 'Good' },
    { intlg: 'Excellent' },

  ];
  const  LevelHR = [
    { level: 'LevelI' },
    { level: 'LevelII'  },
    {level: 'LevelIII'  },
 

  ];
  
  const quality = [
    { qlt: 'low' },
    { qlt: 'bad' },
    { qlt: 'Average' },
    { qlt: 'Good' },
    { qlt: 'Excellent' },

  ];
  const motivation = [
    { mtv: 'low' },
    { mtv: 'bad' },
    { mtv: 'Average' },
    { mtv: 'Good' },
    { mtv: 'Excellent' },

  ];
  const intelligence = [
    { intlg: 'low' },
    { intlg: 'bad' },
    { intlg: 'Average' },
    { intlg: 'Good' },
    { intlg: 'Excellent' },

  ];
  const skills = [
    { skill: 'low' },
    { skill: 'bad' },
    { skill: 'Average' },
    { skill: 'Good' },
    { skill: 'Excellent' },

  ];
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
      setDatalastIdinterview(data?.interviewCode)

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  const fetchMaxValues = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateConst/filterByPosition?position=${position}`, {
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
      console.log("datttaajjjjj",data)
     if (level === 'lev1') {
      setOfficeSalaryMax(data?.[0]?.lev1);
  
      setDailyRateMax(data?.[0]?.dailyrateJun);
      setTotalMax(data?.[0]?.totalJun);
     
     
      setTotalMax(data?.[0]?.totalJun);
    } else if (level === 'lev2') {
 
    } else if (level === 'lev3') {
   
    }
    else if (level === 'lev4') {
    
    }
    else if (level === 'lev5') {

    }
   
   

    } catch (error) {
      console.error('Erreur lors de la récupération des données Salary:', error);
    }
  };
  useEffect(() => {
    fetchData()
    fetchMaxValues()

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


  const Save = async () => {
    try {
      console.log("selectedValidation",selectedValidation)
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
        console.log("Saeeeeee", data)
        setDataInterview(data)
       // navigate(-1);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  //End Interview Sheet
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibletest3, setIsVisibletest3] = useState(false);
  const [isVisibletestEvaluator, setIsVisibletestEvaluator] = useState(false);
  const [isVisibleEvaluatorDecision, setIsVisibleEvaluatorDecision] = useState(false);
  const [isVisibleHeadDecision, setIsVisibleHeadDecision] = useState(false);
  const [isVisibleHRDecision, setIsVisibleHRDecision] = useState(false);
 
  function Ok(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkChecked(e.target.checked);
    setIsVisible(true);
    if (e.target.checked) {
      setIsNoChecked(false);
    }
    if (!(e.target.checked) ) {
      setIsVisible(false);
    }
  }
console.log("setIsOkChecked",isOkChecked)
console.log(" setIsNoChecked",isNoChecked)
const CheckedFinalGotest2=isOkChecked ?1 : 0;
console.log(" setIsNoCheckeddddFinnnaaaaaaaaaaaal",CheckedFinalGotest2)
  function No(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoChecked(e.target.checked);
    setIsVisible(false);
    if (e.target.checked) {
      setIsOkChecked(false);
      setIsNoChecked(true);
    }
  }
  
  function Ok3(e) {

    setIsOkChecked3(e.target.checked);
    setIsVisibletest3(true);
    if (e.target.checked) {

      setIsNoChecked3(false);
    }
    if (!(e.target.checked) ) {
      setIsVisibletest3(false);
    }
  }

  function No3(e) {
   
    setIsNoChecked3(e.target.checked);
    setIsVisibletest3(false);
    if (e.target.checked) {
      setIsOkChecked3(false);
      setIsNoChecked3(true);
    }
  
  }
  //OkProfile
  function OkProfile(e) {
 
    setIsOkCheckedProfile(e.target.checked);
    setIsVisibletestEvaluator(true)
  
    if (e.target.checked) {

      setIsNoCheckedProfile(false);
    }
    if (!(e.target.checked) ) {
      setIsVisibletestEvaluator(false)
    }
  }

  function NoProfile(e) {

    setIsNoChecked3(e.target.checked);
    setIsVisibletestEvaluator(false)
    if (e.target.checked) {
      setIsOkCheckedProfile(false);
      setIsNoCheckedProfile(true);
    }
  }
  //Ok or No Evaluator
  function  OkEvaluator(e) {
   
    setIsOkCheckedEvaluator(e.target.checked);
    setIsVisibleEvaluatorDecision(true)
  
    if (e.target.checked) {

      setIsNoCheckedEvaluator(false);
    }
    if (!(e.target.checked) ) {
      setIsVisibletestEvaluator(false)
    }
  }

  function NoEvaluator(e) {

    setIsNoCheckedEvaluator(e.target.checked);
    setIsVisibleEvaluatorDecision(false)
    if (e.target.checked) {
      setIsOkCheckedEvaluator(false);
      setIsNoCheckedEvaluator(true);
    }
  }

  //Desicion Head 
  function  OkHead(e) {
 
    setIsOkCheckedHead(e.target.checked);
    setIsVisibleHeadDecision(true)
  
    if (e.target.checked) {

      setIsNoCheckedHead(false);
    }
    if (!(e.target.checked) ) {
      setIsVisibleHeadDecision(false)
    }
  }

  function NoHead(e) {

    setIsOkCheckedHead(e.target.checked);
    setIsVisibleHeadDecision(false)
    if (e.target.checked) {
      setIsOkCheckedHead(false);
      setIsNoCheckedHead(true);
    }
  }
  function  OkHrDesicision(e) {
    
    setIsOkCheckedHRDecision(e.target.checked);
    setIsVisibleHRDecision(true)
  
    if (e.target.checked) {

      setIsNoCheckedHRDecision(false);
    }
    if (!(e.target.checked) ) {
      setIsVisibleHRDecision(false)
    }
  }

  function NoHrDesicision(e) {

    setIsOkCheckedHRDecision(e.target.checked);
    setIsVisibleHRDecision(false)
    if (e.target.checked) {
      setIsOkCheckedHRDecision(false);
      setIsNoCheckedHRDecision(true);
    }
  }

 
  return (
    <>
    <Form
      layout='vertical'
      style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
    // initialValues={settings}

    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography.Title level={4}>CONSTRUCTION TEAM INTERVIEW SHEET</Typography.Title>
          <StyledSecondaryText>
          CONSTRUCTION TEAM
          </StyledSecondaryText>
        </div>

      </div>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>InterView Information</Typography.Title>
        
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Reference' name='interviewCode'>
                  <Input placeholder={"CIS-" + NewLastInterview} readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Interview Date' name='Date :'
                 rules={[
                  { required: true, message: 'Please input your Interview Date!' },
                ]}
                
                            
                >{/*Date et temp de Interview bu Hr*/}
                <DatePicker
                      //defaultValue={new Date()} 
                      defaultValue={dayjs(interviewDate, '2024-01-01')}

                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) =>setInterviewDate(dayjs(value).format('YYYY/MM/DD'))}
                    />
               
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='JOB CODE:' name='jobcode1'>
                  <Input placeholder={JobCode} readOnly={true} />{/*Ajout le MSIS OU cis*/}
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label='Total Number Required Position' name='Total Number Required Position'>
                  <Input placeholder={totalNumber} readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Total Interviewed' name='TotalRequiredPosition'>
                  <Input
                  readOnly={true}
                  placeholder='Total Required Position' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Total Accepted' name='TotalAccepted'>
                  <Input
                    readOnly={true}
                  placeholder='Total Accepted' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Required Grade' name='requiredGrade'>
                  <Input placeholder={level} readOnly={true} />
                </Form.Item>
              </Col>




            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
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
                <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                  <Input placeholder={position} readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Department ' name='department '>
                  <Input placeholder='Department'
                    value={departement}
                    onChange={(e) => setDepartement(e.target.value)}

                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label='Requested Qualification' name='requiredQualification'>
                  <Input placeholder='Requested Qualification'

                    value={requiredQualification}
                    onChange={(e) => setRequiredQualification(e.target.value)}


                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Requested Experience' name='requiredExperinece'>
                  <Input
                    value={requiredExperinece}
                    onChange={(e) => setRequiredExperinece(e.target.value)}

                    placeholder='Requested Experience' />
                </Form.Item>
              </Col>

            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <AppRowContainer>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Candidate Personal Information</Typography.Title>
        
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Full Name' name='fullName'
                  rules={[
                    { required: true, message: 'Please input your Full Name!' },
                  ]}>
                  <Input placeholder='Full Name'
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}

                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Contact Full Number' name='telCondidate'
                 rules={[
                  { required: true, message: 'Please input your Contact Full Number!' },
              
                ]}
                  
                  >
                  <Input placeholder='Contact Full Number'
                    value={contactFullNumber}
                    onChange={(e) => setContactFullNumber(e.target.value)}

                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Contact Email' name='Contact Email'
                
                rules={[
                  { required: true, message: 'Please input your Contact Email!' },
                 
                ]}
                
                
                >
                  <Input placeholder='Contact Email'
                    value={contactEmail}
                    onChange={(e) => setcontactEmail(e.target.value)}


                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label='Date of Birth' name='birthayDate'
                   rules={[
                    { required: true, message: 'Please input your Date of Birth!' },
                   
                  ]}
                >
                  <StyledTodoDetailDatePicker className='form-field'>

                    <DatePicker
                      //defaultValue={new Date()} 
                      defaultValue={dayjs(scheduleDate, '16 06,1990')}

                      style={{ width: "100%", height: "34px" }}
                      onChange={(value) => setScheduleDate(dayjs(value).format('YYYY/MM/DD'))}
                    />
                  </StyledTodoDetailDatePicker>
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label='Family Situation'
                  name='Family Situation'
                  rules={[
                    { required: true, message: 'Please Select your Family Situation!' },
                   
                  ]}
                  // Remplacez initialValue par la valeur initiale de votre choix
                  onChange={(value) => setSelectedSituation(value)}
                >
                  <Select
                    placeholder='Select Family Situation'

                    onChange={(value) => console.log('Selected situation:', value)}
                    value={selectedSituation} // La valeur sélectionnée est définie par l'état selectedSituation
                  >
                    {situation.map((sit, index) => (
                      <Select.Option key={index} value={sit.st}>
                        {sit.st}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>


            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Candidate Experience & Education </Typography.Title>
         
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Diploma /Speciality' name='diploma'
                  rules={[
                    { required: true, message: 'Please input your Diploma /Speciality!' },
                   
                  ]}
                
                
                >
                  <Input
                    placeholder='Diploma /Speciality'
                    value={diploma}
                    onChange={(e) => setDiploma(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Educational level' name='educationLevel'
                  rules={[
                    { required: true, message: 'Please input your Educational level!' },
                   
                  ]}
                
                >
                  <Input placeholder='Educational level'
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}

                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Experience' name='experience'
                
                rules={[
                  { required: true, message: 'Please input your Experience!' },
                 
                ]}
                
                
                >
                  <Input placeholder='Experience'
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}

                  />
                </Form.Item>
              </Col>

            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      {/*Preliminary study of the application*/}
      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
        <Col xs={24} md={6}>
          <Typography.Title level={5}>Preliminary study of the application </Typography.Title>
        
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Validation'
                  name='validatesFor'
                  rules={[
                    { required: true, message: 'Please Select your Select Validation!' },
                   
                  ]}
                  onChange={(value) => setSelectedValidation(value)}
                >
                  <Select
                    placeholder='Select Validation'

                    onChange={(value) => console.log('Selected Validation:', value)}
                    value={selectedValidation}
                  >
                    {Validation.map((val, index) => (
                      <Select.Option key={index} value={val.vld}>
                        {val.vld}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <StyledInput>
                <Form.Item
                  label='Go to test 2 :'
                  name='Gototest2' >
                  <Checkbox  checked={isOkChecked} onChange={Ok}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoChecked} onClick={No}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>


            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>

      {/* Psychotechnical Test*/}
    
      {/*Preliminary study of the application*/}
      {isVisible && (
        <>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}> Psychotechnical Test </Typography.Title>
           <StyledSecondaryText1>
           Go to test 3
           </StyledSecondaryText1>
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
         <Col xs={24} md={12}>
                <Form.Item
                  label='Personnality'
                  name='Personnality'
                  onChange={(value) => setSelectedPersonality(value)}
                  rules={[
                    { required: true, message: 'Please Select your Select Personnality!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Select Personnality'

                    onChange={(value) => console.log('Selected Personnality:', value)}
                    value={selectedPersonality}
                  >
                    {personality.map((p, index) => (
                      <Select.Option key={index} value={p.personality}>
                        {p.pesonality}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Humain quality'
                  name='Humain quality'
                  onChange={(value) => setSelectedHumainquality(value)}
                  rules={[
                    { required: true, message: 'Please Select your Select Humain quality!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Humain quality'

                    onChange={(value) => console.log('Selected Humain quality:', value)}
                    value={selectedHumainquality}
                  >
                    {quality.map((p, index) => (
                      <Select.Option key={index} value={p.qlt}>
                        {p.qlt}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Motivation/Ambition'
                  name='Motivation/Ambition'
                  onChange={(value) => setSelectedMotivation(value)}
                  rules={[
                    { required: true, message: 'Please Select your Select Motivation/Ambition!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Motivation/Ambition'

                    onChange={(value) => console.log('Selected Motivation:', value)}
                    value={selectedMotivation}
                  >
                    {motivation.map((p, index) => (
                      <Select.Option key={index} value={p.mtv}>
                        {p.mtv}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Intelligence'
                  name='Intelligence'
                  onChange={(value) => setSelectedIntelligence(value)}
                  rules={[
                    { required: true, message: 'Please Select your Select Intelligence!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Intelligence'

                    onChange={(value) => console.log('Selected Intelligence:', value)}
                    value={selectedIntelligence}
                  >
                    {intelligence.map((p, index) => (
                      <Select.Option key={index} value={p.intlg}>
                        {p.intlg}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <StyledInput>
                <Form.Item
                  label='Go to test 3 :'
                  name='Gototest3' >
                  <Checkbox  checked={isOkChecked3} onChange={Ok3}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoChecked3} onClick={No3}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>
       </>
      )}
   
      {/*Preliminary study of the application*/}
      {isVisibletest3 && (
        <>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}> Technical Evaluation</Typography.Title>
        
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
            <Col xs={24} md={12}>
                <Form.Item
                  label='English Skills '
                  name='English Skills '
                  onChange={(value) =>setSelectedSkillls(value)}
                  rules={[
                    { required: true, message: 'Please Select your Select English Skills!' },
                   
                  ]}
                  
                >
                  <Select
                    placeholder='English Skills '
                    onChange={(value) => console.log('English Skills ', value)}
                    value={selectedSkillls}
                  >
                    {skills.map((p, index) => (
                      <Select.Option key={index} value={p.skill}>
                        {p.skill}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Date'
                  name='Date'
                  rules={[
                    { required: true, message: 'Please Select your input Date!' },
                   
                  ]}
                >
                  
                     <DatePicker
                     style={{ width: '100%',height:"33px" }}
                autoFocus
                value={dayjs(evaluationDate, 'DD/MM/YYYY')}
                onChange={(value) => {
                  setEvaluationDate(getFormattedDate(value, 'DD/MM/YYYY'));
        
                }}
           
              />
                 
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Evaluator' name='Evaluator'
                    rules={[
                      { required: true, message: 'Please input your Evaluator!' },
                     
                    ]}
                
                >
                  <Input
                    value={evaluator}
                    onChange={(e) => setEvaluator(e.target.value)}
                

                    placeholder='Evaluator' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='ID Number' name='ID Number'
                    rules={[
                      { required: true, message: 'Please input your ID Number!' },
                     
                    ]}
                >
                  <Input
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}

                    placeholder='ID Number' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <StyledInput>
                <Form.Item
                  label='The present profile meets the requirements of 
                  the requested position :'
                  name='Present profile' >
                  <Checkbox  checked={isOkCheckedProfile} onChange={OkProfile}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoCheckedProfile} onClick={NoProfile}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
          
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>
       </>
      )}
      {/*Evalautor Desicion*/}
    
      {/*Preliminary study of the application*/}
      {isVisibletestEvaluator && (
        <>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}> Evaluator Decision</Typography.Title>
         
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
     
              <Col xs={24} md={24}>
                <StyledInput>
                <Form.Item
                  label='Evaluator Decision :'
                  name=' EvaluatorDecision' >
                  <Checkbox  checked={isOkCheckedEvaluator} onChange={OkEvaluator}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoCheckedEvaluator} onClick={NoEvaluator}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
              <Col xs={24} md={24}>
                <Form.Item label='Comments' name='Comments'
                
                rules={[
                  { required: true, message: 'Please input your Comments!' },
                 
                ]}
                
                >
                  <Input
                    value={comment}
                    onChange={(e) => setComments(e.target.value)}

                    placeholder='Comments' />
                </Form.Item>
              </Col>
          
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>
       </>
      )}
       
      {/*6. Head of Department Approval*/}
      {isVisibleEvaluatorDecision && (
        <>
         <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}>  Head of Department ApprovaL</Typography.Title>
          
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
     
              <Col xs={24} md={12}>
                <StyledInput>
                <Form.Item
                  label='Head of Department Approval :'
                  name='Head of Department Approval' >
                  <Checkbox  checked={isOkCheckedHead} onChange={OkHead}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoCheckedHead} onClick={NoHead}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
           
          
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>
       </>
      )}
      {/*HR Evaluation*/}
   
      {/*6. Head of Department Approval*/}
      {isVisibleHeadDecision && (
        <>
           <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}>HR Evaluation &&  Decision</Typography.Title>
         
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
            <Col xs={24} md={12}>
                <Form.Item
                  label='Personnality'
                  name='Personnality'
                  onChange={(value) => setSelectedPersonalityHR(value)}
                  rules={[
                    { required: true, message: 'Please Select  your Personnality!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Select Personnality'

                    onChange={(value) => console.log('Selected Personnality:', value)}
                    value={setSelectedPersonalityHR}
                  >
                    {personalityHR.map((p, index) => (
                      <Select.Option key={index} value={p.personality}>
                        {p.pesonality}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Humain quality'
                  name='Humain quality'
                  onChange={(value) => setSelectedHumainqualityHR(value)}
                  rules={[
                    { required: true, message: 'Please Select  your Humain quality!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Humain quality'

                    onChange={(value) => console.log('Selected Humain quality:', value)}
                    value={selectedHumainqualityHR}
                  >
                    {quality.map((p, index) => (
                      <Select.Option key={index} value={p.qlt}>
                        {p.qlt}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Motivation/Ambition'
                  name='Motivation/Ambition'
                  onChange={(value) => setSelectedMotivationHR(value)}
                  rules={[
                    { required: true, message: 'Please Select  your Motivation/Ambition!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Motivation/Ambition'

                    onChange={(value) => console.log('Selected Motivation:', value)}
                    value={selectedMotivationHR}
                  >
                    {motivation.map((p, index) => (
                      <Select.Option key={index} value={p.mtv}>
                        {p.mtv}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Intelligence'
                  name='Intelligence'
                  onChange={(value) => setSelectedIntelligenceHR(value)}
                  rules={[
                    { required: true, message: 'Please Select  your Intelligence!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Intelligence'

                    onChange={(value) => console.log('Selected Intelligence:', value)}
                    value={selectedIntelligenceHR}
                  >
                    {intelligenceHR.map((p, index) => (
                      <Select.Option key={index} value={p.intlg}>
                        {p.intlg}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Level'
                  name='Level'
                  onChange={(value) => setSelectedLevelHR(value)}
                  rules={[
                    { required: true, message: 'Please Select  your Level!' },
                   
                  ]}
                >
                  <Select
                    placeholder='Level'

                    onChange={(value) => console.log('Selected Level:', value)}
                    value={selectedLevelHR}
                  >
                    {LevelHR.map((p, index) => (
                      <Select.Option key={index} value={p.level}>
                        {p.level}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
              <Form.Item label='Expected Join Date' name='Expected Join Date'
               rules={[
                { required: true, message: 'Please Select  your Expected Join Date!' },
               
              ]}
              
              
              >
               

                    <DatePicker
                      //defaultValue={new Date()} 
                      defaultValue={dayjs(expectedJoinDate, '16 06,1990')}

                      style={{ width: "260%", height: "30px" }}
                      onChange={(value) =>setExpectedJoinDate(dayjs(value).format('YYYY/MM/DD'))}
                    />
                
                </Form.Item>
                </Col>
     
           
           
                <Col xs={24} md={12}>
                <Form.Item label='Proposed Salary' name='Proposed Salary'
                  rules={[
                    { required: true, message: 'Please input your Proposed Salary!' },
                    { pattern: /^[0-9]+$/, message: 'Proposed Salary must be a number!' },
                   
                  ]}
                              
                >
                  <Input
                    value={proposedSalary}
                    onChange={(e) => setProposedSalary(e.target.value)}

                    placeholder='Proposed Salary' />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Proposed Daily Rate' name='Proposed Daily Rate'
                  rules={[
                    { required: true, message: 'Please input your Proposed Daily Rate!' },
                    { pattern: /^[0-9]+$/, message: 'Proposed Daily Rate must be a number!' },
                   
                  ]}
                
                
                >
                  <Input
                    value={proposedDailyRate}
                    onChange={(e) =>setProposedDailyRate(e.target.value)}

                    placeholder='Proposed Salary' />
                </Form.Item>
              </Col>
              <Col xs={24} md={24}>
                <StyledInput>
                <Form.Item
                  label='HR Decision:'
                  name='HR Evaluation' >
                  <Checkbox  checked={isOkCheckedHRDecision} onChange={OkHrDesicision}>
               
                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={isNoCheckedHRDecision} onClick={NoHrDesicision}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
              <Col xs={24} md={24}>
                <Form.Item label='Comments' name='Comments'
                 rules={[
                  { required: true, message: 'Please Select  your Comments!' },
                 
                ]}>
                  <Input
                    value={commentHr}
                    onChange={(e) => setCommentsHr(e.target.value)}

                    placeholder='Comments' />
                </Form.Item>
              </Col>
            
                
          
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>
       </>
      )}


      <Space
        size={15}
        style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
      >
        <Button >Cancel</Button>
        <Button onClick={Save}
          disabled={isSaveDisabled === false}
         type='primary'
        htmlType='submit'>
          Save
        </Button>
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
  


    </Form>

    </>
  );
};


export default TabsInterviewSheetConstructionId;