import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNotifyListItem,
  StyledNotifyMsgAvatar,
} from './NotificationItem.styled';
import { useNavigate } from "react-router-dom";

const NotificationItem = ({ user }) => {
  const navigate = useNavigate();
  const [allnotif, setAllNotif] = useState([]);
  const [notifBod, setNotifBod] = useState([]);
  const [notifHR, setNotifHR] = useState([]);
  const [notifOperation, setNotifOperation] = useState([]);
  const [notifPlanner, setNotifPlanner] = useState([]);
  const [findIdData, setFindIdData] = useState([]);
  const [codeJob, setCodeJob] = useState("");
  const userEmail = localStorage.getItem("email");
  const [project, setProject] = useState([]);
  const [listOperationproject, setListOperationproject] = useState([]);
  console.log("userEmail ", userEmail);

  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const ProjectName = data.map(project => project.projName);
        console.log("ProjectName ", ProjectName);
        setProject(ProjectName);
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };

  const AllNotif = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/notif/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
      const data = await response.json();
      setAllNotif(data);
      const filteredData = data.filter(item => (item.dep !== 'operation' && item.dep !== 'engineer' &&
        item.notfi === 2) || (item.notfi === 7 && item.dep === "operation") || (item.notfi === 7 && item.dep.includes('Engineering'))
      );
      setNotifBod(filteredData);
      const FilterOperationManager = data.filter(item => (item.notfi === 8 && item.dep.includes('Engineering')) ||
        (item.notfi === 4 && item.dep === "operation")
      );
      setNotifOperation(FilterOperationManager);

      ///////////////// Planner 
      const filteredPlanner = data.filter(item =>
        (item.dep === 'operation' && item.notfi === 6 && project.includes(item.projName)) || (
          item.dep === 'operation' && item.notfi === 7 && project.includes(item.projName) ||
          (item.dep === 'operation' && item.notfi === 4 && project.includes(item.projName))
        )
      );
      console.log("project", project);
      console.log("filteredDataByProject", filteredPlanner);
      setNotifPlanner(filteredPlanner);

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const handleEditRecruitementOpen = (code) => {  
    navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${code.jobCode}`, {
      state: {
        jobCode:code.jobCode,
        notif:code?.notif,
        dep: code?.dep,
        idemp:code?.idemp ,
        requestName: code?.requestName,
        dateInputRecrut:code?.dateInputRecrut,
        position: code?.position,
        recruttrequestDate:code?. recruttrequestDate,
        DesiredDate: code?.desiredDate,
        projectName: code?.projectName,
        projRef: code?.projRef,
        type: code?.type,
        affectedTo: code?.affectedTo,
        requestedDicipline: code?.requestedDicipline,
        Level: code?.experience,
        Numbervacancies: code?.totalNumber,
        certif:code?.certif,
        nbExperience: code?.nbExperience,    
        exDep: code?.exDep,
        oDep: code?.oDep,
        comentPlaner: code?.comentPlaner,
        signatureBod:code?.signatureBod,
        signatureHod: code?.signatureHod,
      }
    });
  }

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFindIdData(responseData);
      setCodeJob(responseData.jobCode);
      handleEditRecruitementOpen(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  useEffect(() => {
    AllNotif();
    fetchProjectEmail();
  }, [project,notifPlanner]);

  return (
    <>
      {user.includes("bod") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifBod.map((p, index) => (
            <div key={index}>
              <button  className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{  color: "red",fontWeight:"bold"  }}>{p.codejob}</span> </button>
                <div className='Space'></div>
            
            </div>
          ))}
        </StyledNotifyListItem>
        : null
      }
      {user.includes("admin") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {allnotif.map((p, index) => (
            <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{  color: "red",fontWeight:"bold" }}>{p.codejob}</span> </button>
                <div className='Space'></div>
           
            </div>
          ))}
        </StyledNotifyListItem>
        : null
      }
      {user === "Operation  Manager" ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification(Operation Manager) </p>
          {notifOperation.map((p, index) => (
            <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job  :<span style={{  color: "red",fontWeight:"bold" }}>{p.codejob}</span> </button>
                <div className='Space'></div>
            </div>
          ))}
        </StyledNotifyListItem>
        : null
      }
      {user.includes("Planner") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifPlanner.map((p, index) => (
            <>
            <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{ color: "red",fontWeight:"bold" }}>RRS-{p.codejob}</span> </button>
            </div>
            <div className='Space'></div>
            </>
          ))}
        </StyledNotifyListItem>
        : null
      }
    </>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  user: PropTypes.string.isRequired,
};
