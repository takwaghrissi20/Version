import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography,
  Select, Alert, Checkbox, DatePicker, InputNumber, notification, Spin
} from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
  StyledScrumBoardDatePicker

} from './index.styled';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FcDownLeft } from "react-icons/fc";
const EditRecruitementBelow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const jobCode = location.state ? location.state.jobCode : null;

  const dep = location.state ? location.state.dep : null;
  const idemp = location.state ? location.state.idemp : null;
  const requestName = location.state ? location.state.requestName : null;
  const position = location.state ? location.state.position : null;
  const DesiredDate = location.state ? location.state.DesiredDate : null;
  const projectName = location.state ? location.state.projectName : null;
  const recruttrequestDate = location.state ? location.state.recruttrequestDate : null
  const projRef = location.state ? location.state.projRef : null
  const Level = location.state ? location.state.Level : null
  const type = location.state ? location.state.type : null
  const exDep = location.state ? location.state.exDep : null
  const oDep = location.state ? location.state.oDep : null
  const nbExperience = location.state ? location.state.nbExperience : null
  const Numbervacancies = location.state ? location.state.Numbervacancies : null
  const certif = location.state ? location.state.certif : null
  const comentPlaner = location.state ? location.state.comentPlaner : null
  const signatureHod = location.state ? location.state.signatureHod : null
  const signatureBod = location.state ? location.state.signatureBod : null
  const requestedDicipline = location.state ? location.state.requestedDicipline : null
  const affectedTo = location.state ? location.state.affectedTo : null
  const notif = location.state ? location.state.notif : null
  const dateInputRecrut = location.state ? location.state.dateInputRecrut : null
  const signaturepolead = location.state ? location.state.signaturepolead : null
  const signatureBod2 = location.state ? location.state.signatureBod2 : null
  const totalNumber = location.state ? location.state.totalNumber : null
  
  console.log("signaturepolead", signaturepolead)
  console.log("signatureBod2", signatureBod2)
  console.log("type Recruitement", type)
  const [selectedLevel, setSelectedLevel] = useState('');
  const userRoles = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const [commentBOD1, setCommentBOD1] = useState("");
  const [commentBOD2, setCommentBOD2] = useState("");
  const [name, setName] = useState("");
  const [chargement, setChargement] = useState("");
  const [positionAbove, setPositionAbove] = useState("");
  const [positionRecruitementAbove, setPositionRecruitementAbove] = useState(position);
  const [positionRecruitementBelow, setPositionRecruitementBelow] = useState('');
 
  const [positionBelow, setPositionBelow] = useState('');
  console.log("username nnnnn", username)
  const RequestedDiciplineAbove = (value) => {
    setPositionRecruitementAbove(value);

  };
  //Get profile By Email
  const requiredlevel = [
    { level: 'Junior' },
    { level: 'Medium' },
    { level: 'Senior' },

  ];
  const requiredlevelbelow = [
    { level: 'Level I ' },
    { level: 'Level II' },
    { level: 'levelIII' },
    { level: 'LEVEL IV' },
    { level: 'Level V' },

  ];
  const handleLevelSelect = (value) => {
    setSelectedLevel(value);
  };
  useEffect(() => {
    GetProfileEmployess()
    GetPositions()
  }, []);
  const GetProfileEmployess = async () => {
    setChargement(true);
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}&token=${token}`, {
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
      setName(data?.name)
      console.log("nameeeeess", data?.name)
    } catch (error) {
      console.error('Erreur lors de la récupération getByEmail', error);
    }
    finally {
      setChargement(false);
    }
  };
  const Back = async () => {
    navigate(-1)

  };
  const CancelRecruitementBod = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          signatureBod2: signaturepolead,
          signaturepolead: commentBOD1,
          notif: 20,
          status: "Not Approved By BOD"
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openRefuseNotificationBOD('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);



        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }
  //Reject Recruitement BOD NIDHAL
  const CancelRecruitementBodNIDHA = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          notif: 80,
          signatureBod2: commentBOD2,
          signaturepolead: signaturepolead,
          status: "Not Approved By BOD"
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openRefuseNotificationBOD('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);



        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }


  const [newdesiredDate, setNewDesiredDate] = useState(DesiredDate);
  const [newdep, setNewdep] = useState(dep);
  const [newidemp, setNewidemp] = useState(idemp);
  const [newrequestName, setNewrequestName] = useState(requestName);
  const [newposition, setNewposition] = useState(position);
  const [newprojectName, setNewprojectName] = useState(projectName);
  const [newprojRef, setNewprojRef] = useState(projRef);
  const [newaffectedTo, setNewAffectedTo] = useState(affectedTo);
  const [newrequestedDicipline, setNewrequestedDicipline] = useState(requestedDicipline);
  const [newLevel, setNewLevel] = useState(Level);
  const [newnbExperience, setNewnbExperience] = useState(nbExperience);
  const [newNumbervacancies, setNewNumbervacancies] = useState(Numbervacancies);
  const [newcertif, setNewcertif] = useState(certif);
  const [newexDep, setNewexDep] = useState(exDep);
  const [newoDep, setNewoDep] = useState(oDep);
  const [exDepPlanner, setExDepPlanner] = useState(false);
  const [oDepPlanner, setoDepPlanner] = useState(false);
  const [newCheckedHod, setNewCheckedHod] = useState(signatureHod);
  const [newCheckedBod, setNewCheckedBod] = useState(signatureBod);

  const [selectedLieu, setSelectedLieu] = useState(affectedTo);
  const [dataEdit, setDataEdit] = useState("")
  const [newcomentPlaner, setNewcomentPlaner] = useState(comentPlaner);
  const [comentPlanerUpdate, setComentPlanerUpdate] = useState("");
  const lieu = [
    { place: 'Office' },
    { place: 'Site' },
    { place: 'Office & Site' },
  ];

  const handlePlaceSelect = (value) => {
    setSelectedLieu(value);

  };
  function HandleexDep(e) {
    setNewexDep(e.target.checked)
    if (e.target.checked) {
      setNewoDep(false);

    }
  }
  //////
  function HandleexDepPlanner(e) {
    setExDepPlanner(e.target.checked)
    if (e.target.checked) {
      setoDepPlanner(false);

    }
  }
  function HandleoDepPlanner(e) {
    setoDepPlanner(e.target.checked)
    if (e.target.checked) {
      setExDepPlanner(false);

    }
  }

  //////////////////////

  function HandleoDep(e) {

    setNewoDep(e.target.checked)
    if (e.target.checked) {
      setNewexDep(false);

    }

  }
  function HandleHOD(e) {

    setNewCheckedHod(e.target.checked)

  }
  function HandleBOD(e) {

    setNewCheckedBod(e.target.checked)

  }

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Recruitment ',
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
  const openRefuseNotificationBOD = () => {
    notification.open({
      message: 'Refuse',
      description: 'Refuse Recruitement Sheet',
      style: {
        backgroundColor: '#335F8A',
        border: '1px solid #335F8A',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #335F8A',
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
  const handleComments = (event) => {

    setComentPlanerUpdate(event.target.value)
  };
  // Helper function to remove circular references
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          desiredDate: newdesiredDate,
          dep: newdep,
          idemp: newidemp,
          position: newposition,
          requestName: newrequestName,
          requestedDicipline: newrequestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: newprojectName,
          totalNumber: newNumbervacancies,
          experience: Level,
          nbExperience: newnbExperience,
          type: type,
          affectedTo: newaffectedTo,
          certif: newcertif,
          bod: null,
          oDep: newoDep,
          exDep: newexDep,
          signatureHod: newCheckedHod,
          signatureBod: null,
          projRef: newprojRef,


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  //Update Planner 
  const UpdatePlanner = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDepPlanner,
          exDep: exDepPlanner,
          comentPlaner: comentPlanerUpdate,
          signatureHod: null,
          signatureBod: null,
          notif: 4,
          status: "Ckeked By PMO"


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        console.log("updataaaa planner", responseData)
        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  const UpdateOperation = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          notif: 7,
          status: "Approved By Operation Manager"


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        console.log("updataaaa planner", responseData)
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }
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
      setPositionAbove(Position)
      //////Position Below
      const responseBelow = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateConst/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
    
      const dataBelow = await response.json();
      const PositionBelow = dataBelow.map(p => p.description)
      setPositionBelow(PositionBelow)
    
    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  //Edittttt Manager or Leader
  const EditManager = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate:newdesiredDate,
          dep: dep,
           idemp: idemp,
          position:positionRecruitementAbove,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,      
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: newLevel,
           nbExperience: newnbExperience,
          type: type,
          affectedTo: selectedLieu,
          certif: newcertif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          notif: 2,
          status: "Pending",


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        console.log("updataaaa planner", responseData)
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }
  

  //End Update UpdateOperation
  ///Cancel Recruitement Oprartion
  const CancelRecruitementOperation = async () => {

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          notif: 70,
          status: "Not Approved By Operation Manager"


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openRefuseNotificationBOD('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }
  //End Cancel Recruitement Oprartion
  //Updata BOD
  const UpdateBOD = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          signatureBod2: signaturepolead,
          signaturepolead: commentBOD1,
          notif: 3,
          status: "Approved By BOD"
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }

  //End Updata BOd
  ///Approve BOD NIDHAL
  const UpdateBODNIDHAL = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${jobCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          jobCode: jobCode,
          dateInputRecrut: dateInputRecrut,
          desiredDate: DesiredDate,
          dep: dep,
          idemp: idemp,
          position: position,
          recruttrequestDate: recruttrequestDate,
          requestName: requestName,
          requestedDicipline: requestedDicipline,
          approuvedRecrutRequestNumber: 1,
          projectName: projectName,
          projRef: projRef,
          totalNumber: Numbervacancies,
          experience: Level,
          nbExperience: nbExperience,
          type: type,
          affectedTo: affectedTo,
          certif: certif,
          bod: null,
          oDep: oDep,
          exDep: exDep,
          comentPlaner: comentPlaner,
          signatureHod: null,
          signatureBod: null,
          signatureBod2: commentBOD2,
          signaturepolead: signaturepolead,
          notif: 8,
          status: "Approved By BOD"
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);

        // navigate(-1)

        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }



  return (
    <div>
      {userRoles === "admin" ?
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
                      <Input placeholder={"RRS-" + jobCode} readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Recruitement Date' name='DateRecruitement'>

                      {/*Date et temp de Interview bu Hr*/}
                      <DatePicker
                        //defaultValue={new Date()} 
                        placeholder={dateInputRecrut}

                        style={{ width: "100%", height: "30px" }}
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
                        placeholder={idemp}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Full Name' name='name'>
                      <Input
                        placeholder={requestName}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Departement' name='departement'>
                      <Input
                        placeholder={dep}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item label='Position' name='position'>
                      <Input

                        placeholder={requestedDicipline}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  {/* <Col xs={24} md={12}>
                    <Form.Item label='Requestor Date' name='DateRequestor'

                    >
                      <Input
                        placeholder={recruttrequestDate}
                        readOnly={true}
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


                    >
                      <Input
                        value={newprojectName}
                        onChange={(e) => setNewprojectName(e.target.value)}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Project Code'
                      name='ProjectCode'

                    >
                      <Input
                        placeholder='Code Project'
                        value={newprojRef}
                        onChange={(e) => setNewprojRef(e.target.value)}

                      />
                    </Form.Item>
                  </Col>





                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {(userRoles.includes("Manager")&& !dep.includes("Operation") &&!dep.includes("Engineering"))
          || !userRole.includes("Human Ressource")          
          &&
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}> {type} Recruitement </Typography.Title>
              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item label='Desired Date of Recruitment'
                        name='DateDesiredRecruitement'>
                        <StyledScrumBoardDatePicker
                          value={newdesiredDate}
                          onChange={() => setNewDesiredDate()} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label='Recruitment For' name='Recruitment For'>
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
                    {type === "Above Foreman" ?
                    <>

                      <Col xs={24} md={12}>
                        <Form.Item label='Recruitement For' name='Recruitement For'>
                          <Input
                            placeholder={affectedTo}
                            readOnly={true} />
                        </Form.Item>
                      </Col>
                      </>


                      : null}

                    <Col xs={24} md={12}>
                      <Form.Item label='Position' name='Position'>
                        <Input
                          value={newposition}
                          onChange={() => setNewposition()}
                          placeholder="Position" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='Required Level' name='RequiredLevel' >
                        <Input
                          value={newLevel}
                          onChange={() => setNewLevel()}
                          placeholder="Required Level"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='Desired years of experience'
                        name='Desiredyearsexperience'>

                        <Input
                          value={newnbExperience}
                          onChange={() => setNewnbExperience()}
                          placeholder="Desired years of experience"
                        />

                      </Form.Item>
                    </Col>
                    <Col style={{ marginTop: '1.3rem' }} xs={24} md={12}>
                      <Form.Item
                        label='Number of vacancies'
                      >
                        <Input
                          value={newNumbervacancies}
                          onChange={() => setNewNumbervacancies()}
                          placeholder="Number of vacancies"
                          type="number" />


                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='Academic Certificates /Comments (otherrequired Knowledge /Recruitment objective)'
                        name='certif'

                      >
                        <Input
                          value={certif}
                          onChange={() => setNewcertif()}
                          placeholder="Academic Certificates" />


                      </Form.Item>
                    </Col>


                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>


          }



          {(dep?.includes("Operation")) ?
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>PMO Controlling</Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='As per : '
                        name='Asper' >

                        <Checkbox checked={newexDep} onChange={HandleexDep}>
                          Extra Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label=' '
                        name='Asper'

                      >

                        <Checkbox checked={newoDep} onChange={HandleoDep}>
                          Original Deployment Schedule
                        </Checkbox>

                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24}

                    >
                      <Form.Item
                        label='PMO Comments'
                        name='PlannerComments'


                      >
                        <Input
                          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                          placeholder="PMO Comments"
                          value={newcomentPlaner}
                          onChange={() => setNewcomentPlaner()}


                        />

                      </Form.Item>
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
                  <Col xs={24} md={18}>
                    <StyledInput>
                      <Form.Item
                        label='Head Of Departement Decision'
                        name='HeadInputs'>
                        <Checkbox checked={newCheckedHod} onChange={HandleHOD}>

                          Yes
                        </Checkbox>

                        <Checkbox

                        >
                          No
                        </Checkbox>

                      </Form.Item>
                    </StyledInput>
                  </Col>



                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>


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
                        name='DirectorsApproval'>
                        <Checkbox checked={newCheckedBod} onChange={HandleBOD}>

                          Yes
                        </Checkbox>
                        <Checkbox
                        // checked={newCheckedBod} onChange={HandleBOD}
                        >
                          No
                        </Checkbox>

                      </Form.Item>
                    </StyledInput>
                  </Col>



                </AppRowContainer>
              </StyledShadowWrapper>


            </Col>

          </AppRowContainer>


          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={Back}>Cancel</Button>
            <Button onClick={() => Update(newdesiredDate, newdep, newidemp, newrequestName, newposition, newprojectName,
              newprojRef, newexDep, newaffectedTo, newLevel, newrequestedDicipline, newnbExperience, newNumbervacancies, newcertif)}>
              Update
            </Button>
            {/* <Button
           type='primary'
           ghost
           onClick={() => Update(newdesiredDate, newdep, newidemp, newrequestName, newposition, newprojectName,
             newprojRef, newaffectedTo, newLevel, newrequestedDicipline, newnbExperience, newNumbervacancies, newcertif)}>

           <p style={{ textAlign: "center", paddingTop: "9px" }}>Update</p>

         </Button> */}

          </Space>

        </Form>

        :
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
                      <Input placeholder={"RRS-" + jobCode} readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Recruitement Date' name='DateRecruitement'


                    >

                      {/*Date et temp de Interview bu Hr*/}
                      <Input
                        //defaultValue={new Date()} 
                        placeholder={dateInputRecrut}
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
                        placeholder={idemp}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Full Name' name='name'>
                      <Input
                        placeholder={requestName}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Departement' name='departement'>
                      <Input
                        placeholder={dep}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item label='Position' name='position'>
                      <Input
                        placeholder={position}
                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  {/* <Col xs={24} md={12}>
                    <Form.Item label='Requestor Date' name='DateRequestor'

                    >
                      <Input
                        placeholder={recruttrequestDate}
                        readOnly={true}
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


                    >
                      <Input
                        value={projectName}
                        readOnly={true}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Project Code'
                      name='ProjectCode' >
                      <Input
                        placeholder={projRef}
                        readOnly />
                    </Form.Item>
                  </Col>


                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}> {type} Recruitement </Typography.Title>

            </Col>
            {

            }
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      className='DateDesiredRecruitement'
                      label='Desired Date of Recruitment'
                      name='DateDesiredRecruitement'>
                      <StyledScrumBoardDatePicker
                        placeholder={DesiredDate}
                        style={{ width: "100%", height: "30px" }}
                        value={newdesiredDate}
                        onChange={() => setNewDesiredDate()} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Recruitment For' name='Recruitment For'>
                      <Select
                        placeholder={affectedTo}
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

                  {/* {type === "Above Foreman" ?

                <Col xs={24} md={12}>
                  <Form.Item label='Recruitement For' name='Recruitement For'>
                    <Input
                      placeholder={affectedTo}
                      readOnly={true} />
                  </Form.Item>
                </Col>




                : null} */}
                 
                  {/* <Col xs={24} md={12}>
                    <Form.Item label='Position' name='Position'>
                      <Input
                        placeholder={requestedDicipline}
                        readOnly
                      />

                    </Form.Item>
                  </Col> */}
               
                  <>
                   <Col xs={24} md={12}>
                    <Form.Item label='Position' name='Position'>
                    <Select
                      placeholder={position}
                      value={positionRecruitementAbove}
                      onChange={RequestedDiciplineAbove} >

                      {positionAbove && positionAbove?.map((p, index) => (
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
                          placeholder={Level}
                          onChange={handleLevelSelect}
                          value={selectedLevel}
                        >
                          {requiredlevelbelow.map((p, index) => (
                            <Select.Option key={index} value={p.level}>
                              {p.level}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    </>

                   
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Desired years of experience'
                      name='Desiredyearsexperience'>

                      <Input
                       placeholder={nbExperience}
                        value={newnbExperience}
                        onChange={() => setNewnbExperience()}
                  
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Number of vacancies'
                    >
                     <Input
                          value={newNumbervacancies}
                          onChange={() => setNewNumbervacancies()}
                          placeholder={totalNumber}
                          type="number" />


                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Academic Certificates /Comments (otherrequired Knowledge /Recruitment objective)'
                      name='certif'

                    >
                     <Input
                          value={certif}
                          onChange={() => setNewcertif()}
                          placeholder="Academic Certificates" />


                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>
          {/*Comment Bod 1 et BOD2*/}
          {userRoles?.includes("bod") &&
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}> Comments </Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>

                    {/* {chargement ? (
                   <Spin tip="Loading..........." />
                 ) : ( */}
                    {username?.toLowerCase().includes("ali") && (
                      <Col xs={24} md={24}>
                        <p>{username}:</p>

                        {signatureBod2?.trim().length > 0 &&
                          <Form.Item label='Comment' name='Comment Of Nidhal'>
                            <Input
                              className='InputComment'
                              placeholder={signatureBod2}
                              readOnly
                            />
                          </Form.Item>

                        }
                        {signatureBod2 === null || signatureBod2 === undefined &&
                          <p></p>
                        }
                        <Form.Item label='Comment' name='Comment'>
                          <Input
                            className='InputComment'
                            placeholder="Comment"
                            value={commentBOD1}
                            onChange={(e) => setCommentBOD1(e.target.value)}
                          />
                        </Form.Item>
                      </Col>
                    )
                    }

                    {/* {chargement ? (
                   <Spin tip="Loading..........." />
                 ) : ( */}
                    {username?.toLowerCase().includes("nidhal") && (
                      <Col xs={24} md={24}>
                        <p>{username}:</p>


                        {signaturepolead?.trim().length > 0 &&
                          <Form.Item label='Comment' name='Comment Of Nidhal'>
                            <Input
                              className='InputComment'
                              placeholder={signaturepolead}
                              readOnly
                            />
                          </Form.Item>


                        }
                        {signaturepolead === null || signaturepolead == undefined &&
                          <p></p>
                        }
                        <Form.Item label='Comment' name='Comment'>
                          <Input
                            className='InputComment'
                            placeholder="Comment"
                            value={commentBOD2}
                            onChange={(e) => setCommentBOD2(e.target.value)}
                          />
                        </Form.Item>
                      </Col>
                    )
                    }







                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          }
          {(dep?.includes("Operation") && notif === 6 && (!userRoles?.includes("bod"))) || (dep?.includes("Operation") && notif === 7 && (!userRoles?.includes("bod")))
            ?
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>PMO Controlling </Typography.Title>
              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='As per : '
                        name='Asper' >

                        <Checkbox checked={exDepPlanner} onChange={HandleexDepPlanner}>
                          Extra Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label=' '
                        name='Asper'

                      >

                        <Checkbox checked={oDepPlanner} onChange={HandleoDepPlanner}>
                          Original Deployment Schedule
                        </Checkbox>

                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24} >
                      <Form.Item
                        label='PMO Comments'
                        name='PlannerComments'


                      >
                        <Input
                          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                          placeholder="PMO Comments"
                          value={comentPlanerUpdate}
                          onChange={handleComments}
                        />


                      </Form.Item>
                    </Col>



                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
            : null}
          {/* {(dep === "operation" && notif === 4) ?
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>PMO Controlling</Typography.Title>

              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='As per : '
                        name='Asper' >

                        <Checkbox checked={exDep === "true"}
                          readOnly
                        >
                          Extra Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label=' '
                        name='Asper'

                      >

                        <Checkbox

                          checked={oDep === "true"}
                          readOnly
                        >
                          Original Deployment Schedule
                        </Checkbox>

                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24}

                    >
                      <Form.Item
                        label='Planner Comments'
                        name='PlannerComments'


                      >
                        <Input
                          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                          placeholder={comentPlaner}

                        />

                      </Form.Item>
                    </Col>



                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>




            : null} */}
          {/*uPDATE BOD */}

          {((dep?.includes("Operation") && notif === 7
            && (oDep === "true" || exDep === "true"))) || ((dep?.includes("Operation")
              && notif === 4)) ? (
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>PMO Controlling</Typography.Title>
              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item label="As per :" name="Asper">
                        <Checkbox checked={exDep === "true"}
                          readOnly>
                          Extra Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label=" " name="Asper">
                        <Checkbox checked={oDep === "true"}
                          readOnly>
                          Original Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={24}>
                      <Form.Item label="PMO Comments" name="PlannerComments">
                        <Input
                          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                          placeholder={comentPlaner}
                          readOnly
                        />
                      </Form.Item>
                    </Col>
                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          ) : null}

          {/*End uPDATE BOD */}
          {/* <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
        <Col xs={24} md={6}>
          <Typography.Title level={5}> Head of Department Inputs</Typography.Title>
        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={18}>
                <StyledInput>
                  <Form.Item
                    label='Head Of Departement Decision'
                    name='HeadInputs'>
                    <Checkbox checked={newCheckedHod} onChange={HandleHOD}>

                      Yes
                    </Checkbox>

                    <Checkbox

                    >
                      No
                    </Checkbox>

                  </Form.Item>
                </StyledInput>
              </Col>



            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>


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
                    name='DirectorsApproval'>
                    <Checkbox checked={newCheckedBod} onChange={HandleBOD}>

                      Yes
                    </Checkbox>
                    <Checkbox
                    // checked={newCheckedBod} onChange={HandleBOD}
                    >
                      No
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
            {(userRoles?.includes("Manager") || userRoles?.includes("Human Ressource")) && (
             <>
             <Button onClick={Back}>
                <FcDownLeft style={{ marginRight: 5 }} /> Return
              </Button>
              <Button onClick={() => EditManager()}>
                  Save
                </Button>
                </>

            )}




            {userRoles?.includes("PMO") ?

              <>
                <Button onClick={() => UpdatePlanner()}>
                  Save
                </Button>
                <Button onClick={Back}>Cancel</Button>
              </>

              : null

            }
            {userRoles.includes("admin") ?
              <Button onClick={() => Update()}>
                Update
              </Button> :
              null}
            {userRoles.includes("Operation") ?
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={() => UpdateOperation()}>
                  Approved
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={() => CancelRecruitementOperation()}>
                  Refuse
                </Button>
                <Button onClick={Back}>
                  Cancel
                </Button>
              </>

              : null
            }
            {userRoles.includes("bod") && username?.toLowerCase().includes("ali") ?
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={() => UpdateBOD()}>
                  Approved
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={() => CancelRecruitementBod()}>
                  Refuse
                </Button>
                <Button onClick={Back}>Cancel</Button>
              </>
              : null
            }
            {userRoles.includes("bod") && username?.toLowerCase().includes("nidhal") ?
              <>
                <Button style={{ color: "green", borderColor: "green" }} onClick={() => UpdateBODNIDHAL()}>
                  Approved NIDHAL
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={() => CancelRecruitementBodNIDHA()}>
                  Refuse NIDHAL
                </Button>
                <Button onClick={Back}>Cancel</Button>
              </>
              : null
            }



          </Space>

        </Form>
      }




    </div>

  );
};


export default EditRecruitementBelow;
