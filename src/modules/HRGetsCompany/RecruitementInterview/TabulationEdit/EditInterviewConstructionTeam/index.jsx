import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, notification, Checkbox, DatePicker, InputNumber } from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
  StyledSecondaryText1,

} from '../index.styled';
import moment from 'moment';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
import { getFormattedDate } from '../../../../../@crema/helpers/DateHelper';
import ViewInterviewContraction from './View';
import { FcDownLeft } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import dayjs from 'dayjs';
const EditInterviewConstruction = ({ hseCertif,
  siteHazCont,
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
  idViewConstruction

}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  ////////////////////////////Varaibla Location
  const interviewCode = location.state ? location.state.interviewCode : null;


  // const hseCertif = location.state ? location.state.hseCertif : null;
  // const siteHazCont = location.state ? location.state.siteHazCont : null;
  // const properUse = location.state ? location.state.properUse : null;
  // const hzardousMate = location.state ? location.state.hzardousMate : null;
  // const emergency = location.state ? location.state.emergency : null;
  // const ptw = location.state ? location.state.ptw : null;
  // const hsePolicies = location.state ? location.state.hsePolicies : null;
  // const others = location.state ? location.state.others : null;
  const jobCode = location.state ? location.state.jobCode : null;
  const interviwDate = location.state ? location.state.interviwDate : null;
  const contactEmail = location.state ? location.state.contactEmail : null;
  const contactPhone = location.state ? location.state.contactPhone : null;
  const totalAccept = location.state ? location.state.totalAccept : null;
  const totalInterv = location.state ? location.state.totalInterv : null;
  const totalReqPos = location.state ? location.state.totalReqPos : null;
  const totalRequiredGrade = location.state ? location.state.totalRequiredGrade : null;
  const idNumb = location.state ? location.state.idNumb : null
  const department = location.state ? location.state.department : null
  const projname = location.state ? location.state.projname : null
  const requiredGrade = location.state ? location.state.requiredGrade : null
  const requiredQualification = location.state ? location.state.requiredQualification : null
  const positionToBeFilled = location.state ? location.state.positionToBeFilled : null
  const time = location.state ? location.state.time : null
  const fullName = location.state ? location.state.fullName : null
  const birthayDate = location.state ? location.state.birthayDate : null
  const familySituation = location.state ? location.state.familySituation : null
  const experience = location.state ? location.state.experience : null
  const educationLevel = location.state ? location.state.educationLevel : null
  const diploma = location.state ? location.state.diploma : null
  const urlCv = location.state ? location.state.urlCv : null
  const validatesFor = location.state ? location.state.validatesFor : null
  const goTotest2 = location.state ? location.state.goTotest2 : null
  const psy_Person = location.state ? location.state.psy_Person : null
  const psy_HumQuality = location.state ? location.state.psy_HumQuality : null
  const psy_motivation = location.state ? location.state.psy_motivation : null
  const psy_Intellig = location.state ? location.state.psy_Intellig : null
  const goToTest3 = location.state ? location.state.goToTest3 : null
  const techEnglishSkills = location.state ? location.state.techEnglishSkills : null
  const evalDesision = location.state ? location.state.evalDesision : null
  const techcommentaire = location.state ? location.state.techcommentaire : null
  const techDate = location.state ? location.state.techDate : null
  const hr_Person = location.state ? location.state.hr_Person : null
  const hr_HumQuality = location.state ? location.state.hr_HumQuality : null
  const hr_motivation = location.state ? location.state.hr_motivation : null
  const headOfDepAprouv = location.state ? location.state.headOfDepAprouv : null
  const hr_Intellig = location.state ? location.state.hr_Intellig : null
  const level = location.state ? location.state.level : null
  //const expectedJoinDate = location.state ? location.state.expectedJoinDate : null
  const propsedsalary = location.state ? location.state.propsedsalary : null
  const dailyRate = location.state ? location.state.dailyRate : null
  const hrDesion = location.state ? location.state.hrDesion : null
  const hrComentaire = location.state ? location.state.hrComentaire : null
  const finaldesision = location.state ? location.state.finaldesision : null
  const inputInterview = location.state ? location.state.inputInterview : null
  
  const intervtime= location.state ? location.state.intervtime: null
  /////////////////////End Variable Location
  const [selectedValidation, setSelectedValidation] = useState('');
  const [isOkChecked, setIsOkChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isOkChecked3, setIsOkChecked3] = useState(false);
  const [isNoChecked3, setIsNoChecked3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibletest3, setIsVisibletest3] = useState(false);
  const [isVisibletestEvaluator, setIsVisibletestEvaluator] = useState(false);
  const [isVisibleEvaluatorDecision, setIsVisibleEvaluatorDecision] = useState(false);
  const [isVisibleHeadDecision, setIsVisibleHeadDecision] = useState(false);
  const [isVisibleHRDecision, setIsVisibleHRDecision] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [selectedHumainquality, setSelectedHumainquality] = useState('');
  const [selectedMotivation, setSelectedMotivation] = useState('')
  const [selectedIntelligence, setSelectedIntelligence] = useState('');
  const [selectedSkillls, setSelectedSkillls] = useState('');
  const [evaluationDate, setEvaluationDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [isOkCheckedEvaluator, setIsOkCheckedEvaluator] = useState(false);
  const [isNoCheckedEvaluator, setIsNoCheckedEvaluator] = useState(false);
  const [isOkCheckedHSE, setIsOkCheckedHSE] = useState(false);
  const [isNoCheckedHSE, setIsNoCheckedHSE] = useState(false);
  const [isOkCheckedHead, setIsOkCheckedHead] = useState(false);
  const [isNoCheckedHead, setIsNoCheckedHead] = useState(false);
  const [profile, setProfile] = useState("");
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [isOkCheckedProfile, setIsOkCheckedProfile] = useState(false);
  const [isNoCheckedProfile, setIsNoCheckedProfile] = useState(false);
  const [comment, setComments] = useState("");
  const [selectedPersonalityHR, setSelectedPersonalityHR] = useState('');

  const [commentHSE, setCommentHSE] = useState("");
  const [selectedHumainqualityHR, setSelectedHumainqualityHR] = useState('');
  const [selectedMotivationHR, setSelectedMotivationHR] = useState('');
  const [selectedIntelligenceHR, setSelectedIntelligenceHR] = useState('');
  const [selectedLevelHR, setSelectedLevelHR] = useState('');
  const [expectedJoinDate, setExpectedJoinDate] = useState("");
  const [proposedSalary, setProposedSalary] = useState("");
  const [proposedDailyRate, setProposedDailyRate] = useState("");
  const [lev1SalaryMax, setLev1SalaryMax] = useState(0);
  const [lev1dailyRateMax, setLev1DailyRateMax] = useState(0);
  const [dailyError, setDailyError] = useState('');
  const [officeSalaryMax, setOfficeSalaryMax] = useState(0)
  const [salaryError, setSalaryError] = useState('');
  const [dailyRateMax, setDailyRateMax] = useState(0);
  const [isOkCheckedHRDecision, setIsOkCheckedHRDecision] = useState(false);
  const [isNoCheckedHRDecision, setIsNoCheckedHRDecision] = useState(false);
  const [commentHr, setCommentsHr] = useState("");
  const [idConstruction, setIdConstruction] = useState([]);
  const [intcodec, setIntcodec] = useState(0);
  const token = localStorage.getItem("token");
  const year = new Date().getFullYear();
  const [affect, setAffect] = useState("");

  const findIdInterviewConstruction = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${interviewCode}&token=${token}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setIdConstruction(responseData)
      setIntcodec(responseData?.interviewCode)


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  function OkHrDesicision(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkCheckedHRDecision(e.target.checked);
    setIsVisibleHRDecision(true)

    if (e.target.checked) {

      setIsNoCheckedHRDecision(false);
    }
    else if (!(e.target.checked)) {
      setIsVisibleHRDecision(false);
    }
  }

  function NoHrDesicision(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsOkCheckedHRDecision(e.target.checked);
    setIsVisibleHRDecision(false)
    if (e.target.checked) {
      setIsOkCheckedHRDecision(false);
      setIsNoCheckedHRDecision(true);
    }
  }
  const handleSalaryChange = (e) => {
    const value = e.target.value;
    const numericValue = parseFloat(value); 
    setProposedSalary(value);
    setSalaryError(null);
    if (!isNaN(value) && value !== "") {
      if ( value> lev1SalaryMax) {
        setSalaryError(`Proposed Salary exceeds the maximum allowed value of ${lev1SalaryMax}`);
      } else {
        setProposedDailyRate((value / 30).toFixed(3));
      }
    } else {
      setSalaryError('Invalid salary input');
    }
  };
  const handleDailyChange = (e) => {
    const value = e.target.value;
  
    const numericValue = parseFloat(value); 
    setProposedDailyRate(value);
    setDailyError(null);
  
    if (!isNaN(value) && value !== "") {
      if (value> lev1dailyRateMax) {
        setDailyError(`Proposed Daily Rate exceeds the maximum allowed value of ${lev1dailyRateMax}`);
      
        setProposedSalary((value * 30).toFixed(3));
     
    } else {
      setDailyError('Invalid daily rate input');
    }
  };
}
  
  

  /////Office or siteOffice
  const handleSalaryOfficeChange = (e) => {
    const value = e.target.value;
    setProposedSalary(value);
    setSalaryError(null);

    // Vérification que la valeur est bien un nombre valide
    if (!isNaN(value) && value !== "") {
      
      if ( value > lev1SalaryMax) {
        setSalaryError(`Proposed Salary exceeds the maximum allowed value of ${lev1SalaryMax}`);
      } else {
        setProposedDailyRate((value / 26).toFixed(3));
      }
    } else {
      setSalaryError('Invalid salary input');
    }
  };

  const handleDailyOfficeChange = (e) => {
    const value = e.target.value;
    setProposedDailyRate(value);
    setDailyError(null);

    if (!isNaN(value) && value !== "") {
      if (value > lev1dailyRateMax) {
        setDailyError(`Proposed Daily Rate exceeds the maximum allowed value of ${lev1dailyRateMax}`);
      } else {
        setProposedSalary((value * 26).toFixed(2));
      }
    } else {
      setDailyError('Invalid daily rate input');
    }
  };

  const fetchMaxValues = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateConst/filterByPosition?position=${positionToBeFilled}`, {
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
      console.log("ratteeee", requiredQualification)

      const normalizedLevel = requiredQualification.trim();
      console.log("Normalized level:", normalizedLevel);
      // Additional logic based on normalized level
      switch (normalizedLevel) {
        case 'Level I':
          setLev1SalaryMax(data?.[0]?.lev1);
          const lev1SalaryMax = data[0].lev1;
          const dailyMax = lev1SalaryMax / 30;
          setLev1DailyRateMax(dailyMax)

          break;
        case 'Level II':
          console.log("Level II");
          setLev1SalaryMax(data?.[0]?.lev2);
          const lev2SalaryMax = data[0].lev2;
          const daily2Max = lev2SalaryMax / 30;
          setLev1DailyRateMax(daily2Max)
          break;
        case 'levelIII':
          console.log("Level III");
          setLev1SalaryMax(data?.[0]?.lev3);
          const lev3SalaryMax = data[0].lev3;
          const daily3Max = lev3SalaryMax / 30;
          setLev1DailyRateMax(daily3Max)
          break;
        case 'LEVEL IV':
          console.log("Level IV");
          setLev1SalaryMax(data?.[0]?.lev4);
          const lev4SalaryMax = data[0].lev4;
          const daily4Max = lev4SalaryMax / 30;
          setLev1DailyRateMax(daily4Max)
          break;
        case 'Level V':
          console.log("Level IV");
          setLev1SalaryMax(data?.[0]?.lev5);
          const lev5SalaryMax = data[0].lev5;
          const daily5Max = lev5SalaryMax / 30;
          setLev1DailyRateMax(daily5Max)
          break;
        default:
          console.log("Unknown level");
      }


    } catch (error) {
      console.error('Erreur lors de la récupération des données Salary:', error);
    }
  };
  ////Find By Recruitement Id 
  const findRecruitementId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${idViewConstruction?.jobCode}&token=${token}`, {
        method: 'POST',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        setAffect(responseData?.affectedTo)
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  useEffect(() => {
    fetchMaxValues()
    GetProfileEmployess()
    findIdInterviewConstruction()
    findRecruitementId()
    // findIdInterviewConstruction()

  }, [interviewCode, name, getsId, setIntcodec, intcodec,validatesFor]);


  const handleValidationSelect = (value) => {
    setSelectedValidation(value);

  };
  const handlePersonnalitySelect = (value) => {
    setSelectedPersonality(value);

  };
  const handleHumainqualitySelect = (value) => {
    setSelectedHumainquality(value);

  };
  const handleMotivationSelect = (value) => {
    setSelectedMotivation(value);

  };
  const handleIntelligenceSelect = (value) => {
    setSelectedIntelligence(value);

  };
  const handleSkilllsSelect = (value) => {
    setSelectedSkillls(value);

  };



  //
  console.log("selectedValidation", selectedValidation)
  const Validation = [
    { vld: 'Valid for post' },
    { vld: 'Not Valid for post' },
    { vld: 'Pending' },
    { vld: 'File to complete' },

  ];
  const personality = [
    { pesonality: 'low' },
    { pesonality: 'bad' },
    { pesonality: 'Average' },
    { pesonality: 'Good' },
    { pesonality: 'Excellent' },

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
  const quality = [
    { qlt: 'low' },
    { qlt: 'bad' },
    { qlt: 'Average' },
    { qlt: 'Good' },
    { qlt: 'Excellent' },

  ];
  const skills = [
    { skill: 'low' },
    { skill: 'bad' },
    { skill: 'Average' },
    { skill: 'Good' },
    { skill: 'Excellent' },

  ];
  function Ok(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkChecked(e.target.checked);
    setIsVisible(true);
    if (e.target.checked) {

      setIsNoChecked(false);
    }
    else if (!(e.target.checked)) {
      setIsVisible(false);
    }
  }
  function OkHSE(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkCheckedHSE(e.target.checked);
    setIsOkCheckedHSE(true);
    if (e.target.checked) {
      setIsNoCheckedHSE(false);
    }0

  }
  function NoHSE(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsNoCheckedHSE(e.target.checked);
    setIsNoCheckedHSE(true);
    if (e.target.checked) {
      setIsOkCheckedHSE(false);
    }

  }


  const CheckedFinalGotest2 = isOkChecked ? 1 : 0;
  function No(e) {

    setIsNoChecked(e.target.checked);
    setIsVisible(false);
    if (e.target.checked) {
      setIsOkChecked(false);
      setIsNoChecked(true);
    }
  }
  function Ok3(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkChecked3(e.target.checked);
    setIsVisibletest3(true);
    if (e.target.checked) {

      setIsNoChecked3(false);
    }
    else if (!(e.target.checked)) {
      setIsVisibletest3(false);
    }
  }

  function No3(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoChecked3(e.target.checked);
    setIsVisibletest3(false);
    if (e.target.checked) {
      setIsOkChecked3(false);
      setIsNoChecked3(true);
    }
  }
  //OkProfile
  function OkProfile(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkCheckedProfile(e.target.checked);
    setIsVisibletestEvaluator(true)

    if (e.target.checked) {

      setIsNoCheckedProfile(false);
    }
    else if (!(e.target.checked)) {
      setIsVisibletestEvaluator(false);
    }
  }

  function NoProfile(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoChecked3(e.target.checked);
    setIsVisibletestEvaluator(false)
    if (e.target.checked) {
      setIsOkCheckedProfile(false);
      setIsNoCheckedProfile(true);
    }
  }
  //Ok or No Evaluator
  function OkEvaluator(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkCheckedEvaluator(e.target.checked);
    setIsVisibleEvaluatorDecision(true)

    if (e.target.checked) {

      setIsNoCheckedEvaluator(false);
    }
    else if (!(e.target.checked)) {
      setIsVisibleEvaluatorDecision(false);
    }
  }

  function NoEvaluator(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoCheckedEvaluator(e.target.checked);
    setIsVisibleEvaluatorDecision(false)
    if (e.target.checked) {
      setIsOkCheckedEvaluator(false);
      setIsNoCheckedEvaluator(true);
    }
  }
  //Desicion Head 
  function OkHead(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsOkCheckedHead(e.target.checked);
    setIsVisibleHeadDecision(true)

    if (e.target.checked) {

      setIsNoCheckedHead(false);
    }
    else if (!(e.target.checked)) {
      setIsVisibleHeadDecision(false);
    }
  }

  function NoHead(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsOkCheckedHead(e.target.checked);
    setIsVisibleHeadDecision(false)
    if (e.target.checked) {
      setIsOkCheckedHead(false);
      setIsNoCheckedHead(true);
    }
  }



  const goBack = () => {
    window.location.reload();
    navigate(-1)
  }
  const [newinterviwDate, setNewinterviwDate] = useState(interviwDate);
  const [newdep, setNewdep] = useState(department);
  const [newprojname, setNewprojname] = useState(projname);
  const [newrequiredGrade, setNewrequiredGrade] = useState(requiredGrade);
  const [newrequiredQualification, setNewrequiredQualification] = useState(requiredQualification);
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Approved Construction STAFF INTERVIEW SHEET',
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
  const   openNotificationRefuse = () => {
    notification.open({
      message: '',
      description: 'Your decision has been processed successfully.',
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
      description: 'Error Construction STAFF INTERVIEW SHEET',
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
  ///Update

  const Update = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: newinterviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: idNumb,
          department: newdep,
          projname: newprojname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          experience: experience,
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: urlCv,
          validatesFor,
          goTotest2,
          psy_Person,
          psy_HumQuality,
          psy_motivation,
          psy_Intellig,
          goToTest3,
          techEnglishSkills,
          evalDesision,
          techcommentaire,
          techDate,
          hr_Person,
          hr_HumQuality,
          hr_motivation,
          hr_Intellig,
          level,
          headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')


        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //goAssesmentSheet
  const goAssesmentSheet = () => {
    navigate(`/Hr/Recruitement&Interview/ConstructionStaffInterview/ASSESMEN_SHEET/CIS=${interviewCode}`, {
      state: {
        interviewCode: interviewCode

      }
    });
  }


  //EndgoAssesmentSheet
  //UpdateManager

  const UpdateManager = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: idConstruction?.interviwDate,
          totalAccept: idConstruction?.totalAccept,
          totalInterv: idConstruction?.totalInterv,
          totalReqPos: idConstruction?.totalReqPos,
          totalRequiredGrade: idConstruction?.totalRequiredGrade,
          idNumb: getsId,
          evalId: getsId,
          evalName: name,
          department: idConstruction?.department,
          projname: idConstruction?.projname,
          requiredGrade: idConstruction?.requiredGrade,
          requiredQualification: idConstruction?.requiredQualification,
          positionToBeFilled: idConstruction?.positionToBeFilled,
          fullName: idConstruction?.fullName,
          birthayDate: idConstruction?.birthayDate,
          familySituation: idConstruction?.familySituation,
          experience: experience,
          educationLevel: idConstruction?.educationLevel,
          diploma: idConstruction?.diploma,
          contactPhone: idConstruction?.contactPhone,
          contactEmail: idConstruction?.contactEmail,
          urlCv: urlCv,
          validatesFor: selectedValidation,
          goTotest2: isOkChecked,
          psy_Person: selectedPersonality,
          psy_HumQuality: selectedHumainquality,
          psy_motivation: selectedMotivation,
          psy_Intellig: selectedIntelligence,
          goToTest3: isOkChecked3,
          techEnglishSkills: selectedSkillls,
          evalDesision: isOkCheckedEvaluator,
          techDate: evaluationDate,
          meetDesision: isOkCheckedProfile,
          techcommentaire: comment,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          level: selectedLevelHR,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate: expectedJoinDate,
          dailyRate: proposedDailyRate,
          hrDesion: isOkCheckedHRDecision,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 2,
          hseCertif: idConstruction?.hseCertif,
          siteHazCont: idConstruction?.siteHazCont,
          hsePolicies: idConstruction?.hsePolicies ?
            properUse : idConstruction?.properUse,
          hzardousMater: idConstruction?.hzardousMater,
          emergency: idConstruction?.emergency,
          ptw: idConstruction?.ptw,
          hseDecision: idConstruction?.hseDecision,
          others: idConstruction?.others,
          intervtime:idConstruction?.intervtime,
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          
         





        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
        // navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //Refused Manager

  const RefuseManager = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: newinterviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: getsId,
          evalName:idViewConstruction?.evalName,
          department: department,
          projname: projname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          experience: experience,
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: urlCv,
          validatesFor: selectedValidation,
          goTotest2: isOkChecked,
          psy_Person: selectedPersonality,
          psy_HumQuality: selectedHumainquality,
          psy_motivation: selectedMotivation,
          psy_Intellig: selectedIntelligence,
          goToTest3: isOkChecked3,
          techEnglishSkills: selectedSkillls,
          evalDesision: isOkCheckedEvaluator,
          techDate: evaluationDate,
          meetDesision: isOkCheckedProfile,
          techcommentaire: comment,
          hr_Person,
          hr_HumQuality,
          hr_motivation,
          hr_Intellig,
          level,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate:idViewConstruction?.expectedJoinDate,
          dailyRate:idViewConstruction?.dailyRate,
          hrDesion:idViewConstruction?.hrDesion,
          // feedback,
          propsedsalary:idViewConstruction?. propsedsalary,
          notif: 52,
          intervtime:idViewConstruction?.intervtime?
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          others:idConstruction?.others



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotificationRefuse('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
        // navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  /////Update Manager HSE

  const UpdateMangerHSE = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: newinterviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: getsId,
          department: department,
          projname: projname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          experience: experience,
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: urlCv,
          validatesFor: selectedValidation,
          goTotest2: isOkChecked,
          psy_Person: selectedPersonality,
          psy_HumQuality: selectedHumainquality,
          psy_motivation: selectedMotivation,
          psy_Intellig: selectedIntelligence,
          goToTest3: isOkChecked3,
          techEnglishSkills: selectedSkillls,
          evalDesision: isOkCheckedEvaluator,
          techDate: evaluationDate,
          meetDesision: isOkCheckedProfile,
          techcommentaire: comment,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          level: selectedLevelHR,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate: expectedJoinDate,
          dailyRate: proposedDailyRate,
          hrDesion: isOkCheckedHRDecision,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 2,



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
        // navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  //////UPDATE MANAGER HSE




  //End RefuseManager

  //UpdateProjectLeader
  // const BeforeUpdateProjectLeader = () => {
  //   //setIsModalVisible(true)
  //   form.validateFields([]).then(values => {
  //     //onSave(true)
  //     console.log("Updatttteeee Yesss")
  //     Alert("Updatttteeee Yesss")

  //     //UpdateProjectLeader()


  //   }).catch(errorInfo => {
  //     openNotificationWarning('bottomRight')

  //     // setIsModalVisible(false);

  //   });
  // };

  const UpdateProjectLeader = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: interviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: getsId,
          department: department,
          projname: projname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: urlCv,
          validatesFor: selectedValidation,
          goTotest2: isOkChecked,
          psy_Person: selectedPersonality,
          psy_HumQuality: selectedHumainquality,
          psy_motivation: selectedMotivation,
          psy_Intellig: selectedIntelligence,
          goToTest3: isOkChecked3,
          techEnglishSkills: selectedSkillls,
          evalDesision: isOkCheckedEvaluator,
          techDate: evaluationDate,
          meetDesision: isOkCheckedProfile,
          techEvaluation: name,
          techcommentaire: comment,
          hr_Person,
          hr_HumQuality,
          hr_motivation,
          hr_Intellig,
          level,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          notif: 1,
          time: time,
          evalName:name,
          evalId:getsId,
          intervtime: idViewConstruction?.intervtime,
          inputInterview:idViewConstruction?.inputInterview,
          requiredExperinece:idViewConstruction?.requiredExperinece,
          experience:idViewConstruction?.experience,
        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };
  //EndUpdataProjectLeader
  //RefuseProjectLeader

  const RefuseProjectLeader = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: interviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: getsId,
          department: department,
          projname: projname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          //experience: experience,
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: urlCv,
          validatesFor: selectedValidation,
          goTotest2: isOkChecked,
          psy_Person: selectedPersonality,
          psy_HumQuality: selectedHumainquality,
          psy_motivation: selectedMotivation,
          psy_Intellig: selectedIntelligence,
          goToTest3: isOkChecked3,
          techEnglishSkills: selectedSkillls,
          evalDesision: isOkCheckedEvaluator,
          techDate: evaluationDate,
          meetDesision: isOkCheckedProfile,
          techEvaluation: name,
          techcommentaire: comment,
          hr_Person,
          hr_HumQuality,
          hr_motivation,
          hr_Intellig,
          level,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          evalName:name,
          evalId:getsId,
          intervtime: idViewConstruction?.intervtime,
          inputInterview:idViewConstruction?.inputInterview,
          requiredExperinece:idViewConstruction?.requiredExperinece,
          experience:idViewConstruction?.experience,
          notif: 10,
          time: time

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotificationRefuse('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };


  //End RefuseProjectLeader
  //UpdateHSE

  const UpdateHSE = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/update?id=${intcodec}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          interviewCode: idViewConstruction?.interviewCode,
          jobCode: idViewConstruction?.jobCode,
          interviwDate: idViewConstruction?.interviwDate,
          totalAccept: idViewConstruction?.totalAccept,
          totalInterv: idViewConstruction?.totalInterv,
          totalReqPos: idViewConstruction?.totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: idViewConstruction?.idNumb,
          department: idViewConstruction?.department,
          projname: idViewConstruction?.projname,
          requiredGrade: idViewConstruction?.requiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: idViewConstruction?.positionToBeFilled,
          fullName: idViewConstruction?.fullName,
          birthayDate: idViewConstruction?.birthayDate,
          familySituation: idViewConstruction?.familySituation,
          experience: idViewConstruction?.experience,
          educationLevel: idViewConstruction?.educationLevel,
          diploma: idViewConstruction?.diploma,
          contactPhone: idViewConstruction?.contactPhone,
          urlCv: idViewConstruction?.urlCv,
          validatesFor: idViewConstruction?.validatesFor,
          goTotest2: idViewConstruction?.goTotest2,
          psy_Person: idViewConstruction?.psy_Person,
          psy_HumQuality: idViewConstruction?.psy_HumQuality,
          psy_motivation: idViewConstruction?.psy_motivation,
          psy_Intellig: idViewConstruction?.psy_Intellig,
          goToTest3: idViewConstruction?.goToTest3,
          techEnglishSkills: idViewConstruction?.techEnglishSkills,
          evalDesision: idViewConstruction?.evalDesision,
          techDate: idViewConstruction?.techDate,
          meetDesision: idViewConstruction?.meetDesision,
          techcommentaire: idViewConstruction?.techcommentaire,
          contactEmail: contactEmail,
          hr_Person: idViewConstruction?.hr_Person,
          hr_HumQuality: idViewConstruction?.hr_HumQuality,
          hr_motivation: idViewConstruction?.hr_motivation,
          hr_Intellig: idViewConstruction?.hr_Intellig,
          nlevel: idViewConstruction?.nlevel,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate: idViewConstruction?.expectedJoinDate,
          dailyRate: idViewConstruction?.dailyRate,
          hrDesion: idViewConstruction?.hrDesion,
          // feedback,
          propsedsalary: idViewConstruction?.propsedsalary,
          notif: 6,
          hseDecision: isOkCheckedHSE,
          hseComment: commentHSE,
          hseCertif: idViewConstruction?.hseCertif,
          siteHazCont: idViewConstruction?.siteHazCont,
          properUse: idViewConstruction?.properUse,
          hzardousMater: idViewConstruction?.hzardousMater,
          emergency: idViewConstruction?.emergency,
          ptw: idViewConstruction?.ptw,
          hsePolicies: idViewConstruction?.hsePolicies,
          intervtime: idViewConstruction?.intervtime,
          /////////////////////////////////////////////////     
          requiredExperinece: idViewConstruction?.requiredExperinece,
          evalName:idViewConstruction?.evalName,
          evalId:idViewConstruction?.evalId,
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          others:idConstruction?.others

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
        // navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };
  //Refuse HSE

  const RefuseHSE = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/update?id=${interviewCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          interviewCode: idViewConstruction?.interviewCode,
          jobCode: idViewConstruction?.jobCode,
          interviwDate: idViewConstruction?.interviwDate,
          totalAccept: idViewConstruction?.totalAccept,
          totalInterv: idViewConstruction?.totalInterv,
          totalReqPos: idViewConstruction?.totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: idViewConstruction?.idNumb,
          department: idViewConstruction?.department,
          projname: idViewConstruction?.projname,
          requiredGrade: idViewConstruction?.requiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: idViewConstruction?.positionToBeFilled,
          fullName: idViewConstruction?.fullName,
          birthayDate: idViewConstruction?.birthayDate,
          familySituation: idViewConstruction?.familySituation,
          experience: idViewConstruction?.experience,
          educationLevel: idViewConstruction?.educationLevel,
          diploma: idViewConstruction?.diploma,
          contactPhone: idViewConstruction?.contactPhone,
          urlCv: idViewConstruction?.urlCv,
          validatesFor: idViewConstruction?.validatesFor,
          goTotest2: idViewConstruction?.goTotest2,
          psy_Person: idViewConstruction?.psy_Person,
          psy_HumQuality: idViewConstruction?.psy_HumQuality,
          psy_motivation: idViewConstruction?.psy_motivation,
          psy_Intellig: idViewConstruction?.psy_Intellig,
          goToTest3: idViewConstruction?.goToTest3,
          techEnglishSkills: idViewConstruction?.techEnglishSkills,
          evalDesision: idViewConstruction?.evalDesision,
          techDate: idViewConstruction?.techDate,
          meetDesision: idViewConstruction?.meetDesision,
          techcommentaire: idViewConstruction?.techcommentaire,
          contactEmail: contactEmail,
          hr_Person: idViewConstruction?.hr_Person,
          hr_HumQuality: idViewConstruction?.hr_HumQuality,
          hr_motivation: idViewConstruction?.hr_motivation,
          hr_Intellig: idViewConstruction?.hr_Intellig,
          nlevel: idViewConstruction?.nlevel,
          headOfDepAprouv: isOkCheckedHead,
          // agreedJoinedDate,
          expectedJoinDate: idViewConstruction?.expectedJoinDate,
          dailyRate: idViewConstruction?.dailyRate,
          hrDesion: idViewConstruction?.hrDesion,
          // feedback,
          propsedsalary: idViewConstruction?.propsedsalary,
          notif: 53,
          hseDecision: isOkCheckedHSE,
          hseComment: commentHSE,
          hseCertif: idViewConstruction?.hseCertif,
          siteHazCont: idViewConstruction?.siteHazCont,
          properUse: idViewConstruction?.properUse,
          hzardousMater: idViewConstruction?.hzardousMater,
          emergency: idViewConstruction?.emergency,
          ptw: idViewConstruction?.ptw,
          hsePolicies: idViewConstruction?.hsePolicies,
          intervtime: idViewConstruction?.intervtime,
          /////////////////////////////////////////////////     
          requiredExperinece: idViewConstruction?.requiredExperinece,
          evalName:idViewConstruction?.evalName,
          evalId:idViewConstruction?.evalId,
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          others:idConstruction?.others

          
        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotificationRefuse('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
        // navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };


  //END REFUSE HSE
  {/*Human Manager*/ }

  const UpdateHumanRessource = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: idConstruction?.interviwDate,
          totalAccept: idConstruction?.totalAccept,
          totalInterv: idConstruction?.totalInterv,
          totalReqPos: idConstruction?.totalReqPos,
          totalRequiredGrade: idConstruction?.totalRequiredGrade,
          idNumb: idConstruction?.idNumb,
          department: idConstruction?.department,
          projname: idConstruction?.projname,
          requiredGrade: idConstruction?.requiredGrade,
          requiredQualification: idConstruction?.requiredQualification,
          positionToBeFilled: idConstruction?.positionToBeFilled,
          fullName: idConstruction?.fullName,
          birthayDate: idConstruction?.birthayDate,
          familySituation: idConstruction?.familySituation,
          experience: idConstruction?.experience,
          educationLevel: idConstruction?.educationLevel,
          diploma: idConstruction?.diploma,
          contactPhone: idConstruction?.contactPhone,
          contactEmail: idConstruction?.contactEmail,
          urlCv: idConstruction?.urlCv,
          validatesFor: idConstruction?.validatesFor,
          goTotest2: idConstruction?.goTotest2,
          psy_Person: idConstruction?.psy_Person,
          psy_HumQuality: idConstruction?.psy_HumQuality,
          psy_motivation: idConstruction?.psy_motivation,
          psy_Intellig: idConstruction?.psy_Intellig,
          goToTest3: idConstruction?.goToTest3,
          goToTest2: idConstruction?.goToTest2,
          techEnglishSkills: idConstruction?.techEnglishSkills,
          evalDesision: idConstruction?.evalDesision,
          techDate: idConstruction?.techDate,
          meetDesision: idConstruction?.meetDesision,
          techcommentaire: idConstruction?.techcommentaire,
          headOfDepAprouv: idConstruction?.headOfDepAprouv,
          dailyRate:proposedDailyRate,
          // feedback,
          propsedsalary: proposedSalary,
          hseDecision: idConstruction?.hseDecision,
          hseComment: idConstruction?.hseComment,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          level: selectedLevelHR,
          expectedJoinDate: expectedJoinDate,
          hrDesion: isOkCheckedHRDecision,
          educAndTrain: idConstruction?.educAndTrain,
          workExp: idConstruction?.workExp,
          DiversityTal: idConstruction?.DiversityTal,
          intellCap: idConstruction?.intellCap,
          selfConf: idConstruction?.selfConf,
          emotIntellij: idConstruction?.emotIntellij,
          comunicSkills: idConstruction?.comunicSkills,
          passion: idConstruction?.passion,
          creativity: idConstruction?.creativity,
          physicPres: idConstruction?.physicPres,
          leadership: idConstruction?.leadership,
          notif: 5,
          hrComentaire:commentHr,
          hseCertif:idConstruction?.hseCertif,
          siteHazCont:idConstruction?.siteHazCont,
          properUse:idConstruction?.properUse,
          hzardousMater:idConstruction?.hzardousMater,
          emergency:idConstruction?.emergency,
          ptw:idConstruction?.ptw,
          hsePolicies:idConstruction?.hsePolicies,
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          others:idConstruction?.others,
          evalName:idConstruction?.evalName,
          evalId:idConstruction?.evalId,
         
        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };

  {/*End Human Manager*/ }
  {/*RefuseHumanRessource*/ }
  const RefuseHumanRessource = async () => {
    try {
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
          jobCode: jobCode,
          interviwDate: newinterviwDate,
          totalAccept: totalAccept,
          totalInterv: totalInterv,
          totalReqPos: totalReqPos,
          totalRequiredGrade: totalRequiredGrade,
          idNumb: getsId,
          department: department,
          projname: projname,
          requiredGrade: newrequiredGrade,
          requiredQualification: newrequiredQualification,
          positionToBeFilled: positionToBeFilled,
          fullName: fullName,
          birthayDate: birthayDate,
          familySituation: familySituation,
          experience: experience,
          educationLevel: educationLevel,
          diploma: diploma,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          urlCv: idConstruction.urlCv,
          validatesFor: idConstruction?.validatesFor,
          goTotest2: idConstruction?.goTotest2,
          psy_Person: idConstruction?.psy_Person,
          psy_HumQuality: idConstruction?.psy_HumQuality,
          psy_motivation: idConstruction?.psy_motivation,
          psy_Intellig: idConstruction?.psy_Intellig,
          goToTest3: idConstruction?.goToTest3,
          techEnglishSkills: idConstruction?.techEnglishSkills,
          evalDesision: idConstruction?.evalDesision,
          techDate: idConstruction?.techDate,
          meetDesision: idConstruction?.meetDesision,
          techcommentaire: idConstruction?.techcommentaire,
          headOfDepAprouv: idConstruction?.headOfDepAprouv,
          // agreedJoinedDate,
          dailyRate:proposedDailyRate,
          // feedback,
          propsedsalary:proposedSalary,
          hseDecision: idConstruction?.hseDecision,
          hseComment: idConstruction?.hseComment,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          level: selectedLevelHR,
          expectedJoinDate: expectedJoinDate,
          hrDesion: isOkCheckedHRDecision,
          educAndTrain: idConstruction?.educAndTrain,
          workExp: idConstruction?.workExp,
          DiversityTal: idConstruction?.DiversityTal,
          // intellCap: idConstruction?.intellCap,
          selfConf: idConstruction?.selfConf,
          emotIntellij: idConstruction?.emotIntellij,
          comunicSkills: idConstruction?.comunicSkills,
          passion: idConstruction?.passion,
          creativity: idConstruction?.creativity,
          physicPres: idConstruction?.physicPres,
          leadership: idConstruction?.leadership,
          notif: 54,
          // hseDecision: isOkCheckedHSE,
          // hseComment: commentHSE,
          hseCertif: idConstruction?.hseCertif,
          siteHazCont: idConstruction?.siteHazCont,
          properUse: idConstruction?.properUse,
          hzardousMater: idConstruction?.hzardousMater,
          emergency: idConstruction?.emergency,
          ptw: idConstruction?.ptw,
          hsePolicies: idConstruction?.hsePolicies,
          // educAndTrain: idConstruction?.educAndTrain,
          // workExp: idConstruction?.workExp,
          // DiversityTal: idConstruction?.DiversityTal,
          intellCap: idConstruction?.intellCap,
          // emotIntellij: idConstruction?.emotIntellij,
          // selfConf: idConstruction?.selfConf,
          // comunicSkills: idConstruction?.comunicSkills,
          // passion: idConstruction?.passion,
          // creativity: idConstruction?.creativity,
          // physicPres: idConstruction?.physicPres,
          // leadership: idConstruction?.leadership,
          workAtHeighTrain: idConstruction?.workAtHeighTrain,
          hseTraining: idConstruction?.hseTraining,
          workplace:idConstruction?.workplace,
          fireFighting:idConstruction?.fireFighting,
          hazardIdentification:idConstruction?.hazardIdentification,
          cofinedSpace:idConstruction?.cofinedSpace,
          safetyInWelding:idConstruction?.safetyInWelding,
          hseStandard: idConstruction?.hseStandard,
          others:idConstruction?.others,
          evalName:idConstruction?.evalName,
          evalId:idConstruction?.evalId,

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        // form.resetFields();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }

  };

  {/* End RefuseHumanRessource*/ }


  const roles = localStorage.getItem("role");
  const findIdInterview = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${code}&token=${token}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

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
  const LevelHR = [
    { level: 'LevelI' },
    { level: 'LevelII' },
    { level: 'LevelIII' },


  ];

  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");

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
      console.log("dataprofile", data)
      setProfile(data)
      setGetsId(profile?.getsId)
      setName(profile?.name)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
      {/**All Fied not empty */}
      {roles.includes("admin") && (
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
              <Typography.Title level={4}>Construction STAFF INTERVIEW SHEET</Typography.Title>

            </div>

          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Recruitement Information</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='Reference'>
                      <Input
                        className='Input'
                        placeholder={"CIS -" + idViewConstruction?.interviewCode+"-"+year }
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Interview Date' name='Interview Date'>
                      <Input
                        className='Input'
                        placeholder={interviwDate}
                        value={newinterviwDate}
                        onChange={() => setNewinterviwDate()}
                        readOnly

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='JOB CODE:' name='JOB CODE'>
                      <Input
                        className='Input'
                        placeholder={"RRS-" + jobCode + year}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Number Required Position' name='Total Number Required Position'>
                      <Input
                        className='Input'
                        placeholder={totalReqPos}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Interviewed' name='Total Interviewed'>
                      <Input
                        className='Input'
                        placeholder={totalInterv}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Accepted' name='Total Accepted'>
                      <Input
                        className='Input'
                        placeholder={totalAccept}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label=' Required Grade' name=' Required Grade'>
                      <Input
                        className='Input'
                        placeholder={requiredGrade}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>



                </AppRowContainer>

              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/**/}
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
                      <Input
                        className='Input'
                        placeholder={newprojname}
                        classNames="ViewInput"
                        value={newprojname}
                        onChange={() => setNewprojname()}



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                      <Input
                        className='Input'
                        placeholder={positionToBeFilled}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Department ' name='department '>
                      <Input
                        className='Input'
                        value={newdep}

                        onChange={(e) => setNewdep(e.target.value)}
                        placeholder={department}



                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Requested Qualification' name='requiredQualification'>
                      <Input
                        className='Input'
                        onChange={(e) => setNewrequiredQualification(e.target.value)}
                        placeholder={newrequiredQualification}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Requested Experience' name='requiredExperinece'>
                      <Input
                        className='Input'
                        placeholder={newrequiredGrade}
                        onChange={(e) => setNewrequiredGrade(e.target.value)}

                      />
                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/*Candidate Information*/}
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Candidate Experience & Education </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Diploma /Speciality' name='diploma'


                    >
                      <Input
                        className='Input'
                        placeholder={diploma}
                        readOnly={true}



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Educational level' name='educationLevel'


                    >
                      <Input

                        className='Input'
                        placeholder={educationLevel}
                        readOnly={true}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Experience' name='experience'>
                      <Input
                        className='Input'

                        placeholder={idViewConstruction?.requiredExperinece}
                        readOnly={true}



                      />
                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Preliminary study of the application </Typography.Title>
              <StyledSecondaryText1>
                Go to test 2
              </StyledSecondaryText1>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <Col xs={24} md={12}>
                  <Form.Item label='Validation' name='Validation'

                  >
                    <Input
                      className='Input'
                      placeholder={validatesFor}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    style={{ marginTop: "10px" }}
                    label='Go to test 2:'
                    name='Gototest2' >

                    <Checkbox checked={goTotest2}
                    >

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox checked={!goTotest2}>
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>

                  </Form.Item>

                </Col>

              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/*Psychotechnical Test */}
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
                    >
                      <Input
                        className='Input'
                        placeholder={psy_Person}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Humain quality'
                      name='Humain quality'>
                      <Input
                        className='Input'
                        placeholder={psy_HumQuality}
                        readOnly={true}

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Motivation/Ambition'
                      name='Motivation/Ambition'

                    >
                      <Input
                        className='Input'
                        placeholder={psy_motivation}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Intelligence'
                      name='Intelligence'

                    >
                      <Input
                        className='Input'
                        placeholder={psy_Intellig}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>

                    <Form.Item
                      label='Go to test 3 :'
                      name='Gototest3' >
                      <Checkbox checked={goToTest3}>

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!goToTest3}>
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
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
                      name='English Skills '>
                      <Input
                        className='Input'
                        placeholder={techEnglishSkills}
                        readOnly={true}

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Date'
                      name='Date'>

                      <Input
                        className='Input'
                        placeholder={techDate}
                        readOnly={true}

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Evaluator' name='Evaluator'>
                      <Input
                        // value={evaluator}
                        className='Input'
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='ID Number' name='ID Number'
                    >
                      <Input
                        value={idNumb}
                        placeholder='ID Number'

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>

                    <Form.Item
                      label='The present profile meets the requirements of 
                  the requested position :'
                      name='Present profile' >
                      <Checkbox >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox >
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>


                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}> Evaluator Decision</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={24}>

                    <Form.Item
                      label='Evaluator Decision :'
                      name=' EvaluatorDecision' >
                      <Checkbox checked={evalDesision}
                        readOnly
                      >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!evalDesision}
                        readOnly >
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comments' name='Comments' >
                      <Input
                        className='InputComment'
                        placeholder={techcommentaire} />
                    </Form.Item>
                  </Col>


                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>  Head of Department ApprovaL</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>

                    <Form.Item
                      label='Head of Department Approval :'
                      name='Head of Department Approval' >
                      <Checkbox
                        checked={headOfDepAprouv}  >
                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!headOfDepAprouv}>
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>



                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
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
                      name='Personnality' >
                      <Input

                        placeholder={hr_Person} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Humain quality'
                      name='Humain quality'
                    >
                      <Input

                        placeholder={hr_HumQuality} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Motivation/Ambition'
                      name='Motivation/Ambition'
                      onChange={(value) => setSelectedMotivationHR(value)}

                    >
                      <Input

                        placeholder={hr_motivation} />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Intelligence'
                      name='Intelligence'

                    >
                      <Input

                        placeholder={hr_Intellig} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Level'
                      name='Level'

                    >
                      <Input

                        placeholder={level} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Expected Join Date' name='Expected Join Date'>
                      <Input
                        placeholder={expectedJoinDate} />

                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item label='Proposed Office Salary' name='Proposed Salary'


                    >
                      <Input

                        placeholder={propsedsalary} />


                    </Form.Item>
                  </Col>
                  {affect==="Site"&&(
                    <>
                    <Col xs={24} md={12}>
                    <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate' >
                      <Input

                        placeholder={dailyRate} />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>

                    <Form.Item
                      label='HR Decision:'
                      name='HR Evaluation' >
                      <Checkbox checked={hrDesion} >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!hrDesion} >
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>
                  </>
                  )}
                   {affect==="Office" || affect==="Office & Site"&&(
                    <>
                    <Col xs={24} md={12}>
                    <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate' >
                      <Input

                        placeholder={dailyRate} />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>

                    <Form.Item
                      label='HR Decision:'
                      name='HR Evaluation' >
                      <Checkbox checked={hrDesion} >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!hrDesion} >
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>

                  </Col>
                  </>
                  )}
                  
                  <Col xs={24} md={24}>
                    <Form.Item label='Comments' name='Comments'>
                      <Input
                        className='InputComment'
                        placeholder={hrComentaire}  />
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
            <Button onClick={goBack}
            >Cancel</Button>
            <Button onClick={Update}
            >Save</Button>
          </Space>

        </Form>

      )}
      {(roles.includes("Manager") || roles.includes("Leader")) && (
        <Form
          form={form}
          layout='vertical'
          style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
          onSubmit={e => { e.preventDefault() }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography.Title level={4}>Construction STAFF INTERVIEW SHEET</Typography.Title>

            </div>

          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Recruitement Information</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='Reference'>
                      <Input
                        className='Input'
                        placeholder={"CIS -" + idViewConstruction?.interviewCode+"-"+year }
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='  Date' name='Date'>
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.inputInterview}
                        readOnly
                      // value={newinterviwDate}
                      // onChange={() => setNewinterviwDate()} 

                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Interview Date' name='Interview Date'>
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.interviwDate}
                        readOnly
                      // value={newinterviwDate}
                      // onChange={() => setNewinterviwDate()} 

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Interview Time' name='Interview Time'>
                      <Input
                        className='Input'
                        // placeholder={idViewConstruction?.intervtime}
                        placeholder={idViewConstruction?.intervtime? idViewConstruction.intervtime.substring(0, 5) : ''}
                        readOnly

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='JOB CODE:' name='JOB CODE'>
                      <Input
                        placeholder={"RRS-" + idViewConstruction?.jobCode + "-" + year}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Number Required Position' name='Total Number Required Position'>
                      <Input

                        placeholder={idViewConstruction?.totalReqPos}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Interviewed' name='Total Interviewed'>
                      <Input
                        placeholder={idViewConstruction?.totalInterv}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Total Accepted' name='Total Accepted'>
                      <Input

                        placeholder={idViewConstruction?.totalAccept}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label=' Required Grade' name=' Required Grade'>
                      <Input

                        placeholder={idViewConstruction?.requiredGrade}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>

                </AppRowContainer>

              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/**/}
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}> Required Position Information</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Project Name' name='projname'>
                      <Input

                        placeholder={idViewConstruction?.projname}
                        classNames="ViewInput"
                        readOnly
                      // value={newprojname}
                      // onChange={() => setNewprojname()} 



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.positionToBeFilled}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Department ' name='department '>
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.department}
                        readOnly

                      // onChange={(e) => setNewdep(e.target.value)}
                      //   placeholder={department}



                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Requested Qualification' name='requiredQualification'>
                      <Input
                        className='Input'
                        onChange={(e) => setNewrequiredQualification(e.target.value)}
                        placeholder={idViewConstruction?.requiredQualification}
                        readOnly

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Requested Experience' name='requiredExperinece'>
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.
                          requiredExperinece}
                    
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Button
                      type='primary'
                      style={{ margin: "2rem", borderRadius: "2rem" }}
                      onClick={() => window.open(idViewConstruction?.urlCv, '_blank')} >
                      <FiEye style={{ paddingTop: 2, fontSize: "15px" }} ></FiEye>
                      <span style={{ paddingLeft: 2 }}>
                        View Cv :
                      </span>
                      <span style={{ fontWeight: "bold", color: "#e5e7e6" }}>{fullName}</span></Button>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/*Candidate Information*/}
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Candidate Experience & Education </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Full Name' name='FullName' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.fullName}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contact Full Number' name='telCandidate' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.contactPhone}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label=' Contact Email' name='ContactEmail' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.contactEmail}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date of Birth' name='Date of Birth' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.birthayDate}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Family Situation' name='Family Situation' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.familySituation}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item label='Diploma /Speciality' name='diploma' >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.diploma}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Educational level' name='educationLevel'


                    >
                      <Input

                        className='Input'
                        placeholder={idViewConstruction?.educationLevel}
                        readOnly={true}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Experience' name='experience'

                    >
                      <Input
                        className='Input'
                        placeholder={idViewConstruction?.requiredExperinece}
                        readOnly={true}

                      />
                    </Form.Item>
                  </Col>


                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/*HSE*/}
          {(roles.includes("HSE") && (idViewConstruction.goTotest2 || !idViewConstruction.validatesFor)) || (roles.includes("Human Ressource")) ?
            <>
              <Divider style={{ marginTop: 16, marginBottom: 16 }} />
              <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}>Preliminary study of the application </Typography.Title>
                  <StyledSecondaryText1>
                    Go to test 2
                  </StyledSecondaryText1>
                </Col>

                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>
                      <Col xs={24} md={24}>
                        <Form.Item
                          label='Validation'
                          name='validatesFor'
                        >
                          <Input
                            className='Input'
                           
                   
                            placeholder={idViewConstruction.validatesFor?idViewConstruction.validatesFor:validatesFor}

                            readOnly={true}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>

                        <Form.Item
                          style={{ marginTop: "10px" }}
                          label='Go to test 2 :'
                          name='Gototest2' >
                          <Checkbox 
                          checked={idConstruction.goTotest2}>

                            <IntlMessages id='validation.test' />
                          </Checkbox>
                          <Checkbox checked={!idConstruction.goTotest2}>
                            <IntlMessages id='Refuse.test' />
                          </Checkbox>
                        </Form.Item>

                      </Col>


                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>
              </AppRowContainer>

              {idConstruction.goTotest2 && (
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
                              name='Personnality'>
                              <Input
                                className='Input'
                                placeholder={idConstruction.psy_Person}
                                readOnly={true}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Humain quality'
                              name='Humain quality'


                            >
                              <Input
                                className='Input'
                                placeholder={idConstruction.psy_HumQuality}
                                readOnly={true}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Motivation/Ambition'
                              name='Motivation/Ambition'

                            >
                              <Input
                                className='Input'
                                placeholder={idConstruction.psy_motivation}
                                readOnly={true}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Intelligence'
                              name='Intelligence'

                            >
                              <Input
                                className='Input'
                                placeholder={idConstruction.psy_Intellig}
                                readOnly={true}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>

                            <Form.Item
                              label='Go to test 3 :'
                              name='Gototest3' >
                              <Checkbox checked={idConstruction.goToTest3}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={!idConstruction.goToTest3}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>

                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>
                </>
              )}
              {idConstruction.goToTest3 && (
                <>

                  {/*Psychotechnical Test */}

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
                            >
                              <Input
                                className='Input'
                                placeholder={idConstruction?.techEnglishSkills}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Date'
                              name='Date'
                            >

                              <Input
                                className='Input'
                                placeholder={idConstruction?.techDate}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item label='Evaluator' name='Evaluator'
                            >
                              <Input
                                placeholder={idConstruction?.evalName}
                                readOnly />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item label='ID Number' name='idgets'


                            >
                              <Input
                                placeholder={idConstruction?.idNumb}
                                readOnly
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>

                            <Form.Item
                              label='The present profile meets the requirements of 
                              the requested position :'
                              name='Present profile' >
                              <Checkbox checked={idConstruction?.meetDesision}
                                readOnly={true}

                              >

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={!idConstruction?.meetDesision}

                                readOnly={true}
                              >
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>

                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>



                  </AppRowContainer>
                </>
              )}
              {idConstruction?.meetDesision && (
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

                            <Form.Item
                              label='Evaluator Decision :'
                              name=' EvaluatorDecision' >
                              <Checkbox checked={idConstruction?.evalDesision}
                                readOnly={true}
                              >

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={!idConstruction?.evalDesision}
                                readOnly={true}
                              >
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>
                          <Col xs={24} md={24}>
                            <Form.Item label='Comments' name='Comments'

                            >
                              <Input
                                className='InputComment'

                                placeholder={idConstruction?.techcommentaire}
                                readOnly={true}

                              />
                            </Form.Item>
                          </Col>


                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>

                  </AppRowContainer>

                </>
              )}
              {idConstruction?.evalDesision && (
                <>
                  {roles.includes("Human Ressource") ?
                    <>
                      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                        <Col xs={24} md={6}>
                          <Typography.Title level={5}> HSE Approval</Typography.Title>

                        </Col>
                        <Col xs={24} md={18}>
                          <StyledShadowWrapper>
                            <AppRowContainer>

                              <Col xs={24} md={24}>

                                <Form.Item
                                  label='HSE Decision :'
                                  name='HSEDecision' >
                                  <Checkbox checked={idConstruction?.hseDecision}
                                    readOnly={true}
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idConstruction?.hseDecision}
                                    readOnly={true}
                                  >
                                    <IntlMessages id='Refuse.test' />
                                  </Checkbox>
                                </Form.Item>

                              </Col>
                              <Col xs={24} md={24}>
                                <Form.Item label='Comments' name='Comments'

                                >
                                  <Input
                                    className='InputComment'

                                    placeholder={idConstruction?.hseComment}
                                    readOnly={true}

                                  />
                                </Form.Item>
                              </Col>


                            </AppRowContainer>
                          </StyledShadowWrapper>
                        </Col>

                      </AppRowContainer>
                      {idConstruction?.hseDecision && (
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

                                      rules={[
                                        { required: true, message: 'Please Select  your Personnality!' },

                                      ]}
                                    >
                                      <Select
                                        placeholder='Select Personnality'
                                        onChange={(value) => setSelectedPersonalityHR(value)}
                                        value={selectedPersonalityHR}
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

                                      rules={[
                                        { required: true, message: 'Please Select  your Humain quality!' },

                                      ]}
                                    >
                                      <Select
                                        placeholder='Humain quality'
                                        onChange={(value) => setSelectedHumainqualityHR(value)}
                                        value={selectedHumainqualityHR}
                                      >
                                        {qualityHR.map((p, index) => (
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

                                      rules={[
                                        { required: true, message: 'Please Select  your Motivation/Ambition!' },

                                      ]}
                                    >
                                      <Select
                                        placeholder='Motivation/Ambition'
                                        onChange={(value) => setSelectedMotivationHR(value)}
                                        value={selectedMotivationHR}
                                      >
                                        {motivationHR.map((p, index) => (
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

                                      rules={[
                                        { required: true, message: 'Please Select  your Intelligence!' },

                                      ]}
                                    >
                                      <Select
                                        placeholder='Intelligence'
                                        onChange={(value) => setSelectedIntelligenceHR(value)}
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

                                      rules={[
                                        { required: true, message: 'Please Select  your Level!' },

                                      ]}
                                    >
                                      <Select
                                        placeholder='Level'
                                        onChange={(value) => setSelectedLevelHR(value)}
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


                                        style={{ width: "100%", height: "30px" }}
                                        onChange={(value) => setExpectedJoinDate(dayjs(value).format('YYYY-MM-DD'))}
                                      />

                                    </Form.Item>
                                  </Col>
                                  {affect==="Site " &&(
                                    <>
         
                                  <Col xs={24} md={12}>
                                    <Form.Item
                                      label='Proposed Site Daily Rate'
                                      name='Proposed Daily Rate'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Daily Rate!' },
                                      
                                         ]}>
                                      <Input
                                      
                                        value={proposedDailyRate}
                                        onChange={handleDailyChange}
                                        placeholder='Proposed Daily Rate'
                                      />
                                      {dailyError && <Alert className="custom-alert" message={dailyError} type="error" showIcon />}
                                    </Form.Item>
                                  </Col>

                                  <Col xs={24} md={12}>
                                    <Form.Item
                                      label='Proposed Site Salary'
                                      name='Proposed Salary'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Salary!' },
                                      
                                      ]}
                                    >
                                      <Input
                                      type='number'
                                        value={proposedSalary}
                                        onChange={handleSalaryChange}
                                        placeholder='Proposed Salary'
                                      />
                                      {salaryError && <Alert className="custom-alert" 
                                      message={salaryError} type="error" showIcon />}
                                    </Form.Item>
                                  </Col>
                                  </>
                                  )}
                              
                              {(affect === "Office" || affect === "Office & Site") && (
                                    <>
                               
                                  <Col xs={24} md={12}>
                                    <Form.Item
                                      label='Proposed Site Daily Rate'
                                      name='Proposed Daily Rate'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Daily Rate!' },
                                        {
                                          pattern: /^\d+(\.\d+)?$/,  
                                          message: 'Proposed Daily Rate must be a valid number!',
                                        },
                                        
                                      ]}
                                    >
                                      <Input
                                        value={proposedDailyRate}
                                        onChange={handleDailyOfficeChange}
                                        placeholder='Proposed Daily Rate'
                                      />
                                      {dailyError && <Alert className="custom-alert" message={dailyError} type="error" showIcon />}
                                    </Form.Item>
                                  </Col>

                                  <Col xs={24} md={12}>
                                    <Form.Item
                                      label='Proposed Site Salary'
                                      name='Proposed Salary'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Salary!' },
                                        {
                                          pattern: /^\d+(\.\d+)?$/,  
                                          message: 'Proposed Daily Rate must be a valid number!',
                                        },
                                      ]}
                                    >
                                      <Input
                                        value={proposedSalary}
                                        onChange={handleSalaryOfficeChange}
                                        placeholder='Proposed Salary'
                                      />
                                      {salaryError && <Alert className="custom-alert" message={salaryError} type="error" showIcon />}
                                    </Form.Item>
                                  </Col>
                                  </>
                                  )}






                                  {/*Calcul Daily Rate */}
                                  {/* <Col xs={24} md={12}>
                                    <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Daily Rate!' },
                                        { pattern: /^[0-9]+$/, message: 'Proposed Daily Rate must be a number!' },
                                      ]}


                                    >
                                      <Input
                                        value={proposedDailyRate}
                                        onChange={handleDailyChange}
                                        // onChange={(e) =>setProposedDailyRate(e.target.value)}
                                        placeholder={`Proposed Daily Rate`}
                                      />
                                      {dailyError && <Alert className="custom-alert" message={dailyError} type="error" showIcon />}
                                    </Form.Item>
                                  </Col>
                            
                                  <Col xs={24} md={12}>
                                    <Form.Item label='Proposed Site Salary' name='Proposed Salary'
                                      rules={[
                                        { required: true, message: 'Please input your Proposed Salary!' },
                                        { pattern: /^[0-9]+$/, message: 'Proposed Salary must be a number!' },

                                      ]}

                                    >
                                      <Input
                                        value={proposedSalary}
                                        onChange={handleSalaryChange}
                                        // onChange={(e) => setProposedSalary(e.target.value)}
                                        placeholder={`Proposed Office Salary`}

                                      />
                                      {salaryError && <Alert className="custom-alert" message={salaryError}
                                        type="error" showIcon />}

                                    </Form.Item>
                                  </Col>
                                */}
                                  <Col xs={24} md={24}>
                                    <StyledInput>
                                      <Form.Item
                                        label='HR Decision:'
                                        name='HR Evaluation' >
                                        <Checkbox checked={isOkCheckedHRDecision} onChange={OkHrDesicision}>

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

                                      ]}


                                    >
                                      <Input
                                        className='InputComment'
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

                    </>
                    :
                    <></>
                  }



                </>
              )}
            </>
            :
            <>
              <Divider style={{ marginTop: 16, marginBottom: 16 }} />
              <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}>Preliminary study of the application </Typography.Title>
                  <StyledSecondaryText1>
                    Go to test 2
                  </StyledSecondaryText1>
                </Col>

                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>
                      <Col xs={24} md={24}>
                        <Form.Item
                          label='Validation'
                          name='validatesFor'
                          rules={[
                            { required: true, message: 'Please Select your Select Validation!' },

                          ]}

                        >
                          <Select
                            placeholder='Select Validation'
                            onChange={handleValidationSelect}

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

                        <Form.Item
                          style={{ marginTop: "10px" }}
                          label='Go to test 2 :'
                          name='Gototest2'
                          rules={[
                            { required: true, message: 'Please Cheked !' },

                          ]}


                        >
                          <Checkbox checked={isOkChecked} onChange={Ok}>

                            <IntlMessages id='validation.test' />
                          </Checkbox>
                          <Checkbox checked={isNoChecked} onClick={No}>
                            <IntlMessages id='Refuse.test' />
                          </Checkbox>
                        </Form.Item>

                      </Col>


                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>



              </AppRowContainer>

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

                              rules={[
                                { required: true, message: 'Please Select your Select Personnality!' },

                              ]}>
                              <Select
                                placeholder='Select Personnality'
                                onChange={handlePersonnalitySelect}
                                value={selectedPersonality}


                              >
                                {personality.map((p, index) => (
                                  <Select key={index} value={p.personality}>
                                    {p.pesonality}
                                  </Select>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Humain quality'
                              name='Humainquality'

                              rules={[
                                { required: true, message: 'Please Select your Select Humain quality!' },

                              ]}
                            >
                              <Select
                                placeholder='Humain quality'
                                onChange={handleHumainqualitySelect}
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
                              name='MotivationAmbition'
                              rules={[
                                { required: true, message: 'Please Select your Select Motivation/Ambition!' },

                              ]}
                            >
                              <Select
                                placeholder='Motivation/Ambition'
                                onChange={handleMotivationSelect}
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
                              rules={[
                                { required: true, message: 'Please Select your Select Intelligence!' },

                              ]}
                            >
                              <Select
                                placeholder='Intelligence'
                                onChange={handleIntelligenceSelect}
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

                            <Form.Item
                              label='Go to test 3 :'
                              name='Gototest3'
                              rules={[
                                { required: true, message: 'Please Cheked' },

                              ]}


                            >
                              <Checkbox checked={isOkChecked3} onChange={Ok3}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={isNoChecked3} onClick={No3}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>

                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>
                </>
              )}
              {isVisibletest3 && (
                <>

                  {/*Psychotechnical Test */}

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
                              name='EnglishSkills'

                              rules={[
                                { required: true, message: 'Please Select your Select English Skills!' },

                              ]}

                            >
                              <Select
                                placeholder='English Skills '
                                value={selectedSkillls}
                                onChange={handleSkilllsSelect}>
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

                              ]}>

                              <DatePicker
                                style={{ width: '100%', height: "33px" }}
                                autoFocus
                                defaultValue={dayjs(evaluationDate, '16-06-1990')}

                                onChange={(value) => setEvaluationDate(dayjs(value).format('YYYY-MM-DD'))}

                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item label='Evaluator' name='Evaluator'


                            >
                              <Input
                                placeholder={name}
                                readOnly />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item label='ID Number' name='idgets' >
                              <Input

                                placeholder={getsId} />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>

                            <Form.Item
                              label='The present profile meets the requirements of 
                              the requested position :'
                              name='Presentprofile'

                              rules={[
                                { required: true, message: 'Please Checked !' },

                              ]}


                            >
                              <Checkbox checked={isOkCheckedProfile} onChange={OkProfile}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={isNoCheckedProfile} onClick={NoProfile}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>




                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>



                  </AppRowContainer>
                </>
              )}
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

                            <Form.Item
                              label='Evaluator Decision :'
                              name=' EvaluatorDecision'
                              rules={[
                                { required: true, message: 'Please Checked !' },]}

                            >
                              <Checkbox checked={isOkCheckedEvaluator} onChange={OkEvaluator}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={isNoCheckedEvaluator} onClick={NoEvaluator}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>
                          <Col xs={24} md={24}>
                            <Form.Item label='Comments' name='Comments'>
                              <Input
                                className='InputComment'
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

            </>




          }
          {roles.includes("HSE") ?
            <>
              <Divider style={{ marginTop: 16, marginBottom: 16 }} />
              <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}> HSE Approval</Typography.Title>

                </Col>
                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>

                      <Col xs={24} md={24}>

                        <Form.Item
                          label='HSE Approval :'
                          name='HSE Approval'
                          rules={[
                            { required: true, message: 'Please Checked !' },

                          ]}


                        >
                          <Checkbox checked={isOkCheckedHSE} onChange={OkHSE}>

                            <IntlMessages id='validation.test' />
                          </Checkbox>
                          <Checkbox checked={isNoCheckedHSE} onClick={NoHSE}>
                            <IntlMessages id='Refuse.test' />
                          </Checkbox>
                        </Form.Item>

                      </Col>
                      <Col xs={24} md={24}>
                        <Form.Item label='Comments' name='Commenthse'
                        >
                          <Input
                            className='InputComment'
                            value={commentHSE}
                            onChange={(e) => setCommentHSE(e.target.value)}

                            placeholder='Comments' />
                        </Form.Item>
                      </Col>


                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>

              </AppRowContainer>

            </>


            : null}



          {/*6. Head of Department Approval*/}
          {/* {roles.includes("Manager") && (
            <>
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

                            <Form.Item
                              label='Head of Department Approval :'
                              name='Head of Department Approval' >
                              <Checkbox checked={isOkCheckedHead} onChange={OkHead}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={isNoCheckedHead} onClick={NoHead}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>



                        </AppRowContainer>
                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>
                </>
              )}
            </>
          )} */}

          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack}>

              <FcDownLeft style={{ marginRight: "5px", marginTop: "5px" }} />
              Return
            </Button>
            {roles.includes("Manager") && !roles.includes("HSE") 
            && !roles.includes("Human Ressource") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={UpdateManager}>
                  Approve

                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefuseManager}
                >
                  Refuse

                </Button>
              </>)}
        {(roles.includes("HSE") && (idViewConstruction.goTotest2 || !idViewConstruction.validatesFor)) && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} 
                onClick={UpdateHSE}>Approve 

                </Button>
                <Button style={{ color: "red", borderColor: "red" }}
                 onClick={RefuseHSE}
                >Refuse</Button>
              </>)}
            {(roles?.includes("HSE") && (!idViewConstruction.goTotest2)) && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={UpdateManager}
                >Approve</Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefuseManager}
                >Refuse</Button>
              </>)}
            {roles.includes("Leader") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }}
                 onClick={UpdateProjectLeader}
                >Approve</Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefuseProjectLeader}
                >Refuse</Button>
              </>)}
            {roles === "Human Ressource Manager" && (
              <>
                <Button
                  style={{ color: "green", borderColor: "green" }}
                  onClick={UpdateHumanRessource}
                  disabled={proposedDailyRate>lev1dailyRateMax}

                >Approve </Button>
                <Button
                  style={{ color: "red", borderColor: "red" }}
                  onClick={RefuseHumanRessource}
                >Refuse </Button>
              </>)}
          </Space>

        </Form>

      )}
      {/*View Bod and HR ADministrator*/}
      {(roles.includes("bod") || roles.includes("Cordinator")) && (
        <ViewInterviewContraction
          interviewCode={interviewCode}
          idViewConstruction={idViewConstruction}


        ></ViewInterviewContraction>

      )}


    </div>

  );
};


export default EditInterviewConstruction;
