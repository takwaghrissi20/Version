import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select,
  Alert, Checkbox, DatePicker, notification
} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../@crema/components/AppConfirmationModal';
import { useDropzone } from 'react-dropzone';
import { values } from 'lodash';
import IntlMessages from '../../../@crema/helpers/IntlMessages';
import { useLocation } from 'react-router-dom';
const { MonthPicker } = DatePicker;
const UpdateDemobilization = () => {
  ///idMd
  const location = useLocation();
  const idMd = location.state ? location.state.idMd : null;
  const inputDate = location.state ? location.state.inputDate : null;
  const getsIdDemob = location.state ? location.state.getsIdDemob : null;
  const joysId = location.state ? location.state.joysId : null;
  const nameDemob = location.state ? location.state.nameDemob : null;
  const positionDemob = location.state ? location.state.positionDemob : null;
  const actualLocationDemob = location.state ? location.state.actualLocationDemob : null;
  const projName = location.state ? location.state.projName : null;
  const totalWorkingDays = location.state ? location.state.totalWorkingDays : null;
  const demobDateFromSite = location.state ? location.state.demobDateFromSite : null;
  const demobDesision = location.state ? location.state.demobDesision : null;
  const reasonDemob = location.state ? location.state.reason : null;
  const demobForMonth = location.state ? location.state.demobForMonth : null;
  const VisaType = location.state ? location.state.VisaType : null;
  const backToBackNeed = location.state ? location.state.backToBackNeed : null;
  const officeBackToback = location.state ? location.state.officeBackToback : null;
  const backToBackType = location.state ? location.state.backToBackType : null;
  const newRecruitment = location.state ? location.state.newRecruitment : null;
  const desiredDate = location.state ? location.state.desiredDate : null;
  const commentaire = location.state ? location.state.commentaire : null;
  const referenceMisionOrder = location.state ? location.state.referenceMisionOrder : null;
  const lsteDateDemob = location.state ? location.state.lsteDateDemob : null;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [lastDemobilization, setLastDemobilization] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [JosId, setJosId] = useState("");
  const [ticketReference, setTicketReference] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [passportnumber, setPassportnumber] = useState("");
  const [country, setCountry] = useState("");
  const [projects, setProjects] = useState([]);
  const [missionOrder, setMissionOrder] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectdemobdecision, setSelectdemobdecision] = useState("");

  const [selectedMission, setSelectedMission] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTrip, setSelectedTrip] = useState("");
  const [selectedRound, setSelectedRound] = useState("");
  const [selectTypeValue, setSelectTypeValue] = useState(null);
  const [mobDate, setMobDate] = useState("");
  const [travelDesert, setTravelDesert] = useState("");

  const [demobDate, setDemobDate] = useState("");
  const [DateTravel, setDateTravel] = useState("");

  const [projRef, setProjRef] = useState("");
  const [typetripdessert, setTypetripdessert] = useState("");
  const [urlCopy, setUrlCopy] = useState("");


  const [confirmationDemob, setConfirmationDemob] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [actualLocation, setActualLocation] = useState("");
  const [exit, setExit] = useState("");
  const [tolocation, setTolocation] = useState("");
  const [exitrentry, setExitrentry] = useState("");
  const [url, setUrl] = useState("");
  const [lastTravel, setLastTravel] = useState("");
  const [idlastTravel, setIdLastTravel] = useState("");
  const [projectRef, setProjectRef] = useState("");
  const [totalWorking, setTotalWorking] = useState(0);
  const [reason, setReason] = useState("");
  const [comments, setComments] = useState("");
  const [visatype, setVisatype] = useState("");
  const [isBackNeed, setIsBackNeed] = useState(false);
  const [isNoBackNeed, setNoIsBackNeed] = useState(false);
  const [isNeedoffice, setIsNeedoffice] = useState(false);
  const [isNeedsite, setIsNeedsite] = useState(false);
  const [isNewRecruitement, setIsNewRecruitement] = useState(false);
  const [DesiredDate, setDesiredDate] = useState("");
  const [type, setType] = useState("DeMobilization");
  const [demobmonth, setDemobmonth] = useState("");
  const [dateInput, setDateInput] = useState(new Date());
  const userRole = localStorage.getItem("role")
  const [getId, setGetId] = useState("");
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  //////////////////Find By id 
  const findIdDemob = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/getById?id=${idMd}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("reeesssss", responseData)
      setGetId(responseData)




    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };












  /////////////End Find By Id
  useEffect(() => {
    findIdDemob()
    // Reset employee-related state variables
    setName("");
    setPosition("");
    setPassportnumber("");
    setCountry("");
    setProjects([]);
    setMissionOrder([]);
    setSelectedProject("");
    setSelectedMission("");
    setSelectedType("");
    setSelectedTrip("");
    setSelectedRound("");
    setSelectTypeValue(null);
    setMobDate("");
    setTravelDesert("");
    setDemobDate("");
    setDateTravel("");
    setProjRef("");
    setTypetripdessert("");
    setUrlCopy("");

  }, [getsId])


  // Handle URL selection
  const handleUrlSelection = () => {
    const url = "https://cloud.gets-company.com.tn/index.php/f/1388374/";
    setUrl(url);
  };

  //Select Scan File Ticket :
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  };

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': [], // Use 'application/pdf' instead of '.pdf'
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });


  const thumbs = files.map((file) => {
    if (file.type === 'application/pdf') {
      return (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <a href={file.preview} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </div>
        </div>
      )
    } else {
      return (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img alt="preview" src={file.preview} style={img} />
          </div>
        </div>
      );
    }
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  ////End dowload file 
  const [form] = Form.useForm();

  const Type = [
    { type: 'Mobilzation' },
    { type: 'Demobilization' },

  ];
  const round = [
    { type: 'one Trip' },
    { type: 'Round Trip' },

  ];
  const trip = [
    { type: 'Flight' },
    { type: 'By Land' },

  ];
  const ExitType = [
    { type: 'Exit Reentry' },
    { type: 'Final Exit' },

  ];
  const demobdecision = [
    { type: 'To be Demob' },
    { type: 'Not To be Demob' },
    { type: 'Extension' },

  ];
  const visaType = [
    { type: 'Exit RE-ENTRY' },
    { type: 'Final Exit' },


  ];

  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };
  // const handleJosId = (event) => {
  //   setJosId(event.target.value);
  // };
  const handleTicketReference = (event) => {
    setTicketReference(event.target.value);
  };
  const handletypetripdessert = (event) => {
    setTypetripdessert(event.target.value);
  };
  const handleScanurl = (event) => {
    setUrlCopy(event.target.value);
  };

  const LastIndexTravel = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/last?type=${type}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log("data?.idMd", data?.idMd)
      setLastDemobilization(data?.idMd)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastDemobId = lastDemobilization + 1;
  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setName(responseData?.name);
      setJosId(responseData?.idJoys)
      setPosition(responseData?.position);
      setCountry(responseData?.destination);
      setPassportnumber(responseData?.passportnumber)

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId,
        projRef: project.projRef

      }));


      setProjects(projectsData);


    } catch (error) {
      console.error("Erreur lors de la récupération du Id:", error);
    }
  };
  const GetIdProject = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/getByname?name=${selectedProject}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setProjRef(responseData?.[0]?.projRef)



    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const GetMissionByProjName = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getByProjName?name=${selectedProject}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      const MissionData = responseData?.map(mission => ({
        missionId: mission.idMiss,

      }));

      setMissionOrder(MissionData)




    } catch (error) {
      console.error("Erreur lors de la récupération du Project Name:", error);
    }
  };
  //Notification



  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Demobilization Permission',
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
      description: 'Error Demobilization Permission',
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
  //GetMission By Id 
  const GetMissionById = async () => {
    console.log("selecteesss", selectedMission)
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getById?id=${selectedMission}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("Mission By Id", responseData)

      const lastTravel = responseData.travels.pop();
      console.log("Dernier voyage:", lastTravel);

      setLastTravel(lastTravel?.dateMob)
      setIdLastTravel(lastTravel?.idTravel)




    } catch (error) {
      console.error("Erreur lors de la récupération du MossionId:", error);
    }
  };
  //Site Clerck
  const handleAddDemobSiteClerck = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/add?id=${idlastTravel}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: formattedDate,
          // idMd:LastDemobId ,
          getsId: getsId,
          name: name,
          position: position,
          actualLocation: actualLocation,
          projName: selectedProject,
          dateMob: lastTravel,
          totalWorkingDays: totalWorking,
          dateDemob: demobDate,
          notif: 19


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Update Demobilation:", error);
    }
  };


  //End Site Clerck

  const handleUpdateDemob = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          commentaire: comments,
          desiredDate: DesiredDate,
          visaType: visatype,
          demobDesision: selectdemobdecision,
          reason: reason,
          dateMob: lastTravel,
          type: type,
          demobForMonth: demobmonth,
          officeBackToback: isNeedoffice,
          backToBackType: isNeedsite,
          newRecruitment: isNewRecruitement,
          backToBackNeed: isBackNeed,
          // backToBackType: isNoBackNeed,
          notif: 19

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Update Demob:", error);
    }
  };
  const handleUpdateConstruction = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          desiredDate: DesiredDate,
          visaType: visatype,
          demobDesision: selectdemobdecision,
          reason: reason,
          dateMob: demobmonth,
          type: type,
          demobForMonth: demobmonth,
          officeBackToback: isNeedoffice,
          backToBackType: isNeedsite,
          newRecruitment: isNewRecruitement,
          backToBackNeed: isBackNeed,
          commentaire: comments,
          notif: 14


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };
  {/*QC LEAD*/ }
  const handleQCLEAD = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          desiredDate: DesiredDate,
          visaType: visatype,
          demobDesision: selectdemobdecision,
          reason: reason,
          //
          // dateMob: demobmonth,
          type: type,
          demobForMonth: demobmonth,
          officeBackToback: isNeedoffice,
          backToBackType: isNeedsite,
          newRecruitment: isNewRecruitement,
          backToBackNeed: isBackNeed,
          commentaire: comments,
          //
          notif: 15


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };


  {/*END handleQCLEAD*/ }
  {/*handleLOGISTIC*/ }
  const handleLOGISTIC = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          desiredDate: DesiredDate,
          visaType: visatype,
          demobDesision: selectdemobdecision,
          reason: reason,
          //
          // dateMob: demobmonth,
          type: type,
          demobForMonth: demobmonth,
          officeBackToback: isNeedoffice,
          backToBackType: isNeedsite,
          newRecruitment: isNewRecruitement,
          backToBackNeed: isBackNeed,
          commentaire: comments,
          //
          notif: 16


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };
  {/*handleLOGISTIC*/ }
  const handleUpdateLeader = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          desiredDate: desiredDate,
          visaType: VisaType,
          demobDesision: demobDesision,
          reason: reasonDemob,
          dateMob: demobmonth,
          type: type,
          demobForMonth: demobForMonth,
          officeBackToback: officeBackToback,
          backToBackType: backToBackType,
          newRecruitment: newRecruitment,
          backToBackNeed: backToBackNeed,
          commentaire: commentaire,
          notif: 17


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update 0000", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };
  const handleUpdateOperation = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${idMd}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          inputDate: inputDate,
          getsId: getsIdDemob,
          joysId: joysId,
          name: nameDemob,
          position: positionDemob,
          actualLocation: actualLocationDemob,
          projName: projName,
          totalWorkingDays: totalWorkingDays,
          dateDemob: demobDateFromSite,
          desiredDate: desiredDate,
          visaType: VisaType,
          demobDesision: demobDesision,
          reason: reasonDemob,
          dateMob: demobmonth,
          type: type,
          demobForMonth: demobForMonth,
          officeBackToback: officeBackToback,
          backToBackType: backToBackType,
          newRecruitment: newRecruitment,
          backToBackNeed: backToBackNeed,
          commentaire: commentaire,
          notif: 20

        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');

      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData update 0000", responseData)
        openNotification('bottomRight')



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };


  useEffect(() => {
    LastIndexTravel();
    if (getsId) {
      findId();
    }
    GetIdProject()
    GetMissionByProjName()
    if (selectedMission) {
      GetMissionById()
    }



  }, [getsId, selectedProject, selectedMission]);

  const handleProjectChange = (value, option) => {

    setSelectedProject(value);

    const selectedProjectData = projects.find(project => project.projName === value);


    if (selectedProjectData) {
      setProjectRef(selectedProjectData.projRef);

    } else {
      setProjectRef("");
    }


  };
  const handleMissionChange = (value, option) => {
    setSelectedMission(value)
  };



  const handleSelectDemobdescition = (value) => {
    setSelectdemobdecision((value))
  };

  const handleTotalworking = (event) => {
    const newValue = parseInt(event.target.value);
    setTotalWorking(newValue);
  };


  const handleActualLocation = (event) => {
    const value = event.target.value;
    setActualLocation(value);
    console.log(value);
  };
  const handleExistRentry = (event) => {
    const value = event.target.value;
    setExitrentry(value);
    console.log(value);

  }

  const handleReason = (event) => {
    setReason(event.target.value);
  };
  const handleComments = (event) => {
    setComments(event.target.value);
  };

  console.log("colmme", comments)


  const goBack = () => {
    navigate(-1)
  }
  const BeforeUpdateDemob = () => {

    const DemobDecision = form.getFieldValue('DemobDecision');
    const Reason = form.getFieldValue('Reason');
    const demobMonth = form.getFieldValue('demobMonth');
    const visatype = form.getFieldValue('visatype');
    const DesiredDate = form.getFieldValue('DesiredDate');

    if (!DemobDecision || !Reason || !demobMonth || !visatype) {

      openNotificationWarning('bottomRight')

      return;
    }

    form.validateFields(['TotalWorkingDays', 'demobDate'])
      .then(values => {
        handleUpdateDemob()

        // setConfirmationDemob(true);
      })
      .catch(errorInfo => {
        openNotificationWarning('bottomRight')

      });
  };
  const BeforeSaveDemobSiteClerck = () => {
    //const comment = form.getFieldValue('comments');
    const TotalWorkingDays = form.getFieldValue('TotalWorkingDays');
    const demobDate = form.getFieldValue('demobDate');
    // const DemobDecision = form.getFieldValue('DemobDecision');
    // const Reason = form.getFieldValue('Reason');
    // const demobMonth = form.getFieldValue('demobMonth');
    // const visatype = form.getFieldValue('visatype');
    // const DesiredDate = form.getFieldValue('DesiredDate');

    // if (!TotalWorkingDays || !demobDate || !DemobDecision || !Reason || !demobMonth || !visatype ) {
    if (!TotalWorkingDays || !demobDate) {
      openNotificationWarning('bottomRight')

      return;
    }

    form.validateFields(['TotalWorkingDays', 'demobDate'])
      .then(values => {
        handleAddDemobSiteClerck()

        // setConfirmationDemob(true);
      })
      .catch(errorInfo => {
        openNotificationWarning('bottomRight')

      });
  };



  const handleConfirmationAddDemobilization = () => {
    setConfirmationDemob(true)
  }
  const handleCancelDemob = () => {
    onCancel(true);
  }

  const handleTypeVisa = (value) => {
    setVisatype((value))
  };
  // useEffect(() => {
  //   if (backToBackNeed) {
  //     setIsBackNeed(true);
  //   }
  // }, [backToBackNeed]);


  useEffect(() => {
    if (backToBackNeed) {
      setIsBackNeed(true);
    }
    else if (!backToBackNeed) {
      setNoIsBackNeed(true)
    }


  }, [backToBackNeed]);
  function BackNeed(e) {
    setIsBackNeed(e.target.checked)
    if (e.target.checked) {
      setNoIsBackNeed(false);

    }


  }

  function NoBackNeed(e) {
    setNoIsBackNeed(e.target.checked)
    if (e.target.checked) {
      setIsBackNeed(false);

    }

  }
  useEffect(() => {
    if (officeBackToback) {
      setIsNeedoffice(true);
    }
    else if (backToBackType) {
      setIsNeedsite(true)
    }
    else if (newRecruitment) {
      setIsNewRecruitement(true)
    }

  }, [officeBackToback]);

  function Needoffice(e) {
    setIsNeedoffice(e.target.checked)

  }
  function Needsite(e) {
    setIsNeedsite(e.target.checked)

  }
  function NewRecruitement(e) {

    setIsNewRecruitement(e.target.checked)

  }


  return (
    <>
      {userRole.includes("admin") &&

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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + LastDemobId} readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        defaultValue={dateInput ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                        value={formattedDate ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                      />
                      {/* <DatePicker
                       style={{ width: "100%", height: "30px" }}
                       placeholder='YYYY-MM-DD'
                       value={dateInput ? dayjs(dateInput, 'YYYY-MM-DD') : null}
                       onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
 
                     /> */}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        className='Input'
                        placeholder="Gets Id"
                        value={getsId}
                        onChange={handleInputGetsIdChange} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={JosId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={name}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={position} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                      rules={[{ required: true, message: 'Please select Actual Location ' }]}>


                      <Input
                        className='Input'
                        placeholder="Actual Location"
                        value={actualLocation}
                        onChange={handleActualLocation}
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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                    >
                      <FloatLabel >
                        <span className='modallabel'>Project Name:</span>
                        <Select
                          style={{ marginTop: "10px" }}
                          placeholder="Select Your Project Name"
                          onChange={handleProjectChange}
                          value={selectedProject}
                        >
                          {projects.map(project => (
                            <Option key={project.projId} value={project.projName}>
                              {project.projName}
                            </Option>
                          ))}
                        </Select>
                      </FloatLabel>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly


                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                    >
                      <FloatLabel >
                        <span className='modallabel'>Reference Mision Order</span>
                        <Select
                          style={{ marginTop: "10px" }}
                          placeholder="Select Your Mision Order"
                          onChange={handleMissionChange}
                          value={selectedMission}
                        >
                          {missionOrder.map(p => (
                            <Option key={p.missionId} value={p.missionId}>
                              {"MAO -" + p.missionId}
                            </Option>
                          ))}
                        </Select>
                      </FloatLabel>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={lastTravel}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"
                      rules={[{ required: true, message: 'Please select Total Working Days' }]}
                    >
                      <Input
                        className='Input'
                        placeholder="Total Working Days"
                        type="number"
                        value={totalWorking ? `${totalWorking} /days` : ''}
                        onChange={handleTotalworking}

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                      rules={[{ required: true, message: 'Please select Date Demobilization' }]}>
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        value={demobDate ? dayjs(demobDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDemobDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                      rules={[{ required: true, message: 'Please select Demob Decision' }]}
                    >
                      <Select
                        onChange={handleSelectDemobdescition}
                        placeholder="Demobilization Decision" allowClear>
                        {demobdecision.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason :"
                      rules={[{ required: true, message: 'Please select Reason' }]}
                    >
                      <Input
                        className='Input'
                        placeholder="Reason"
                        value={reason}
                        onChange={handleReason}


                      />


                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'
                      rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}
                    >
                      <MonthPicker
                        style={{ width: "100%", height: "30px" }}
                        value={demobmonth ? dayjs(demobmonth, 'YYYY-MM') : null}
                        onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM') : '')}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                      rules={[{ required: true, message: 'Please select Visa Type' }]}
                    >
                      <Select
                        onChange={handleTypeVisa}
                        placeholder="Visa Type" allowClear>
                        {visaType.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={12}>
                   <Form.Item label='Demobilization For the Month' name='demobMonth'
                     rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}>
                     <DatePicker
                       style={{ width: "100%", height: "30px" }}
                       value={demobmonth ? dayjs(demobmonth, 'YYYY-MM-DD') : null}
                       onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                     />
                   </Form.Item>
                 </Col> */}

                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'


                      >
                        <Checkbox checked={isBackNeed} onChange={BackNeed}>

                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={isNoBackNeed} onClick={NoBackNeed}>
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back'


                      >
                        <Checkbox style={{ margin: "8px" }} checked={isNeedoffice} onChange={Needoffice}>

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNeedsite} onClick={Needsite}>
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNewRecruitement} onClick={NewRecruitement}>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'
                      rules={[{ required: true, message: 'Please select Desired Date' }]}
                    >
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder='YYYY-MM-DD'
                        value={DesiredDate ? dayjs(DesiredDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDesiredDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='InputComment'
                        placeholder="Comments "
                        value={comments}
                        onChange={handleComments}
                      />

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
            <Button onClick={handleCancelDemob}>Cancel</Button>
            <Button
              onClick={BeforeSaveDemob}
              disabled={!selectedMission || !selectedProject || !getsId}
              type='primary'
              htmlType='submit'>
              Save
            </Button>
          </Space>
        </Form>
      }
      {/* //Site Clecrk */}
      {userRole.includes("HSE Site Manager") &&
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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + idMd}

                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <Input
                        placeholder={inputDate}
                        readOnly
                      />
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    defaultValue={dateInput ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    value={formattedDate ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                  /> */}
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    placeholder='YYYY-MM-DD'
                    value={dateInput ? dayjs(dateInput, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                  /> */}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        placeholder={getsIdDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={joysId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={nameDemob}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={positionDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                    >
                      <Input
                        className='Input'
                        placeholder={actualLocationDemob}

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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                      label='Project Name:'
                    >
                      <Input
                        className='Input'
                        placeholder={projName}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly




                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                      label="Reference Mision Order"
                    >
                      <Input
                        className='Input'
                        placeholder={getId?.referenceMisionOrder}
                        readOnly

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={getId?.lsteDateDemob}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"

                    >
                      <Input
                        className='Input'
                        placeholder={totalWorkingDays}
                        readOnly

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                    >
                      <Input
                        className='Input'
                        placeholder={demobDateFromSite}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                      rules={[{ required: true, message: 'Please select Demob Decision' }]}
                    >
                      <Select
                        onChange={handleSelectDemobdescition}
                        placeholder="Demobilization Decision" allowClear>
                        {demobdecision.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason :"
                      rules={[{ required: true, message: 'Please select Reason' }]}
                    >
                      <Input
                        className='Input'
                        placeholder="Reason"
                        value={reason}
                        onChange={handleReason}


                      />


                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'
                      rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}
                    >
                      <MonthPicker
                        style={{ width: "100%", height: "30px" }}
                        value={demobmonth ? dayjs(demobmonth, 'YYYY-MM') : null}
                        onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM') : '')}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                      rules={[{ required: true, message: 'Please select Visa Type' }]}
                    >
                      <Select
                        onChange={handleTypeVisa}
                        placeholder="Visa Type" allowClear>
                        {visaType.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={12}>
                   <Form.Item label='Demobilization For the Month' name='demobMonth'
                     rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}>
                     <DatePicker
                       style={{ width: "100%", height: "30px" }}
                       value={demobmonth ? dayjs(demobmonth, 'YYYY-MM-DD') : null}
                       onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                     />
                   </Form.Item>
                 </Col> */}

                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'
                      >
                        <Checkbox checked={isBackNeed} onChange={BackNeed}>

                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={isNoBackNeed} onClick={NoBackNeed}>
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back'


                      >
                        <Checkbox style={{ margin: "8px" }} checked={isNeedoffice} onChange={Needoffice}>

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNeedsite} onClick={Needsite}>
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNewRecruitement} onClick={NewRecruitement}>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'
                      rules={[{ required: true, message: 'Please select Desired Date' }]}
                    >
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder='YYYY-MM-DD'
                        value={DesiredDate ? dayjs(DesiredDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDesiredDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='InputComment'
                        placeholder="Comments "
                        value={comments}
                        onChange={handleComments}
                      />

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
            <Button onClick={handleCancelDemob}>Cancel</Button>
            <Button
              onClick={BeforeUpdateDemob}
              type='primary'
              htmlType='submit'>
              Update
            </Button>
          </Space>
        </Form>
      }
      {/*QC lEAD*/}
      {(userRole.includes("QC Lead") || userRole.includes("LOGISTIC")) && (
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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + idMd}

                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <Input
                        placeholder={inputDate}
                        readOnly
                      />
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    defaultValue={dateInput ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    value={formattedDate ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                  /> */}
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    placeholder='YYYY-MM-DD'
                    value={dateInput ? dayjs(dateInput, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                  /> */}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        placeholder={getsIdDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={joysId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={nameDemob}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={positionDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                    >
                      <Input
                        className='Input'
                        placeholder={actualLocationDemob}

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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                      label='Project Name:'
                    >
                      <Input
                        className='Input'
                        placeholder={projName}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly




                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                      label="Reference Mision Order"
                    >
                      <Input
                        className='Input'
                        placeholder={getId?.referenceMisionOrder}
                        readOnly



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={getId?.lsteDateDemob}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"

                    >
                      <Input
                        className='Input'
                        placeholder={totalWorkingDays}
                        readOnly

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                    >
                      <Input
                        className='Input'
                        placeholder={demobDateFromSite}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                    >
                      <Select
                        onChange={handleSelectDemobdescition}
                        placeholder="Demobilization Decision"
                        defaultValue={demobDesision} // Setting default value
                        allowClear>
                        {demobdecision.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>

                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason :"

                    >
                      <Input
                        className='Input'
                        placeholder={reasonDemob}
                        value={reason}
                        onChange={handleReason}
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'

                    >
                      <MonthPicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder={demobForMonth}
                        value={demobmonth ? dayjs(demobmonth, 'YYYY-MM') : null}
                        onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM') : '')}
                      />


                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                    >
                      <Select
                        onChange={handleTypeVisa}
                        placeholder="Visa Type"
                        defaultValue={VisaType}
                        allowClear>
                        {visaType.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>

                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={12}>
                   <Form.Item label='Demobilization For the Month' name='demobMonth'
                     rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}>
                     <DatePicker
                       style={{ width: "100%", height: "30px" }}
                       value={demobmonth ? dayjs(demobmonth, 'YYYY-MM-DD') : null}
                       onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                     />
                   </Form.Item>
                 </Col> */}

                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'


                      >
                        <Checkbox checked={isBackNeed} onChange={BackNeed}>

                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={isNoBackNeed} onClick={NoBackNeed}>
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back'


                      >
                        <Checkbox style={{ margin: "8px" }}
                          checked={isNeedoffice} onChange={Needoffice}>

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNeedsite} onClick={Needsite} >
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNewRecruitement} onClick={NewRecruitement}>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'

                    >
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder={desiredDate}
                        value={DesiredDate ? dayjs(DesiredDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDesiredDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='InputComment'
                        placeholder={commentaire}
                        value={comments}
                        onChange={handleComments}
                      ></Input>

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
            <Button onClick={handleCancelDemob}>Cancel</Button>
            {(userRole.includes("QC Lead")) && (

              <Button
                onClick={handleQCLEAD}
                type='primary'
                htmlType='submit'>
                UpdateQCLEAD
              </Button>
            )}
            {(userRole.includes("LOGISTIC")) && (
              <Button
                onClick={handleLOGISTIC}
                type='primary'
                htmlType='submit'>
                Update LOGISTIC
              </Button>
            )}

          </Space>
        </Form>
      )
      }


      {/*End QC lEAD*/}
      {/*Construction Manager*/}
      {userRole.includes("Construction") &&
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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + idMd}

                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <Input
                        placeholder={inputDate}
                        readOnly
                      />
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    defaultValue={dateInput ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    value={formattedDate ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                  /> */}
                      {/* <DatePicker
                    style={{ width: "100%", height: "30px" }}
                    placeholder='YYYY-MM-DD'
                    value={dateInput ? dayjs(dateInput, 'YYYY-MM-DD') : null}
                    onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                  /> */}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        placeholder={getsIdDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={joysId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={nameDemob}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={positionDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                    >
                      <Input
                        className='Input'
                        placeholder={actualLocationDemob}

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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                      label='Project Name:'
                    >
                      <Input
                        className='Input'
                        placeholder={projName}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly




                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                      label="Reference Mision Order"
                    >
                      <Input
                        className='Input'
                        placeholder={"MAO-" + getId?.referenceMisionOrder}
                        readOnly



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={getId?.lsteDateDemob}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"

                    >
                      <Input
                        className='Input'
                        placeholder={totalWorkingDays}
                        readOnly

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                    >
                      <Input
                        className='Input'
                        placeholder={demobDateFromSite}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                    >
                      <Select
                        onChange={handleSelectDemobdescition}
                        placeholder="Demobilization Decision"
                        defaultValue={demobDesision} // Setting default value
                        allowClear>
                        {demobdecision.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>

                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name='Reason'
                      label="Reason"
                      rules={[
                        {
                          required: visatype === 'Final Exit',
                          message: 'Please provide a reason for Final Exit'
                        }
                      ]}
                    >
                      <Input
                        className='Input'
                        placeholder="Reason"
                        value={reason}
                        onChange={handleReason}
                      />
                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason" >
                      <Input
                        className='Input'
                        placeholder={reasonDemob}
                        value={reason}
                        onChange={handleReason}
                      />

                    </Form.Item>
                  </Col> */}
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'

                    >
                      <MonthPicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder={demobForMonth}
                        value={demobmonth ? dayjs(demobmonth, 'YYYY-MM') : null}
                        onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM') : '')}
                      />


                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                    >
                      <Select
                        onChange={handleTypeVisa}
                        placeholder="Visa Type"
                        defaultValue={VisaType}
                        allowClear>
                        {visaType.map(type => (
                          <Option key={type.type} value={type.type}>
                            {type.type}
                          </Option>
                        ))}
                      </Select>

                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={12}>
                   <Form.Item label='Demobilization For the Month' name='demobMonth'
                     rules={[{ required: true, message: 'Please select Date Demobilization of the month' }]}>
                     <DatePicker
                       style={{ width: "100%", height: "30px" }}
                       value={demobmonth ? dayjs(demobmonth, 'YYYY-MM-DD') : null}
                       onChange={(value) => setDemobmonth(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                     />
                   </Form.Item>
                 </Col> */}

                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'


                      >
                        <Checkbox checked={isBackNeed} onChange={BackNeed}>

                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={isNoBackNeed} onClick={NoBackNeed}>
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back'


                      >
                        <Checkbox style={{ margin: "8px" }}
                          checked={isNeedoffice} onChange={Needoffice}>

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNeedsite} onClick={Needsite} >
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={isNewRecruitement} onClick={NewRecruitement}>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'

                    >
                      <DatePicker
                        style={{ width: "100%", height: "30px" }}
                        placeholder={desiredDate}
                        value={DesiredDate ? dayjs(DesiredDate, 'YYYY-MM-DD') : null}
                        onChange={(value) => setDesiredDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='InputComment'
                        placeholder={commentaire}
                        value={comments}
                        onChange={handleComments}
                      ></Input>

                    </Form.Item>
                  </Col>
                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

          {/* UpdateConstruction**/}
          <Space
            size={15}
            style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
          >
            <Button onClick={handleCancelDemob}>Cancel</Button>
            <Button
              onClick={handleUpdateConstruction}
              type='primary'
              htmlType='submit'>
              Save
            </Button>
          </Space>
        </Form>

      }
      {/* EndUpdateConstruction**/}

      {/*Project Leader*/}
      {(userRole.includes("bod")) && (
        < Form
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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + idMd}

                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <Input
                        placeholder={inputDate}
                        readOnly
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        placeholder={getsIdDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={joysId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={nameDemob}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={positionDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                    >
                      <Input
                        className='Input'
                        placeholder={actualLocationDemob}

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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                      label='Project Name:'
                    >
                      <Input
                        className='Input'
                        placeholder={projName}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly




                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                      label="Reference Mision Order"
                    >
                      <Input
                        className='Input'
                        placeholder={getId?.referenceMisionOrder}

                        readOnly



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={getId?.lsteDateDemob}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"

                    >
                      <Input
                        className='Input'
                        placeholder={totalWorkingDays}
                        readOnly

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                    >
                      <Input
                        className='Input'
                        placeholder={demobDateFromSite}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                    >
                      <Input
                        className='Input'
                        placeholder={demobDesision}
                        readOnly

                      />

                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason :"

                    >
                      <Input
                        className='Input'
                        placeholder={reasonDemob}
                        readOnly

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'

                    >
                      <Input
                        className='Input'
                        placeholder={demobForMonth}
                        readOnly

                      />



                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                    >
                      <Input
                        className='Input'
                        placeholder={VisaType}
                        readOnly

                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'


                      >
                        <Checkbox checked={backToBackNeed} readOnly>
                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={!backToBackNeed} readOnly >
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back'


                      >
                        <Checkbox style={{ margin: "8px" }}


                          checked={officeBackToback} readOnly>

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={backToBackType} readOnly >
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={newRecruitment} readOnly>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'
                    >
                      <Input
                        className='Input'
                        placeholder={desiredDate}
                        readOnly

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='Input'
                        placeholder={commentaire}
                        readOnly

                      />


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
            <Button onClick={handleCancelDemob}>Cancel</Button>
            {userRole.includes("Leader") &&
              <Button
                onClick={handleUpdateLeader}
                type='primary'
                htmlType='submit'>
                UpdateLeader
              </Button>
            }
            {userRole.includes("Operation") &&
              <Button
                onClick={handleUpdateOperation}
                type='primary'
                htmlType='submit'>
                UpdateOperation
              </Button>
            }

          </Space>
        </Form >
      )
      }
      {/*End Project Leader*/}
      {/*Bod */}
      {(userRole.includes("Leader") || userRole.includes("Operation")) && (
        < Form
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
              <Typography.Title level={4}>Demobilization Permission</Typography.Title>
            </div>
          </div>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />

          <AppRowContainer>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Information Demobilization</Typography.Title>
            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item label='Reference' name='refdemob'>
                      <Input placeholder={"DP -" + idMd}

                        readOnly={true} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Date' name='Date :'
                    >
                      <Input
                        placeholder={inputDate}
                        readOnly
                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Gets Id' name='Gets Id '>
                      <Input
                        placeholder={getsIdDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Jos Id' name='Jos Id'>
                      <Input
                        className='Input'
                        // placeholder="Jos Id"
                        placeholder={joysId}
                        readOnly
                      // value={JosId}


                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Employee Name' name='PersonName'>
                      <Input
                        className='Input'
                        placeholder={nameDemob}
                        readOnly />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Position' name='Position'>
                      <Input
                        readOnly={true}
                        className='Input'
                        placeholder={positionDemob} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Actual Location' name='ActualLocation'
                    >
                      <Input
                        className='Input'
                        placeholder={actualLocationDemob}

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
              <Typography.Title level={5}>Mob/Demob Information</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectName'
                      label='Project Name:'
                    >
                      <Input
                        className='Input'
                        placeholder={projName}

                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='projectRef'
                      label="project Ref :"
                    >
                      <Input
                        className='Input'
                        placeholder={projectRef}
                        readOnly




                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Mission'
                      label="Reference Mision Order"
                    >
                      <Input
                        className='Input'
                        placeholder={getId?.referenceMisionOrder}
                        readOnly



                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="LastMob"
                      label="Last Mob Date">

                      <Input
                        className='Input'
                        placeholder={getId?.lsteDateDemob}
                        readOnly



                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='TotalWorkingDays'
                      label="Total Working Days :"

                    >
                      <Input
                        className='Input'
                        placeholder={totalWorkingDays}
                        readOnly

                      />



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Contractual Demob Date' name='demobDate'
                    >
                      <Input
                        className='Input'
                        placeholder={demobDateFromSite}
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
              <Typography.Title level={5}>Demobilization Permission</Typography.Title>
            </Col>

            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="DemobDecision"
                      label="Demobilization Decision"
                    >
                      <Input
                        className='Input'
                        placeholder={demobDesision}
                        readOnly

                      />

                    </Form.Item>
                  </Col>


                  <Col xs={24} md={12}>
                    <Form.Item className='form-field'
                      name='Reason'
                      label="Reason :"

                    >
                      <Input
                        className='Input'
                        placeholder={reasonDemob}
                        readOnly

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Demobilization For the Month'
                      name='demobMonth'

                    >
                      <Input
                        className='Input'
                        placeholder={demobForMonth}
                        readOnly

                      />



                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="visatype"
                      label="Visa Type"
                    >
                      <Input
                        className='Input'
                        placeholder={VisaType}
                        readOnly

                      />



                    </Form.Item>
                  </Col>


                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Back To Back :'
                        name='Back'


                      >
                        <Checkbox checked={backToBackNeed} readOnly>
                          <IntlMessages id='demob.Need' />
                        </Checkbox>
                        <Checkbox checked={!backToBackNeed} readOnly >
                          <IntlMessages id='demob.No.Need' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Type of Back To Back (In Case of Need back to back please specify the type)'
                        name='Back' >
                        <Checkbox style={{ margin: "8px" }}
                          checked={officeBackToback} readOnly >

                          <IntlMessages id='demob.Needoffice' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={backToBackType} readOnly >
                          <IntlMessages id='demob.NeedSite' />
                        </Checkbox>
                        <Checkbox style={{ margin: "8px" }} checked={newRecruitment} readOnly>
                          <IntlMessages id='demob.NewRecuitement' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label='Desired Date' name='DesiredDate'
                    >
                      <Input
                        className='Input'
                        placeholder={desiredDate}
                        readOnly

                      />

                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item label='Comment ' name='comments'
                    >
                      <Input
                        className='Input'
                        placeholder={commentaire}
                        readOnly

                      />


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
            <Button onClick={handleCancelDemob}>Cancel</Button>
            {userRole.includes("Leader") &&
              <Button
                onClick={handleUpdateLeader}
                type='primary'
                htmlType='submit'>
                UpdateLeader
              </Button>
            }


          </Space>
        </Form >
      )
      }
      {/*End BOD*/}


      {
        confirmationDemob ? (
          <ConfirmationModal
            open={confirmationDemob}
            paragraph={'Are you sure you Add Demobilization Permission'}
            onDeny={setConfirmationDemob}
            onConfirm={handleAddDemob}
            modalTitle="Add Demobilization Permission"
            handleConfirmationAddDemobilization={handleConfirmationAddDemobilization}
          />
        ) : null
      }
      {
        isCancel ? (
          <ConfirmationModal
            open={isCancel}
            paragraph={'Are you sure you canceled All data is lost?'}
            onDeny={onCancel}
            onConfirm={goBack}
            modalTitle="Cancel Demobilization Permission "
            handleCancelDemob={handleCancelDemob}
          />
        ) : null
      }
    </>
  );
};

export default UpdateDemobilization;
