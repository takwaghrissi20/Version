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
  const [notifProjetLeader, setNotifProjetLeader] = useState([]);
  const [findIdData, setFindIdData] = useState([]);
  const [codeJob, setCodeJob] = useState("");
  const userEmail = localStorage.getItem("email");
  const userRole = localStorage.getItem("role");
  const [project, setProject] = useState([]);
  const [idgets, setIdgets] = useState("");
  const [id, setId] = useState("");
  const [dep, setDep] = useState("");
  const [recrutementInterviewNotif, setRecrutementInterviewNotif] = useState([]);
  const [listOperationproject, setListOperationproject] = useState([]);
  const [ListInterviewNotif, setListInterviewNotif] = useState([]);
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
      console.log("dataprofile", data?.departement)
      setDep(data?.departement)
    } catch (error) {
      console.error('Erreur lors de la récupération getByEmail', error);
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
        const filterRecruitement = data.filter(p => p.idemp === id)
        setRecrutementInterviewNotif(filterRecruitement)
        console.log("fetchRecruitementByEmployees YYYYY", filterRecruitement)
        console.log("iiiuuuhghggg", allnotif)
        const FilterNotification = filterRecruitement.map(item => item.jobCode)
        console.log("FilterNotification bbbb", FilterNotification)
        setListInterviewNotif(FilterNotification)
        // console.log("filterRecruitement",filterRecruitement)
      } else {
        console.error("Erreur lors de la récupération du recruitement:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du  recruitement:", error);
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
      console.log("dattta notif", data)
      console.log("ListInterviewNotif999", ListInterviewNotif)

      /////includes codejob
      const NotifInterveiw = data.filter(item => item?.type?.includes("Interview"));
      const filteredNotifications = NotifInterveiw.filter(item => ListInterviewNotif.includes(item.codejob));




      ///////
      setAllNotif(data);
      const filteredData = data.filter(item =>

        (item.notfi === 4 && (item.dep.includes('Operation') && (item.oDep || item.xDep) && item?.positionRec?.includes('Manager') ||
          item.notfi === 7 && item.dep.includes('Engineering'))) ||
        (item.notfi === 2) ||
        (item.notfi === 7 && item.dep.includes('Operation') && (item.oDep || item.xDep) && !item?.positionRec?.includes('Manager'))

      );


      // const filteredData = data.filter(item => ((!item.dep.includes('Operation')&& (!item.dep.includes('Engineering'))) &&
      //   item.notfi === 2) || (item.notfi === 7 && item.dep.includes('Operation')) || 
      //   (item.notfi === 7 && item.dep.includes('Engineering'))
      // );
      setNotifBod(filteredData);
      //////NotifffHrAdminstrotor
      

      const filteredDataHrAdministartor = data.filter(item => (item.notfi === 3) ||
        (item.notfi === 1)
      );
      setNotifHR(filteredDataHrAdministartor)


      //End Notif Hr ADministrator
      console.log("ListInterviewNotif 233333", ListInterviewNotif)

      const FilterOperationManager = data.filter(item => (
        (item.notfi === 8 && item.dep.includes('Engineering')) ||
        (item.notfi === 4 && item.dep.includes('Operation') && (item.oDep || item.xDep)) ||
        (item.notfi === 0 &&
          (ListInterviewNotif.includes(item.codejob) &&
            item?.type?.includes("Interview") &&
            item?.dep?.includes('Operation') &&
            item.positionInterv?.includes('Manager'))
        )
      ));

      // const FilterOperationManager = data.filter(item => (item.notfi === 8 && item.dep.includes('Engineering')) ||
      //   (item.notfi === 4 && item.dep.includes('Operation') && (item.oDep || item.xDep)) || 
      //   ( item.notfi === 0 &&
      //     ListInterviewNotif.includes(item.codejob) &&
      //     item?.type?.includes("Interview") &&
      //     item?.dep?.includes('Operation') &&
      //     item?.positionInterv?.includes('Manger')


      //   )


      // );
      console.log("rrrrrryyyy", notifOperation)
      setNotifOperation(FilterOperationManager);
      ///////////////// Planner 
      const filteredPlanner = data.filter(item =>
        (item.notfi === 6 && item.dep.includes('Operation') && project.includes(item.projName)) ||
        (item.notfi === 7 && project.includes(item.projName) && (item.dep.includes('Operation'))) ||
        (item.notfi === 4 && project.includes(item.projName) && (item.dep.includes('Operation')))

      );
      console.log('project:', project);
      //   const filteredPlanner3 = data.filter(item => {
      //     const condition1 = item?.dep?.includes("Operation") && item.notfi === 6;
      //     const condition2 = item.dep.includes("Operation") && item.notfi === 7 && project.includes(item.projName);
      //     const condition3 = item.dep.includes("Operation") && item.notfi === 4 && project.includes(item.projName);

      //     console.log(`Item ID: ${item.id}, dep: ${item.dep}, notfi: ${item.notfi}, projName: ${item.projName}`);
      //     console.log(`Condition 1: ${condition1}, Condition 2: ${condition2}, Condition 3: ${condition3}`);

      //     return condition1 || condition2 || condition3;
      // });
      setNotifPlanner(filteredPlanner);

      /////All Manger inside Opertion and Engeeneer  
      const filteredManager = data.filter(item => {
        console.log('Item:', item);
        console.log('item.notfi:', item.notfi);
        console.log('ListInterviewNotif.includes(item.codejob):', ListInterviewNotif.includes(item.codejob));
        console.log('item?.type?.includes("Interview"):', item?.type?.includes("Interview"));
        console.log('item?.dep?.includes("Operation"):', item?.dep?.includes('Operation'));

        return (
          item.notfi === 0 &&
          ListInterviewNotif.includes(item.codejob) &&
          item?.type?.includes("Interview") &&
          !item?.dep?.includes('Operation')
        );
      });

      setNotifManager(filteredManager)

      const filteredProjetLeader = data.filter(item => {
        console.log('Item:', item);
        console.log('item.notfi:', item.notfi);
        console.log('ListInterviewNotif.includes(item.codejob):', ListInterviewNotif.includes(item.codejob));
        console.log('item?.type?.includes("Interview"):', item?.type?.includes("Interview"));
        console.log('item?.dep?.includes("Operation"):', item?.dep?.includes('Operation'));

        return (
          item.notfi === 0


        );
      });
      console.log("errtttt", filteredManager)
      // setNotifManager(filteredManager)

      setNotifProjetLeader


      //End Notif de Project Leader 

    } catch (error) {
      console.error('Erreur lors de la récupération profile notif', error);
    }
  };

  const handleEditRecruitementOpen = (code) => {
    navigate(`/Hr/Recruitement&Interview/Recruitement/Update/codeJob=${code.jobCode}`, {
      state: {
        jobCode: code.jobCode,
        notif: code?.notif,
        dep: code?.dep,
        idemp: code?.idemp,
        requestName: code?.requestName,
        dateInputRecrut: code?.dateInputRecrut,
        position: code?.position,
        recruttrequestDate: code?.recruttrequestDate,
        DesiredDate: code?.desiredDate,
        projectName: code?.projectName,
        projRef: code?.projRef,
        type: code?.type,
        affectedTo: code?.affectedTo,
        requestedDicipline: code?.requestedDicipline,
        Level: code?.experience,
        Numbervacancies: code?.totalNumber,
        certif: code?.certif,
        nbExperience: code?.nbExperience,
        exDep: code?.exDep,
        oDep: code?.oDep,
        comentPlaner: code?.comentPlaner,
        signatureBod: code?.signatureBod,
        signatureHod: code?.signatureHod,
      }
    });
  }
