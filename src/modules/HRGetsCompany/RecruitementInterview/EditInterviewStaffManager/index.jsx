import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, notification, Checkbox, DatePicker, InputNumber } from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
  StyledSecondaryText1,

} from '../index.styled';

import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
const EditInterviewStaff = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const interviewCode = location.state ? location.state.interviewCode : null;
  const jobCode = location.state ? location.state.jobCode : null;
  const interviwDate = location.state ? location.state.interviwDate : null;
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
  const fullName = location.state ? location.state.fullName : null
  const birthayDate = location.state ? location.state.birthayDate : null
  const familySituation = location.state ? location.state.familySituation : null
  const experience = location.state ? location.state.educationLevel : null
  const educationLevel = location.state ? location.state.educationLevel : null
  const diploma = location.state ? location.state.diploma : null
  const telCondidate = location.state ? location.state.telCondidate : null
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
  const expectedJoinDate = location.state ? location.state.expectedJoinDate : null
  const propsedsalary = location.state ? location.state.propsedsalary : null
  const dailyRate = location.state ? location.state.dailyRate : null
  const hrDesion = location.state ? location.state.hrDesion : null
  const hrComentaire = location.state ? location.state.hrComentaire : null
  const finaldesision = location.state ? location.state.finaldesision : null
  const inputInterview = location.state ? location.state.inputInterview : null
  const intervtime = location.state ? location.state.intervtime : null
  const [selectedValidation, setSelectedValidation] = useState('');
  const [isOkChecked, setIsOkChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [selectedHumainquality, setSelectedHumainquality] = useState('');
  const [selectedMotivation, setSelectedMotivation] = useState('')
  const [selectedIntelligence, setSelectedIntelligence] = useState('');
  const [selectedSkillls, setSelectedSkillls] = useState('');
  const [isOkChecked3, setIsOkChecked3] = useState(false);
  const [isNoChecked3, setIsNoChecked3] = useState(false);
  const [isVisibletest3, setIsVisibletest3] = useState(false);
  const [evaluationDate, setEvaluationDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [profile, setProfile] = useState("");
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [isOkCheckedProfile, setIsOkCheckedProfile] = useState(false);
  const [isNoCheckedProfile, setIsNoCheckedProfile] = useState(false);
  const [isVisibletestEvaluator, setIsVisibletestEvaluator] = useState(false);
  const [isOkCheckedEvaluator, setIsOkCheckedEvaluator] = useState(false);
  const [isNoCheckedEvaluator, setIsNoCheckedEvaluator] = useState(false);
  const [isVisibleEvaluatorDecision, setIsVisibleEvaluatorDecision] = useState(false);
  const [comment, setComments] = useState("");
  const [isOkCheckedHead, setIsOkCheckedHead] = useState(false);
  const [isNoCheckedHead, setIsNoCheckedHead] = useState(false);
  const [isVisibleHeadDecision, setIsVisibleHeadDecision] = useState(false);
  const [idStaff, setIdStaff] = useState("");
  const [idIntStaff, setIdIntStaff] = useState("");
  const [selectedPersonalityHR, setSelectedPersonalityHR] = useState('');
  const [selectedHumainqualityHR, setSelectedHumainqualityHR] = useState('');
  const [selectedMotivationHR, setSelectedMotivationHR] = useState('');
  const [selectedIntelligenceHR, setSelectedIntelligenceHR] = useState('');
  const [selectedLevelHR, setSelectedLevelHR] = useState('');
  const [expectedJoinDatehr, setExpectedJoinDatehr] = useState("");
  const [proposedSalary, setProposedSalary] = useState("");
  const [proposedDailyRate, setProposedDailyRate] = useState("");
  const [officeSalaryMax, setOfficeSalaryMax] = useState(0);
  const [dailyRateMax, setDailyRateMax] = useState(0);
  const [totalMax, setTotalMax] = useState(0);
  const [salaryError, setSalaryError] = useState('');
  const [dailyError, setDailyError] = useState('');
  const [isOkCheckedHRDecision, setIsOkCheckedHRDecision] = useState(false);
  const [isNoCheckedHRDecision, setIsNoCheckedHRDecision] = useState(false);
  const [commentHr, setCommentsHr] = useState("")
  const [isVisibleHRDecision, setIsVisibleHRDecision] = useState(false);
  const [selectedbodDescition, setSelectedbodDescition] = useState('');
  const [selectedbodDescition2, setSelectedbodDescition2] = useState('');
  const [salary1, setSalary1] = useState('');
  const [daily1, setDaily1] = useState('');
  const [comment1, setComment1] = useState('');
  const [salary2, setSalary2] = useState('');
  const [daily2, setDaily2] = useState('');
  const [comment2, setComment2] = useState('');
  const [proposedSalary1, setProposedSalary1] = useState('');
  const [proposedSalary2, setProposedSalary2] = useState('');
  const [proposedDaily1, setProposedDaily1] = useState('');
  const [proposedDaily2, setProposedDaily2] = useState('');
  const [commentareBod1, setCommentareBod1] = useState('');
  const [commentareBod2, setCommentareBod2] = useState('');
  const [salarybod1, setSalarybod1] = useState('');
  const token = localStorage.getItem("token")
  const handleSalary1Change = (event) => {
    const value = event.target.value;
    setSalary1(event.target.value);
  };
  const handleDaily1Change = (event) => {
    const value = event.target.value;
    setDaily1(event.target.value);
  };
  const handleComment1Change = (event) => {
    const value = event.target.value;
    setComment1(event.target.value);
  };
  const handleSalary2Change = (event) => {
    const value = event.target.value;
    setSalary2(event.target.value);
  };
  const handleDaily2Change = (event) => {
    const value = event.target.value;
    setDaily2(event.target.value);
  };
  const handleComment2Change = (event) => {
    const value = event.target.value;
    setCommentareBod2(event.target.value);
  };
  const handleproposedSalary1Change = (event) => {
    const value = event.target.value;
    setProposedSalary1(event.target.value);
  };

  const handleproposedDaily1Change = (event) => {
    const value = event.target.value;
    setProposedDaily1(event.target.value);
  };
  const handlecommentareBod1Change = (event) => {
    const value = event.target.value;
    setCommentareBod1(event.target.value);
  };


  const handleproposedSalary2Change = (event) => {
    const value = event.target.value;
    setProposedSalary2(event.target.value);
  };
  const handleproposedDaily2Change = (event) => {
    const value = event.target.value;
    setProposedDaily2(event.target.value);
  };



  //////////////////////////////////////
  const [email, setEmail] = useState("");
  //GetProfile When Login
  const storedrole = window.localStorage.getItem("role");

  const fetchRole = async () => {
    try {
      const params = new URLSearchParams({ roles: storedrole });
      const url = `https://dev-gateway.gets-company.com/api/v1/auth/editProfile?${params}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setEmail(data.email)
        localStorage.setItem('email', data.email);


      } else {
        console.error("Erreur lors de la récupération du rôle:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du rôle:", error);
    }
  };

  //////////////////////////////

  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
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

  function NoEvaluator(e) {
    console.log(`checkedgggg = ${e.target.checked}`);
    setIsNoCheckedEvaluator(e.target.checked);
    setIsVisibleEvaluatorDecision(false)
    if (e.target.checked) {
      setIsOkCheckedEvaluator(false);
      setIsNoCheckedEvaluator(true);
    }
  }
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
  ]
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
  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setProposedSalary(value);
    if (parseFloat(value) > officeSalaryMax) {
      setSalaryError(`Proposed Office Salary exceeds the maximum allowed value of ${officeSalaryMax}`);
    } else
      setSalaryError("");
  };
  const handleDailyChange = (e) => {
    const value = e.target.value;
    setProposedDailyRate(value);
    if (parseFloat(value) > dailyRateMax) {
      setDailyError(`Proposed Daily Rate exceeds the maximum allowed value of ${dailyRateMax}`);

    }
    else {
      setDailyError("")
    }
  };
  const findIdInterviewStaff = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${interviewCode}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("findIdInterviewStaff", responseData)
      setIdIntStaff(responseData?.interviewCode)
      setIdStaff(responseData)
      setSalarybod1(responseData?.propsedsalaryBod1)


    } catch (error) {
      console.error("Erreur lors de la récupération du findID:", error);
    }
  };

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
      description: 'Success MANAGEMENT STAFF INTERVIEW SHEET',
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
  const openNotificationRefuse = () => {
    notification.open({
      message: 'Refuse',
      description: 'Refuse MANAGEMENT STAFF INTERVIEW SHEET',
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
      description: 'Error MANAGEMENT STAFF INTERVIEW SHEET',
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
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
          finaldesision,


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
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //UpdateManager

  const UpdateManager = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
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
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          notif: 2,
          evalName: idStaff?.evalId,
          evalId: idStaff?.evalId,




        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          form.resetFields()
          window.location.reload();
          navigate(-1)
        }, 100);
        // form.resetFields();


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Interview Sheet :", error);
    }
  };
  //End
  //////////Refuser Manager 

  const RefuseManager = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
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
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          notif: 200,

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

  ////End Refused
  ////Update Leader 

  const UpdateLeader = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
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
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          notif: 7,
          evalName: name,
          evalId: getsId,

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          form.resetFields()
          window.location.reload();
          navigate(-1)
        }, 2000);
        // form.resetFields();


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Interview Sheet :", error);
    }
  };
  //Aproved Leader
  //Refuse Leader

  const RefuseLeader = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
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
          expectedJoinDate,
          dailyRate,
          hrDesion,
          // feedback,
          propsedsalary,
          notif: 700,
          evalName: name,
          evalId: getsId,



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          form.resetFields()
          window.location.reload();
          navigate(-1)
        }, 2000);
        // form.resetFields();


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Interview Sheet :", error);
    }
  };

  //Refuse Leader
  //////////////////////////////Save Human Manager
  const UpdateHumanRessource = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          NLEVEL: selectedLevelHR,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: expectedJoinDatehr,
          dailyRate: proposedDailyRate,
          hrDesion: isOkCheckedHRDecision,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 5,


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
          navigate(-1)
        }, 1000);


      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  const RefuseHumanRessource = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: selectedPersonalityHR,
          hr_HumQuality: selectedHumainqualityHR,
          hr_motivation: selectedMotivationHR,
          hr_Intellig: selectedIntelligenceHR,
          level: selectedLevelHR,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: expectedJoinDatehr,
          dailyRate: proposedDailyRate,
          hrDesion,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 500,



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
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  {/*BOD Updatebod**/ }
  const Updatebod = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: idStaff.hr_Person,
          hr_HumQuality: idStaff.hr_HumQuality,
          hr_motivation: idStaff.hr_motivation,
          hr_Intellig: idStaff.hr_Intellig,
          level: idStaff.level,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: idStaff.expectedJoinDate,
          dailyRate: idStaff.dailyRate,
          hrDesion: idStaff.hrDesion,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 66,
          directSign1: selectedbodDescition,
          directSign2: selectedbodDescition2,
          propsedsalaryBod1: proposedSalary1,
          propsedsalaryBod2: proposedSalary2,
          dailyRateBod1: proposedDaily1,
          dailyRateBod2: proposedDaily2,
          commentareBod1: commentareBod1,
          commentareBod2: commentareBod2


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData", responseData)
        // form.resetFields();
        openNotification('bottomRight')
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  //Refused Bod Nidhal

  const Refusebod = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: idStaff.hr_Person,
          hr_HumQuality: idStaff.hr_HumQuality,
          hr_motivation: idStaff.hr_motivation,
          hr_Intellig: idStaff.hr_Intellig,
          level: idStaff.level,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: idStaff.expectedJoinDate,
          dailyRate: idStaff.dailyRate,
          hrDesion: idStaff.hrDesion,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 660,
          directSign1: selectedbodDescition,
          directSign2: selectedbodDescition2,
          propsedsalaryBod1: proposedSalary1,
          propsedsalaryBod2: proposedSalary2,
          dailyRateBod1: proposedDaily1,
          dailyRateBod2: proposedDaily2,
          commentareBod1: commentareBod1,
          commentareBod2: commentareBod2


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData", responseData)
        // form.resetFields();
        openNotification('bottomRight')
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };



  ///////UpdateBODAli
  const Updatebod1 = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: idStaff.hr_Person,
          hr_HumQuality: idStaff.hr_HumQuality,
          hr_motivation: idStaff.hr_motivation,
          hr_Intellig: idStaff.hr_Intellig,
          level: idStaff.level,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: idStaff.expectedJoinDate,
          dailyRate: idStaff.dailyRate,
          hrDesion: idStaff.hrDesion,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 55,
          directSign1: selectedbodDescition,
          directSign2: selectedbodDescition2,
          propsedsalaryBod1: proposedSalary1,
          propsedsalaryBod2: proposedSalary2,
          dailyRateBod1: proposedDaily1,
          dailyRateBod2: proposedDaily2,
          commentareBod1: commentareBod1,
          commentareBod2: commentareBod2


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
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //Refused By BOD Ali Refusedbod1
  const Refusedbod1 = async () => {
    // if (salaryError || dailyError) {
    //   return;
    // }

    // if (parseFloat(proposedSalary) + parseFloat(proposedDailyRate) > totalMax) {
    //   alert(`Total of Proposed Office Salary and Proposed Site Daily Rate exceeds the maximum allowed value of ${totalMax}`);
    //   return;
    // }
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}&token=${token}`, {

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
          telCondidate: telCondidate,
          urlCv,
          validatesFor: idStaff?.validatesFor,
          goTotest2: idStaff.goTotest2,
          psy_Person: idStaff.psy_Person,
          psy_HumQuality: idStaff.psy_HumQuality,
          psy_motivation: idStaff.psy_motivation,
          psy_Intellig: idStaff.psy_Intellig,
          goToTest3: idStaff.goToTest3,
          techEnglishSkills: idStaff.techEnglishSkills,
          evalDesision: idStaff.evalDesision,
          techcommentaire: idStaff.techcommentaire,
          techDate: idStaff.techDate,
          meetDesision: idStaff.meetDesision,
          hr_Person: idStaff.hr_Person,
          hr_HumQuality: idStaff.hr_HumQuality,
          hr_motivation: idStaff.hr_motivation,
          hr_Intellig: idStaff.hr_Intellig,
          level: idStaff.level,
          headOfDepAprouv: idStaff.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: idStaff.expectedJoinDate,
          dailyRate: idStaff.dailyRate,
          hrDesion: idStaff.hrDesion,
          // feedback,
          propsedsalary: proposedSalary,
          notif: 550,
          directSign1: selectedbodDescition,
          directSign2: selectedbodDescition2,
          propsedsalaryBod1: proposedSalary1,
          propsedsalaryBod2: proposedSalary2,
          dailyRateBod1: proposedDaily1,
          dailyRateBod2: proposedDaily2,
          commentareBod1: commentareBod1,
          commentareBod2: commentareBod2


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
        navigate(-1)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };






  ////////////////
  const descisionBod = [
    { des: 'Accepted' },
    { des: 'Not Accepted' },
    { des: 'On Hold' },

  ];



  ///////////////End Save HumanManager
  const roles = localStorage.getItem("role");


  ///FetchMasSalary
  const fetchMaxValues = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const encodedPosition = encodeURIComponent(positionToBeFilled);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateMnStaff/filterByPosition?position=${encodedPosition}`, {
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
      if (requiredGrade === 'junior') {
        setOfficeSalaryMax(data?.[0]?.officeSalaryJun);
        const dalyrate = data[0].dailyrateJun;
        const dailyRateMonth = dalyrate / 30;
        setDailyRateMax(dailyRateMonth);
        setTotalMax(data?.[0]?.totalJun);
      } else if (requiredGrade === 'Medium') {
        setOfficeSalaryMax(data?.[0]?.officeSalaryMid);
        const dalyrate = data?.[0]?.dailyrateMid;
        console.log("hhhhhhh339999hhhhhhh339999", dalyrate)
        const dailyRateMonth = dalyrate / 30;
        setDailyRateMax(dailyRateMonth);
        setTotalMax(data?.[0]?.totalMid);
      } else if (requiredGradel === 'Senior') {
        setOfficeSalaryMax(data?.[0]?.officeSalarySen);
        const dalyrate = data[0].dailyRateSen;
        const dailyRateMonth = dalyrate / 30;
        setDailyRateMax(dailyRateMonth);
        setTotalMax(data?.[0]?.totalSen);
      }


    } catch (error) {
      console.error('Erreur lors de la récupération des données Salary:', error);
    }
  };
  useEffect(() => {
    fetchMaxValues()
    GetProfileEmployess()
    findIdInterviewStaff()
    fetchRole()
  }, [interviewCode, idStaff, salarybod1]);
  //////////////////////
  const handleDecisionChange = (value) => {
    setSelectedbodDescition(value);

  };
  const handleDecision2Change = (value) => {
    setSelectedbodDescition2(value);

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
              <Typography.Title level={4}>MANAGEMENT STAFF INTERVIEW SHEET</Typography.Title>

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

                        placeholder={"MSIS-" + interviewCode}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Interview Date' name='Interview Date'>
                      <Input
                        className='Input'
                        placeholder={newinterviwDate}
                        value={newinterviwDate}
                        onChange={() => setNewinterviwDate()}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='JOB CODE:' name='JOB CODE'>
                      <Input
                        className='Input'
                        placeholder={jobCode}
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
                    <Form.Item label='Experience' name='experience'




                    >
                      <Input
                        className='Input'
                        placeholder={experience}
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
                    label='Go to test 2 :'
                    name='Gototest2' >

                    <Checkbox checked={goTotest2}>

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
                        placeholder='ID Number' />
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
                      <Checkbox checked={evalDesision} >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={!evalDesision} >
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
                      <Checkbox checked={headOfDepAprouv}  >

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
                  <Col xs={24} md={12}>
                    <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'
                    >
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
                  <Col xs={24} md={24}>
                    <Form.Item label='Comments'
                      name='Comments'



                    >
                      <Input
                        className='InputComment'
                        placeholder={hrComentaire} />
                    </Form.Item>
                  </Col>




                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Board of directors Decision</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Final Descision:'
                      name='Final Descision: '


                    >
                      <Input

                        placeholder={finaldesision} />


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
      {/*Project Leader et Manager*/}

      {(roles.includes("Manager") || roles.includes("Leader") || roles.includes("bod")) && (
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
              <Typography.Title level={4}>MANAGEMENT STAFF INTERVIEW SHEET</Typography.Title>

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

                        placeholder={"MSIS-" + interviewCode}
                        classNames="ViewInput"
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label=' Date' name='Date'>
                      <Input
                        className='Input'
                        placeholder={inputInterview}
                        readOnly


                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Interview Date' name='Interview Date'>
                      <Input
                        className='Input'
                        placeholder={interviwDate}

                        readOnly


                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Time Interview' name='Time Interview'>
                      <Input
                        className='Input'
                        placeholder={intervtime}

                        readOnly


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='JOB CODE:' name='JOB CODE'>
                      <Input
                        className='Input'
                        placeholder={jobCode}
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
                    <Form.Item label='Experience' name='experience'




                    >
                      <Input
                        className='Input'
                        placeholder={experience}
                        readOnly={true}



                      />
                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          {(roles.includes("Manager") && !roles.includes("Leader")) && !roles.includes("Human Ressource") &&
            idStaff?.validatesFor === null
            && (
              <>
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
                        <Form.Item label='Validation' name='Validation'>
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
                          name='Gototest2' >
                          <Checkbox checked={isOkChecked} onChange={Ok}>

                            <IntlMessages id='validation.test' />
                          </Checkbox>
                          <Checkbox checked={isNoChecked} onClick={No}>
                            <IntlMessages id='Refuse.test' />
                          </Checkbox>
                        </Form.Item>

                      </Col>

                    </StyledShadowWrapper>
                  </Col>
                </AppRowContainer>

                {/*Psychotechnical Test */}
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
                                name='Motivation/Ambition'
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
                                name='Gototest3' >
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
                                name='English Skills '

                                rules={[
                                  { required: true, message: 'Please Select your Select English Skills!' },

                                ]}

                              >
                                <Select
                                  placeholder='English Skills '
                                  value={selectedSkillls}
                                  onChange={handleSkilllsSelect}

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

                                ]}>

                                <DatePicker
                                  style={{ width: '100%', height: "33px" }}
                                  autoFocus
                                  defaultValue={dayjs(evaluationDate, '16 06,1990')}

                                  onChange={(value) => setEvaluationDate(dayjs(value).format('YYYY-MM-DD'))}

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
                                  placeholder={name}
                                  readOnly />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                              <Form.Item label='ID Number' name='idgets'


                              >
                                <Input

                                  placeholder={getsId} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>

                              <Form.Item
                                label='The present profile meets the requirements of 
                              the requested position :'
                                name='Present profile' >
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
                                name=' EvaluatorDecision' >
                                <Checkbox checked={isOkCheckedEvaluator} onChange={OkEvaluator}>

                                  <IntlMessages id='validation.test' />
                                </Checkbox>
                                <Checkbox checked={isNoCheckedEvaluator} onClick={NoEvaluator}>
                                  <IntlMessages id='Refuse.test' />
                                </Checkbox>
                              </Form.Item>

                            </Col>
                            <Col xs={24} md={24}>
                              <Form.Item label='Comments' name='Comments'

                                rules={[
                                  { required: true, message: 'Please input your Comments!' },

                                ]}>
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
            )}
          {/*Sauf Manager */}
          {/*Project Leader*/}

          {(!roles.includes("Manager") && roles.includes("Leader")) && !roles.includes("Human Ressource") && (
            <>
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
                      <Form.Item label='Validation' name='Validation'>
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
                        name='Gototest2' >
                        <Checkbox checked={isOkChecked} onChange={Ok}>

                          <IntlMessages id='validation.test' />
                        </Checkbox>
                        <Checkbox checked={isNoChecked} onClick={No}>
                          <IntlMessages id='Refuse.test' />
                        </Checkbox>
                      </Form.Item>

                    </Col>

                  </StyledShadowWrapper>
                </Col>
              </AppRowContainer>

              {/*Psychotechnical Test */}
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
                              name='Motivation/Ambition'
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
                              name='Gototest3' >
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
                              name='English Skills '

                              rules={[
                                { required: true, message: 'Please Select your Select English Skills!' },

                              ]}

                            >
                              <Select
                                placeholder='English Skills '
                                value={selectedSkillls}
                                onChange={handleSkilllsSelect}

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

                              ]}>

                              <DatePicker
                                style={{ width: '100%', height: "33px" }}
                                autoFocus
                                defaultValue={dayjs(evaluationDate, '16 06,1990')}

                                onChange={(value) => setEvaluationDate(dayjs(value).format('YYYY-MM-DD'))}

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
                                placeholder={name}
                                readOnly />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item label='ID Number' name='idgets'


                            >
                              <Input

                                placeholder={getsId} />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>

                            <Form.Item
                              label='The present profile meets the requirements of 
                              the requested position :'
                              name='Present profile' >
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
                              name=' EvaluatorDecision' >
                              <Checkbox checked={isOkCheckedEvaluator} onChange={OkEvaluator}>

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={isNoCheckedEvaluator} onClick={NoEvaluator}>
                                <IntlMessages id='Refuse.test' />
                              </Checkbox>
                            </Form.Item>

                          </Col>
                          <Col xs={24} md={24}>
                            <Form.Item label='Comments' name='Comments'

                              rules={[
                                { required: true, message: 'Please input your Comments!' },

                              ]}>
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
          )}

          {/*End Project Leader*/}
          {/*Operation if validatesFor not null*/}
          {(roles.includes("Manager") && !roles.includes("Leader")) && !roles.includes("Human Ressource") &&
            !idStaff?.validatesFor === null
            && (
              <>
                {/* <p>nger </p> */}
                <Divider style={{ marginTop: 16, marginBottom: 16 }} />

                <>
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
                          <Form.Item label='Validation' name='Validation'>
                            <Input
                              className='Input'
                              placeholder={idStaff.validatesFor}
                              readOnly={true}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>

                          <Form.Item
                            style={{ marginTop: "10px" }}
                            label='Go to test 2 :'
                            name='Gototest2' >
                            <Checkbox checked={idStaff.goTotest2}
                              readOnly

                            >

                              <IntlMessages id='validation.test' />
                            </Checkbox>
                            <Checkbox checked={!idStaff.goTotest2}
                              readOnly
                            >
                              <IntlMessages id='Refuse.test' />
                            </Checkbox>
                          </Form.Item>

                        </Col>

                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>

                  {/*Psychotechnical Test */}
                  {idStaff.goTotest2 && (
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

                                >
                                  <Input
                                    className='Input'
                                    placeholder={idStaff.psy_Person}
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
                                    placeholder={idStaff.psy_HumQuality}
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
                                    placeholder={idStaff.psy_motivation}
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
                                    placeholder={idStaff.psy_Intellig}
                                    readOnly={true}
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>

                                <Form.Item
                                  label='Go to test 3 :'
                                  name='Gototest3' >
                                  <Checkbox checked={idStaff.goToTest3}
                                    readOnly
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff.goToTest3}
                                    readOnly>
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
                  {idStaff.goToTest3 && (
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
                                    placeholder={idStaff.techEnglishSkills}
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
                                    placeholder={idStaff.techDate}
                                    readOnly={true}
                                  />


                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>
                                <Form.Item label='Evaluator' name='Evaluator' >
                                  <Input
                                    placeholder={idStaff.evalName}
                                    readOnly />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>
                                <Form.Item label='ID Number' name='idgets'>
                                  <Input

                                    placeholder={idStaff.evalId}
                                    readOnly />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>

                                <Form.Item
                                  label='The present profile meets the requirements of 
           the requested position :'
                                  name='Present profile' >
                                  <Checkbox

                                    checked={idStaff?.meetDesision}
                                    readOnly
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff?.meetDesision}
                                    readOnly
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
                  {idStaff?.meetDesision && (
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
                                  <Checkbox
                                    checked={idStaff?.evalDesision}
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff?.evalDesision}>
                                    <IntlMessages id='Refuse.test' />
                                  </Checkbox>
                                </Form.Item>

                              </Col>
                              <Col xs={24} md={24}>
                                <Form.Item label='Comments' name='Comments'>
                                  <Input
                                    className='InputComment'
                                    placeholder={idStaff?.techcommentaire}

                                  />
                                </Form.Item>
                              </Col>

                            </AppRowContainer>
                          </StyledShadowWrapper>
                        </Col>

                      </AppRowContainer>
                    </>
                  )}
                  {idStaff?.evalDesision && (
                    <>

                      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                        <Col xs={24} md={6}>
                          <Typography.Title level={5}> Head of Department Approval</Typography.Title>

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
                      {/*HR Manager Evaluation*/}
                      {(roles.includes("Human Ressource") || !roles.includes("bod")) && (
                        <>
                          {idStaff?.headOfDepAprouv && (
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
                                            defaultValue={dayjs(expectedJoinDatehr, '16 06,1990')}
                                            style={{ width: "100%", height: "30px" }}
                                            onChange={(value) => setExpectedJoinDatehr(dayjs(value).format('YYYY-MM-DD'))}
                                          />

                                        </Form.Item>
                                      </Col>


                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Office Salary' name='Proposed Salary'
                                          rules={[
                                            { required: true, message: 'Please input your Proposed Salary!' },
                                            { pattern: /^[0-9]+$/, message: 'Proposed Salary must be a number!' },

                                          ]}

                                        >
                                          <Input

                                            value={proposedSalary}
                                            onChange={handleSalaryChange}
                                            // onChange={(e) => setProposedSalary(e.target.value)}
                                            placeholder={`Proposed Office Salary does not exceed ${officeSalaryMax}`}

                                          />
                                          {salaryError && <Alert className="custom-alert" message={salaryError} type="error" showIcon />}

                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
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
                                            placeholder={`Proposed Daily Rate does not exceed ${dailyRateMax}`}
                                          />
                                          {dailyError && <Alert className="custom-alert" message={dailyError} type="error" showIcon />}
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={24}>

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

                                      </Col>
                                      <Col xs={24} md={24}>
                                        <Form.Item label='Comments' name='Comments2d'
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
                      )}
                      {/*BOD Interview*/}
                      {(roles.includes("bod") && (
                        <>
                          {!idStaff?.headOfDepAprouv && (
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
                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.hr_Person}
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
                                            placeholder={idStaff.hr_HumQuality}
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
                                            placeholder={idStaff.hr_motivation}
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
                                            placeholder={idStaff.hr_Intellig}
                                            readOnly={true}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item
                                          label='Level'
                                          name='Level'


                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.level}
                                            readOnly={true}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item label='Expected Join Date' name='Expected Join Date'


                                        >

                                          <Input
                                            className='Input'
                                            placeholder={idStaff.expectedJoinDate}
                                            readOnly={true}
                                          />

                                        </Form.Item>
                                      </Col>


                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Office Salary' name='Proposed Salary'

                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.propsedsalary}
                                            readOnly={true}


                                          />


                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'

                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.dailyRate}
                                            readOnly={true}
                                          />

                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={24}>

                                        <Form.Item
                                          label='HR Decision:'
                                          name='HR Evaluation' >
                                          <Checkbox checked={idStaff.hrDesion}
                                            readOnly={true}

                                          >

                                            <IntlMessages id='validation.test' />
                                          </Checkbox>
                                          <Checkbox checked={!idStaff.hrDesion}
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
                                            readOnly
                                            placeholder={idStaff.hrComentaire}
                                          />
                                        </Form.Item>
                                      </Col>




                                    </AppRowContainer>
                                  </StyledShadowWrapper>
                                </Col>
                              </AppRowContainer>
                              {/*BOD Checked */}
                              {idStaff.hrDesion && (
                                <>
                                  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                                  <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                                    <Col xs={24} md={6}>
                                      <Typography.Title level={5}>Board of directors Decision</Typography.Title>

                                    </Col>
                                    {storedrole === "bod1" &&
                                      <>
                                        <Col xs={24} md={18}>
                                          <StyledShadowWrapper>
                                            <AppRowContainer>


                                              <Col xs={24} md={12}>

                                                <Form.Item
                                                  label='Final Descision1:'
                                                  name='Final Descision: '

                                                  rules={[
                                                    { required: true, message: 'Please Select your Final Descision!' },

                                                  ]}

                                                >
                                                  <Select
                                                    placeholder='Final Descision'
                                                    onChange={handleDecisionChange}
                                                    value={selectedbodDescition}

                                                  >
                                                    {descisionBod.map((p, index) => (
                                                      <Select.Option key={index} value={p.des}>
                                                        {p.des}
                                                      </Select.Option>
                                                    ))}
                                                  </Select>

                                                </Form.Item>

                                              </Col>
                                              {selectedbodDescition === 'Accepted' && (
                                                <>

                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Salary'
                                                      name='salary'
                                                      value={salary1}
                                                      onChange={handleSalary1Change}

                                                    >
                                                      <Input
                                                        placeholder='Salary'
                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Daily'
                                                      name='daily'
                                                      value={daily1}
                                                      onChange={handleDaily1Change}

                                                    >
                                                      <Input placeholder='Daily' />
                                                    </Form.Item>
                                                  </Col>
                                                </>
                                              )}

                                              {(selectedbodDescition === 'Not Accepted' || selectedbodDescition === 'On Hold') && (

                                                <Col xs={24} md={24}>
                                                  <Form.Item
                                                    label='Comment'
                                                    name='comment'>
                                                    <Input
                                                      className='InputComment'
                                                      placeholder='Comment'
                                                      value={comment1}
                                                      onChange={handleComment1Change}

                                                    />
                                                  </Form.Item>
                                                </Col>

                                              )}

                                              {idStaff?.directSign2?.trim().length === 0 ? (

                                                <p></p>
                                              ) : (
                                                <>
                                                  {idStaff?.directSign2?.includes('Accepted') && (
                                                    <>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Final Descision'
                                                          name='Final Descision'>
                                                          <Input
                                                            placeholder={idStaff?.directSign2}
                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Salary'
                                                          name='salary'>
                                                          <Input
                                                            placeholder={idStaff?.propsedsalaryBod2}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Daily'
                                                          name='daily'>
                                                          <Input
                                                            placeholder={idStaff?.dailyRateBod2}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                    </>
                                                  )}
                                                  {idStaff?.directSign2?.includes('Not Accepted') || idStaff?.directSign2?.includes('On Hold') && (

                                                    <Col xs={24} md={24}>
                                                      <Form.Item
                                                        label='Comment'
                                                        name='comment'>
                                                        <Input
                                                          placeholder={idStaff?.commentareBod2}
                                                          className='InputComment'

                                                        />
                                                      </Form.Item>
                                                    </Col>

                                                  )}



                                                </>

                                              )}





                                            </AppRowContainer>
                                          </StyledShadowWrapper>
                                        </Col>




                                      </>


                                    }
                                    {/*boD2*/}
                                    {storedrole === "bod2" &&
                                      <>
                                        <Col xs={24} md={18}>
                                          <StyledShadowWrapper>
                                            <AppRowContainer>
                                              <Col xs={24} md={12}>
                                                <Form.Item
                                                  label='Final Descision2:'
                                                  name='Final Descision: '

                                                  rules={[
                                                    { required: true, message: 'Please Select your Final Descision!' },

                                                  ]}

                                                >
                                                  <Select
                                                    placeholder='Final Descision'
                                                    onChange={handleDecision2Change}
                                                    value={selectedbodDescition2}

                                                  >
                                                    {descisionBod.map((p, index) => (
                                                      <Select.Option key={index} value={p.des}>
                                                        {p.des}
                                                      </Select.Option>
                                                    ))}
                                                  </Select>

                                                </Form.Item>

                                              </Col>
                                              {selectedbodDescition2 === 'Accepted' && (
                                                <>

                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Salary'
                                                      name='salary' >
                                                      <Input
                                                        placeholder='Salary'
                                                        value={salary2}
                                                        onChange={handleSalary2Change}



                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Daily'
                                                      name='daily'
                                                      value={daily2}
                                                      onChange={handleDaily2Change}


                                                    >
                                                      <Input placeholder='Daily' />
                                                    </Form.Item>
                                                  </Col>
                                                </>
                                              )}

                                              {(selectedbodDescition === 'Not Accepted' || selectedbodDescition === 'On Hold') && (

                                                <Col xs={24} md={24}>
                                                  <Form.Item
                                                    label='Comment'
                                                    name='comment'>
                                                    <Input
                                                      className='InputComment'
                                                      value={commentareBod2}
                                                      onChange={handleComment2Change}
                                                      placeholder='Comment' />
                                                  </Form.Item>
                                                </Col>

                                              )}
                                              {idStaff?.directSign1?.trim().length === 0 ? (

                                                <p></p>
                                              ) : (
                                                <>
                                                  {idStaff?.directSign1?.includes('Accepted') && (
                                                    <>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Final Descision2'
                                                          name='Final Descision'>
                                                          <Input
                                                            placeholder={idStaff?.directSign1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Salary'
                                                          name='salary'>
                                                          <Input
                                                            placeholder={idStaff?.propsedsalaryBod1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Daily'
                                                          name='daily'>
                                                          <Input
                                                            placeholder={idStaff?.dailyRateBod1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                    </>
                                                  )}
                                                  {idStaff?.directSign1?.includes('Not Accepted') || idStaff?.directSign1?.includes('On Hold') && (

                                                    <Col xs={24} md={24}>
                                                      <Form.Item
                                                        label='Comment'
                                                        name='comment'>
                                                        <Input
                                                          placeholder={idStaff?.commentareBod1}
                                                          className='InputComment'

                                                        />
                                                      </Form.Item>
                                                    </Col>

                                                  )}



                                                </>

                                              )}

                                            </AppRowContainer>
                                          </StyledShadowWrapper>

                                        </Col>

                                      </>


                                    }



                                  </AppRowContainer>
                                </>
                              )}
                              {/*End Bod Checked*/}


                            </>
                          )}
                        </>
                      ))}

                    </>

                  )}



                </>

                {/*Psychotechnical Test */}
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
                                name='Motivation/Ambition'
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
                                name='Gototest3' >
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
                                name='English Skills '

                                rules={[
                                  { required: true, message: 'Please Select your Select English Skills!' },

                                ]}

                              >
                                <Select
                                  placeholder='English Skills '
                                  value={selectedSkillls}
                                  onChange={handleSkilllsSelect}

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

                                ]}>

                                <DatePicker
                                  style={{ width: '100%', height: "33px" }}
                                  autoFocus
                                  defaultValue={dayjs(evaluationDate, '16 06,1990')}

                                  onChange={(value) => setEvaluationDate(dayjs(value).format('YYYY-MM-DD'))}

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
                                  placeholder={name}
                                  readOnly />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                              <Form.Item label='ID Number' name='idgets'


                              >
                                <Input

                                  placeholder={getsId} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>

                              <Form.Item
                                label='The present profile meets the requirements of 
                              the requested position :'
                                name='Present profile' >
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
                                name=' EvaluatorDecision' >
                                <Checkbox checked={isOkCheckedEvaluator} onChange={OkEvaluator}>

                                  <IntlMessages id='validation.test' />
                                </Checkbox>
                                <Checkbox checked={isNoCheckedEvaluator} onClick={NoEvaluator}>
                                  <IntlMessages id='Refuse.test' />
                                </Checkbox>
                              </Form.Item>

                            </Col>
                            <Col xs={24} md={24}>
                              <Form.Item label='Comments' name='Comments'

                                rules={[
                                  { required: true, message: 'Please input your Comments!' },

                                ]}>
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
            )}


          {/*End Operation if validatesFor not null*/}
          {(roles.includes("Manager") && !roles.includes("Leader")) && !roles.includes("Human Ressource")
            && (
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



            )}

          {/*Roles Human Ressource Manager */}

          {(roles.includes("Human Ressource") || roles.includes("bod")) && (
            <>
              <>

                <Divider style={{ marginTop: 16, marginBottom: 16 }} />

                <>
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
                          <Form.Item label='Validation' name='Validation'>
                            <Input
                              className='Input'
                              placeholder={idStaff.validatesFor}
                              readOnly={true}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>

                          <Form.Item
                            style={{ marginTop: "10px" }}
                            label='Go to test 2 :'
                            name='Gototest2' >
                            <Checkbox checked={idStaff.goTotest2}
                              readOnly

                            >

                              <IntlMessages id='validation.test' />
                            </Checkbox>
                            <Checkbox checked={!idStaff.goTotest2}
                              readOnly
                            >
                              <IntlMessages id='Refuse.test' />
                            </Checkbox>
                          </Form.Item>

                        </Col>

                      </StyledShadowWrapper>
                    </Col>
                  </AppRowContainer>

                  {/*Psychotechnical Test */}
                  {idStaff.goTotest2 && (
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

                                >
                                  <Input
                                    className='Input'
                                    placeholder={idStaff.psy_Person}
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
                                    placeholder={idStaff.psy_HumQuality}
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
                                    placeholder={idStaff.psy_motivation}
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
                                    placeholder={idStaff.psy_Intellig}
                                    readOnly={true}
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>

                                <Form.Item
                                  label='Go to test 3 :'
                                  name='Gototest3' >
                                  <Checkbox checked={idStaff.goToTest3}
                                    readOnly
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff.goToTest3}
                                    readOnly>
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
                  {idStaff.goToTest3 && (
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
                                    placeholder={idStaff.techEnglishSkills}
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
                                    placeholder={idStaff.techDate}
                                    readOnly={true}
                                  />


                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>
                                <Form.Item label='Evaluator' name='Evaluator' >
                                  <Input
                                    placeholder={idStaff.evalName}
                                    readOnly />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>
                                <Form.Item label='ID Number' name='idgets'>
                                  <Input
                                    placeholder={idStaff.evalId}
                                    readOnly />
                                </Form.Item>
                              </Col>
                              <Col xs={24} md={12}>

                                <Form.Item
                                  label='The present profile meets the requirements of 
                           the requested position :'
                                  name='Present profile' >
                                  <Checkbox

                                    checked={idStaff?.meetDesision}
                                    readOnly
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff?.meetDesision}
                                    readOnly
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
                  {idStaff?.meetDesision && (
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
                                  <Checkbox
                                    checked={idStaff?.evalDesision}
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff?.evalDesision}>
                                    <IntlMessages id='Refuse.test' />
                                  </Checkbox>
                                </Form.Item>

                              </Col>
                              <Col xs={24} md={24}>
                                <Form.Item label='Comments' name='Comments'>
                                  <Input
                                    className='InputComment'
                                    placeholder={idStaff?.techcommentaire}

                                  />
                                </Form.Item>
                              </Col>

                            </AppRowContainer>
                          </StyledShadowWrapper>
                        </Col>

                      </AppRowContainer>
                    </>
                  )}
                  {idStaff?.evalDesision && (
                    <>

                      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                        <Col xs={24} md={6}>
                          <Typography.Title level={5}> Head of Department Approval</Typography.Title>

                        </Col>
                        <Col xs={24} md={18}>
                          <StyledShadowWrapper>
                            <AppRowContainer>

                              <Col xs={24} md={24}>

                                <Form.Item
                                  label='Head of Department Approval:'
                                  name='Head of Department Approval' >
                                  <Checkbox
                                    checked={idStaff?.headOfDepAprouv}
                                    readOnly
                                  >

                                    <IntlMessages id='validation.test' />
                                  </Checkbox>
                                  <Checkbox checked={!idStaff?.headOfDepAprouv}
                                    readOnly
                                  >
                                    <IntlMessages id='Refuse.test' />
                                  </Checkbox>
                                </Form.Item>

                              </Col>


                            </AppRowContainer>
                          </StyledShadowWrapper>
                        </Col>

                      </AppRowContainer>
                      {/*HR Manager Evaluation*/}
                      {(roles.includes("Human Ressource") || !roles.includes("bod")) && (
                        <>
                          {idStaff?.headOfDepAprouv && (
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
                                            defaultValue={dayjs(expectedJoinDatehr, '16 06,1990')}
                                            style={{ width: "100%", height: "30px" }}
                                            onChange={(value) => setExpectedJoinDatehr(dayjs(value).format('YYYY-MM-DD'))}
                                          />

                                        </Form.Item>
                                      </Col>


                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Office Salary' name='Proposed Salary'
                                          rules={[
                                            { required: true, message: 'Please input your Proposed Salary!' },
                                            { pattern: /^[0-9]+$/, message: 'Proposed Salary must be a number!' },

                                          ]}

                                        >
                                          <Input

                                            value={proposedSalary}
                                            onChange={handleSalaryChange}
                                            // onChange={(e) => setProposedSalary(e.target.value)}
                                            placeholder={`Proposed Office Salary does not exceed ${officeSalaryMax}`}

                                          />
                                          {salaryError && <Alert className="custom-alert" message={salaryError} type="error" showIcon />}

                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
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
                                            placeholder={`Proposed Daily Rate does not exceed ${dailyRateMax}`}
                                          />
                                          {dailyError && <Alert className="custom-alert" message={dailyError} type="error" showIcon />}
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={24}>

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

                                      </Col>
                                      <Col xs={24} md={24}>
                                        <Form.Item label='Comments' name='Comments2d'
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
                      )}
                      {/*BOD Interview*/}
                      {(roles.includes("bod") && (
                        <>
                          {!idStaff?.headOfDepAprouv && (
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
                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.hr_Person}
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
                                            placeholder={idStaff.hr_HumQuality}
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
                                            placeholder={idStaff.hr_motivation}
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
                                            placeholder={idStaff.hr_Intellig}
                                            readOnly={true}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item
                                          label='Level'
                                          name='Level'


                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.level}
                                            readOnly={true}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item label='Expected Join Date' name='Expected Join Date'


                                        >

                                          <Input
                                            className='Input'
                                            placeholder={idStaff.expectedJoinDate}
                                            readOnly={true}
                                          />

                                        </Form.Item>
                                      </Col>


                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Office Salary' name='Proposed Salary'

                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.propsedsalary}
                                            readOnly={true}


                                          />


                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={12}>
                                        <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'

                                        >
                                          <Input
                                            className='Input'
                                            placeholder={idStaff.dailyRate}
                                            readOnly={true}
                                          />

                                        </Form.Item>
                                      </Col>
                                      <Col xs={24} md={24}>

                                        <Form.Item
                                          label='HR Decision:'
                                          name='HR Evaluation' >
                                          <Checkbox checked={idStaff.hrDesion}
                                            readOnly={true}

                                          >

                                            <IntlMessages id='validation.test' />
                                          </Checkbox>
                                          <Checkbox checked={!idStaff.hrDesion}
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
                                            readOnly
                                            placeholder={idStaff.hrComentaire}
                                          />
                                        </Form.Item>
                                      </Col>




                                    </AppRowContainer>
                                  </StyledShadowWrapper>
                                </Col>
                              </AppRowContainer>
                              {/*BOD Checked */}
                              {idStaff.hrDesion && (
                                <>
                                  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                                  <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                                    <Col xs={24} md={6}>
                                      <Typography.Title level={5}>Board of directors Decision</Typography.Title>

                                    </Col>
                                    {storedrole === "bod1" &&
                                      <>
                                        <Col xs={24} md={18}>
                                          <StyledShadowWrapper>
                                            <AppRowContainer>


                                              <Col xs={24} md={12}>

                                                <Form.Item
                                                  label='Final Descision1:'
                                                  name='Final Descision: '

                                                  rules={[
                                                    { required: true, message: 'Please Select your Final Descision!' },

                                                  ]}

                                                >
                                                  <Select
                                                    placeholder='Final Descision'
                                                    onChange={handleDecisionChange}
                                                    value={selectedbodDescition}

                                                  >
                                                    {descisionBod.map((p, index) => (
                                                      <Select.Option key={index} value={p.des}>
                                                        {p.des}
                                                      </Select.Option>
                                                    ))}
                                                  </Select>

                                                </Form.Item>

                                              </Col>
                                              {selectedbodDescition === 'Accepted' && (
                                                <>

                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Salary'
                                                      name='salary'
                                                      value={salary1}
                                                      onChange={handleSalary1Change}

                                                    >
                                                      <Input
                                                        placeholder='Salary'
                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Daily'
                                                      name='daily'
                                                      value={daily1}
                                                      onChange={handleDaily1Change}

                                                    >
                                                      <Input placeholder='Daily' />
                                                    </Form.Item>
                                                  </Col>
                                                </>
                                              )}

                                              {(selectedbodDescition === 'Not Accepted' || selectedbodDescition === 'On Hold') && (

                                                <Col xs={24} md={24}>
                                                  <Form.Item
                                                    label='Comment'
                                                    name='comment'>
                                                    <Input
                                                      className='InputComment'
                                                      placeholder='Comment'
                                                      value={comment1}
                                                      onChange={handleComment1Change}

                                                    />
                                                  </Form.Item>
                                                </Col>

                                              )}

                                              {idStaff?.directSign2?.trim().length === 0 ? (

                                                <p></p>
                                              ) : (
                                                <>
                                                  {idStaff?.directSign2?.includes('Accepted') && (
                                                    <>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Final Descision'
                                                          name='Final Descision'>
                                                          <Input
                                                            placeholder={idStaff?.directSign2}
                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Salary'
                                                          name='salary'>
                                                          <Input
                                                            placeholder={idStaff?.propsedsalaryBod2}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Daily'
                                                          name='daily'>
                                                          <Input
                                                            placeholder={idStaff?.dailyRateBod2}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                    </>
                                                  )}
                                                  {idStaff?.directSign2?.includes('Not Accepted') || idStaff?.directSign2?.includes('On Hold') && (

                                                    <Col xs={24} md={24}>
                                                      <Form.Item
                                                        label='Comment'
                                                        name='comment'>
                                                        <Input
                                                          placeholder={idStaff?.commentareBod2}
                                                          className='InputComment'

                                                        />
                                                      </Form.Item>
                                                    </Col>

                                                  )}



                                                </>

                                              )}





                                            </AppRowContainer>
                                          </StyledShadowWrapper>
                                        </Col>




                                      </>


                                    }
                                    {/*boD2*/}
                                    {storedrole === "bod2" &&
                                      <>
                                        <Col xs={24} md={18}>
                                          <StyledShadowWrapper>
                                            <AppRowContainer>
                                              <Col xs={24} md={12}>
                                                <Form.Item
                                                  label='Final Descision2:'
                                                  name='Final Descision: '

                                                  rules={[
                                                    { required: true, message: 'Please Select your Final Descision!' },

                                                  ]}

                                                >
                                                  <Select
                                                    placeholder='Final Descision'
                                                    onChange={handleDecision2Change}
                                                    value={selectedbodDescition2}

                                                  >
                                                    {descisionBod.map((p, index) => (
                                                      <Select.Option key={index} value={p.des}>
                                                        {p.des}
                                                      </Select.Option>
                                                    ))}
                                                  </Select>

                                                </Form.Item>

                                              </Col>
                                              {selectedbodDescition2 === 'Accepted' && (
                                                <>

                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Salary'
                                                      name='salary' >
                                                      <Input
                                                        placeholder='Salary'
                                                        value={salary2}
                                                        onChange={handleSalary2Change}



                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} md={12}>
                                                    <Form.Item
                                                      label='Daily'
                                                      name='daily'
                                                      value={daily2}
                                                      onChange={handleDaily2Change}


                                                    >
                                                      <Input placeholder='Daily' />
                                                    </Form.Item>
                                                  </Col>
                                                </>
                                              )}

                                              {(selectedbodDescition === 'Not Accepted' || selectedbodDescition === 'On Hold') && (

                                                <Col xs={24} md={24}>
                                                  <Form.Item
                                                    label='Comment'
                                                    name='comment'>
                                                    <Input
                                                      className='InputComment'
                                                      value={commentareBod2}
                                                      onChange={handleComment2Change}
                                                      placeholder='Comment' />
                                                  </Form.Item>
                                                </Col>

                                              )}
                                              {idStaff?.directSign1?.trim().length === 0 ? (

                                                <p></p>
                                              ) : (
                                                <>
                                                  {idStaff?.directSign1?.includes('Accepted') && (
                                                    <>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Final Descision2'
                                                          name='Final Descision'>
                                                          <Input
                                                            placeholder={idStaff?.directSign1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Salary'
                                                          name='salary'>
                                                          <Input
                                                            placeholder={idStaff?.propsedsalaryBod1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                      <Col xs={24} md={12}>
                                                        <Form.Item
                                                          label='Daily'
                                                          name='daily'>
                                                          <Input
                                                            placeholder={idStaff?.dailyRateBod1}

                                                          />
                                                        </Form.Item>
                                                      </Col>
                                                    </>
                                                  )}
                                                  {idStaff?.directSign1?.includes('Not Accepted') || idStaff?.directSign1?.includes('On Hold') && (

                                                    <Col xs={24} md={24}>
                                                      <Form.Item
                                                        label='Comment'
                                                        name='comment'>
                                                        <Input
                                                          placeholder={idStaff?.commentareBod1}
                                                          className='InputComment'

                                                        />
                                                      </Form.Item>
                                                    </Col>

                                                  )}



                                                </>

                                              )}

                                            </AppRowContainer>
                                          </StyledShadowWrapper>

                                        </Col>

                                      </>


                                    }



                                  </AppRowContainer>
                                </>
                              )}
                              {/*End Bod Checked*/}


                            </>
                          )}
                        </>
                      ))}

                    </>

                  )}



                </>

              </>
            </>
          )}
          {/*Bod*/}
          {(roles.includes("bod")) && (
            <>

              {idStaff?.headOfDepAprouv && (
                <>
                  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                  <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                    <Col xs={24} md={6}>
                      <Typography.Title level={5}> HR Evaluation && Decision</Typography.Title>

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
                                placeholder={idStaff.hr_Person}
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
                                placeholder={idStaff.hr_HumQuality}
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
                                placeholder={idStaff.hr_motivation}
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
                                placeholder={idStaff.hr_Intellig}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Level'
                              name='Level'

                            >
                              <Input
                                className='Input'
                                placeholder={idStaff.level}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Expected Join Date'
                              name='Expected Join Date'

                            >
                              <Input
                                className='Input'
                                placeholder={idStaff.expectedJoinDate}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Proposed Office Salary'
                              name='Proposed Office Salary'

                            >
                              <Input
                                className='Input'
                                placeholder={idStaff.propsedsalary}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              label='Proposed Site Daily Rate'
                              name='Proposed Site Daily Rate'

                            >
                              <Input
                                className='Input'
                                placeholder={idStaff.dailyRate}
                                readOnly={true}
                              />

                            </Form.Item>
                          </Col>


                          <Col xs={24} md={24}>
                            <Form.Item
                              label='HR Decision:'
                              name='HR Decision' >
                              <Checkbox
                                checked={idStaff?.hrDesion}
                                readOnly
                              >

                                <IntlMessages id='validation.test' />
                              </Checkbox>
                              <Checkbox checked={!idStaff?.hrDesion}
                                readOnly
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
              {idStaff?.hrDesion && (
                <>
                  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
                  <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                    <Col xs={24} md={6}>
                      <Typography.Title level={5}>Board of directors Decision</Typography.Title>

                    </Col>
                    {/*Final Desicision Nidhal*/}
                    {/**BOD Ali */}

                    {(name?.toLowerCase().includes("ali")) && (
                      <Col xs={24} md={18}>
                        <StyledShadowWrapper>
                          <AppRowContainer>

                            {idStaff?.directSign1?.length === 0 ?
                              <p></p> :
                              <>
                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Final Descision:'
                                    name='Final DescisionNidhal: '>
                                    <Input
                                      placeholder={idStaff.directSign1}
                                      readOnly>

                                    </Input>

                                  </Form.Item>
                                </Col>
                                {idStaff.directSign1 === "Accepted" &&
                                  <>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Salary'
                                        name='proposedSalary1'
                                      >
                                        <Input

                                          placeholder={idStaff.propsedsalaryBod2}
                                          readOnly
                                        >

                                        </Input>

                                      </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Daily'
                                        name='proposedDaily1'>

                                        <Input
                                          placeholder={idStaff.dailyRateBod2}
                                          readOnly>
                                        </Input>

                                      </Form.Item>
                                    </Col>
                                  </>




                                }
                                {idStaff.directSign1 === "Not Accepted" || idStaff.directSign1 === "On Hold" &&
                                  <>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Comment'
                                        name='Comment1'
                                      >
                                        <Input
                                          placeholder={idStaff.commentareBod1}
                                          readOnly>

                                        </Input>

                                      </Form.Item>
                                    </Col>

                                  </>




                                }
                              </>}


                            <Col xs={24} md={12}>
                              <Form.Item
                                label='Final Descision:'
                                name='Final Descision: '

                                rules={[
                                  { required: true, message: 'Please Select your Final Descision!' },

                                ]}

                              >
                                <Select
                                  placeholder='Final Descision'
                                  onChange={handleDecision2Change}
                                  value={selectedbodDescition2}

                                >
                                  {descisionBod.map((p, index) => (
                                    <Select key={index} value={p.des}>
                                      {p.des}
                                    </Select>
                                  ))}
                                </Select>

                              </Form.Item>

                            </Col>
                            {selectedbodDescition2 === 'Accepted' && (
                              <>

                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Salary'
                                    name='salary'

                                  >
                                    <Input

                                      placeholder='Salary'
                                      value={proposedSalary1}
                                      onChange={(e) => setProposedSalary1(e.target.value)}

                                    />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Daily'
                                    name='daily'

                                  >
                                    <Input
                                      placeholder='Daily'
                                      value={proposedDaily1}
                                      onChange={(e) => setProposedDaily1(e.target.value)}

                                    />
                                  </Form.Item>
                                </Col>
                              </>
                            )}
                            {(selectedbodDescition2 === 'Not Accepted' || selectedbodDescition2 === 'On Hold') && (

                              <Col xs={24} md={12}>
                                <Form.Item
                                  label='Comment'
                                  name='comment'>
                                  <Input

                                    placeholder='Comment'
                                    value={commentareBod1}
                                    onChange={(e) => setCommentareBod1(e.target.value)}

                                  />
                                </Form.Item>
                              </Col>

                            )}






                          </AppRowContainer>
                        </StyledShadowWrapper>
                      </Col>
                    )}
                    {/**BOD NIDHAL */}

                    {(name?.toLowerCase().includes("nidhal")) && (
                      <Col xs={24} md={18}>
                        <StyledShadowWrapper>
                          <AppRowContainer>
                            {/*Desicion de bod Ali */}
                            {idStaff.directSign2 === "" ?
                              <p></p> :
                              <>
                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Final Descision:'
                                    name='Final DescisionAli'
                                  >
                                    <Input
                                      placeholder={idStaff.directSign2}
                                      readOnly>

                                    </Input>

                                  </Form.Item>
                                </Col>
                                {idStaff.directSign2 === "Accepted" &&
                                  <>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Salary'
                                        name='proposedSalary2'
                                      >
                                        <Input
                                          placeholder={idStaff.proposedSalary2}
                                          readOnly>

                                        </Input>

                                      </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Daily'
                                        name='proposedDaily2'
                                      >
                                        <Input
                                          placeholder={idStaff.proposedDaily2}
                                          readOnly>
                                        </Input>

                                      </Form.Item>
                                    </Col>
                                  </>




                                }
                                {idStaff.directSign2 === "Not Accepted" || idStaff.directSign2 === "On Hold" &&
                                  <>
                                    <Col xs={24} md={12}>
                                      <Form.Item
                                        label='Comment'
                                        name='Comment2'
                                      >
                                        <Input
                                          placeholder={idStaff.commentareBod2}
                                          readOnly>

                                        </Input>

                                      </Form.Item>
                                    </Col>

                                  </>




                                }
                              </>}





                            {/*End Desicion de bod Ali*/}
                            <Col xs={24} md={12}>
                              <Form.Item
                                label='Final Descision:'
                                name='Final Descision: '

                                rules={[
                                  { required: true, message: 'Please Select your Final Descision!' },

                                ]}

                              >

                                <Select
                                  placeholder='Final Descision'
                                  onChange={handleDecisionChange}
                                  value={selectedbodDescition}

                                >
                                  {descisionBod.map((p, index) => (
                                    <Select key={index} value={p.des}>
                                      {p.des}
                                    </Select>
                                  ))}
                                </Select>

                              </Form.Item>

                            </Col>
                            {selectedbodDescition === 'Accepted' && (
                              <>

                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Salary'
                                    name='salary'

                                  >
                                    <Input
                                      placeholder='Salary'
                                      value={proposedSalary2}
                                      onChange={handleproposedSalary2Change}

                                    />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                  <Form.Item
                                    label='Daily'
                                    name='daily'

                                  >
                                    <Input
                                      placeholder='Daily'
                                      value={proposedDaily2}
                                      onChange={handleproposedDaily2Change}


                                    />
                                  </Form.Item>
                                </Col>
                              </>
                            )}

                            {(selectedbodDescition === 'Not Accepted' || selectedbodDescition === 'On Hold') && (

                              <Col xs={24} md={12}>
                                <Form.Item
                                  label='Comment'
                                  name='comment'>
                                  <Input

                                    placeholder='Comment'
                                    value={commentareBod2}
                                    onChange={handleComment2Change}


                                  />
                                </Form.Item>
                              </Col>

                            )}






                          </AppRowContainer>
                        </StyledShadowWrapper>
                      </Col>
                    )}

                  </AppRowContainer>
                </>
              )}
            </>
          )}



          {/**End BOD */}



          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={goBack}
            >Cancel</Button>
            {roles.includes("admin") && (
              <>
                <Button onClick={Update}
                >Save</Button>
              </>)}

            {roles.includes("Manager") && !roles.includes("Human Ressource") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={UpdateManager}
                >Approved</Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefuseManager}
                >Refuse</Button>
              </>)}
            {roles.includes("Leader") && !roles.includes("Human Ressource") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={UpdateLeader}
                >Approved</Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={RefuseLeader}
                >Refuse</Button>
              </>)}
            {roles.includes("Human Ressource Manager") && (
              <>
                <Button
                  style={{ color: "green", borderColor: "green" }}
                  onClick={UpdateHumanRessource}
                >Approved </Button>
                <Button
                  style={{ color: "red", borderColor: "red" }}
                  onClick={RefuseHumanRessource}
                >Refuse </Button>
              </>)}
            {name?.toLowerCase().includes("nidhal") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={Updatebod}
                >Approved</Button>
                <Button onClick={Refusebod} style={{ color: "red", borderColor: "red" }}
                >Refuse</Button>
              </>)}
            {name?.toLowerCase().includes("ali") && (
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={Updatebod1}
                >Approved </Button>
                <Button onClick={Refusedbod1} style={{ color: "red", borderColor: "red" }}
                >Refuse</Button>
              </>)}


          </Space>

        </Form>
      )}

      {/*End Projct Leadeer && Manager*/}






    </div>

  );
};


export default EditInterviewStaff;
