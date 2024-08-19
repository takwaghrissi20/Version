import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNotifyListItem,
  StyledNotifyMsgAvatar,
} from './NotificationItem.styled';
import { useNavigate } from "react-router-dom";

const NotificationItem = ({ user }) => {
  console.log("user66666", user)
  const navigate = useNavigate();
  const [allnotif, setAllNotif] = useState([]);
  const [notifBod, setNotifBod] = useState([]);
  const [notifHR, setNotifHR] = useState([]);
  const [notifOperation, setNotifOperation] = useState([]);
  const [notifHSE, setNotifHSE] = useState([]);
  const [notifPlanner, setNotifPlanner] = useState([]);
  const [notifManager, setNotifManager] = useState([]);
  const [notifProjetLeader, setNotifProjetLeader] = useState([]);
  const [notifConstruction, setNotifConstruction] = useState([]);
  const [notifQCLead, setNotifQCLead] = useState([]);
  const [notifLogistic, setNotifLogistic] = useState([]);
  const [findIdData, setFindIdData] = useState([]);
  const [findIdDataConstruction, setFindIdDataConstruction] = useState([]);
  const [findIdDataStaff, setFindIdDataStaff] = useState([]);
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
  const [intCode, setIntCode] = useState("");




  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data projettttt", data)
        setIdgets(data?.getsId)
        const ProjectName = data.map(project => project.projName);
        console.log("projet profile", ProjectName)
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
      console.log("setDep", data?.departement)
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
        (item.notfi === 4 &&
          item.dep.includes('Operation') &&
          (item.oDep || item.xDep) &&
          item?.positionRec?.includes('Manager')
        ) ||
        (item.notfi === 7 &&
          item.dep.includes('Engineering')
        ) ||
        (item.notfi === 2) ||
        (item.notfi === 7 &&
          item.dep.includes('Operation') &&
          (item.oDep || item.xDep) &&
          !item?.positionRec?.includes('Manager')
        ) ||
        (item.notfi === 5 &&
          item?.type === "Interview"
        ) ||
        (item.notfi === 5 &&
          item?.type === "Interview of construction team"
        ) ||
        (item.notfi === 37) ||
        (item.notfi === 17 && item.type.includes("Demob"))
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
      const FilterOperationManager = data.filter(item => (
        (item.notfi === 8 && item.dep.includes('Engineering')) ||
        (item.notfi === 4 && item.dep.includes('Operation') && (item.oDep || item.xDep)) ||
        (item.notfi === 0 &&
          (ListInterviewNotif.includes(item.interviewCodeJobInt) &&
            item?.type?.includes("Interview") &&
            item?.dep?.includes('Operation') &&
            item.positionInterv?.includes('Manager'))
        ) ||
        ((item.notfi === 35) && item.type.includes("Extension")) ||
        (item.notfi === 17 && item.type.includes("Demob"))

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

      setNotifOperation(FilterOperationManager);
      /////////////////Notif HSE
      const filteredDataHSE = data.filter(item => (
        (item.notfi === 1 && item.dep.includes('Operation')) && (item.type.includes("construction")) ||
        (item.notfi === 2 && (item.type.includes("construction")))


      ));

      setNotifHSE(filteredDataHSE)



      /////////////End Notif Hse
      ///////////////// Planner 
      const filteredPlanner = data.filter(item =>
        (item.notfi === 6 && item.dep.includes('Operation') && project.includes(item.projName)) ||
        (item.notfi === 7 && project.includes(item.projName) && (item.dep.includes('Operation'))) ||
        (item.notfi === 4 && project.includes(item.projName) && (item.dep.includes('Operation'))) ||
        (item.notfi === 33 && project.includes(item.projName) && (item.type.includes('Extension')))


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
        // Logging for debugging purposes
        console.log('Item:', item);
        console.log('item.notfi:', item.notfi);
        console.log('ListInterviewNotif:', ListInterviewNotif);
        console.log('item?.type?.includes("Interview"):', item?.type?.includes("Interview"));
        console.log('item?.dep?.includes("Operation"):', item?.dep?.includes('Operation'));

        return (
          // First group of conditions
          (item.notfi === 0 &&
            ListInterviewNotif.includes(item.interviewCodeJobInt) &&
            item?.type?.includes("Interview") &&
            !item?.dep?.includes('Operation')) ||

          // Second group of conditions
          (user.includes("HSE") &&
            (item.notfi === 1 || item.notfi === 2) &&
            item.type.includes("construction")) ||

          // Third group of conditions
          (item.notfi === 6 && item.type.includes("Interview")) ||
          (item.notfi === 2 && item.type === "Interview") ||
          
          (item.notfi === 34 && user.includes("Project")) ||
          (item.notfi === 37 && user.includes("Human Resource"))


        );
      });

      // Updating the state with the filtered data
      setNotifManager(filteredManager);



      const filteredProjetLeader = data.filter(item => {
        console.log('Item:', item);
        console.log('item.notfi:', item.notfi);
        console.log('ListInterviewNotif.includes(item.interviewCodeJobInt):', ListInterviewNotif.includes(item.interviewCodeJobInt));
        console.log('item?.type?.includes("Interview"):', item?.type?.includes("Interview"));
        console.log('project jjjjj:', project);

        return (
          (item.notfi === 0 &&
            ListInterviewNotif.includes(item.interviewCodeJobInt) &&
            item.type?.includes("Interview") &&
            item.dep?.includes("Operation")) ||
             (item.notfi === 14 &&
            item.type?.includes("Demob") &&
            project?.includes(item.projName))
        );
        
      });

      // setNotifManager(filteredManager)

      setNotifProjetLeader(filteredProjetLeader);

      //End Notif de Project Leader 
      {/*Notif Construction */ }
      const filteredConstruction = data.filter(item => {

        return (
          // Fourth group of conditions
          (item.notfi === 13 &&
            item.type.includes("Demob") &&
            item.positionDemob.includes('HSE') &&
            project.includes(item.projName)) ||
          // Fifth group of conditions
          (item.notfi === 19 &&
            item.type.includes("Demob") &&
            project.includes(item.projName)) ||
          (item.notfi === 13 &&
            item.type.includes("Demob") &&
            !item.positionDemob.includes('HSE') &&
            project.includes(item.projName) &&
            !item.positionDemob.includes('QC') &&
            !item.positionDemob.includes('Office Logistic')) ||
          (item.notfi === 13 && item.type.includes("Demob")
            && project.includes(item.projName)) ||
          (item.notfi === 15 &&
            item.positionDemob.includes('QC') &&
            item.type.includes("Demob") &&
            project.includes(item.projName))

        );
      });

      setNotifConstruction(filteredConstruction);


      {/*End Notif Construction*/ }
      {/*QC Lead*/ }
      const filteredQCLead = data.filter(item => {

        return (
          (item.notfi === 13 && item.type.includes("Demob") && project.includes(item.projName)) &&
          item.positionDemob.includes('QC')
        );
      });

      setNotifQCLead(filteredQCLead);




      {/*End QC Lead*/ }
      const filteredLogistic = data.filter(item => {

        return (
          (item.notfi === 13 && item.type.includes("Demob") && project.includes(item.projName)) &&
          item.positionDemob.includes('LOGISTIC')
        );
      });

      setNotifLogistic(filteredLogistic);
    




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
  //Extesion
  const handleEditExtentionOpen = (code) => {
    navigate(`/Hr/Visa/UpdateMissionOrderExtention/MER=${code?.ref}`, {
      state: {
        ref: code?.ref,
        dateinput: code?.dateinput,
        mission_idMiss: code?.mission_idMiss,
        projRef: code?.projRef,
        projectTitle: code?.projectTitle,
        name: code?.name,
        position: code?.position,
        actualLocation: code?.actualLocation,
        old_mission: code?.old_mission,
        new_mission: code?.new_mission,
        reasonForExtension: code?.reasonForExtension,
        comments: code?.comments,
        extraProjectPlanner: code?.extraProject,
        plannerInputPlanner: code?.plannerInput


      }
    });
  }

  //End Extention
  //Mob

  const handleMobDemobOpen = (code) => {
    navigate(`/ManpowerLocation/Update_Demobilization/DP=${code?.idMd}`, {
      state: {
        idMd: code?.idMd,
        inputDate: code?.inputDate,
        getsIdDemob: code?.getsId,
        joysId: code?.joysId,
        nameDemob: code?.name,
        positionDemob: code?.position,
        actualLocationDemob: code?.actualLocation,
        projName: code?.projName,
        totalWorkingDays: code?.totalWorkingDays,
        demobDateFromSite: code?.demobDateFromSite,
        demobDesision: code?.demobDesision,
        reasonDemob: code?.reason,
        demobForMonth: code?.demobForMonth,
        VisaType: code?.visaType,
        backToBackNeed: code?.backToBackNeed,
        officeBackToback: code?.officeBackToback,
        backToBackType: code?.backToBackType,
        newRecruitment: code?.newRecruitment,
        desiredDate: code?.desiredDate,
        commentaire: code?.commentaire


      }
    });
  }
  //demob
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
  ///////////////////
  ///////////////////////////ExtentionId
  const findIdExtention = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getById?id=${code}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("extention", responseData)
      handleEditExtentionOpen(responseData)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };







  /////////////////End Extentiondid
  const findIdInterview = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${code}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseDataConstruction", responseData)
      setFindIdDataStaff(responseData)
      setIntCode(responseData?.interviewCode)
      handleEditInterviewConstructionOpen(responseData?.interviewCode)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  ////////////////////////
  ///////////////////FindIDDEMOB
  const findIdDemob = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/getById?id=${code}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("findIdDemob ", responseData)
      handleMobDemobOpen(responseData)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };



  //////////////////////////////FindifDemob


  useEffect(() => {
    if (findIdDataConstruction?.interviewCode) {
      navigate(`/Hr/Recruitement&Interview/ConstructionStaffInterview/Update/${findIdDataConstruction.interviewCode}`, {
        state: {
          interviewCode: findIdDataConstruction?.interviewCode,
          jobCode: findIdDataConstruction?.jobCode,
          interviwDate: findIdDataConstruction?.interviwDate,
          totalAccept: findIdDataConstruction?.totalAccept,
          totalInterv: findIdDataConstruction?.totalInterv,
          totalReqPos: findIdDataConstruction?.totalReqPos,
          totalRequiredGrade: findIdDataConstruction?.totalRequiredGrade,
          idNumb: findIdDataConstruction?.idNumb,
          department: findIdDataConstruction?.department,
          projname: findIdDataConstruction?.projname,
          requiredGrade: findIdDataConstruction?.requiredGrade,
          requiredQualification: findIdDataConstruction?.requiredQualification,
          positionToBeFilled: findIdDataConstruction?.positionToBeFilled,
          fullName: findIdDataConstruction?.fullName,
          inputInterview: findIdDataConstruction?.inputInterview,
          birthayDate: findIdDataConstruction?.birthayDate,
          familySituation: findIdDataConstruction?.familySituation,
          experience: findIdDataConstruction?.experience,
          educationLevel: findIdDataConstruction?.educationLevel,
          diploma: findIdDataConstruction?.diploma,
          telCondidate: findIdDataConstruction?.telCondidate,
          urlCv: findIdDataConstruction?.urlCv,
          validatesFor: findIdDataConstruction?.validatesFor,
          goTotest2: findIdDataConstruction?.goTotest2,
          psy_Person: findIdDataConstruction?.psy_Person,
          psy_HumQuality: findIdDataConstruction?.psy_HumQuality,
          psy_motivation: findIdDataConstruction?.psy_motivation,
          psy_Intellig: findIdDataConstruction?.psy_Intellig,
          goToTest3: findIdDataConstruction?.goToTest3,
          techEnglishSkills: findIdDataConstruction?.techEnglishSkills,
          evalDesision: findIdDataConstruction?.evalDesision,
          techcommentaire: findIdDataConstruction?.techcommentaire,
          techDate: findIdDataConstruction?.techDate,
          hr_Person: findIdDataConstruction?.hr_Person,
          hr_HumQuality: findIdDataConstruction?.hr_HumQuality,
          hr_motivation: findIdDataConstruction?.hr_motivation,
          hr_Intellig: findIdDataConstruction?.hr_Intellig,
          level: findIdDataConstruction?.level,
          headOfDepAprouv: findIdDataConstruction?.headOfDepAprouv,
          agreedJoinedDate: findIdDataConstruction?.agreedJoinedDate,
          expectedJoinDate: findIdDataConstruction?.expectedJoinDate,
          dailyRate: findIdDataConstruction?.dailyRate,
          hrDesion: findIdDataConstruction?.hrDesion,
          feedback: findIdDataConstruction?.feedback,
          propsedsalary: findIdDataConstruction?.propsedsalary,
          finaldesision: findIdDataConstruction?.finaldesision,
          time: findIdDataConstruction?.time,
          hrComentaire: findIdDataConstruction?.hrComentaire,
          contactEmail: findIdDataConstruction?.contactEmail,
          contactPhone: findIdDataConstruction?.contactPhone,
          techEvaluation: findIdDataConstruction?.techEvaluation,
          meetDesision: findIdDataConstruction?.meetDesision,
          hseCertif: findIdDataConstruction?.hseCertif,
          siteHazCont: findIdDataConstruction?.siteHazCont,
          properUse: findIdDataConstruction?.properUse,
          hzardousMater: findIdDataConstruction?.hzardousMater,
          emergency: findIdDataConstruction?.emergency,
          ptw: findIdDataConstruction?.ptw,
          hsePolicies: findIdDataConstruction?.hsePolicies,
          others: findIdDataConstruction?.others,
          educAndTrain: findIdDataConstruction?.educAndTrain,
          workExp: findIdDataConstruction?.workExp,
          DiversityTal: findIdDataConstruction?.DiversityTal,
          intellCap: findIdDataConstruction?.intellCap,
          emotIntellij: findIdDataConstruction?.emotIntellij,
          selfConf: findIdDataConstruction?.selfConf,
          comunicSkills: findIdDataConstruction?.comunicSkills,
          passion: findIdDataConstruction?.passion,
          creativity: findIdDataConstruction?.creativity,
          physicPres: findIdDataConstruction?.physicPres,
          leadership: findIdDataConstruction?.leadership,
          hseDecision: findIdDataConstruction?.hseDecision,
          hseComment: findIdDataConstruction?.hseComment,










        }
      });
    }

  }, [findIdDataConstruction, navigate]);
  useEffect(() => {
    if (findIdDataStaff?.interviewCode) {
      navigate(`/Hr/Recruitement&Interview/Update/${findIdDataStaff.interviewCode}`, {
        state: {
          interviewCode: findIdDataStaff?.interviewCode,
          jobCode: findIdDataStaff?.jobCode,
          totalAccept: findIdDataStaff?.totalAccept,
          totalInterv: findIdDataStaff?.totalInterv,
          totalReqPos: findIdDataStaff?.totalReqPos,
          totalRequiredGrade: findIdDataStaff?.totalRequiredGrade,
          idNumb: findIdDataStaff?.idNumb,
          department: findIdDataStaff?.department,
          projname: findIdDataStaff?.projname,
          requiredGrade: findIdDataStaff?.requiredGrade,
          requiredQualification: findIdDataStaff?.requiredQualification,
          positionToBeFilled: findIdDataStaff?.positionToBeFilled,
          fullName: findIdDataStaff?.fullName,
          interviwDate: findIdDataStaff?.interviwDate,
          inputInterview: findIdDataStaff?.inputInterview,
          birthayDate: findIdDataStaff?.birthayDate,
          familySituation: findIdDataStaff?.familySituation,
          experience: findIdDataStaff?.experience,
          educationLevel: findIdDataStaff?.educationLevel,
          diploma: findIdDataStaff?.diploma,
          telCondidate: findIdDataStaff?.telCondidate,
          urlCv: findIdDataStaff?.urlCv,
          validatesFor: findIdDataStaff?.validatesFor,
          goTotest2: findIdDataStaff.goTotest2,
          psy_Person: findIdDataStaff?.psy_Person,
          psy_HumQuality: findIdDataStaff?.psy_HumQuality,
          psy_motivation: findIdDataStaff?.psy_motivation,
          psy_Intellig: findIdDataStaff?.psy_Intellig,
          goToTest3: findIdDataStaff?.goToTest3,
          techEnglishSkills: findIdDataStaff?.techEnglishSkills,
          evalDesision: findIdDataStaff?.evalDesision,
          techcommentaire: findIdDataStaff?.techcommentaire,
          techDate: findIdDataStaff?.techDate,
          hr_Person: findIdDataStaff?.hr_Person,
          hr_HumQuality: findIdDataStaff?.hr_HumQuality,
          hr_motivation: findIdDataStaff?.hr_motivation,
          hr_Intellig: findIdDataStaff?.hr_Intellig,
          level: findIdDataStaff?.level,
          headOfDepAprouv: findIdDataStaff?.headOfDepAprouv,
          agreedJoinedDate: findIdDataStaff?.agreedJoinedDate,
          expectedJoinDate: findIdDataStaff?.expectedJoinDate,
          dailyRate: findIdDataStaff?.dailyRate,
          hrDesion: findIdDataStaff?.hrDesion,
          feedback: findIdDataStaff?.feedback,
          propsedsalary: findIdDataStaff?.propsedsalary,
          finaldesision: findIdDataStaff?.finaldesision,
          time: findIdDataStaff?.time,
          hrComentaire: findIdDataStaff?.hrComentaire
        }
      });
    }
  }, [navigate, findIdDataStaff]);
  const findIdInterviewConstruction = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${code}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseDataConstruction", responseData)
      setFindIdDataConstruction(responseData)
      setIntCode(responseData?.interviewCode)
      // handleEditInterviewConstructionOpen(responseData?.interviewCode)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  useEffect(() => {
    AllNotif();
    fetchProjectEmail();
    fetchRecruitementByEmployees()
    GetProfileEmployess()
    // findIdInterviewConstruction(intCode)

  }, [project, notifPlanner, idgets, id, findIdDataConstruction, intCode, findIdDataStaff]);
  console.log("user", user)
  return (
    <>
      {user.includes("bod") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification </p>
          {notifBod.map((p, index) => (
            <div key={index}>
              <button className='Notification' onClick={() => findId(p?.codejob)}>
                Recruitment Request with Code Job: <span style={{ color: "red", fontWeight: "bold" }}>{p.codejob}</span>
              </button>
              <div className='Space'></div>
              {p?.type?.includes("Interview") && (
                <div>
                  <button
                    className='Notification'
                    onClick={() =>
                      p.type.includes("Interview of construction team")
                        ? findIdInterviewConstruction(p?.interviewCode)
                        : findIdInterview(p?.interviewCode)
                    }
                  >
                    Notification {p.type} Code {p.interviewCode}:
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                    </span>
                  </button>
                </div>
              )}
              {p?.type?.includes("Extension") && (
                <button className='Notification' onClick={() => findIdExtention(p?.idExtMiss)}>
                  Extension Mission Notification: <span style={{ color: "red", fontWeight: "bold" }}>MER-{p?.idExtMiss}</span>
                </button>
              )}
              {/*Notification Demob*/}
              {p?.type?.includes("Demob")  && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}

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
                <div>
                  <button
                    className='Notification'
                    onClick={() =>
                      p.type.includes("Interview of construction team")
                        ? findIdInterviewConstruction(p?.interviewCode)
                        : findIdInterview(p?.interviewCode)
                    }
                  >
                    Notification {p.type} Code {p.interviewCode}:
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                    </span>
                    {/* <span style={{ color: "red", fontWeight: "bold" }}>
             RRS-{p.codejob}
           </span> */}
                  </button>
                </div>
                {p?.type?.includes("Extension") && (
                  <button className='Notification' onClick={() => findIdExtention(p?.idExtMiss)}>
                    Extension Mission Notification: <span style={{ color: "red", fontWeight: "bold" }}>MER-{p?.idExtMiss}</span>
                  </button>
                )}
                {p?.type?.includes("Demob") && user.includes("Operation") && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}
              </>
            ))}
          </>
        </StyledNotifyListItem>
      ) : null}


      {/*PLanner */}
      {user.includes("PMO") || notifPlanner?.dep?.includes('Operation') ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification</p>
          {notifPlanner.map((p, index) => (
            <React.Fragment key={index}>
              <div>
                <button className='Notification' onClick={() => findId(p?.codejob)}>
                  Recruitment Request with Code Job: <span style={{ color: "red", fontWeight: "bold" }}>RRS-{p.codejob}</span>
                </button>
              </div>
              <div className='Space'></div>
              {p?.type?.includes("Extension") && (
                <button className='Notification' onClick={() => findIdExtention(p?.idExtMiss)}>
                  Extension Mission Notification: <span style={{ color: "red", fontWeight: "bold" }}>MER-{p?.idExtMiss}</span>
                </button>
              )}
            </React.Fragment>
          ))}
        </StyledNotifyListItem>

        : null
      }
      {(user.includes("Manager") && !user.includes("Construction") && !dep?.includes('Operation')) && (
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification (notifManager A part Operation)</p>
          {notifManager.map((p, index) => (
            <div key={index}>
              {p?.type?.includes("Interview") && (
                <div>
                  <button
                    className='Notification'
                    onClick={() =>
                      p.type.includes("Interview of construction team")
                        ? findIdInterviewConstruction(p?.interviewCode)
                        : findIdInterview(p?.interviewCode)
                    }>
                    Notification {p.type} Code {p.interviewCode}:
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                    </span>
                  </button>
                </div>
              )}
              {p?.type?.includes("Extension") && user.includes("Human Ressource") && (
                <button className='Notification' onClick={() => findIdExtention(p?.idExtMiss)}>
                  Extension Mission Notification: <span style={{ color: "red", fontWeight: "bold" }}>MER-{p?.idExtMiss}</span>
                </button>
              )}
              {/*Demob Flow HSE Site Manager*/}
              {p?.type?.includes("Demob") && user.includes("HSE Site Manager") && (
                <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                  Demobilization Permission Notification:
                  <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>

                </button>
              )}

            </div>
          ))}
        </StyledNotifyListItem>

      )}

      {/* ///Notificationnn de Project Leader*/}
      {user.includes("Leader") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification(ProjectlEADERS) </p>
          {notifProjetLeader.map((p, index) => (
            <>
              <div key={index}>
                {/* <button className='Notification' onClick={() => findId(p?.codejob)}>
          Recruitement Request with Code Job: <span style={{ color: "red", fontWeight: "bold" }}>RRS-{p.codejob}</span>
        </button> */}
                {p?.type?.includes("Interview") && (
                  <div>
                    <button
                      className='Notification'
                      onClick={() =>
                        p.type.includes("Interview of construction team")
                          ? findIdInterviewConstruction(p?.interviewCode)
                          : findIdInterview(p?.interviewCode)
                      }
                    >
                      Notification {p.type} Code {p.interviewCode}:
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                      </span>
                      {/* <span style={{ color: "red", fontWeight: "bold" }}>
                       RRS-{p.codejob}
                        </span> */}
                    </button>
                  </div>
                )}
                {/*Demob Flow Project Leader*/}
                {p?.type?.includes("Demob") && user.includes("Leader") && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}
              </div>
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
      {/*QC Lead */}
      {user.includes("QC Lead") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification(QCLead) </p>
          {notifQCLead.map((p, index) => (
            <>
              <div key={index}>

                {p?.type?.includes("Demob") && user.includes("QC Lead") && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}
              </div>
              <div className='Space'></div>
            </>
          ))}
        </StyledNotifyListItem>
        : null
      }
      {/*notifLogistic*/}
      {user.toLowerCase().includes("LOGISTIC") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification(LOGISTIC) </p>
          {notifLogistic.map((p, index) => (
            <>
              <div key={index}>

                {p?.type?.includes("Demob") && user.toLowerCase().includes("LOGISTIC") && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}
              </div>
              <div className='Space'></div>
            </>
          ))}
        </StyledNotifyListItem>
        : null
      }


      {/*notifLogistic*/}




      {/*End QC LEAD*/}
      {/*Construction Manager toLowerCase() */}
      {user.includes("Construction") ?
        <StyledNotifyListItem className='item-hover'>
          <p>Number All Notification(Construction) </p>
          {notifConstruction.map((p, index) => (
            <>
              <div key={index}>
                {/*Demob Flow Project Leader*/}
                {p?.type?.includes("Demob") && user.includes("Construction") && (
                  <button className='Notification' onClick={() => findIdDemob(p?.idMd)} >
                    Demobilization Permission Notification:
                    <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                  </button>
                )}
              </div>
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




      {/*Construction Manager */}



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