//Interview
const handleEditInterviewStaffOpen = (code) => {
  console.log("findIdData",findIdData?.interviewCode)
    navigate(`/Hr/Recruitement&Interview/ConstructionStaffInterview/Update/${code}`, {
      state: {
        interviewCode:findIdData?.interviewCode,
        jobCode:findIdData?.jobCode,
        interviwDate:findIdData?.interviwDate,
        totalAccept:findIdData?.totalAccept,
        totalInterv:findId.totalInterv,
        totalReqPos:findIdData?.totalReqPos,
        totalRequiredGrade:findIdData?.totalRequiredGrade,
        idNumb:findIdData?.idNumb,
        department:findIdData?.department,
        projname:findIdData?.projname,
        requiredGrade:findIdData?.requiredGrade,
        requiredQualification:findIdData?.requiredQualification,
        positionToBeFilled:findIdData?.positionToBeFilled,
        fullName:findIdData?.fullName,
        birthayDate:findIdData?.birthayDate,
        familySituation:findIdData?.familySituation,
        experience:findIdData?.experience,
        educationLevel:findIdData?.educationLevel,
        diploma:findIdData?.diploma,
        telCondidate:findIdData?.telCondidate,
        urlCv:findIdData?.urlCv,
        validatesFor:findIdData?.validatesFor,
        goTotest2:findIdData?.goTotest2,
        psy_Person:findIdData?.psy_Person,
        psy_HumQuality:findIdData?.psy_HumQuality,
        psy_motivation:findIdData?.psy_motivation,
        psy_Intellig:findIdData?.psy_Intellig,
        goToTest3:findIdData?.goToTest3,
        techEnglishSkills:findIdData?.techEnglishSkills,
        evalDesision:findIdData?.evalDesision,
        techcommentaire:findIdData?.techcommentaire,
        techDate:findIdData?.techDate,
        hr_Person:findIdData?.hr_Person,
        hr_HumQuality:findIdData?.hr_HumQuality,
        hr_motivation:findIdData?.hr_motivation,
        hr_Intellig:findIdData?.hr_Intellig,
        level:findIdData?.level,
        headOfDepAprouv:findIdData?.headOfDepAprouv,
        agreedJoinedDate:findIdData?.agreedJoinedDate,
        expectedJoinDate:findIdData?.expectedJoinDate,
        dailyRate:findIdData?.dailyRate,
        hrDesion:findIdData?.hrDesion,
        feedback:findIdData?.feedback,
        propsedsalary:findIdData?.propsedsalary,
        finaldesision:findIdData?.finaldesision,
        time:findIdData?.time,
        hrComentaire:findIdData?.hrComentaire
   
              
      }
 
    });
   


//onEditInterviewStaff(true);


};




