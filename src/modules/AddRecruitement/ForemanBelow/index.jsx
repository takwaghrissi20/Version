import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, notification, Checkbox, DatePicker, InputNumber } from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from '../index.styled';

import IntlMessages from '../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import RecruitementRequest from "../../Model/RecruitementRequet"
import ConfirmationModal from '../../../@crema/components/AppConfirmationModal';
import { useNavigate } from 'react-router-dom';
import Notification from '../../../modules/Notification';
const AddRecruitementForemanBelow = () => {
  const navigate = useNavigate();
  const [requestorDate, setRequestorDate] = useState("");
  const [recruitementDate, setRecruitementDate] = useState("");
  const [desiredrecruitementDate, setDesiredrecruitementDate] = useState("");
  const [lastJobCode, setLastJobCode] = useState(0);
  const [profile, setProfile] = useState("")
  const [projets, setProjets] = useState("")
  const [selectedProject, setSelectedProject] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [position, setPosition] = useState('');
  const [positionRecruitement, setPositionRecruitement] = useState('');
  const [desiredExperience, setDesiredExperience] = useState('');
  const [desiredExperienceLevel, setDesiredExperiencELevel] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [vacancie, setVacancie] = useState(0);
  const [asper, setAsper] = useState(0);
  const [certif, setCertif] = useState("");
  const [commentplanner, setCommentPlanner] = useState("");
  const [dep, setDep] = useState('');
  const [isOkHead, setIsOkHead] = useState(false);
  const [isNOHead, setIsNOHead] = useState(false);
  const [isExDep, setIsExDep] = useState(false);
  const [isOrDep, setIsOrDep] = useState(false);
  const [isOkBod, setIsOkBod] = useState(false);
  const [isNoBod, setIsNoBod] = useState(false);
  const [isoriginDep, setIsoriginDep] = useState(false);
  const [isExtraDep, setIsExtraDep] = useState(false);
  const [isSave, onSave] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const user = localStorage.getItem("role");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type, setType] = useState("Foreman & Below")
  const [form] = Form.useForm();
  const [modalError, setModalError] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [dateInput, setDateInput] = useState(new Date());
  const [selectedLieu, setSelectedLieu] = useState('');
  const userRole = localStorage.getItem("role")
  const token = localStorage.getItem("token");
  const handlePlaceSelect = (value) => {
    setSelectedLieu(value);

  };
  const handleValidateEmployeeClose = () => {
    setIsModalVisible(false);
  };

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

      setDep(data.departement)

      setProfile(data)
      setProjets(data.projects)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  //Api de Gets Position Construction

  const GetPositions = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateConst/list`, {
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

      const Position = data.map(p => p.description)
      setPosition(Position)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };


  const requiredlevel = [
    { level: 'Level I ' },
    { level: 'Level II' },
    { level: 'levelIII' },
    { level: 'LEVEL IV' },
    { level: 'Level V' },

  ];
  const lieu = [
    { place: 'Office' },
    { place: 'Site ' },
    { place: 'Office & Site' },
  ];
  const handleLevelSelect = (value) => {
    setSelectedLevel(value);
    setDesiredExperience(calculateDesiredExperience(value));
  };
  const handlePositionRecruitement = (value) => {
    setPositionRecruitement(value)

  };

  const handleAsper = (value) => {
    setAsper(value)
  };
  const calculateDesiredExperience = (level) => {
    switch (level) {
      case 'Level I':
        return '1-5 years';
      case 'Level II':
        return '7-8 years';
      case 'levelIII':
        return 'More than 10 years';
      case 'LEVEL IV':
        return 'More than 10 years';
      case 'Level V':
        return 'More than 10 years';
      default:
        return '';
    }
  };
  //Last Id of Recruitement 
  const LastIndexRecruitement = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/last?token=${token}`, {
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
      setLastJobCode(data.jobCode)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastIndexRecruitementIncremente = lastJobCode + 1
  useEffect(() => {
    LastIndexRecruitement()
    GetProfileEmployess()
    GetPositions()
  }, [dep, type]);
  const handleProjectChange = (value) => {
    setSelectedProject(value);
    const selectedProject = projets.find(project => project.projName === value);

    if (selectedProject) {
      setProjectCode(selectedProject.projRef);
    }
  };
  //Select As Per
  const AsPer = [
    { per: 'Original Deployment Schedule' },
    { per: 'Extra Deployment Schedule' },


  ];
  function OkHead(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkHead(e.target.checked)

  }
  function ExDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsExDep(e.target.checked)

  }
  function OrDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOrDep(e.target.checked)

  }


  function NoHead(e) {
    console.log(`NoHead = ${e.target.checked}`);
    setIsNOHead(e.target.checked)

  }
  function OkBOD(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkBod(e.target.checked)

  }

  function NoBOD(e) {
    console.log(`NoHead = ${e.target.checked}`);
    setIsNoBod(e.target.checked)

  }
  const handleSaveRecruitement = () => {
    onSave(true);
  };
  // const handleCancelRecruitement = () => {


  //   // const fieldsFilled = [


  //   //   vacancie,

  //   // ].some(field => field && field !== "");

  //   // if (fieldsFilled) {
  //   //   onCancel(true)

  //   // } else {
  //   //   onCancel(true);

  //   // }


  // };
  const CancelReruitement = () => {
    navigate(-1)
  }
  const handleCancelRecruitement = () => {
    if (user.includes("admin")) {
      CancelReruitement(true)
    }
    //onCancel(true);
    if ((!profile?.departement?.includes('operation')) && (!profile?.departement?.includes('Engineering'))) {

      Cancel()

    }

    else if (profile?.departement?.includes('Engineering') && userRole?.includes('Engineering')) {
      console.log("Cancel Engineering")



    }
    else if (profile?.departement?.includes('operation') && userRole?.includes('Operation')) {
      CancelOperation()


    }
    else if (profile?.departement?.includes('operation') && userRole?.includes('Leader')) {
      console.log("Operation  Leader")


    }
  }
  const handleCancelRecruitement0 = () => {
    const fieldsFilled = [
      requestorDate,
      recruitementDate,
      desiredrecruitementDate,
      lastJobCode,
      profile,
      projets,
      selectedProject,
      projectCode,
      position,
      positionRecruitement,
      desiredExperience,
      selectedLevel,
      selectedLieu,
      vacancie,
      asper,
    ].some(field => field && field !== "");

    if (fieldsFilled) {
      onCancel(true);



    };
  }
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Recruitment && Send Email',
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
      description: 'Error Recuitement',
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

  ///AAAAAAAAAAAAAAAAAAAAAAAAA
  const Saverecrutement = async () => {
    try {

      const params = new URLSearchParams({ name: selectedProject, id: profile?.getsId });
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          //recruttrequestDate: DateRecruitement,
          requestName: profile?.name,
          approuvedRecrutRequestNumber: null,
          // jobCode: LastIndexRecruitementIncremente,
          //jobCode: JobCode,
          certif: certif,
          experience: selectedLevel,
          type: type,
          position: positionRecruitement,
          projectName: selectedProject,
          // recruttrequestDate: requestorDate,
          requestedDicipline: positionRecruitement,
          totalNumber: vacancie,
          oDep: isOrDep,
          exDep: isExDep,
          // type: "For Foreman & Below",
          // oDep: asper,
          // // exDep: "",
          // // status:"0",
          nbExperience: desiredExperience,
          projRef: projectCode,
          // bod: isOkBod,
          idemp: profile?.getsId,
          desiredDate: desiredrecruitementDate,
          affectedTo: selectedLieu,
          signatureHod: isOkHead,
          signatureBod: isOkBod,
          notif: 2,
          dep: profile?.departement,
          dateInputRecrut: formattedDate,
          status: "Pending",
    

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        form.resetFields();
        //window.location.reload();
        openNotification('bottomRight')
        setTimeout(() => {
          
          window.location.reload();
          navigate(-1)

        }, 2000);
        //onSave(false)
        const email = 'rihemhassounanjim90@gmail.com';
        const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
          method: 'POST',
        });

        if (secondApiResponse.ok) {
          const secondResponseData = await secondApiResponse.json();
        } else {
          console.error("Failed to fetch data from the second API.");
        }

        // alert('Recruitment request saved successfully.');

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  const goBack = () => {
    navigate(-1)

  }

  const Cancel = () => {
    navigate(-1)
  }
  const SaverecrutementEngineer = async () => {
    try {

      const params = new URLSearchParams({ name: selectedProject, id: profile?.getsId });
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          //recruttrequestDate: DateRecruitement,
          requestName: profile?.name,
          approuvedRecrutRequestNumber: null,
          //jobCode: JobCode,
          certif: certif,
          experience: selectedLevel,
          // jobCode: LastIndexRecruitementIncremente,
          type: type,
          position: profile?.position,
          projectName: selectedProject,
          // recruttrequestDate: requestorDate,
          requestedDicipline: positionRecruitement,
          totalNumber: vacancie,
          oDep: isOrDep,
          exDep: isExDep,
          // type: "For Foreman & Below",
          // oDep: asper,
          // // exDep: "",
          // // status:"0",
          nbExperience: desiredExperience,
          projRef: projectCode,
          // bod: isOkBod,
          idemp: profile?.getsId,
          desiredDate: desiredrecruitementDate,
          affectedTo: selectedLieu,
          signatureHod: isOkHead,
          signatureBod: isOkBod,
          notif: 8,
          dep: profile?.departement,
          dateInputRecrut: formattedDate,
          status: "Pending Approval Operation Manager"

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
        setTimeout(() => {
          
          window.location.reload();
          navigate(-1)

        }, 2000);

        const email = 'rihemhassounanjim90@gmail.com';
        const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
          method: 'POST',
        });

        if (secondApiResponse.ok) {
          const secondResponseData = await secondApiResponse.json();
          form.resetFields();
          window.location.reload();
        } else {
          //setModalError(true)
          console.error("Failed to fetch data from the second API.");
        }

        // alert('Recruitment request saved successfully.');

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //Opration Save Recruitement 

  const Saverecrutementopeartion = async () => {
    try {

      const params = new URLSearchParams({ name: selectedProject, id: profile?.getsId });
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          //recruttrequestDate: DateRecruitement,
          requestName: profile?.name,
          approuvedRecrutRequestNumber: null,
          experience: selectedLevel,
          // jobCode: LastIndexRecruitementIncremente,
          //jobCode: JobCode,
          certif: certif,
          experience: selectedLevel,
          type: type,
          position: profile?.position,
          projectName: selectedProject,
          // recruttrequestDate: requestorDate,
          requestedDicipline: positionRecruitement,
          totalNumber: vacancie,
          oDep: isOrDep,
          exDep: isExDep,
      
          // type: "For Foreman & Below",
          // oDep: asper,
          // // exDep: "",
          // // status:"0",
          nbExperience: desiredExperience,
          projRef: projectCode,
          // bod: isOkBod,
          idemp: profile?.getsId,
          desiredDate: desiredrecruitementDate,
          affectedTo: selectedLieu,
          signatureHod: isOkHead,
          signatureBod: isOkBod,
          notif: 7,
          dep: profile?.departement,
          dateInputRecrut: formattedDate,
          status: "Pending Approval BOD"

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
        setTimeout(() => {
          
          window.location.reload();
          navigate(-1)

        }, 2000);

        const email = 'rihemhassounanjim90@gmail.com';
        const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
          method: 'POST',
        });

        if (secondApiResponse.ok) {
          const secondResponseData = await secondApiResponse.json();
          form.resetFields();
          window.location.reload();
        } else {
          //setModalError(true)
          console.error("Failed to fetch data from the second API.");
        }

        // alert('Recruitment request saved successfully.');

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  {/*Save Project leader */ }

  const SaverecrutementProjectLeader = async () => {
    try {

      const params = new URLSearchParams({ name: selectedProject, id: profile?.getsId });
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          //recruttrequestDate: DateRecruitement,
          requestName: profile?.name,
          approuvedRecrutRequestNumber: null,
          experience: selectedLevel,
          // jobCode: LastIndexRecruitementIncremente,
          //jobCode: JobCode,
          certif: certif,
          experience: selectedLevel,
          type: type,
          position: profile?.position,
          projectName: selectedProject,
          // recruttrequestDate: requestorDate,
          requestedDicipline: positionRecruitement,
          totalNumber: vacancie,
          oDep: isOrDep,
          exDep: isExDep,
        
          // type: "For Foreman & Below",
          // oDep: asper,
          // // exDep: "",
          // // status:"0",
          nbExperience: desiredExperience,
          projRef: projectCode,
          // bod: isOkBod,
          idemp: profile?.getsId,
          desiredDate: desiredrecruitementDate,
          affectedTo: selectedLieu,
          signatureHod: isOkHead,
          signatureBod: isOkBod,
          notif: 6,
          dep: profile?.departement,
          dateInputRecrut: formattedDate,
          status: "Pending Approval HOD"
        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("opration reponse project Leader", responseData)
        form.resetFields();
        setTimeout(() => {
          window.location.reload();        
          navigate(-1)
  
       
        }, 2000);
        openNotification('bottomRight')

        const email = 'rihemhassounanjim90@gmail.com';
        const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
          method: 'POST',
        });

        if (secondApiResponse.ok) {
          const secondResponseData = await secondApiResponse.json();
          form.resetFields();
          window.location.reload();
        } else {
          //setModalError(true)
          console.error("Failed to fetch data from the second API.");
        }

        // alert('Recruitment request saved successfully.');

      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  const BeforeSaveRecruitement = () => {
    //setIsModalVisible(true)
    form.validateFields(['ProjectName', 'ProjectCode'
      , 'DateDesiredRecruitement', 'position', 'RequiredLevel', 'Desiredyearsexperience', 'Numbervacancies',

    ]).then(values => {
      //onSave(true)
      if ((!dep?.includes('Operation')) && (!dep?.includes('Engineering'))) {
        Saverecrutement();
      }

      else if (dep?.includes('Engineering') && userRole?.includes('Engineering')) {

        SaverecrutementEngineer()

      }
      else if (dep?.includes("Operation") && userRole?.includes('Operation')) {
        Saverecrutementopeartion()

      }
      else if (dep?.includes("Operation") && userRole?.includes('Leader')) {
        SaverecrutementProjectLeader()
      }
      else
        return null
      // if( profile?.departement?.includes('Operation') && userRole?.includes('Leader')){
      //   console.log("project Leader jjj",userRole)
      //   //SaverecrutementProjectLeader()

      // }

      // else if( profile?.departement?.includes('operation')){
      //   console.log("Operation  Manager")
      //   Saverecrutementopeartion()

      // }

    }).catch(errorInfo => {

      openNotificationWarning('bottomRight')

      // setIsModalVisible(false);

    });
  };

  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
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
            <Typography.Title level={4}>RECRUITMENT REQUEST FORM</Typography.Title>

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
                  <Form.Item label='Job Code' name='JobCode'>
                    <Input placeholder={"RRS-" + LastIndexRecruitementIncremente} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Request Date' name='DateRecruitement'


                  >{/*Date et temp de Interview bu Hr*/}
                    <Input
                      placeholder={formattedDate}
                      readOnly
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
            <Typography.Title level={5}> Requestor </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='ID Number ' name='id'>
                    <Input
                      placeholder={profile?.getsId}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Full Name' name='name'>
                    <Input
                      placeholder={profile?.name}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Departement' name='departement'>
                    <Input
                      placeholder={profile?.departement}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position'>
                    <Input
                      placeholder={profile?.position}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={12}>
                  <Form.Item label='Request Date' name='DateRequestor'
                    rules={[
                      { required: true, message: 'Please input your Requestor Date!' },
                    ]}>
                    <DatePicker
                    //defaultValue={new Date()} 
                      placeholder='YYYY-MM-DD'
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setRequestorDate(dayjs(value).format('YYYY-MM-DD'))}
                    />

                  </Form.Item>
                </Col> */}





              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Required Profile</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Name'
                    name='ProjectName'
                    rules={[
                      { required: true, message: 'Please input your Project Name!' },
                    ]}
                  >
                    <Select
                      placeholder='Project Name'
                      onChange={handleProjectChange}
                    >
                      {projets && projets.map((p, index) => (
                        <Select.Option key={index} value={p.projName}>
                          {p.projName}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Code'
                    name='ProjectCode'

                  >
                    <Input
                      placeholder={projectCode}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>





              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>For Foreman & Below Recruitement </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired Date of Recruitment'
                    name='DateDesiredRecruitement'
                    rules={[
                      { required: true, message: 'Please input your Desired Date of Recruitment!' },
                    ]}


                  >{/*Date et temp de Interview bu Hr*/}
                    <DatePicker
                      //defaultValue={new Date()} 
                      // defaultValue={dayjs(desiredrecruitementDate, '2024-01-01')}
                      placeholder="YYYY-MM-DD"
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setDesiredrecruitementDate(dayjs(value).format('YYYY-MM-DD'))}
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Recruitment For' name='Recruitment For'

                    rules={[
                      { required: true, message: 'Please Select your Recruitment For!' },

                    ]}
                  >
                    <Select
                      placeholder='Recruitment For'
                      onChange={handlePlaceSelect}
                      value={selectedLieu}
                    >
                      {lieu.map((p, index) => (
                        <Select.Option key={index} value={p.place}>
                          {p.place}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>



                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='Position'
                    onChange={(value) => setPositionRecruitement(value)}
                    rules={[
                      { required: true, message: 'Please input your Position!' }]}>
                    <Select
                      placeholder='Select Position'
                      value={positionRecruitement}
                      onChange={handlePositionRecruitement} >

                      {position && position.map((p, index) => (
                        <Select.Option key={index} value={p}>
                          {p}
                        </Select.Option>
                      ))}
                    </Select>




                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Required Level' name='RequiredLevel'

                    rules={[
                      { required: true, message: 'Please Select your Select Required Level!' },

                    ]}
                  >
                    <Select
                      placeholder='Required Level'
                      onChange={handleLevelSelect}
                      value={selectedLevel}
                    >
                      {requiredlevel.map((p, index) => (
                        <Select.Option key={index} value={p.level}>
                          {p.level}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired years of experience'
                    name='Desiredyearsexperience'
                    rules={[
                      { required: true, message: 'Please Select your Select Desired years of experience!' },
                    ]}>

                    <Input
                      value={desiredExperienceLevel}
                      onChange={(value) => setDesiredExperiencELevel(value)}
                      type="number"
                    // placeholder={desiredExperience}
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Number of vacancies '
                    name='Numbervacancies'


                    rules={[
                      { required: true, message: 'Please Select your Select Number of vacancies!' },

                    ]}
                  >
                    <Input
                      placeholder="Number Of Vacancies"
                      type="number"
                      value={vacancie}
                      onChange={(e) => setVacancie(e.target.value)}

                    />


                  </Form.Item>
                </Col>




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>

        </AppRowContainer>

        {dep === "operation" && user.includes('PMO') ?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>PMO Controlling </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>


                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='As per :'
                        name='As per'
 >
                        <Checkbox checked={isExDep} onChange={ExDep}>

                          <IntlMessages id='Exdep.planner' />
                        </Checkbox>
                        <Checkbox checked={isOrDep} onClick={OrDep}>
                          <IntlMessages id='Ordep.planner' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

          : null}
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Head of Department Inputs</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <StyledInput>
                    <Form.Item
                      label='Head Of Departement Decision'
                      name='HeadInputs'
                    // rules={[
                    //   { required: true, message: 'Please Check your  Head Of Departement Decision!' },

                    // ]}


                    >
                      <Checkbox checked={isOkHead} onChange={OkHead}>

                        <IntlMessages id='accepted.Head' />
                      </Checkbox>
                      <Checkbox checked={isNOHead} onClick={NoHead}>
                        <IntlMessages id='Refuse.head' />
                      </Checkbox>
                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {user.includes('bod') ?
          <>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />

            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>Decision BOD</Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={18}>
                      <StyledInput>
                        <Form.Item
                          label='Executive Directors Approval'
                          name='DirectorsApproval'
                        // rules={[
                        //   { required: true, message: 'Please Check your  Executive Directors Approval!' },

                        // ]}

                        >
                          <Checkbox checked={isOkBod} onChange={OkBOD}>
                            <IntlMessages id='accepted.BOD' />
                          </Checkbox>
                          <Checkbox checked={isNoBod} onClick={NoBOD}>
                            <IntlMessages id='Refuse.BOD' />
                          </Checkbox>
                        </Form.Item>
                      </StyledInput>
                    </Col>



                  </AppRowContainer>
                </StyledShadowWrapper>


              </Col>

            </AppRowContainer>
          </>
          : null}





        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}

        >
          <Button onClick={handleCancelRecruitement} >Cancel</Button>
          <Button
            onClick={BeforeSaveRecruitement}
            disabled={!selectedProject}
            type='primary'
            htmlType='submit'>
            Save

          </Button>
        </Space>

      </Form>
      <RecruitementRequest
        isViewInfo={isModalVisible}
        handleAddContactClose={handleValidateEmployeeClose}
        JobCode={LastIndexRecruitementIncremente}
        DateRecruitement={recruitementDate}
        id={profile?.getsId}
        name={profile?.name}
        position={profile?.position}
        // DateRequestor={requestorDate}
        projname={selectedProject}
        projCode={projectCode}
        DateDesiredRecruitement={desiredrecruitementDate}
        positionRecruitement={positionRecruitement}
        level={selectedLevel}
        desiredExperience={desiredExperienceLevel}
        vacancie={vacancie}
        asper={asper}
        commentplanner={commentplanner}
        isOkHead={isOkHead}
        isOkBod={isOkBod}
        dep={dep}
        certif={certif}
        type={type}

      >



      </RecruitementRequest>
      {isSave ? (
        <ConfirmationModal
          open={isSave}
          paragraph={'Are you sure you want to Save Recruitement?'}
          onDeny={onSave}
          onConfirm={Saverecrutement}
          modalTitle="Save Recruitement "
          handleInterview={handleSaveRecruitement}
        />
      ) : null}
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Recruitement "
          handleInterview={handleCancelRecruitement}
        />
      ) : null}
      {modalWarning && (
        <div style={{ position: 'relative', height: '10vh' }}>
          <Space direction='vertical' style={{ width: '90%', margin: 20, position: 'absolute', bottom: 0 }}>
            <Alert
              description='All Fields Not Complete'
              type='warning'
              showIcon
            />
          </Space>
        </div>
      )}
      {modalError && (
        <div style={{ position: 'relative', height: '10vh' }}>
          <Space direction='vertical' style={{ width: '90%', margin: 20, position: 'absolute', bottom: 0 }}>
            <Alert
              message='Error'
              description='Failed Recruitement.'
              type='error'
              showIcon

            />
          </Space>
        </div>
      )}


    </div>

  );
};


export default AddRecruitementForemanBelow;
