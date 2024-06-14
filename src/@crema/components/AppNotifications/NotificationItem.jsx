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
  const [notif1, setNotif1] = useState([])
  const [notifHR, setNotifHR] = useState([])
  const [notifOperation, setNotifOperation] = useState([])
  const [notifPlanner, setNotifPlanner] = useState([])
  const [findIdCodeJob, setFindIdCodeJob] = useState("")
  const [codeJob, setCodeJob] = useState("")
  const userEmail = localStorage.getItem("email");
  const [project, setProject] = useState([])
  const [listOperationproject, setListOperationproject] = useState([])
  console.log("userEmail ", userEmail)

  //Projevt By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const ProjectName = data.map(project => project.projName)
        setProject(ProjectName)


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
      console.log("testtttt", data)
      const FilterDataDepOperation = data.filter(list => list.dep === "operation")
      console.log("eeervvggg", FilterDataDepOperation)
      // Adding projname to each object in FilterDataDepOperation
      const updatedFilterDataDepOperation = FilterDataDepOperation.map(item => ({
        ...item,
        //   projname: 'CONSTRUCTION OF PIPING MATERIAL'
      }));


      console.log("Updated eeervvggg", updatedFilterDataDepOperation);
      const FilterProject = FilterDataDepOperation.filter(project =>
         console.log("eeervvggg Testtttt",project)     
       )

      console.log("eeervvggg 11111", FilterProject)
      const filteredData = data.filter(item => (item.notfi === 0 && item.dep !== "operation")
        || (item.p === 7 && item.dep === "operation"));
      setNotif1(filteredData)
      //Notif de HR 
      const filteredDataHr = data.filter(item => (item.notfi === 3));
      setNotifHR(filteredDataHr)
      //Notif Operationn
      const filteredNotificationOperatipnData = data.filter(item => (item.notfi === 0
        && item.dep.includes("Engineering")) ||
        (item.notfi === 4 && item.dep.includes("operation")));
      setNotifOperation(filteredNotificationOperatipnData)
      //Notif PLanner 

      const filteredNotificationPlannerData = data.filter(item => (item.notfi === 7
        || item.notfi === 5));
      ///Project Name
      //    if (project.includes(projectname)) {
      //     console.log(`${projectname} est dans la liste.`);
      // } else {
      //     console.log(`${projectname} n'est pas dans la liste.`);
      // }
      //   setNotifOperation(filteredNotificationOperatipnData)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}`, {
        method: 'POST',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("findIdtttt", responseData)
        setFindIdCodeJob(responseData)
        setCodeJob(findIdCodeJob?.jobCode)
        handleAddRecruitementOpen()



      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const handleAddRecruitementOpen = () => {
    navigate(`/Hr/Recruitement&Interview/Recruitement/View/codeJob=${codeJob}`, {
      state: {
        id: findIdCodeJob?.jobCode,
        dep: findIdCodeJob?.dep,
        idemp: findIdCodeJob?.idemp,
        requestName: findIdCodeJob?.requestName,
        position: findIdCodeJob?.position,
        DesiredDate: findIdCodeJob?.desiredDate,
        projectName: findIdCodeJob?.projectName,
        projRef: findIdCodeJob?.projRef,
        type: findIdCodeJob?.type,
        affectedTo: findIdCodeJob?.affectedTo,
        requestedDicipline: findIdCodeJob?.requestedDicipline,
        Level: findIdCodeJob?.experience,
        Numbervacancies: findIdCodeJob?.totalNumber,
        certif: findIdCodeJob?.certif,
        nbExperience: findIdCodeJob?.nbExperience,
        recruttrequestDate: findIdCodeJob?.recruttrequestDate,
        projCode: findIdCodeJob?.projRef,
        type: findIdCodeJob?.type,
        exDep: findIdCodeJob?.exDep,
        oDep: findIdCodeJob?.oDep,
        comentPlaner: findIdCodeJob?.comentPlaner,
        notif1: notif1,
        notif: findIdCodeJob?.notif



        // signatureBod:findIdData?.signatureBod,
        // signatureHod:findIdData?.signatureHod,

      }

    });





    //onViewRecruitement(true);
  };
  useEffect(() => {
    AllNotif()
    fetchProjectEmail()
  }, [codeJob]);

  return (
    <>
      {user.includes("bod") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notif1.map((p, index) => (
            <>
              <button onClick={() => findId(p?.codejob)}>

                Recruitement Request with Code Job :<span style={{ color: "red" }}>{p.codejob}</span> </button>

            </>

          ))}



        </StyledNotifyListItem>
        : null

      }
      {user.includes("Administrator") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifHR.map((p, index) => (
            <>
              <button onClick={() => findId(p?.codejob)}>

                Recruitement Request with Code Job :<span style={{ color: "red" }}>{p.codejob}</span> </button>

            </>

          ))}



        </StyledNotifyListItem>
        : null

      }
      {user == "Operation  Manager" ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifOperation.map((p, index) => (
            <>
              <button onClick={() => findId(p?.codejob)}>

                Recruitement Request with Code Job :<span style={{ color: "red" }}>{p.codejob}</span> </button>

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
  item: PropTypes.object.isRequired,
};