//End Interview
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
  const findIdInterview = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${code}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("findIdInterview",responseData)
      
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const findIdInterviewConstruction = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${code}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("findIdInterviewConstruction kkkkk",responseData)
      handleEditInterviewStaffOpen(responseData?.interviewCode)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };


  useEffect(() => {
    AllNotif();
    fetchProjectEmail();
    fetchRecruitementByEmployees()
    GetProfileEmployess()
   
  }, [project, notifPlanner, idgets]);
  console.log("user", user)
  return (
    <>
      {user.includes("bod") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifBod.map((p, index) => (
            <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{ color: "red", fontWeight: "bold" }}>{p.codejob}</span> </button>
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
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{ color: "red", fontWeight: "bold" }}>{p.codejob}</span> </button>
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
                Recruitement Request with Code Job :<span style={{ color: "red", fontWeight: "bold" }}>{p.codejob}</span> </button>
              <div className='Space'></div>

            </div>
          ))}
        </StyledNotifyListItem>
        : null
      }


      {user === "Operation  Manager" ? (
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification (Operation Manager)</p>
          <>
            {notifOperation.map((p, index) => (
              <>
                <button className='Notification' onClick={() => findId(p?.codejob)}>
                  Recruitment Request with Code Job:
                  <span style={{ color: "red", fontWeight: "bold" }}>{p.codejob}</span>
                </button>
                <div key={index}>
                  {p?.type?.includes("Interview") && (
                    <button className='Notification' >
                      {p?.type}
                      <span style={{ color: "red", fontWeight: "bold" }}>{p.interviewCode}</span>
                    </button>
                  )}
                  <div className='Space'></div>
                </div>
              </>
            ))}
          </>
        </StyledNotifyListItem>
      ) : null}


      {/*PLanner */}
      {user.includes("Planner") || notifPlanner?.dep?.includes('Operation') ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifPlanner.map((p, index) => (
            <>
              <div key={index}>
                <button className='Notification' onClick={() => findId(p?.codejob)}>
                  Recruitement Request with Code Job :<span style={{ color: "red", fontWeight: "bold" }}>RRS-{p.codejob}</span> </button>
              </div>
              <div className='Space'></div>
            </>
          ))}
        </StyledNotifyListItem>
        : null
      }
     {(user.includes("Manager") && !dep?.includes('Operation')) && (
  <StyledNotifyListItem className='item-hover'>
    <p>Number All Notification (notifManager A part Operation)</p>

    {notifManager.map((p, index) => (
      <div key={index}>
        {/* <button className='Notification' onClick={() => findId(p?.codejob)}>
          Recruitement Request with Code Job: <span style={{ color: "red", fontWeight: "bold" }}>RRS-{p.codejob}</span>
        </button> */}
        {p?.type?.includes("Interview") && (
         <div>
         <button 
           className='Notification' 
           onClick={() => 
             p.type .includes("Interview of construction team") 
               ? findIdInterviewConstruction(p?.interviewCode) 
               : findIdInterview (p?.interviewCode)
           }
         >
           Notification {p.type} Code {p.interviewCode}:
           <span style={{ color: "red", fontWeight: "bold" }}>
           {p.type.includes("Interview of construction team") ? `CIS-${p.codejob}` : `RRS-${p.codejob}`}
           </span>
           {/* <span style={{ color: "red", fontWeight: "bold" }}>
             RRS-{p.codejob}
           </span> */}
         </button>
       </div>
        )}
      </div>
    ))}
  </StyledNotifyListItem>
)}



      {/* ///Notificationnn de Project Leader*/}
      {user.includes("Leader") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification 3333 </p>
          {notifProjetLeader.map((p, index) => (
            <>
              <p>Notttiiiiiiffff ProjectLeader</p>
              {/* <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitement Request with Code Job :<span style={{ color: "red",fontWeight:"bold" }}>RRS-{p.codejob}</span> </button>
            </div> */}
              <div className='Space'></div>
            </>
          ))}
        </StyledNotifyListItem>
        : null
      }
      {/*Interview Notiffff*/}



      {/*End Interview */}



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
