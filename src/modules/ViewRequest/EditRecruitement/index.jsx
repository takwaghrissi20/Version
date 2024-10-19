import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
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
const EditRecruitementAbove = () => {
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
  const chekedBod2 = location.state ? location.state.chekedBod2 : null
  const chekedBod1 = location.state ? location.state.chekedBod1 : null

  console.log("signaturepolead", signaturepolead)
  console.log("signatureHod ", signatureHod)
  console.log("dep", dep)
  const userRoles = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const [commentBOD1, setCommentBOD1] = useState("");
  const [commentBOD2, setCommentBOD2] = useState("");
  const [name, setName] = useState("");
  const [chargement, setChargement] = useState("");
  const [checkedAliDescition, setCheckedAliDescition] = useState(false);
  const [checkedNidhalDescition, setCheckedNidhal] = useState(false);
  const [newCheckedHod, setNewCheckedHod] = useState(false);
  const [newNoCheckedHod, setNewNoCheckedHod] = useState(false);

  function HandleHOD(e) {
    setNewCheckedHod(e.target.checked)
    if (e.target.checked) {
      setNewNoCheckedHod(false);

    }

  }
  function HandleNoHOD(e) {
    setNewNoCheckedHod(e.target.checked)
    if (e.target.checked) {
      setNewCheckedHod(false);

    }

  }
  //Get profile By Email
  useEffect(() => {
    GetProfileEmployess()
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
          signatureBod: null,
          signatureBod2: signaturepolead,
          signaturepolead: commentBOD1,
          notif: 20,
          status: "Not Approved By BOD",
          chekedBod1: "false",
          chekedBod2: chekedBod2,
          signatureHod: "true",
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
          signatureBod: null,
          notif: 80,
          signatureBod2: commentBOD2,
          signaturepolead: signaturepolead,
          status: "Not Approved By BOD",
          chekedBod1: chekedBod1,
          chekedBod2: "false",
          signatureHod: "true",
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
  ////////////////////////////////////////////////
  const [newexDeppmo, setNewexDeppmo] = useState(false);
  const [newoDeppmo, setNewoDeppmo] = useState(false);

  const [exDepPlanner, setExDepPlanner] = useState(false);
  const [oDepPlanner, setoDepPlanner] = useState(false);
  const [checkedBodAli, setCheckedBodAli] = useState(false);
  const [checkedNoBodAli, setCheckedNoBodAli] = useState(false);
  const [checkedBodNidhal, setCheckedBodNidhal] = useState(false);
  const [checkedNoBodNidhal, setCheckedNoBodNidhal] = useState(false);

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
  function HandleexDeppmo(e) {
    setNewexDeppmo(true)
    if (e.target.checked) {
      setNewoDeppmo(false);

    }
  }

  //////
  function HandleexDepPlanner(e) {
    setExDepPlanner(true)
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
  function HandleoDeppmo(e) {
    setNewoDeppmo(e.target.checked)
    if (e.target.checked) {
      setNewexDeppmo(false);

    }

  }

  function HandleBODAli(e) {
    setCheckedBodAli(e.target.checked)
    if (e.target.checked) {
      setCheckedNoBodAli(false);

    }
  }
  function HandleBODNoAli(e) {
    setCheckedNoBodAli(e.target.checked)
    if (e.target.checked) {
      setCheckedBodAli(false);

    }
  }
  ////Nidhal 
  function HandleBODNidhal(e) {
    setCheckedBodNidhal(e.target.checked)
    if (e.target.checked) {
      setCheckedNoBodNidhal(false);

    }
  }
  function HandleBODNoNidhal(e) {
    setCheckedNoBodNidhal(e.target.checked)
    if (e.target.checked) {
      setCheckedBodNidhal(false);
    }
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
      message: '',
      description: 'Your decision has been processed successfully.',
      style: {
        backgroundColor: '#A7001E',
        border: '1px solid #A7001E',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #A7001E',
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
          signatureHod: signatureHod,
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
  };
  //
  const UpdatePMO = async () => {

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
          oDep: newexDeppmo,
          exDep: newoDeppmo,
          comentPlaner: comentPlanerUpdate,
          signatureHod: "true",
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
          signatureHod: "true",
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
          signatureHod: "false",
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
          signatureHod: "true",
          signatureBod: null,
          signatureBod2: signaturepolead,
          signaturepolead: commentBOD1,
          notif: 3,
          status: "Approved By BOD Ali",
          chekedBod1: "true",
          chekedBod2: chekedBod2,

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
          signatureBod: null,
          signatureBod2: commentBOD2,
          signaturepolead: signaturepolead,
          notif: 8,
          status: "Approved By BOD Nidhal",
          chekedBod1: chekedBod1,
          chekedBod2: "true",
          signatureHod: "true",
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
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}> {type} Recruitement </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date of Recruitment' name='DateDesiredRecruitement'
                    >
                      <StyledScrumBoardDatePicker
                        value={newdesiredDate}
                        onChange={() => setNewDesiredDate()}
                      />


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

                    <Col xs={24} md={12}>
                      <Form.Item label='Recruitement For' name='Recruitement For'>
                        <Input
                          placeholder={affectedTo}
                          readOnly={true} />
                      </Form.Item>
                    </Col>


                    : null}

                  <Col xs={24} md={12}>
                    <Form.Item label='Position' name='Position'>
                      <Input
                        value={newposition}
                        onChange={() => setNewposition()}
                        placeholder="Position"
                      />




                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Required Level' name='RequiredLevel'

                    >
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
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date of Recruitment' name='DateDesiredRecruitement'
                    >
                      <Input
                        placeholder={DesiredDate}
                        readOnly
                      />
                    </Form.Item>



                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Recruitment For' name='Recruitment For'>
                      <Input
                        placeholder={affectedTo}
                        readOnly
                      />

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

                  <Col xs={24} md={12}>
                    <Form.Item label='Position' name='Position'>
                      <Input
                        placeholder={requestedDicipline}
                        readOnly
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Required Level' name='RequiredLevel'

                    >
                      <Input
                        // value={Level}
                        placeholder={Level}
                        readOnly

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Desired years of experience'
                      name='Desiredyearsexperience'>

                      <Input
                        placeholder={nbExperience}
                        readOnly
                      // value={newnbExperience}
                      // onChange={() => setNewnbExperience()}
                      // placeholder="Desired years of experience"
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Number of vacancies'
                    >
                      <Input
                        placeholder={Numbervacancies}
                        readOnly

                      />


                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Academic Certificates /Comments (otherrequired Knowledge /Recruitment objective)'
                      name='certif'

                    >
                      <Input
                        placeholder={certif}
                        readOnly />


                    </Form.Item>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

         
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


          {/*Chek PMO */}
          {/*Comment Bod 1 et BOD2*/}
          {userRoles?.includes("bod") &&
            <>
              {username?.toLowerCase().includes("ali") && (
                <></>
                // <>
                //   <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                //     <Col xs={24} md={6}>
                //       <Typography.Title level={5}> BOD Decision</Typography.Title>
                //     </Col>
                //     <Col xs={24} md={18}>
                //       <StyledShadowWrapper>
                //         <AppRowContainer>
                //           {chekedBod2 === null || chekedBod2 === undefined && (
                //             <p></p>

                //           )}
                //           {chekedBod2 === "true" && (
                //             <>                       
                //             <Col xs={24} md={18} >
                //             <StyledInput>
                //               <Form.Item
                //                 label='Nidhal Decision'
                //                 name='BODInputs'>
                //                 <Checkbox
                //                   checked={chekedBod2==="true"}
                //                   readOnly>

                //                   Yes
                //                 </Checkbox>

                //                 <Checkbox
                //                  checked={chekedBod2==="false"}
                //                  readOnly>
                //                   No
                //                 </Checkbox>

                //               </Form.Item>
                //             </StyledInput>
                //           </Col>
                //             </>
                //           )}
                //           <Col xs={24} md={18}>
                //             <StyledInput>
                //               <Form.Item
                //                 label='Ali Decision'
                //                 name='BODInputs'>
                //                 <Checkbox
                //                   checked={checkedBodAli}
                //                    onChange={HandleBODAli}>

                //                   Yes
                //                 </Checkbox>

                //                 <Checkbox
                //                   checked={checkedNoBodAli} onChange={HandleBODNoAli}
                //                 >
                //                   No
                //                 </Checkbox>

                //               </Form.Item>
                //             </StyledInput>
                //           </Col>



                //         </AppRowContainer>
                //       </StyledShadowWrapper>
                //     </Col>
                //   </AppRowContainer>
                // </>
              )}
              {username?.toLowerCase().includes("nidhal") && (
                <p></p>
                // <>
                //   <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                //     <Col xs={24} md={6}>
                //       <Typography.Title level={5}> BOD Decision</Typography.Title>
                //     </Col>
                //     <Col xs={24} md={18}>
                //       <StyledShadowWrapper>
                //         <AppRowContainer>

                //           {chekedBod1 === null || chekedBod1 === undefined && (
                //             <p></p>

                //           )}
                //           {chekedBod1 === "true" && (
                //             <>

                //             <Col xs={24} md={18}>
                //             <StyledInput>
                //               <Form.Item
                //                 label='Ali Decision'
                //                 name='BODInputs'>
                //                 <Checkbox
                //                   checked={chekedBod1==="true"}
                //                   readOnly
                //                   >

                //                   Yes
                //                 </Checkbox>

                //                 <Checkbox
                //                  checked={chekedBod1==="false"}

                //                    readOnly
                //                 >
                //                   No
                //                 </Checkbox>

                //               </Form.Item>
                //             </StyledInput>
                //           </Col>
                //             </>
                //           )}

                //           <Col xs={24} md={18}>
                //             <StyledInput>
                //               <Form.Item
                //                 label='Nidhal Decision'
                //                 name='BODInputs'>
                //                 <Checkbox
                //                   checked={checkedBodNidhal} onChange={HandleBODNidhal}>

                //                   Yes
                //                 </Checkbox>

                //                 <Checkbox
                //                   checked={checkedNoBodNidhal} onChange={HandleBODNoNidhal}
                //                 >
                //                   No
                //                 </Checkbox>

                //               </Form.Item>
                //             </StyledInput>
                //           </Col>



                //         </AppRowContainer>
                //       </StyledShadowWrapper>
                //     </Col>
                //   </AppRowContainer>
                // </>
              )}

            </>
          }

          {(((dep?.includes("Operation") &&
            (notif === 7 || notif === 3 || notif === 8) &&
            ((oDep === "true" && exDep === "false") ||
              (oDep === "false" && exDep === "true")))
               ||
            (!dep?.includes("Operation") &&
              (notif === 4) &&
              ((oDep === "true" && exDep === "false") ||
                (oDep === "false" && exDep === "true"))) 
                ||
            (dep?.includes("Operation") &&
              (notif === 4) &&
              ((oDep === "true" && exDep === "false") ||
                (oDep === "false" && exDep === "true")) &&
              signatureHod === "true"&& userRoles.includes("bod")
            )
            ||
            (dep?.includes("Operation") &&
            (notif === 4) &&
            ((oDep === "true" && exDep === "false") ||
              (oDep === "false" && exDep === "true")) &&
            signatureHod === "false"&& !userRoles.includes("PMO")
          )

          )
          ) ? (
            <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>PMO Controlling</Typography.Title>
              </Col>
              <Col xs={24} md={18}>
                <StyledShadowWrapper>
                  <AppRowContainer>
                    <Col xs={24} md={12}>
                      <Form.Item label="As per :" name="Asper">
                        <Checkbox checked={exDep === "true"} readOnly>
                          Extra Deployment Schedule
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label=" " name="Asper">
                        <Checkbox checked={oDep === "true"} readOnly>
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
          {(
            (userRoles.includes("PMO") && signatureHod === "true" && !dep.includes("Operation"))
             ||
            (userRoles.includes("PMO") &&
            signatureHod === "true" &&
            dep.includes("Operation") &&
            position?.toLowerCase()?.includes("operation"))
              ||
            (userRoles.includes("PMO") && signatureHod === "null" && 
            dep.includes("Operation") && position.includes("Leader")) ||
            (dep?.includes("Operation") &&
            (notif === 4) &&
            ((oDep === "true" && exDep === "false") ||
              (oDep === "false" && exDep === "true")) &&
            signatureHod === "false"&& userRoles.includes("PMO")
          ) ||
          (signatureHod === "null" && 
          dep.includes("Operation") && position.includes("Leader")) ||
          (dep?.includes("Operation") &&
          (notif === 4) &&
          (oDep === "false" && exDep === "false") &&
          signatureHod === "false"&& userRoles.includes("PMO")
        ) 


          
          
          ) && (
              <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}>PMO Controlling</Typography.Title>
                </Col>
                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>
                      <Col xs={24} md={12}>
                        <Form.Item label="As per :" name="Asper">
                          <Checkbox checked={newexDeppmo}
                           onChange={HandleexDeppmo}>
                            Extra Deployment Schedule
                          </Checkbox>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label=" " name="Asper">
                          <Checkbox checked={newoDeppmo} onChange={HandleoDeppmo}>
                            Original Deployment Schedule
                          </Checkbox>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={24}>
                        <Form.Item label="PMO Comments" name="PlannerComments">
                          <Input
                            placeholder="PMO Comments"
                            value={newcomentPlaner}
                            onChange={e => setNewcomentPlaner(e.target.value)}
                            className="InputComment"
                          />
                        </Form.Item>
                      </Col>
                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>
              </AppRowContainer>
            )}


          {((userRoles.includes("PMO") && !dep?.includes("Operation") ||
            userRoles.includes("bod")) ||(userRoles.includes("PMO") && dep?.includes("Operation") &&
            !position.includes("Leader")

          )
              ) && (
              <>
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
                              <Checkbox checked={signatureHod === "true"}
                                readOnly >

                                Yes
                              </Checkbox>

                              <Checkbox
                                checked={signatureHod === "false"}
                                readOnly

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

              </>
            )
          }
           {(dep?.includes("Operation") && notif === 6 && 
           (!userRoles?.includes("bod"))) || 
           (dep?.includes("Operation") && notif === 7 
           && (!userRoles?.includes("bod")) &&!signatureHod )
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
                        name='Asper'>

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
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>

            {userRoles.includes("bod") && (
              <>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}> Comments  </Typography.Title>

                </Col>
                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>
                      {username?.toLowerCase().includes("ali") && (
                        <>

                          <Col xs={24} md={24}>


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
                        </>
                      )
                      }

                      {username?.toLowerCase().includes("nidhal") && (
                        <Col xs={24} md={24}>



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
                      {/* Comment bod bod*/}



                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>
              </>
            )}

          </AppRowContainer>

          {/**/}



          {/*End uPDATE BOD */}
          {userRoles?.includes("Manager")
           && userRoles?.includes("Operation") &&
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
                          <Checkbox 
                          checked={newCheckedHod} 
                          onChange={HandleHOD}>

                            Yes
                          </Checkbox>

                          <Checkbox
                            checked={newNoCheckedHod}
                            onChange={HandleNoHOD}
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


          }




          <Divider style={{ marginTop: 16, marginBottom: 16 }} />


          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}>
            {(userRoles?.includes("Manager") && !userRoles?.includes("Operation") ||
              userRoles?.includes("Human Ressource") ||
              userRoles?.includes("Leader")

            ) && (
                <Button onClick={Back}>
                  <FcDownLeft style={{ marginRight: 5 }} /> Return
                </Button>
              )}




            {(userRoles.includes("PMO") && !dep?.includes("Operation")) ?

              <>
                <Button onClick={() => UpdatePMO()}>
                  Save
                </Button>
                <Button onClick={Back}>
                  <FcDownLeft style={{ marginRight: "5px", marginTop: "5px" }} />
                  Return</Button>

              </>

              : null

            }
            {(userRoles.includes("PMO") && dep?.includes("Operation")) ?

              <>
                <Button onClick={() => UpdatePlanner()}>
                  Save
                </Button>
                <Button onClick={Back}>
                  <FcDownLeft style={{ marginRight: "5px", marginTop: "5px" }} />
                  Return</Button>

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
                  Approve
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} onClick={() => CancelRecruitementOperation()}>
                  Refuse
                </Button>
                <Button onClick={Back}>
                  Return
                </Button>
              </>

              : null
            }
            {userRoles.includes("bod") && 
            username?.toLowerCase().includes("ali") ?
              <>
                <Button style={{ color: "green", borderColor: "green" }}
                  onClick={() => UpdateBOD()}>
                  Approve
                </Button>
                <Button style={{ color: "red", borderColor: "red" }}
                 onClick={() => CancelRecruitementBod()}>
                  Refuse
                </Button>
                <Button onClick={Back}>
                  <FcDownLeft style={{ marginRight: "5px", marginTop: "5px" }} />
                  Return</Button>
              </>
              : null
            }
            {userRoles.includes("bod") && username?.toLowerCase().includes("nidhal") ?
              <>
                <Button style={{ color: "green", borderColor: "green" }}
                  onClick={() => UpdateBODNIDHAL()}>
                  Approve NIDHAL
                </Button>
                <Button style={{ color: "red", borderColor: "red" }} 
                onClick={() => CancelRecruitementBodNIDHA()}>
                  Refuse NIDHAL
                </Button>
                <Button onClick={Back}>

                  Return</Button>
              </>
              : null
            }



          </Space>

        </Form>
      }




    </div>

  );
};


export default EditRecruitementAbove;
