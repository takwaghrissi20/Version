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
import { MdOutlinePayments } from "react-icons/md";
import { MdPerson } from 'react-icons/md';
import { FcComboChart , FcAdvertising , FcClock } from 'react-icons/fc';
import { FaCalendarAlt } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { BiBriefcase } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
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
        icon: <FcComboChart />,
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
        icon: <FcAdvertising />,
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
        icon: <  MdPerson size={29} color=" #5782d9" />,
        children: [
          {
            id: "Add Project",
            title: "Add Project",
            messageId: "sidebar.hr.AddProject",
            url: "/HrDataBase/Add_Project",
          },
          {
            id: "Affect a project to employee",
            title: "Affect a project to employee",
            messageId: "sidebar.hr.Affectaprojecttoemployee",
            url: "/HrDataBase/Affectaprojecttoemployee",
          },



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
            id: "EmployeesOfficeSummary",
            title: "EmployeesOfficeSummary",
            messageId: "sidebar.hr.EmployeesOfficeSummary",
            url: "/Hr/Employees_Office_Summary",
          },
          {
            id: "EmployeesSiteSummary",
            title: "EmployeesSiteSummary",
            messageId: "sidebar.hr.EmployeesSiteSummary",
            url: "/Hr/Employees_Site_Summary",
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
        icon: <FcClock size={25}/>,
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
        icon: <FaCalendarAlt  size={21} color=" #5782d9" />,
        url: "recharts1",
        type: "collapse",
        children: [
          {
            id: "Vacation",
            title: "Vacation",
            messageId: "sidebar.components.LeaveApplication",
            url: "/Hr/Vacation&Leave/Vacation",
          },
          {
            id: "AllLeave",
            title: "AllLeave",
            messageId: "sidebar.components.AllLeave",
            url: "/Hr/Vacation&Leave/ALL_Leave",
          },
          {
            id: "My Leave History",
            title: "MyLeaveHistory",
            messageId: "sidebar.components.MyLeaveHistory",
            url: "/Hr/Vacation&Leave/My_Leave_History",
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
          // {
          //   id: "ReportedReports",
          //   title: "ReportedReports",
          //   messageId: "sidebar.hrrelation.ReportedReports",
          //   url: "/Hr/Vacation&Leave/ReportedReports",
          // },
         
          
          
         
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
        icon: < GiTeamIdea size={25} color="#5782d9"/>,
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
        icon: < FaCreditCard  size={24} color="#5782d9"/>,
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
            id: "Travel",
            title: "Travel",
            messageId: "sidebar.general.Alltravel",
            url: "/Hr/Visa/AllTravel",
          },
          {
            id: "ADDVisaHealth",
            title: "ADDVisaHealth",
            messageId: "sidebar.general.ADDVisaHealth",
            url: "/Hr/VisaHealth/AddVisa",
          },
        
          {
            id: "Visa",
            title: "Visa",
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
        icon: < FaPlane size={21} color="#5782d9"/>,
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
            id: "Mission Order",
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
        icon: <MdLocationOn  size={24} color="#5782d9"/>,
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
        icon: <BiBriefcase size={24} color="#5782d9" />,
        url: "recharts",
        type: "collapse",
        children: [
        
          {
            id: "SiteClearkPointages",
            title: "AddEmployeesPointages",
            messageId: "sidebar.generalSiteClearkAddPointages",
            url: "/SiteCleark/Add-Employees-Pointages",
          },
          {
            id: "SiteClearkIdJosAndDesertPass",
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
  {
    id: "Payroll",
    title: "Payroll",
    messageId: "",
    type: "group",
    children: [
    
    
      {
        id: "Payroll",
        title: "Payroll",
        messageId: "sidebar.Payroll",
        icon: <MdAttachMoney size={24} color="#5782d9"  />,
        url: "recharts",
        type: "collapse",
        children: [
          
          {
            id: "Salaries Tracker",
            title: "SalariesTracker",
            messageId: "sidebar.general.SalariesCalculate",
            url: "/Payroll/CalculateSiteSalary",
          },
          {
            id: "Salaries Tracker",
            title: "SalariesTracker",
            messageId: "sidebar.general.SalariesCalculateOffice",
            url: "/Payroll/CalculateSalaryOffice",
          },
         
         
          
          {
            id: "Salaries Calculate",
            title: "SalariesCalculate",
            messageId: "sidebar.general.Payroll",
            url: "/Payroll/SalariesTracker",
          },
          {
            id: "CashAdvance",
            title: "Cash Advance & Deduction From Salaries",
            messageId: "sidebar.app.CashAdvance",
            url: "/Payroll/Cash_Advance",
          },
       
          {
            id: "Payment Request",
            title: "Payment Request",
            messageId: "sidebar.general.paymentRequest",
            url: "/Payroll/PaymentRequest",
          },
     
     
       
        ],
      },
     
      
    
    ],
  },

];
export default routesConfig;
