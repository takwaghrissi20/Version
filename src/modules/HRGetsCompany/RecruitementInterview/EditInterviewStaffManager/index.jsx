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
  const experience = location.state ? location.state.experience : null
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
  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}`, {
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

  console.log("goTotest2", goTotest2)

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
  ///Update
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${interviewCode}`, {

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
  const roles = localStorage.getItem("role");
  useEffect(() => {

    GetProfileEmployess()


  }, [interviewCode]);
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

                        placeholder={interviewCode}
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
                    <Form.Item label='Comments' name='Comments'



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

                        placeholder={interviewCode}
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
           {/*Sauf Manager */ }
           {(roles.includes("Manager") && !roles.includes("Leader")) && (
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

      {/*End Projct Leadeer && Manager*/}





    </div>

  );
};


export default EditInterviewStaff;
