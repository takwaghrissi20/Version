import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { List, Spin } from 'antd';
import {
  StyledNotifyListItem,
  StyledNotifyMsgAvatar,
} from './NotificationItem.styled';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
const NotificationItem = ({ setVisible, visible, user, isLoadingchargement, setIsLoadingchargement, handleVisibleChange }) => {
  const [requestQueue, setRequestQueue] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allnotif, setAllNotif] = useState([]);
  const [notifBod, setNotifBod] = useState([]);
  const [notifHR, setNotifHR] = useState([]);
  const [notifHRAdministrator, setNotifHRAdministrator] = useState([]);
  const [notifOperation, setNotifOperation] = useState([]);
  const [notifHSE, setNotifHSE] = useState([]);
  const [notifPlanner, setNotifPlanner] = useState([]);
  const [notifManager, setNotifManager] = useState([]);
  const [notifProjetLeader, setNotifProjetLeader] = useState([]);
  const [notifConstruction, setNotifConstruction] = useState([]);
  const [notifQCLead, setNotifQCLead] = useState([]);
  const [notifLogistic, setNotifLogistic] = useState([]);
  const [findIdData, setFindIdData] = useState([]);
  const [findIdPaymentData, setFinIdPaymentData] = useState([]);
  const [findIdDataConstruction, setFindIdDataConstruction] = useState([]);
  const [findIdDataStaff, setFindIdDataStaff] = useState([]);
  const [notifPayroll, setNotifPayroll] = useState([]);
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
  const token = localStorage.getItem("token")
  const [visaExpired, setVisaExpired] = useState("");
  const [passportExpired, setPassportExpired] = useState("");
  const [contartExpired, setContratExpired] = useState("");
  const [requestPayments, setRequestPayments] = useState([]);
  const [monthOf, setMonthOf] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const [loading1, setLoading1] = useState(false);
  //Fetch Employees Expired Passport et Visa 
  const fetchExpiredVisa = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      // Get the current date and date 15 days from now
      const data = await response.json();
      const activeEmployees = data.filter(employee => employee.actStatus === "Active");

      const currentDate = new Date();
      const dateInFifteenDays = new Date();
      dateInFifteenDays.setDate(currentDate.getDate() + 15);
      // Filter employees whose visa expires within 15 days
      const expiredVisaData = activeEmployees.filter(employee => {
        if (employee.finishDateVisa) {
          const visaDate = new Date(employee.finishDateVisa);
          return visaDate > currentDate;
        } else {
          return false;
        }
      });


      setVisaExpired(expiredVisaData)
      // Filter employees whose passport expires within 15 days
      const passportFinishDate = activeEmployees.filter(employee => {
        if (employee.passport_finish_date) {
          const passportDate = new Date(employee.passport_finish_date);
          return passportDate <= dateInFifteenDays && passportDate > currentDate;
        } else {
          return false;
        }
      });

      setPassportExpired(passportFinishDate)
      // Filter employees whose Contract expires within 15 days
      const contratFinishDate = activeEmployees.filter(employee => {
        if (employee.finishDate) {
          const contartDate = new Date(employee.finishDate);
          return contartDate <= dateInFifteenDays && contartDate > currentDate;
        } else {
          return false;
        }
      });

      setContratExpired(contratFinishDate)
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };



  //End Fetch Employee expired passport et Visa 
  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
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
      setId(data.getsId)
      setDep(data?.departement)
      setName(data?.name)
    } catch (error) {
      console.error('Erreur lors de la récupération getByEmail', error);
    }
  };
  //Fetch all  Recruitement
  const fetchRecruitementByEmployees = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/re/list?token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const filterRecruitement = data.filter(p => p.idemp === id)
        setRecrutementInterviewNotif(filterRecruitement)

        const FilterNotification = filterRecruitement.map(item => item.jobCode)

        setListInterviewNotif(FilterNotification)
        // console.log("filterRecruitement",filterRecruitement)
      } else {
        console.error("Erreur lors de la récupération du recruitement:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du  recruitement:", error);
    }
  };

  const [notificationPermission, setNotificationPermission] = useState(null);
  useEffect((code) => {
    if (!("Notification" in window)) {
    } else {
      Notification.requestPermission();
    }
    //Chargement le page with loading 
    if (isLoadingchargement) {
      const timer = setTimeout(() => {
        setIsLoading
        setIsLoadingchargement(false);

      }, 2000);
      return () => clearTimeout(timer);
    }


  }, [isLoadingchargement]);

  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification(message);
    }
  }
  const sortNotifications = (notifications) => {
    return notifications.sort((a, b) => {
      const isVisaOrPassportA = a.type.includes("Visa") || a.type.includes("Passport");
      const isVisaOrPassportB = b.type.includes("Visa") || b.type.includes("Passport");

      if (isVisaOrPassportA && !isVisaOrPassportB) return -1;
      if (!isVisaOrPassportA && isVisaOrPassportB) return 1;
      return 0;
    });
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
      const NotifInterveiw = data.filter(item => item?.type?.includes("Interview"));
      const filteredNotifications = NotifInterveiw.filter(item => ListInterviewNotif.includes(item.codejob));

      setAllNotif(data);
      /////////////////
      const filteredData = data.filter(item =>
        (item.notfi === 4 &&
          item?.dep?.includes('Operation') &&
          (item?.oDep || item?.xDep) &&
          item?.positionRec?.includes('Manager')
        ) ||
        (item?.notfi === 55
        ) ||

        (item?.notfi === 8
        ) ||
        (item?.notfi === 3
        ) ||
        (item?.notfi === 66) ||
        (item?.notfi === 7 &&
          item?.dep?.includes('Engineering')
        ) ||
        (item?.notfi === 2)
        ||
        (item.notfi === 7 &&
          item.dep.includes('Operation') &&
          (item?.oDep || item.xDep) &&
          !item?.positionRec?.includes('Manager')
        ) ||
        (item?.notfi === 5 &&
          item?.type === "Interview"
        ) ||
        (item?.notfi === 5 &&
          item?.type === "Interview of construction team"
        ) ||
        (item?.notfi === 37) ||
        (item?.notfi === 17 && item.type.includes("Demob")) ||
        (item.notfi === 37) ||
        (item?.notfi === 1 && item?.type?.includes("Request payment")) ||
        (item?.notfi === 3 && item?.type?.includes("Request payment") &&
          user?.includes("bod") && name?.toLowerCase().includes("ali") ||
          (item?.notfi === 3 && item?.type?.includes("Request payment") &&
            user?.includes("bod") && name?.toLowerCase().includes("nidhal"))
        )


      );

      setNotifBod(filteredData);
      const filteredDataHrAdministartor = data.filter(item => (item.notfi === 3 && item?.signatureBod2) ||
        (item.notfi === 8 && item?.signatureBod1 ) ||
        (item.notfi === 1)
      );
      setNotifHR(filteredDataHrAdministartor)

      //End Notif Hr ADministrator
      const FilterOperationManager = data.filter(item => (
        (item?.notfi === 8 && item?.dep?.includes('Engineering')) ||
        (item?.notfi === 4 && item?.dep?.includes('Operation') && (item?.oDep || item?.xDep)) ||
        (item?.notfi === 0 &&
          (ListInterviewNotif?.includes(item.interviewCodeJobInt) &&
            item?.type?.includes("Interview") &&
            item?.dep?.includes('Operation') &&
            item?.positionInterv?.includes('Manager'))
        ) ||
        ((item?.notfi === 35) && item?.type?.includes("Extension")) ||
        (item?.notfi === 17 && item?.type?.includes("Demob")) ||
        (item?.notfi === 7 && (item?.type?.includes("Interview")) && item?.dep?.includes('Operation'))

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
        (item?.notfi === 1 && item?.dep?.includes('Operation')) && (item?.type?.includes("construction")) ||
        (item?.notfi === 2 && (item?.type?.includes("construction")))


      ));

      setNotifHSE(filteredDataHSE)



      /////////////End Notif Hse
      ///////////////// Planner 
      const filteredPlanner = data.filter(item =>
        (item?.notfi === 6 && item?.dep?.includes('Operation') && project?.includes(item.projName)) ||
        (item?.notfi === 7 && project?.includes(item?.projName) && (item?.dep?.includes('Operation'))) ||
        (item?.notfi === 4 && project?.includes(item?.projName) && (item?.dep?.includes('Operation'))) ||
        (item?.notfi === 33 && project?.includes(item?.projName) && (item?.type?.includes('Extension')))


      );


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
        console.log('Filtering item:', item);

        return (
          // Group 1: Interview Notifications for Manager excluding Operation department
          (item.notfi === 0 && ListInterviewNotif.includes(item.interviewCodeJobInt) &&
            item?.type?.includes("Interview") && !item?.dep?.includes('Operation')) ||

          // Group 2: Construction-related Notifications for HSE
          (user.includes("HSE") && (item.notfi === 1 || item.notfi === 2) && item.type.includes("construction")) ||
          // Group 3: Interview Notifications with specific notfi conditions
          (item.notfi === 6 && item.type.includes("Interview")) ||
          (item.notfi === 2 && item.type === "Interview") ||

          // Group 4: Notifications for Project or Human Resources
          (item.notfi === 34 && user.includes("Project")) ||
          (item.notfi === 37 && user.includes("Human Ressource")) ||

          // Group 5: Construction and QHSE-related Notifications
          ((item.notfi === 2) && item?.dep?.includes("QHSE") && item.type.includes("construction")) ||

          // Group 6: Request payment for Human Resources
          (item?.notfi === 0 && user?.includes("Human Ressource") && item?.type?.includes("Request payment")) ||
          (item?.notfi === 30 && user?.includes("Human Ressource") && item?.type?.includes("Request payment"))
        );
      });
      // Update the state with filtered notifications
      setNotifManager(filteredManager);
      {/*Notif Payroll*/ }
      const filteredPayroll = data.filter(item => {
        console.log('Filtering item:', item);

        return (
          // Group 1: Request payment for Human Resources Refused
          (item?.notfi === 10 && item?.type?.includes("Request payment")) ||
          (item?.notfi === 30 && item?.type?.includes("Request payment")) ||
          (item?.notfi === 3 && item?.type?.includes("Request payment") &&
            item.approvedByBod1 === "true" && item.approvedByBod2 === "true"
          )
        );
      });
      setNotifPayroll(filteredPayroll)


      {/*End Notif Payroll*/ }




      const filteredProjetLeader = data.filter(item => {
        console.log('Item:', item);
        console.log('item.notfi:', item.notfi);
        console.log('ListInterviewNotif.includes(item.interviewCodeJobInt):', ListInterviewNotif.includes(item.interviewCodeJobInt));
        console.log('item?.type?.includes("Interview"):', item?.type?.includes("Interview"));


        return (
          (item.notfi === 0 &&
            ListInterviewNotif.includes(item?.interviewCodeJobInt) &&
            item?.type?.includes("Interview") &&
            item?.dep?.includes("Operation")) ||
          (item?.notfi === 14 &&
            item?.type?.includes("Demob") &&
            project?.includes(item?.projName))
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

  const HandleNotifRecruitementTesrrr = () => {
    console.log("Open Notif")
    navigate(`/Hr/Recruitement&Interview`, {

    });
  }
  const HandleNotifRecruitement = () => {
    navigate('/Hr/Recruitement&Interview');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

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
  //Request Payment 

  const handleEditRequestPaymentOpen = (code) => {

    navigate(`/Payroll/Save/Request_Paymet/ref=${code?.id}`, {
      state: {
        id: code?.id,
        dateInput: code?.dateInput,
        cosCenter: code?.cosCenter,
        projName: code?.projName,
        object: code?.object,
        fromReq: code?.fromReq,
        fromBankCheque: code?.fromBankCheque,
        total: code?.total,
        paymentType: code?.paymentType,
        listRequestPayments: requestPayments,
        approvedByBod1: code?.approvedByBod1,
        approvedByBod2: code?.approvedByBod2,
        notif: code?.notif,
        commentaire: code?.commentaire,
        listRequestPayments: code?.listRequestPayments?.map((payment) => {
          return {
            id: payment?.id,
            getsId: payment?.getsId,
            amount: payment?.amount,
            fullName: payment?.fullName,
            position: payment?.position,
            otherDescription: payment?.otherDescription

          };
        }),
        monthOf: code?.monthOf,
        companyType: code?.companyType,
        token: token,
        user: user,
        userRole: userRole,
        name: name,
        findIdPaymentData: findIdPaymentData


      }
    });
  }
  //End Request Payment
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
  const cache = {};

  const findId = async (code) => {
    if (cache[code]) {
      setFindIdData(cache[code]);
      setCodeJob(cache[code].jobCode);
      return;
    }

    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}&token=${token}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responnnse", responseData);

      cache[code] = responseData;
      setFindIdData(responseData);
      setCodeJob(responseData.jobCode);
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const handleQueue = (code) => {
    setRequestQueue(prevQueue => [...prevQueue, code]);
    if (requestQueue.length === 0) {
      findId(code);
    }
  };
  ///Requet Payment

  const findPaymentId = async (code) => {

    try {
      setIsLoading(true);
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/findId?code=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFinIdPaymentData(responseData)
      setMonthOf(findIdPaymentData?.monthBy)

      const RequestPayments = responseData?.listRequestPayments?.map((payment) => {
        return {
          id: payment?.id,
          getsId: payment?.getsId,
          amount: payment?.amount,
          fullName: payment?.fullName,
          position: payment?.position,
          otherDescription: payment?.otherDescription

        };
      });
      setRequestPayments(RequestPayments)
      handleEditRequestPaymentOpen(responseData);
      setTimeout(() => {
        window.location.reload();
      }, 100);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);

    } catch (error) {
      console.error("Erreur lors de la récupération du RequestPayment:", error);
    }
    finally {
      setLoading(false);
    }
  };



  //Request Payment
  const VisaExpired = async () => {
    navigate(`/Hr/VisaAndPassportExpired`);
    window.location.reload();

  };

  ///////////////////
  ///////////////////////////ExtentionId
  const findIdExtention = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("responseData", responseData)
      handleEditExtentionOpen(responseData)
      setTimeout(() => {
        window.location.reload();

      }, 100);
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  /////////////////End Extentiondid
  const findIdInterview = async (code) => {
    setLoading(true);
    setClickedId(code);
    setVisible(true)
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setTimeout(() => {
        window.location.reload();
      }, 100);

      setFindIdDataStaff(responseData)
      setIntCode(responseData?.interviewCode)
      // handleEditInterviewConstructionOpen(responseData?.interviewCode)


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
    finally {
      setLoading(false);
      setVisible(false)
    }
  };
  ////////////////////////
  ///////////////////FindIDDEMOB
  const findIdDemob = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();

      handleMobDemobOpen(responseData)
      setTimeout(() => {
        window.location.reload();

      }, 100);
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  //////////////////////////////Find ifDemob
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
          intvlevel: findIdDataConstruction?.intvlevel,
          headOfDepAprouv: findIdDataConstruction?.headOfDepAprouv,
          agreedJoinedDate: findIdDataConstruction?.agreedJoinedDate,
          expectedJoinDate: findIdDataConstruction?.expectedJoinDate,
          dailyRate: findIdDataConstruction?.dailyRate,
          hrDesion: findIdDataConstruction?.hrDesion,
          feedback: findIdDataConstruction?.feedback,
          propsedsalary: findIdDataConstruction?.propsedsalary,
          finaldesision: findIdDataConstruction?.finaldesision,
          time: findIdDataConstruction?.INTERVTIME,
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
          NLEVEL: findIdDataStaff?.NLEVEL,
          headOfDepAprouv: findIdDataStaff?.headOfDepAprouv,
          agreedJoinedDate: findIdDataStaff?.agreedJoinedDate,
          expectedJoinDate: findIdDataStaff?.expectedJoinDate,
          dailyRate: findIdDataStaff?.dailyRate,
          hrDesion: findIdDataStaff?.hrDesion,
          feedback: findIdDataStaff?.feedback,
          propsedsalary: findIdDataStaff?.propsedsalary,
          finaldesision: findIdDataStaff?.finaldesision,
          intervtime: findIdDataStaff?.intervtime,
          hrComentaire: findIdDataStaff?.hrComentaire,


        }
      });
    }
  }, [navigate, findIdDataStaff]);

  const findIdInterviewConstruction = async (code) => {
    setLoading(true);
    setClickedId(code);
    setVisible(true)
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${code}&token=${token}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFindIdDataConstruction(responseData)
      setIntCode(responseData?.interviewCode)
      setTimeout(() => {
        window.location.reload();

      }, 100);

      // handleEditInterviewConstructionOpen(responseData?.interviewCode)
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
    finally {
      setLoading(false);
      setVisible(false)
    }

  };

  useEffect(() => {
    AllNotif();
    fetchProjectEmail();
    fetchRecruitementByEmployees()
    GetProfileEmployess()
    fetchExpiredVisa()


    // findIdInterviewConstruction(intCode)

  }, [project, notifPlanner, idgets, id, findIdDataConstruction, intCode, findIdDataStaff, codeJob]);

  return (
    <>
      <div >
        {isLoadingchargement ? (
          <Spin className="loading-chargement" size="large" />
        ) : (
          <>
            {/* NOTIF BOD */}
            {user.includes("bod") ? (
              <StyledNotifyListItem className='item-hover'>
                {notifBod
                  .sort((a, b) => {
                    return new Date(b.
                      insertDatere) - new Date(a.insertDatere)
                  }).map((p, index) => (
                    <div key={index}>
                      {/* Recruitment Notification */}
                      <div>
                        {p?.type?.includes("recruitment") && (
                          <div
                            className={`NotifTotal ${clickedId === p.codejob ? 'red-background' : ''}`}
                            onClick={HandleNotifRecruitement}
                          // onClick={() => handleQueue(p?.codejob)}

                          // onClick={() => findId(p?.codejob)}
                          >
                            <div className='NotifRecruitement'>R</div>
                            <button className='Notification' >
                              Notification Recruitment Request <br></br>
                              <span className='IndexNotif'>RRS-</span>
                              <span className='IndexNotif'>{p.codejob}</span>
                              {/* <p>Date: {new Date(p.insertDatere).toLocaleDateString()}</p>
                                     <p>Date: {p.insertDatere}</p> */}
                              <p style={{
                                padding: "0.5rem", textAlign: "right",
                                fontSize: "10px"
                              }}> {p.insertDatere.split(' ')[0]} At :{p.insertDatere.split(' ')[1]} </p>
                            </button>

                          </div>
                        )}
                      </div>

                      <div className='Space'></div>
                      {p.interviewCode !== 0 && (
                        <>
                          {p?.type?.includes("Interview") && (
                            <div >
                              <div
                                className={`NotifTotal ${clickedId === p.interviewCodeJobInt ? 'red-background' : ''}`}
                                // onClick={() =>
                                //   p.type.includes("Interview of construction team")
                                //     ? findIdInterviewConstruction(p?.interviewCode)
                                //     : findIdInterview(p?.interviewCode)
                                // } 
                                onClick={HandleNotifRecruitement}>
                                <div
                                  className='NotifInterview' >
                                  I
                                </div>
                                <button className='Notification'>
                                  Notification {p.type} Code  {p.interviewCode}:  <br></br>
                                  <span lassName='IndexNotif'>
                                    {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                                  </span>

                                </button>
                              </div>

                            </div>
                          )}
                        </>
                      )}


                      {/* Extension Notification */}
                      {p?.type?.includes("Extension") && (
                        <button className='Notification' onClick={() => findIdExtention(p?.idExtMiss)}>
                          Extension Mission Notification: <span style={{ color: "red", fontWeight: "bold" }}>MER-{p?.idExtMiss}</span>
                        </button>
                      )}

                      {/* Demobilization Notification */}
                      {p?.type?.includes("Demob") && (
                        <button className='Notification' onClick={() => findIdDemob(p?.idMd)}>
                          Demobilization Permission Notification:
                          <span style={{ color: "red", fontWeight: "bold" }}>DP-{p?.idMd}</span>
                        </button>
                      )}

                      {/* Payment Request Notification */}
                      {p?.refrequestpayment !== 0 && (
                        <div className='NotifTotal' onClick={() => findPaymentId(p?.refrequestpayment)}>
                          <div className='NotifPayment'>P</div>
                          <button className='Notification' onClick={() => findPaymentId(p?.refrequestpayment)}>
                            REQUEST FOR PAYMENT <br />
                            <span className='IndexNotif'>Ref-</span>
                            <span className='IndexNotif'>{p.refrequestpayment}</span>
                          </button>
                        </div>
                      )}


                    </div>
                  ))}
              </StyledNotifyListItem>
            ) : null}

            {/*Notif Payroll*/}
            {user.includes("Payroll") ?
              <StyledNotifyListItem className='item-hover'>
                {notifPayroll.map((p, index) => (
                  <div key={index}>

                    <div className='NotifTotal' onClick={() => findPaymentId(p?.refrequestpayment)}>
                      <div
                        className='NotifPayment' >
                        P
                      </div>
                      <button className='Notification' onClick={() => findPaymentId(p?.refrequestpayment)}>
                        REQUEST FOR PAYMENT   <br></br>
                        <span className='IndexNotif'>Ref-</span>
                        <span className='IndexNotif'>{p.refrequestpayment}</span>
                      </button>
                    </div>

                    {/*EndNotif Payment Reques*/}


                  </div>
                ))}
              </StyledNotifyListItem>

              : null
            }


            {/*End Notif Payroll*/}

            {/* NOTIF Cordinator */}
            {user.includes("Cordinator") && user.includes("Administrator") ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification :{notifHR?.length} </p>
                {notifHR
                  .sort((a, b) => {
                    return new Date(b.
                      insertDatere) - new Date(a.insertDatere)
                  }).map((p, index) => (
                    <div key={index}>
                      {/* Recruitment Notification */}
                      {loading ? (
                        <div className='loading-indicator'>Chargement...</div>
                      ) :
                        <div
                          className={`NotifTotal ${clickedId === p.codejob ? 'red-background' : ''}`}
                          onClick={HandleNotifRecruitement}>
                          <div
                            className='NotifRecruitement' >
                            R
                          </div>
                          <button className='Notification'>
                            Notification Recruitement Request  <br></br>
                            <span className='IndexNotif'>RRS-</span>
                            <span className='IndexNotif'>{p.codejob}</span>
                            <p style={{
                              padding: "0.5rem", textAlign: "right",
                              fontSize: "10px"
                            }}> {p.insertDatere.split(' ')[0]} At :{p.insertDatere.split(' ')[1]} </p>
                          </button>

                        </div>


                      }

                    </div>
                  ))}

              </StyledNotifyListItem>
              : null
            }
            {/*Notif Administartor*/}
            {(!user.includes("Cordinator") && user.includes("Administrator")) ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification :{notifHRAdministrator?.length} </p>

                {visaExpired?.length > 0 && (
                  <div className='NotifTotal' onClick={() => VisaExpired()}>
                    <div
                      className='NotifVisa' >
                      V
                    </div>
                    <div style={{ color: "black" }}>
                      Visa Will Be Expired Of Employees :<span className='IndexNotif'>{visaExpired?.length}</span>
                    </div>
                  </div>
                )}
                {passportExpired?.length > 0 && (

                  <div className='NotifTotal' onClick={() => VisaExpired()}>
                    <div
                      className='NotiPassport' >
                      P
                    </div>
                    <div style={{ color: "black" }}>
                      Passport Will Be Expired Of Employees  : <span className='IndexNotif'>{passportExpired?.length}</span>
                    </div>
                  </div>

                )}

                {notifHRAdministrator.map((p, index) => (
                  <div key={index}>


                    {/*Empl Finish Contrat*/}
                    {/* {passportExpired?.length > 0 && ( */}
                    {/* {contartExpired?.length > 0 && (    //Notif Payroll
            <div className='NotifTotal' onClick={() => VisaExpired()}>
              <div
                className='NotiFinishContart' >
                C
              </div>
              <div style={{ color: "black" }}>
                Contract Will Be Expired Of Employees  :
                <span className='IndexNotif'>{contartExpired?.length}</span>
              </div>
            </div>
          )} */}
                    {/* )} */}
                    {/*End Empl Finish Contrat*/}

                  </div>
                ))}


              </StyledNotifyListItem>
              : null
            }




            {/*End Notif Administartor */}
            {/* Notif ADMIN */}
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

            {/* Notif Operation  Manager*/}
            {user === "Operation Manager" ? (
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification (Operation Manager)</p>
                <>
                  {notifOperation.map((p, index) => (
                    <>
                      {p?.type?.includes("recruitment") && (

                        <div className='NotifTotal' onClick={() => findId(p?.codejob)}>
                          <div
                            className='NotifRecruitement' >
                            R
                          </div>
                          <button className='Notification' onClick={() => findId(p?.codejob)}>
                            Notification Recruitement Request  <br></br>
                            <span className='IndexNotif'>RRS-</span>
                            <span className='IndexNotif'>{p.codejob}</span>
                          </button>
                        </div>
                      )}
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


            {/* Notif PMO*/}
            {user.includes("PMO") || notifPlanner?.dep?.includes('Operation') ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification</p>
                {notifPlanner.map((p, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <div className='NotifTotal' onClick={() => findId(p?.codejob)}>
                        <div
                          className='NotifRecruitement' >
                          R
                        </div>
                        <button className='Notification' onClick={() => findId(p?.codejob)}>
                          Notification Recruitement Request  <br></br>
                          <span className='IndexNotif'>RRS-</span>
                          <span className='IndexNotif'>{p.codejob}</span>
                        </button>
                      </div>
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
            {/* Notif Manager*/}
            {(user.includes("Manager") && !user.includes("Construction") && !dep?.includes('Operation')) && (
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification</p>
                {notifManager.map((p, index) => (
                  <div key={index}>
                    {/* {loading ? (
                      <div className='loading-indicator'>Chargement...</div>
                    ) : */}
                    <>
                      { }
                      {p.interviewCode !== 0 && (
                        <>
                          {p?.type?.includes("Interview") && (
                            <div >
                              <div
                                className={`NotifTotal ${clickedId === p.interviewCodeJobInt ? 'red-background' : ''}`}
                                // onClick={() =>
                                //   p.type.includes("Interview of construction team")
                                //     ? findIdInterviewConstruction(p?.interviewCode)
                                //     : findIdInterview(p?.interviewCode)
                                // } 
                                onClick={HandleNotifRecruitement}>
                                <div
                                  className='NotifInterview' >
                                  I
                                </div>
                                <button className='Notification'>
                                  Notification {p.type} Code  {p.interviewCode}:  <br></br>
                                  <span lassName='IndexNotif'>
                                    {p.type.includes("Interview of construction team") ? `CIS-${p.interviewCodeJobInt}` : `RRS-${p.interviewCodeJobInt}`}
                                  </span>

                                </button>
                              </div>

                            </div>
                          )}
                        </>
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

                      {/*Payment requet*/}
                      <div className='NotifTotal' onClick={() => findPaymentId(p?.refrequestpayment)}>
                        <div
                          className='NotifPayment' >
                          P
                        </div>
                        <button className='Notification'>
                          REQUEST FOR PAYMENT   <br></br>
                          <span className='IndexNotif'>Ref-</span>
                          <span className='IndexNotif'>{p.refrequestpayment}</span>
                        </button>
                      </div>

                    </>





                  </div>
                ))}
              </StyledNotifyListItem>

            )}

            {/* Notif Leader*/}

            {user.includes("Leader") ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification</p>
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
            {/* Notif QC Lead*/}
            {user.includes("QC Lead") ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification </p>
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
                <p>Number All Notification </p>
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


            {/*Construction Manager NOTIF toLowerCase() */}
            {user.includes("Construction") ?
              <StyledNotifyListItem className='item-hover'>
                <p>Number All Notification </p>
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


          </>
        )}
      </div>

    </>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  user: PropTypes.string.isRequired,
};
