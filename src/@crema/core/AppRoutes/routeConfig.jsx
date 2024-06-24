import React from "react";
import {  HiOutlineChartSquareBar } from "react-icons/hi";
import { GrUserAdmin } from "react-icons/gr";
import { PiOfficeChairBold } from "react-icons/pi";
import { CiTimer,CiLogout } from "react-icons/ci";
import { FaAvianex } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RxPerson } from "react-icons/rx";



const routesConfig = [
  {
    id: "dashboards",
    title: "Application",
    messageId: "",
    type: "group",
    children: [
      
      {
        id: "Dashboards",
        title: "Dashboards",
        messageId: "sidebar.app.dashboards",
        icon: <HiOutlineChartSquareBar />,
        url: "/dashboards/hr",
        permittedRole: "Hr",

      },
      
    ],
  },
  {
    id: "HR Administrator",
    title: "HR Administrator",
    messageId: "",
    type: "group",
    children: [
     
      {
        id: "recruitement",
        title: "Recruitement",
        messageId: "sidebar.recruitement",
        icon: <PiOfficeChairBold />,
        type: "collapse",
        children: [
          {
            id: "Add Recruitment",
            title: "Add Recruitment",
            messageId: "sidebar.Recruitement.AddRecruitement",
            url: "/Hr/AddRecruitement",
          },
          {
            id: "Recruitement & Interview Sheet",
            title: "Recruitement & Interview Sheet",
            messageId: "sidebar.Recruitement.InterviewSheet",
            url: "/Hr/Recruitement&Interview",
          },
          {
            id: "Interview Statistics",
            title: "Interview Statistics",
            messageId: "sidebar.Recruitement.InterviewStatistics",
            url: "/Hr/InterviewStatistics",
          },
          {
            id: "Integration",
            title: "Integration",
            messageId:"sidebar.Recruitement.integration",       
            url: "/Hr/Integration",
          },
          {
            id: "IntegrationStatistics",
            title: "IntegrationStatistics",
            messageId:"sidebar.Recruitement.IntegrationStatistics",       
            url: "/Hr/IntegrationStatistics",
          },
          {
            id: "Planification",
            title: "Planification",
            messageId: "sidebar.Recruitement.Planification",
            url: "/Hr/Planification",
          },
        
          
        ],
      },
      {
        id: "Employees",
        title: "Employees",
        messageId: "sidebar.hr.Employees",
        type: "collapse",
        icon: <GrUserAdmin />,
        children: [
          {
            id: "SAMMARY",
            title: "SAMMARY",
            messageId: "sidebar.hr.Sammuary",
            url: "/HrDataBase/Sammuary",
          },
          {
            id: "AddEmployees",
            title: "AddEmployee",
            messageId: "sidebar.hr.AddEmployees",
            url:"/Hr/AddEmployees",
          },
          {
            id: "CategoryContract",
            title: "Category Contract",
            messageId: "sidebar.hr.CategoryContract",
            url:"/Hr/EmployeesCategoryContract",
          },
          {
            id: "contractList",
            title: "contractList",
            messageId: "sidebar.hr.ContratStatus",
            url: "/Hr/contractList",
          },
     
        
          {
            id: "Employee status",
            title: "Employee status",
            messageId: "sidebar.hr.EmployeesStatus",
            url: "/Hr/EmployeesStatus",
          },
         
        ],
      },
      
    ],
  },
  {
    id: "HREmployeeRelation",
    title: "HREmployeeRelation",
    messageId: "",
    type: "group",
    children: [
    
      {
        id: "attendance",
        title: "Time Sheet",
        messageId: "sidebar.TimeSheet",
        icon: <CiTimer />,
        url: "attendance",
        type: "collapse",
        children: [
          {
            id: "SiteTimeSheet",
            title: "SiteTimeSheet",
            messageId: "sidebar.hrrelation.TimeSheetsite",
            url: "/Hr/Attendances/SiteTimeSheet",
          },
          {
            id: "TimeSheetoffice",
            title: "TimeSheetoffice",
            messageId: "sidebar.hrRelation.TimeSheetoffice",
            url: "/Hr/Attendances/OfficeTimeSheet",
          },     
         
        ],
      },
      {
        id: "VacationLeave",
        title: "VacationLeave",
        messageId: "sidebar.components.VacationLeave",
        icon: <CiLogout />,
        url: "recharts1",
        type: "collapse",
        children: [
          {
            id: "Vacation",
            title: "Vacation",
            messageId: "sidebar.components.VacationLeave",
            url: "/Hr/Vacation&Leave/Vacation",
          },
          // {
          //   id: "Leave",
          //   title: "Leave",
          //   messageId: "sidebar.hrrelation.leave",
          //   url: "/Hr/Vacation&Leave/Leave",
          // },
          // {
          //   id: "JustifiedAbsence",
          //   title: "JustifiedAbsence",
          //   messageId: "sidebar.hrrelation.JustifiedAbsence",
          //   url: "/Hr/Vacation&Leave/JustifiedAbsence",
          // },
          // {
          //   id: "MaternityPaternity",
          //   title: "MaternityPaternity",
          //   messageId: "sidebar.hrrelation.MaternityPaternity",
          //   url: "/Hr/Vacation&Leave/MaternityPaternity",
          // },
          {
            id: "ReportedReports",
            title: "ReportedReports",
            messageId: "sidebar.hrrelation.ReportedReports",
            url: "/Hr/Vacation&Leave/ReportedReports",
          },
         
          
          
         
        ],
      },
      
    
    ],
  },
  {
    id: "HRCordinator",
    title: "HRCordinator",
    messageId: "",
    type: "group",
    children: [
    
      {
        id: "ManpowerEvaluation",
        title: "ManpowerEvaluation",
        messageId: "sidebar.manpower",
        icon: <FaAvianex />,
        url: "ManpowerEvaluation",
        type: "collapse",
        children: [
          {
            id: "ManpowerEvaluation",
            title: "ManpowerEvaluation",
            messageId: "",
            url: "",
          },
          
        ],
      },
      {
        id: "VisaHealth",
        title: "VisaHealth",
        messageId: "sidebar.VisaHealth",
        icon: <LiaCcVisa />,
        url: "VisaHealth",
        type: "collapse",
        children: [
          
          {
            id: "Add Travel",
            title: "Add Travel",
            messageId: "sidebar.general.travel",
            url: "/Hr/Visa/Travel",
          },
           
          {
            id: "VisaHealth",
            title: "VisaHealth",
            messageId: "sidebar.general.ADDVisaHealth",
            url: "/Hr/VisaHealth/AddVisa",
          },
        
          {
            id: "VisaHealth",
            title: "VisaHealth",
            messageId: "sidebar.general.VisaHealth",
            url: "/Hr/VisaHealth/Visa",
          },
          {
            id: "AddHealthCertification",
            title: "AddHealthCertification",
            messageId: "sidebar.general.AddHealthCertification",
            url: "/Hr/VisaHealth/AddHealthCertification",
          },
          {
            id: "AddCorona",
            title: "AddCovidVaccine",
            messageId: "sidebar.general.AddCorone",
            url: "/Hr/VisaHealth/AddCoronaVacine",
          },
          {
            id: "HealthCertification",
            title: "HealthCertification",
            messageId: "sidebar.general.HealthCertification",
            url: "/Hr/VisaHealth/HealthCertification",
          },
          {
            id: "CovidVaccin",
            title: "CovidVaccin",
            messageId: "sidebar.general.Covid",
            url: "/Hr/VisaHealth/CovidVaccine",
          },
         
       
          
        ],
      },
      {
        id: "PROJECTS TRIP TRACK RECORD ",
        title: "PROJECTS TRIP TRACK RECORD ",
        messageId: "sidebar.Trip",
        icon: <MdOutlineChangeCircle  />,
        url: "recharts",
        type: "collapse",
        children: [
          {
            id: "Add Mission",
            title: "Mission",
            messageId: "sidebar.general.Mission",
            url: "/Hr/Visa/Mission",
          },
          {
            id: "Add Internal  Mission",
            title: "Mission",
            messageId: "sidebar.general.InternalMission",
            url: "/Hr/Visa/InternalMission",
          },
          {
            id: "Add Mission",
            title: "Mission Order",
            messageId: "sidebar.general.AllMission",
            url: "/Hr/Visa/MissionOrder",
          },
          {
            id: "MissionExtention",
            title: "Mission Extention",
            messageId: "sidebar.general.AllMissionExtention",
            url: "/Hr/Visa/MissionOrderExtention",
          },
          {
            id: "AddExtensoinMission",
            title: "Add Mission Extension Request",
            messageId: "sidebar.general.AddmissionExtention",
            url: "/ManpowerLocation/AddMissionExtensionRequest",
          },
          {
            id: "AddDemobInput",
            title: "AddDemobInput",
            messageId: "sidebar.general.AddDemobInput",
            url: "/ManpowerLocation/AddDemobilization",
          },
          {
            id: "DemobPermissionSite",
            title: "DemobPermissionSite",
            messageId: "sidebar.general.demonpermissionSite",
            url: "/ManpowerLocation/DemobPermissionSite",
          },
          {
            id: "DemobTripTrackRecord",
            title: "DemobTripTrackRecord",
            messageId: "sidebar.general.DemobTripTrackRecorde",
            url: "/ManpowerLocation/DemobTripTrackRecorde",
          },
          {
            id: "SummaryDemobTrip",
            title: "SummaryDemobTrip",
            messageId: "sidebar.general.SummaryDemobTrip",
            url: "/ManpowerLocation/SummaryDemobTrip",
          },
          {
            id: "SummarymobTrip",
            title: "SummarymobTrip",
            messageId: "sidebar.general.SummaryMobTrip",
            url: "/ManpowerLocation/SummaryMobTrip",
          },


         
          // {
          //   id: "manpowerenxtension",
          //   title: "manpowerenxtension",
          //   messageId: "sidebar.general.demonpermissionSite",
          //   url: "/ManpowerLocation/DemobPermissionSite",
          // },
  
    
    
       
        ],
      },
      {
        id: "ManpowerLocation",
        title: "ManpowerLocation",
        messageId: "sidebar.ManpowerLocation",
        icon: <MdLocationOn  />,
        url: "recharts",
        type: "collapse",
        children: [
          
          {
            id: "ManpowerLocationTrackRecord",
            title: "ManpowerLocationTrackRecord",
            messageId: "sidebar.general.ManpowerLocationTrackRecord",
            url: "/ManpowerLocation/ManpowerLocationTrackRecord",
          },
          {
            id: "ManpowerAllocationPerProject",
            title: "ManpowerAllocationPerProject",
            messageId: "sidebar.general.ManpowerAllocationPerProject",
            url: "/ManpowerLocation/ManpowerAllocationPerProject",
          },
          {
            id: "DemobilizationDirectEmployeesSite",
            title: "DemobilizationDirectEmployeesSite",
            messageId: "sidebar.general.DemobilizationDirectEmployeesSite",
            url: "/ManpowerLocation/DemobilizationDirectEmployeesSite",
          },
          {
            id: "PersononBoard",
            title: "PersononBoard",
            messageId: "sidebar.general.PersononBoard",
            url: "/ManpowerLocation/PersononBoard",
          },
          {
            id: "HeadOfficeEmployees",
            title: "HeadOfficeEmployees",
            messageId: "sidebar.general.HeadOfficeEmployees",
            url: "/ManpowerLocation/HeadOfficeEmployees",
          },
          // {
          //   id: "ManpowerHystograms",
          //   title: "ManpowerHystograms",
          //   messageId: "sidebar.general.ManpowerHystograms",
          //   url: "/ManpowerLocation/ManpowerHystograms",
          // },
    
       
        ],
      },
      //
      {
        id: "Site Clerk",
        title: "SiteClerk",
        messageId: "sidebar.SiteCleark",
        icon: <RxPerson />,
        url: "recharts",
        type: "collapse",
        children: [
          
          {
            id: "SiteCleark",
            title: "ManpowerLocationTrackRecord",
            messageId: "sidebar.generalSiteClearkShall",
            url: "/SiteCleark/IdJosAndDesertPass",
          },
          
          {
            id: "SiteCleark",
            title: "ManpowerLocationTrackRecord",
            messageId: "sidebar.ReachDate",
            ellipsis: true,
            url: "/SiteCleark/Reached_ToSite_And_DemobFromSite",
          },
      
    
       
        ],
      },
      
    
    ],
  },

];
export default routesConfig;
