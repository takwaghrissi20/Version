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
  const [notifManager, setNotifManager] = useState([]);
  const [findIdData, setFindIdData] = useState([]);
  const [codeJob, setCodeJob] = useState("");
  const userEmail = localStorage.getItem("email");

  const [project, setProject] = useState([]);
  const [idgets, setIdgets] = useState("");
  const [id, setId] = useState("");
  const [recrutementInterviewNotif, setRecrutementInterviewNotif] = useState([]);
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
        setIdgets(data?.getsId)
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
  //Get profile By Email
  const GetProfileEmployess = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}`, {
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
      setId(data.getsId)
      console.log("dataprofile", data.getsId)
    } catch (error) {
      console.error('Erreur lors de la récupération getByEmail', error);
    }
  }; 

  
  //End Fetch Recruitement

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
      console.log("dattta notif",data)
      setAllNotif(data);
      const filteredData = data.filter(item => 
        (item.notfi === 4 && (item.dep.includes('Operation') && (item.oDep || item.xDep) ||
        item.notfi === 7 && item.dep.includes('Engineering'))  ) ||
        (item.notfi === 2 ) ||
        (item.notfi === 7 && item.dep.includes('Operation') && (item.oDep || item.xDep))

      );
      
      
      // const filteredData = data.filter(item => ((!item.dep.includes('Operation')&& (!item.dep.includes('Engineering'))) &&
      //   item.notfi === 2) || (item.notfi === 7 && item.dep.includes('Operation')) || 
      //   (item.notfi === 7 && item.dep.includes('Engineering'))
      // );
      setNotifBod(filteredData);
      //////NotifffHrAdminstrotor
     console.log("tetstttt notif",allnotif)
     
      const filteredDataHrAdministartor = data.filter(item => (item.notfi === 3) || 
        (item.notfi === 1 )
      );
      setNotifHR(filteredDataHrAdministartor)


      //End Notif Hr ADministrator
      const FilterOperationManager = data.filter(item => (item.notfi === 8 && item.dep.includes('Engineering')) ||
        (item.notfi === 4 && item.dep.includes('Operation') && (item.oDep || item.xDep) )
      );
      setNotifOperation(FilterOperationManager);
      ///////////////// Planner 
      const filteredPlanner = data.filter(item =>
         (item.notfi === 6 && item.dep.includes('Operation')&& project.includes(item.projName)) ||
         ( item.notfi === 7 && project.includes(item.projName) && (item.dep.includes('Operation'))) ||
         ( item.notfi === 4 && project.includes(item.projName) && (item.dep.includes('Operation')))
       
    );
    //   const filteredPlanner3 = data.filter(item => {
    //     const condition1 = item?.dep?.includes("Operation") && item.notfi === 6;
    //     const condition2 = item.dep.includes("Operation") && item.notfi === 7 && project.includes(item.projName);
    //     const condition3 = item.dep.includes("Operation") && item.notfi === 4 && project.includes(item.projName);
    
    //     console.log(`Item ID: ${item.id}, dep: ${item.dep}, notfi: ${item.notfi}, projName: ${item.projName}`);
    //     console.log(`Condition 1: ${condition1}, Condition 2: ${condition2}, Condition 3: ${condition3}`);
    
    //     return condition1 || condition2 || condition3;
    // });
    
    console.log("project", project);
    console.log("filteredDataByProject", filteredPlanner);
    setNotifPlanner(filteredPlanner);
    
      const filteredPlanner0 = data.filter(item =>
       
        (item?.dep?.includes("Operation") && item.notfi=== 6 && project?.includes(item.projName)) || (
         item.dep.includes("Operation") && item.notfi === 7 && project.includes(item.projName) ||
        (item.dep.includes("Operation") && item.notfi === 4 && project.includes(item.projName))

        )
      );
     
      ///Notif Interview Manager
      console.log("recruiiirrrmmm",recrutementInterviewNotif)
      
      const filteredManager = data.filter(item =>
        ( item.notfi === 0 && item.type.includes("Interview") ) 
        
      );
      setNotifManager(filteredManager)

    } catch (error) {
      console.error('Erreur lors de la récupération profile notif', error);
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
    //Fetch all  Recruitement
    const fetchRecruitementByEmployees = async () => {
      try {
        
        const url = `https://dev-gateway.gets-company.com/api/v1/re/list`;
        const response = await fetch(url, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          const filterRecruitement=data.filter(p=>p.idemp===id)
          setRecrutementInterviewNotif(filterRecruitement)
          console.log("fetchRecruitementByEmployees YYYYY",filterRecruitement)
          console.log("iiiuuuhghggg",allnotif)
          // console.log("filterRecruitement",filterRecruitement)
        } else {
          console.error("Erreur lors de la récupération du recruitement:", response.status);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du  recruitement:", error);
      }
    };

  useEffect(() => {
    AllNotif();
    fetchProjectEmail();
    fetchRecruitementByEmployees()
    GetProfileEmployess()
  }, [project,notifPlanner,idgets]);

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
        {user.includes("Administrator") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifHR.map((p, index) => (
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
      {/*Interviewww */}
      {/* {user.includes("Manager") ?
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
      } */}
    </>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  user: PropTypes.string.isRequired,
};
