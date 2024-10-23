import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, notification } from 'antd';
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
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import ViewAssignement from "../TabsAssignementConstruction/View";

const TabsAssignement = ({ isSaveDisabled, interviewCode, inputInterview, validatesFor, goTotest2, psy_Person, psy_HumQuality
  , psy_motivation, psy_Intellig, goToTest3, techEnglishSkills, techDate, techEvaluation, idNumb, meetDesision, evalDesision,
  techcommentaire, hseCertif, siteHazCont, propsedsalary, dailyRate,
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

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const location = useLocation();
  const roles = window.localStorage.getItem("role");
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
  const [hseTraining, setHseTraining] = useState('');
  const [workplaceErgonomics, setWorkplaceErgonomics] = useState('');
  const [fireFightingTraining, setFireFightingTraining] = useState('');
  const [hazardIdentification, setHazardIdentification] = useState('');
  const [selectedHSEWorkingHeighTraining, setSelectedHSEWorkingHeighTraining] = useState('');

  const [confinedTraining, setConfinedTraining] = useState('');
  const [hSECertificates, setHSECertificates] = useState('');
  const [selectedSitehazardscontrol, setSelectedSitehazardscontrol] = useState('');
  const [selectedProperuse, setSelectedProperuse] = useState('');
  const [selectedHazardousmaterials, setSelectedHazardousmaterials] = useState('');
  const [selectedEmergenceEvacuation, setSelectedEmergenceEvacuation] = useState('');
  const [selectedSafety, setSelectedSafety] = useState('');
  const [selectedPTWknowledge, setSelectedPTWknowledge] = useState('');
  const [selectedHSEPolicies, setSelectedHSEPolicies] = useState('');
  const [selectedHSEStandards, setSelectedHSEStandards] = useState('');
  const [selectedOthers, setSelectedOthers] = useState('');
  const [othersHSE, setOthersHSE] = useState('');
  const [findInterviewConstruction, setFindInterviewConstruction] = useState('');
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
      // setTimeout(() => {
      //   window.location.reload();
      //   navigate(-1)
      // }, 2000);

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  const findIdInterviewConstruction = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${interviewCode}&token=${token}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFindInterviewConstruction(responseData)


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  useEffect(() => {
    if (findInterviewConstruction?.hseCertif) {
      setSelectedHSECertificates(findInterviewConstruction.hseCertif);
    }
  }, [findInterviewConstruction]);
  useEffect(() => {
    fetchData()
    findIdInterviewConstruction()
  }, [interviewCode]);
  const NewLastInterview = datalastIdinterview + 1
  //Save InterViewSheet

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
    { rate: 'Already Have' },
    { rate: 'No Need' },
    { rate: 'Needed Certificat' },
    { rate: 'Recommended Certificate' },

  ];
  const hseWorking = [
    { select: 'Already Have' },
    { select: 'No Need' },
    { select: 'Needed Certificat' },
    { select: 'Recommended Certificate' },

  ];
  const Others = [
    { Others: 'Excellent' },
    { Others: 'Average' },
    { Others: 'Good' },
    { Others: 'Below Average' },

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
          hseCertif: selectedHSECertificates,
          siteHazCont: selectedSitehazardscontrol,
          properUse: selectedProperuse,
          hzardousMater: selectedHazardousmaterials,
          emergency: selectedEmergenceEvacuation,
          ptw: selectedPTWknowledge,
          hsePolicies: selectedHSEPolicies,
          others: selectedOthers,
          projname: findInterviewConstruction?.projname,
          notif: 100,
          urlCv: findInterviewConstruction?.urlCv,
          jobCod: findInterviewConstruction?.jobCod,
          totalReqPos: findInterviewConstruction?.totalReqPos,
          intervtime: findInterviewConstruction?.intervtime,
          totalInterv: findInterviewConstruction?.totalInterv,
          totalAccept: findInterviewConstruction?.totalAccept,
          totalRequiredGrade: findInterviewConstruction?.totalRequiredGrade,
          department: findInterviewConstruction?.department,
          requiredExperinece: findInterviewConstruction?.requiredExperinece,
          requiredQualification: findInterviewConstruction?.requiredQualification,
          positionToBeFilled: findInterviewConstruction?.positionToBeFilled,
          interviwDate: findInterviewConstruction?.interviwDate,
          birthayDate: findInterviewConstruction?.birthayDate,
          fullName: findInterviewConstruction?.fullName,
          familySituation: findInterviewConstruction?.familySituation,
          educationLevel: findInterviewConstruction?.educationLevel,
          diploma: findInterviewConstruction?.diploma,
          experience: findInterviewConstruction?.experience,
          requiredGrade: findInterviewConstruction?.requiredGrade,
          validatesFor: findInterviewConstruction?.validatesFor,
          goTotest2: findInterviewConstruction?.goTotest2,
          psy_Person: findInterviewConstruction?.psy_Person,
          psy_HumQuality: findInterviewConstruction?.psy_HumQuality,
          psy_motivation: findInterviewConstruction?.psy_motivation,
          psy_Intellig: findInterviewConstruction?.psy_Intellig,
          goToTest3: findInterviewConstruction?.goToTest3,
          techEnglishSkills: findInterviewConstruction?.techEnglishSkills,
          techDate: findInterviewConstruction?.techDate,
          techEvaluation: findInterviewConstruction?.techEvaluation,
          idNumb: findInterviewConstruction?.idNumb,
          meetDesision: findInterviewConstruction?.meetDesision,
          evalDesision: findInterviewConstruction?.evalDesision,
          evalName: findInterviewConstruction?.evalName,
          evalId: findInterviewConstruction?.evalId,
          evalDesisionSign: findInterviewConstruction?.evalDesisionSign,
          techcommentaire: findInterviewConstruction?.techcommentaire,
          headOfDepAprouv: findInterviewConstruction?.headOfDepAprouv,
          headOfDepAprouvSign: findInterviewConstruction?.headOfDepAprouvSign,
          hr_Person: findInterviewConstruction?.hr_Person,
          hr_HumQuality: findInterviewConstruction?.hr_HumQuality,
          hr_motivation: findInterviewConstruction?.hr_motivation,
          hr_Intellig: findInterviewConstruction?.hr_Intellig,
          nlevel: findInterviewConstruction?.nlevel,
          hrDesion: findInterviewConstruction?.hrDesion,
          hrComentaire: findInterviewConstruction?.hrComentaire,
          expectedJoinDate: findInterviewConstruction?.expectedJoinDate,
          propsedsalary: findInterviewConstruction?.propsedsalary,
          dailyRate: findInterviewConstruction?.dailyRate,
          finaldesision: findInterviewConstruction?.finaldesision,
          finaldesision2: findInterviewConstruction?.finaldesision2,
          directSign1: findInterviewConstruction?.directSign1,
          directSign2: findInterviewConstruction?.directSign2,
          educAndTrain: findInterviewConstruction?.educAndTrain,
          workExp: findInterviewConstruction?.workExp,
          intellCap: findInterviewConstruction?.intellCap,
          emotIntellij: findInterviewConstruction?.emotIntellij,
          selfConf: findInterviewConstruction?.selfConf,
          comunicSkills: findInterviewConstruction?.comunicSkills,
          refAssign: findInterviewConstruction?.refAssign,
          passion: findInterviewConstruction?.passion,
          creativity: findInterviewConstruction?.creativity,
          leadership: findInterviewConstruction?.leadership,
          physicPres: findInterviewConstruction?.physicPres,
          contactEmail: findInterviewConstruction?.contactEmail,
          contactPhone: findInterviewConstruction?.contactPhone,
          inputInterview: findInterviewConstruction?.inputInterview,
          feedback: findInterviewConstruction?.feedback,
          agreedJoinedDate: findInterviewConstruction?.agreedJoinedDate,
          diversityTal: findInterviewConstruction?.diversityTal,
          /////////////
          workAtHeighTrain: selectedHSEWorkingHeighTraining,
          hseTraining: hseTraining,
          workplace: workplaceErgonomics,
          fireFighting: fireFightingTraining,
          hazardIdentification: hazardIdentification,
          cofinedSpace: confinedTraining,
          safetyInWelding: selectedSafety,
          hseStandard: selectedHSEStandards,
          

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
        setDataInterview(data)
        openNotification('bottomRight')
        setTimeout(() => {
          navigate(`/Hr/Recruitement&Interview/ConstructionStaffInterview/Update/${interviewCode}`, {

          });
          // navigate(-1)
        }, 2000);

        // navigate(-1);
      }

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  {/*HRMANAGER*/ }
  const BeforeSave = () => {
    form.validateFields(['attribut', 'attributFirst', 'attribut14',


    ]).then(values => {
      Save()

    }).catch(errorInfo => {

      openNotification('Warning', 'All Fields Not Complete', { backgroundColor: '#eab000', color: '#fff' });
    });
  };

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
          //techcommentaire: techcommentaire,
          hseCertif: findInterviewConstruction?.hseCertif,
          siteHazCont: findInterviewConstruction?.siteHazCont,
          properUse: findInterviewConstruction?.properUse,
          hzardousMater: findInterviewConstruction?.hzardousMater,
          emergency: findInterviewConstruction?.emergency,
          ptw: findInterviewConstruction?.ptw,
          hsePolicies: findInterviewConstruction?.hsePolicies,
          hseDecision: findInterviewConstruction?.hseDecision,
          hseComment: findInterviewConstruction?.hseComment,
          others: findInterviewConstruction?.others,
          projname: findInterviewConstruction?.projname,
          notif: 600,
          urlCv: findInterviewConstruction?.urlCv,
          jobCod: findInterviewConstruction?.jobCod,
          totalReqPos: findInterviewConstruction?.totalReqPos,
          intervtime: findInterviewConstruction?.intervtime,
          totalInterv: findInterviewConstruction?.totalInterv,
          totalAccept: findInterviewConstruction?.totalAccept,
          totalRequiredGrade: findInterviewConstruction?.totalRequiredGrade,
          department: findInterviewConstruction?.department,
          requiredExperinece: findInterviewConstruction?.requiredExperinece,
          requiredQualification: findInterviewConstruction?.requiredQualification,
          positionToBeFilled: findInterviewConstruction?.positionToBeFilled,
          interviwDate: findInterviewConstruction?.interviwDate,
          birthayDate: findInterviewConstruction?.birthayDate,
          fullName: findInterviewConstruction?.fullName,
          familySituation: findInterviewConstruction?.familySituation,
          educationLevel: findInterviewConstruction?.educationLevel,
          diploma: findInterviewConstruction?.diploma,
          experience: findInterviewConstruction?.experience,
          requiredGrade: findInterviewConstruction?.requiredGrade,
          validatesFor: findInterviewConstruction?.validatesFor,
          goTotest2: findInterviewConstruction?.goTotest2,
          psy_Person: findInterviewConstruction?.psy_Person,
          psy_HumQuality: findInterviewConstruction?.psy_HumQuality,
          psy_motivation: findInterviewConstruction?.psy_motivation,
          psy_Intellig: findInterviewConstruction?.psy_Intellig,
          goToTest3: findInterviewConstruction?.goToTest3,
          techEnglishSkills: findInterviewConstruction?.techEnglishSkills,
          techDate: findInterviewConstruction?.techDate,
          techEvaluation: findInterviewConstruction?.techEvaluation,
          idNumb: idViewConstruction?.idNumb,
          meetDesision: findInterviewConstruction?.meetDesision,
          evalDesision: findInterviewConstruction?.evalDesision,
          evalName: idViewConstruction?.evalName,
          evalId: idViewConstruction?.evalId,
          evalDesisionSign: findInterviewConstruction?.evalDesisionSign,
          techcommentaire: findInterviewConstruction?.techcommentaire,
          headOfDepAprouv: findInterviewConstruction?.headOfDepAprouv,
          headOfDepAprouvSign: findInterviewConstruction?.headOfDepAprouvSign,
          hr_Person: findInterviewConstruction?.hr_Person,
          hr_HumQuality: findInterviewConstruction?.hr_HumQuality,
          hr_motivation: findInterviewConstruction?.hr_motivation,
          hr_Intellig: findInterviewConstruction?.hr_Intellig,
          nlevel: findInterviewConstruction?.nlevel,
          hrDesion: findInterviewConstruction?.hrDesion,
          hrComentaire: findInterviewConstruction?.hrComentaire,
          expectedJoinDate: findInterviewConstruction?.expectedJoinDate,
          propsedsalary: findInterviewConstruction?.propsedsalary,
          dailyRate: findInterviewConstruction?.dailyRate,
          finaldesision: findInterviewConstruction?.finaldesision,
          finaldesision2: findInterviewConstruction?.finaldesision2,
          directSign1: findInterviewConstruction?.directSign1,
          directSign2: findInterviewConstruction?.directSign2,
          educAndTrain: selectedEducationTraining,
          workExp: selectedworkExperience,
          intellCap: selectedIntellectualCapability,
          emotIntellij: selectedEmotionalIntelligence,
          selfConf: selectedSelfconfidence,
          comunicSkills: selectedCommunicationSkills,
          refAssign: findInterviewConstruction?.refAssign,
          passion: selectedPassion,
          creativity: selectedCreativity,
          leadership: selectedLeadershipQualities,
          physicPres: selectedPhysicalpresentation,
          contactEmail: findInterviewConstruction?.contactEmail,
          contactPhone: findInterviewConstruction?.contactPhone,
          inputInterview: findInterviewConstruction?.inputInterview,
          feedback: findInterviewConstruction?.feedback,
          agreedJoinedDate: findInterviewConstruction?.agreedJoinedDate,
          diversityTal: selectedDiversity,





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
        openNotification('bottomRight')
        setDataInterview(data)


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
        form={form}
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
                    rules={[
                      { required: true, message: 'Please input your  Date!' },
                    ]}


                  >{/*Date et temp de Interview bu Hr*/}
                    <Input
                      placeholder={findInterviewConstruction?.inputInterview}
                      readOnly

                    ></Input>
                    {/* <DatePicker
                      //defaultValue={new Date()} 
                      defaultValue={dayjs(interviewDate, '2024-01-01')}

                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setInterviewDate(dayjs(value).format('YYYY/MM/DD'))}
                    /> */}

                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={12}>
                <Form.Item label='JOB CODE:' name='jobcode1'>
                  <Input placeholder={JobCode} readOnly={true} />
                </Form.Item>
              </Col> */}


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {roles.includes("bod") && (
          <ViewAssignement
            idViewConstruction={idViewConstruction}


          ></ViewAssignement>


        )}
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
        {roles === "Human Ressource Manager" && (
          <>
            <>
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
                          label="Working at Height Training"
                          name='attribut'>
                          <Input
                            placeholder={idViewConstruction?.workAtHeighTrain ?
                              idViewConstruction.workAtHeighTrain :
                              'Select Working at Height Training'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="First Aid"
                          name='attributFirst'>
                          <Input
                            placeholder={idViewConstruction?.hseCertif ?
                              idViewConstruction.hseCertif :
                              'First Aid'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label="H2S Training"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.hseTraining ?
                              idViewConstruction.hseTraining :
                              'H2S Training'}


                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Workplace Ergonomics Training"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.hseTraining ?
                              idViewConstruction.hseTraining :
                              'Workplace Ergonomics Training'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Fire Fighting Training"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.fireFighting ?
                              idViewConstruction.fireFighting :
                              'Fire Fighting Training'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Hazard Identification &Risk Assesment Training"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.hazardIdentification ?
                              idViewConstruction.hazardIdentification :
                              'Hazard Identification &Risk Assesment Training'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Confined Space Training"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.cofinedSpace ?
                              idViewConstruction.cofinedSpace :
                              'Confined Space Training'}

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Site hazards and control measures khowledge"
                          name='attribut14'>
                          <Input
                            placeholder={idViewConstruction?.siteHazCont ?
                              idViewConstruction?.siteHazCont :
                              'Site hazards and control measures khowledge'}

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
                            placeholder={idViewConstruction?.properUse ?
                              idViewConstruction?.properUse :
                              'Proper use of Personal Protective Equipment (PPE)'}

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
                            placeholder={idViewConstruction?.hzardousMater ?
                              idViewConstruction?.hzardousMater :
                              'Hazardous materials handling.'}

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
                             placeholder={idViewConstruction?.emergency ?
                              idViewConstruction?.emergency:
                              'Emergency and Evacuation knowledge.'}
                            

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Safety in welding and gas cutting"
                          name='attribut18' >
                          <Input
                          placeholder={idViewConstruction?.safetyInWelding  ?
                            idViewConstruction?.safetyInWelding :
                            'Safety in welding and gas cutting.'}
                          

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label="PTW knowledge "
                          name='attribut18' >
                          <Input
                           placeholder={idViewConstruction?.ptw  ?
                            idViewConstruction?.ptw :
                            'PTW knowledge '}
                      
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
                             placeholder={idViewConstruction?.hsePolicies?
                              idViewConstruction?.hsePolicies:
                              'HSE Policies and Instructions'}
                            

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label="HSE Standards knowledge"
                          name='attributStandars'>
                          <Input
                          placeholder={idViewConstruction?.hseStandard?
                            idViewConstruction?.hseStandard:
                            'HSE Standards knowledge'}
                          
                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          label="Others… "
                          name='attribut'>
                          <Input
                           placeholder={idViewConstruction?.others?
                            idViewConstruction?.others:
                            'Others… '}
                          

                            readOnly
                          ></Input>
                        </Form.Item>
                      </Col>

                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>
              </AppRowContainer>
            </>
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>ATTRIBUTES </Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}
                      style={{ marginTop: "1.3rem" }}
                    >
                      <Form.Item
                        label={
                          <div>
                            <span>Education and Training - scholastic achievements, special studies, relevance to position applied for;</span>
                            <br />
                            <span dir="rtl">-
                              التدريب
                              و
                              التعليم
                              اإلنجازات المدرسية، والدراسات الخاصة، وأهمية الوظيفة المتقدم لها
                            </span>
                          </div>
                        }



                        name='attribut1'
                        rules={[
                          { required: true, message: 'Please Select your Select Education and Training !' },

                        ]}

                      >
                        <Select
                          placeholder='Select Education and Training'
                          onChange={(value) => setSelectedEducationTraining(value)}
                          value={selectedEducationTraining}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}
                      style={{ marginTop: "40px" }}
                    >
                      <Form.Item
                        label={
                          <div>
                            <span>Work Experience achievements, relevance to position applied For/;</span>
                            <br />
                            <span dir="rtl">
                              الخبرة العملية -
                              اإلنجازات ذات الصلة بالمنصب المتقدم عليه

                            </span>
                          </div>
                        }


                        name='attribut2'
                        rules={[
                          { required: true, message: 'Please Select your Select Work Experience achievements!' },

                        ]}

                      >
                        <Select

                          placeholder='Select Education and Training'

                          onChange={(value) => setSelectedWorkExperience(value)}
                          value={selectedworkExperience}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}


                    >
                      <Form.Item
                        label={
                          <div>
                            <span>Diversity of Talents/Interests  Hobbies ; sports;/</span>
                            <br />
                            <span dir="rtl">
                              -
                              الهتمامات
                              الهوايات


                            </span>
                          </div>
                        }
                        name='attribut3'
                        style={{ marginTop: "1.3rem" }}
                        rules={[
                          { required: true, message: 'Please Select your Select Diversity of Talents/Interests !' },

                        ]}

                      >
                        <Select

                          placeholder='Select Diversity of Talents/Interests'
                          onChange={(value) => setSelectedDiversity(value)}
                          value={selectedDiversity}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}

                    >
                      <Form.Item

                        label={
                          <div>
                            <span>Intellectual Capability comprehension ; judgment; ability to reason;decision
                              making-decision/</span>
                            <br />
                            <span dir="rtl">

                              القدرة الفكرية – الفهم ; حكم؛ القدرة
                              على التفكير؛ القدرة على اتخاذ القرار


                            </span>
                          </div>
                        }

                        name='attribut4'
                        rules={[
                          { required: true, message: 'Please Select your Select Intellectual Capability comprehension  !' },

                        ]}

                      >
                        <Select
                          placeholder='Select Intellectual Capability comprehension '
                          onChange={(value) => setSelectedIntellectualCapability(value)}
                          value={selectedIntellectualCapability}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label={
                          <div>
                            <span>Emotional Intelligence ability to work/relate with others;
                              attitude towards work/life; maturity/</span>
                            <br />
                            <span dir="rtl">
                              على القدرة – العاطفي الذكاء
                              العمل/التواصل مع
                              اآلخرين؛ الموقف تجاه العمل/الحياة؛ نضج

                            </span>
                          </div>
                        }

                        style={{ marginTop: "1rem" }}
                        name='attribut5'
                        rules={[
                          { required: true, message: 'Please Select your Select Emotional Intelligence  !' },

                        ]}

                      >
                        <Select
                          placeholder='Select Intellectual Emotional Intelligence '
                          onChange={(value) => setSelectedEmotionalIntelligence(value)}
                          value={selectedEmotionalIntelligence}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12} style={{ marginTop: "2.3rem" }}>
                      <Form.Item
                        label={
                          <div>
                            <span>Self-confidence  self- assurance ; belief in one’s potential and
                              capability/</span>
                            <br />
                            <span dir="rtl">
                              لثقة بالنفس - ضمان الذات؛ إليمان  بإمكانيات الفرد وقدرته؛

                            </span>
                          </div>
                        }

                        name='attribut6'
                        rules={[
                          { required: true, message: 'Please Select your Select Self-confidence  self- assurance   !' },

                        ]}

                      >
                        <Select

                          placeholder='Select Self-confidence  self- assurance  '
                          onChange={(value) => setSelectedSelfconfidence(value)}
                          value={selectedSelfconfidence}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        style={{ marginTop: "2rem" }}

                        label={
                          <div>
                            <span>Communication Skills ability to express/present ideas in clear ,concise manner/;</span>
                            <br />
                            <span dir="rtl">

                              مهارات االتصال - القدرة على التعبير عن /
                              .تقديم األفكار بطريقة واضحة وموجزة

                            </span>
                          </div>
                        }
                        name='attribut7'
                        rules={[
                          { required: true, message: 'Please Select your Select Communication Skills   !' },

                        ]}

                      >
                        <Select
                          placeholder='Select Communication Skills '
                          onChange={(value) => setSelectedCommunicationSkills(value)}
                          value={selectedCommunicationSkills}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} style={{ marginTop: "1rem" }}>
                      <Form.Item
                        label={
                          <div>
                            <span>Passion/Enthusiasm – energy & vitality
                              in pursuing <br></br>goals & objectives
                            </span>
                            <br />
                            <span dir="rtl">

                              العاطفة /

                              الحماس -
                              الطاقة والحيوية في
                              متابعة األهداف والغايات

                            </span>
                          </div>
                        }

                        name='attribut8'
                        rules={[
                          { required: true, message: 'Please Select your Select Passion/Enthusiasm   !' },

                        ]}

                      >
                        <Select
                          style={
                            { marginTop: "1rem" }
                          }
                          placeholder='Select Passion/Enthusiasm '

                          onChange={(value) => setSelectedPassion(value)}
                          value={selectedPassion}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        style={{ marginTop: "2rem" }}
                        label={
                          <div>
                            <span>Creativity / Imagination - ability to work/find solutions
                              outside the boundaries of conventions./
                            </span>
                            <br />
                            <span dir="rtl">

                              / القدرة – الخيال/اإلبداع
                              .على العمل/إيجاد الحلول خارج حدود األعراف


                            </span>
                          </div>
                        }

                        name='attribut9'
                        rules={[
                          { required: true, message: 'Please Select your Select  Creativity / Imagination   !' },

                        ]}

                      >
                        <Select
                          placeholder='Select  Creativity / Imagination '
                          onChange={(value) => setSelectedCreativity(value)}
                          value={selectedCreativity}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} style={{ marginTop: "1rem" }}>
                      <Form.Item
                        label={
                          <div>
                            <span> Ladership Qualities – initiative, ability to
                              <br></br> lead others; decisiveness/;
                            </span>
                            <br />
                            <span dir="rtl">

                              صفات القيادة - المبادرة والقدرة على قيادة اآلخرين. الحسم /

                            </span>
                          </div>
                        }

                        name='attribut10'
                        rules={[
                          { required: true, message: 'Please Select your Select   Ladership Qualities  !' },

                        ]}

                      >
                        <Select
                          style={
                            { marginTop: "1rem" }
                          }
                          placeholder='Select   Ladership Qualities '

                          onChange={(value) => setSelectedLeadershipQualities(value)}
                          value={selectedLeadershipQualities}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label={
                          <div>
                            <span>Physical presentation during the interview/;
                            </span>
                            <br />
                            <span dir="rtl">

                              عند العام المظهر
                              المقابلة

                            </span>
                          </div>
                        }


                        name='attribut11'
                        rules={[
                          { required: true, message: 'Please Select your Select  Physical presentation  !' },

                        ]}

                      >
                        <Select
                          placeholder='Select  Physical presentation '
                          onChange={(value) => setSelectedPhysicalpresentation(value)}
                          value={selectedPhysicalpresentation}
                        >
                          {Others.map((p, index) => (
                            <Select.Option key={index} value={p.Others}>
                              {p.Others}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          </>
        )}
        {roles.includes("HSE") && (
          <>
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
                        label="Working at Height Training"
                        name='attributhse Working'
                        rules={[
                          { required: true, message: 'Please Select your Select Working at Height Training !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.workAtHeighTrain ? findInterviewConstruction.workAtHeighTrain : 'Select Working at Height Training'}
                          onChange={(value) => setSelectedHSEWorkingHeighTraining(value)}
                          value={selectedHSEWorkingHeighTraining}
                        >
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="First Aid"
                        name='attribut'
                        rules={[
                          { required: true, message: 'Please Select your Select  First Aid Training   !' },

                        ]}>
                        <Select
                          defaultValue={findInterviewConstruction?.hseCertif}
                          placeholder={findInterviewConstruction?.hseCertif ? findInterviewConstruction.hseCertif : 'Select First Aid Training'}
                          onChange={(value) => setSelectedHSECertificates(value)}
                          value={selectedHSECertificates || findInterviewConstruction?.hseCertif || ""}
                        >
                          {Rating.map((p, index) => (
                            <Select key={index} value={p.rate}>
                              {p.rate}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="H2S Training "
                        name='attributH2STraining '
                        rules={[
                          { required: true, message: 'Please Select your Select  H2S Training  !' },

                        ]}>
                        <Select
                          placeholder={findInterviewConstruction?.hseTraining ? findInterviewConstruction.hseTraining : 'H2S Training'}
                          onChange={(value) => setHseTraining(value)}
                          value={hseTraining}
                        >
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Workplace Ergonomics Training"
                        name='attribut"Workplace '
                        rules={[
                          { required: true, message: 'Please Select your Select Workplace Ergonomics Training !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.hseTraining ? findInterviewConstruction.hseTraining : 'Workplace Ergonomics Training'}
                          onChange={(value) => setWorkplaceErgonomics(value)}
                          value={workplaceErgonomics}
                        >
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Fire Fighting Training"
                        name='attributFireFighting'
                        rules={[
                          { required: true, message: 'Please Select your Select Fire Fighting Training !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.fireFighting ? findInterviewConstruction.fireFighting : 'Fire Fighting Training'}
                          onChange={(value) => setFireFightingTraining(value)}
                          value={fireFightingTraining}
                        >
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Hazard Identification &Risk Assesment Training"
                        name='attributHazardIdentification'
                        rules={[
                          { required: true, message: 'Please Select your Select Hazard Identification &Risk Assesment Training !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.hazardIdentification ? findInterviewConstruction.hazardIdentification : 'Hazard Identification &Risk Assesment Training'}
                          onChange={(value) => setHazardIdentification(value)}
                          value={hazardIdentification}>
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Confined Space Training"
                        name='attributConfinedSpaceTraining '
                        rules={[
                          { required: true, message: 'Please Select your Select Confined Space Training !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.cofinedSpace ? findInterviewConstruction?.cofinedSpace : 'Confined Space Training'}
                          onChange={(value) => setConfinedTraining(value)}
                          value={confinedTraining}
                        >
                          {hseWorking.map((p, index) => (
                            <Select key={index} value={p.select}>
                              {p.select}
                            </Select>
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

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.siteHazCont ? findInterviewConstruction?.siteHazCont : 'Select  Site hazards and control'}
                          onChange={(value) => setSelectedSitehazardscontrol(value)}
                          value={selectedSitehazardscontrol} >
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

                        ]}>
                        <Select
                          placeholder={findInterviewConstruction?.properUse ? findInterviewConstruction?.properUse : 'Select  Proper use of Personal Protective'}
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
                          placeholder={findInterviewConstruction?.hzardousMater ? findInterviewConstruction?.hzardousMater : 'Select  Proper use of Hazardous materials'}
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
                          placeholder={findInterviewConstruction?.emergency ? findInterviewConstruction?.emergency : 'Select Emergency and Evacuation knowledge.'}
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
                        placeholder={findInterviewConstruction?.emergency ? findInterviewConstruction?.emergency : "Safety in welding and gas cutting"}
                        label="Safety in welding and gas cutting"
                        name='attributSafety'
                        rules={[
                          { required: true, message: 'Please Select your Select  Safety in welding and gas cutting !' },

                        ]} >
                        <Select
                          placeholder={findInterviewConstruction?.safetyInWelding ? findInterviewConstruction?.safetyInWelding : 'Select Safety in welding and gas cutting'}
                          value={selectedSafety}
                          onChange={(value) => setSelectedSafety(value)}
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
                          placeholder={findInterviewConstruction?.ptw ? findInterviewConstruction?.ptw : 'Select PTW knowledge.'}
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
                          placeholder={findInterviewConstruction?.hsePolicies ? findInterviewConstruction?.hsePolicies : 'Select HSE Policies and Instructions'}
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
                        label="HSE Standards knowledge"
                        name='attributStandards'
                        rules={[
                          { required: true, message: 'Please Select your Select  HSE Standards knowledge !' },

                        ]}

                      >
                        <Select
                          placeholder={findInterviewConstruction?.hseStandard ? findInterviewConstruction?.hseStandard : 'Select HSE Standards knowledge'}
                          onChange={(value) => setSelectedHSEStandards(value)}
                          value={selectedHSEStandards}
                        >
                          {Rating.map((p, index) => (
                            <Select.Option key={index} value={p.rate}>
                              {p.rate}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24}>
                      <Form.Item
                        label="Others… "
                        name='Others'
                        rules={[
                          { required: true, message: 'Please Select your Select  Others…  !' },

                        ]}>
                        <Input
                          className='InputComment'
                          placeholder='Others…'
                          value={othersHSE}
                          onChange={(e) => setOthersHSE(e.target.value)}
                        />
                        {/* <Select
                          placeholder={findInterviewConstruction?.others ? findInterviewConstruction?.others : 'Select Others…'}
                          onChange={(value) => setSelectedOthers(value)}
                          value={selectedOthers}
                        >
                          {Others.map((p, index) => (
                            <Select key={index} value={p.Others}>
                              {p.Others}
                            </Select>
                          ))}
                        </Select> */}
                      </Form.Item>
                    </Col>

                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          </>

        )}

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
          {roles.includes("HSE") &&
            <Button onClick={BeforeSave}>Save</Button>
          }
          {roles.includes("Human Ressource Manager") &&
            <Button onClick={SaveHrManager}>Save </Button>
          }

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
