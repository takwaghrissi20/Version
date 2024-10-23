import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledSecondaryText,
  StyledSecondaryText1,
  StyledShadowWrapper,
  StyledTodoDetailDatePicker,
  StyledInput,

} from '../../index.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import dayjs from 'dayjs';
import IntlMessages from '../../../../../../@crema/helpers/IntlMessages';

const TabsAssignement = ({ isSaveDisabled, interviewCode, inputInterview, validatesFor, goTotest2, psy_Person, psy_HumQuality
  , psy_motivation, psy_Intellig, goToTest3, techEnglishSkills, techDate, techEvaluation, idNumb, meetDesision, evalDesision,
  techcommentaire, hseCertif, siteHazCont,
  properUse,
  hzardousMater,
  emergency,
  ptw,
  hsePolicies,
  others,
  educAndTrain,
  workExp,
  DiversityTal,
  intellCap,
  selfConf,
  emotIntellij,
  comunicSkills,
  passion,
  creativity,
  physicPres,
  leadership,
  hseDecision,
  hseComment,
  idViewConstruction


}) => {
  console.log("idViewConstruction", idViewConstruction)

  const location = useLocation();


  const JobCode = location.state ? location.state.JobCode : null;
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
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/last?token=${token}`, {
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
        hseCertif: selectedHSECertificates,
        siteHazCont: selectedSitehazardscontrol,
        properUse: selectedProperuse,
        hzardousMater: selectedHazardousmaterials,
        emergency: selectedEmergenceEvacuation,
        ptw: selectedPTWknowledge,
        hsePolicies: selectedHSEPolicies,
        others: selectedOthers



      }
    });
  }
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success INTERVIEW ASSESMENT SHEET',
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
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error INTERVIEW ASSESMENT SHEET',
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
  const Save = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/update?id=${interviewCode}&token=${token}`, {
        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },

        body: JSON.stringify({
          interviewCode: interviewCode,
          validatesFor: validatesFor,
          goTotest2: goTotest2,
          psy_Person: psy_Person,
          psy_HumQuality: psy_HumQuality,
          psy_motivation: psy_motivation,
          psy_Intellig: psy_Intellig,
          goToTest3: goToTest3,
          techEnglishSkills: techEnglishSkills,
          techDate: techDate,
          techEvaluation: techEvaluation,
          idNumb: idNumb,
          meetDesision: meetDesision,
          evalDesision: evalDesision,
          techcommentaire: techcommentaire,
          hseCertif: selectedHSECertificates,
          siteHazCont: selectedSitehazardscontrol,
          properUse: selectedProperuse,
          hzardousMater: selectedHazardousmaterials,
          emergency: selectedEmergenceEvacuation,
          ptw: selectedPTWknowledge,
          hsePolicies: selectedHSEPolicies,
          others: selectedOthers,
          notif: 100,
      

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
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
        openNotification('bottomRight')
        // navigate(-1);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  {/*HRMANAGER*/ }
  const SaveHrManager = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/update?id=${interviewCode}&token=${token}`, {
        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },

        body: JSON.stringify({
          interviewCode: interviewCode,
          validatesFor: validatesFor,
          goTotest2: goTotest2,
          psy_Person: psy_Person,
          psy_HumQuality: psy_HumQuality,
          psy_motivation: psy_motivation,
          psy_Intellig: psy_Intellig,
          goToTest3: goToTest3,
          techEnglishSkills: techEnglishSkills,
          techDate: techDate,
          techEvaluation: techEvaluation,
          idNumb: idNumb,
          meetDesision: meetDesision,
          evalDesision: evalDesision,
          techcommentaire: techcommentaire,
          hseCertif: hseCertif,
          siteHazCont: siteHazCont,
          properUse: properUse,
          hzardousMater: hzardousMater,
          emergency: emergency,
          ptw: ptw,
          hsePolicies: hsePolicies,
          others: others,
          educAndTrain: selectedEducationTraining,
          workExp: selectedworkExperience,
          DiversityTal: selectedDiversity,
          intellCap: selectedIntellectualCapability,
          selfConf: selectedSelfconfidence,
          emotIntellij: selectedEmotionalIntelligence,
          comunicSkills: selectedCommunicationSkills,
          passion: selectedPassion,
          creativity: selectedCreativity,
          physicPres: selectedPhysicalpresentation,
          leadership: selectedLeadershipQualities,
          notif: 600,
          hseDecision: hseDecision,
          hseComment: hseComment,









        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      if (response.ok) {
        const data = await response.json();
        console.log("dattaaammmmm", data)
        openNotification('bottomRight')
        setDataInterview(data)
        // navigate(-1);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };


  return (
    <>
      <Form
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px", marginTop: "20px" }}
      // initialValues={settings}
      >

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
                    label="HSE Certificates:Working at hight/ H2S/ First Aid"
                    name='attribut'

                  >
                    <Input
                      placeholder={idViewConstruction?.hseCertif}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Site hazards and control measures khowledge"
                    name='attribut14'
                  >
                    <Input
                      placeholder={idViewConstruction?.siteHazCont}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Proper use of Personal Protective Equipment (PPE) "
                    name='attribut15'


                  >
                    <Input
                      placeholder={idViewConstruction?.properUse}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Hazardous materials handling. "
                    name='attribut16'


                  >
                    <Input
                      placeholder={idViewConstruction?.hzardousMater}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Emergency and Evacuation knowledge. "
                    name='attribut17'


                  >
                    <Input
                      placeholder={idViewConstruction?.emergency}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="PTW knowledge "
                    name='attribut18'


                  >
                    <Input
                      placeholder={idViewConstruction?.ptw}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="HSE Policies and Instructions "
                    name='attribut19'
                  >
                    <Input
                      placeholder={idViewConstruction?.hsePolicies}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Others… "
                    name='attribut'


                  >
                    <Input
                      placeholder={idViewConstruction?.others}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>

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


                  >
                    <Input
                      placeholder={idViewConstruction?.educAndTrain}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Work Experience achievements, relevance to position applied For'
                    name='attribut2'


                  >
                    <Input
                      placeholder={idViewConstruction?.workExp}
                      readOnly

                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Diversity of Talents/Interests  Hobbies ; sports"
                    name='attribut3'

                  ><Input
                    placeholder={idViewConstruction?.DiversityTal}
                    readOnly

                  ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Intellectual Capability comprehension ; judgment; ability to reason;decision 
                  making-decision"
                    name='attribut4'

                  >
                    <Input
                      placeholder={idViewConstruction?.intellCap}
                      readOnly

                    ></Input>

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Emotional Intelligence ability to work/relate with others; 
                  attitude towards work/life; maturity"
                    name='attribut5'

                  >
                    <Input
                      placeholder={idViewConstruction?.emotIntellij}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Self-confidence  self- assurance ; belief in one’s potential and
                  capability"
                    name='attribut6'


                  >
                    <Input
                      placeholder={idViewConstruction?.selfConf}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Communication Skills ability to express/present ideas in clear ,concise manner
                "
                    name='attribut7'

                  >
                    <Input
                      placeholder={idViewConstruction?.comunicSkills}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Passion/Enthusiasm - energy & vitality in pursuing goals & 
                 objectives"
                    name='attribut8'


                  >
                    <Input
                      placeholder={idViewConstruction?.passion}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="   
                  Creativity / Imagination - ability to work/find solutions 
                       outside the boundaries of conventions."
                    name='attribut9'
                
                  >
                    <Input
                      placeholder={idViewConstruction?.creativity}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="   
                  Ladership Qualities – initiative, ability to lead others; decisiveness"
                    name='attribut10'
                  
                  >
                     <Input
                      placeholder={idViewConstruction?.leadership}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="   
                  Physical presentation during the interview"
                    name='attribut11'
                   

                  >
                       <Input
                      placeholder={idViewConstruction?.physicPres}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>




        <Divider style={{ marginTop: 16, marginBottom: 16 }} />




        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}>

          <Button onClick={goback}>Cancel</Button>



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


export default TabsAssignement;
