import React from "react";

import {  HiOutlineChartSquareBar } from "react-icons/hi";



import { GrUserAdmin } from "react-icons/gr";
import { PiOfficeChairBold } from "react-icons/pi";
import { CiTimer,CiLogout } from "react-icons/ci";
import { FaAvianex } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { MdLocationOn } from "react-icons/md";


const routesConfig = [
  {
    id: "dashboards",
    title: "Application",
    messageId: "sidebar.application",
    type: "group",
    children: [
      
      {
        id: "Dashboards",
        title: "Dashboards",
        messageId: "sidebar.app.dashboards",
        icon: <HiOutlineChartSquareBar />,
        url: "/dashboards/hr",
      },
      
    ],
  },
  {
    id: "HR Administrator",
    title: "HR Administrator",
    messageId: "sidebar.apps",
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
            url: "/Hr/AddEmployees",
          },
          {
            id: "contractList",
            title: "contractList",
            messageId: "sidebar.hr.ContratStatus",
            url: "/Hr/contractList",
          },
     
        
          {
            id: "EmployeesOffice",
            title: "EmployeesOffice",
            messageId: "sidebar.hr.EmployeesOffice",
            url: "/Hr/EmployeesOffice",
          },
          {
            id: "EmployeesSite",
            title: "EmployeesSite",
            messageId: "sidebar.hr.EmployeesSite",
            url: "/Hr/EmployeesSite",
          },
          {
            id: "EmployeesSiteOffice",
            title: "EmployeesSiteOffice",
            messageId: "sidebar.hr.EmployeesOfficeSite",
            url: "/Hr/EmployeesSiteOffice",
          },
        ],
      },
      
    ],
  },
  {
    id: "HREmployeeRelation",
    title: "HREmployeeRelation",
    messageId: "sidebar.HREmployeeRelationAttendance",
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
            messageId: "sidebar.hrrelation.vacation",
            url: "/Hr/Vacation&Leave/Vacation",
          },
          {
            id: "Leave",
            title: "Leave",
            messageId: "sidebar.hrrelation.leave",
            url: "/Hr/Vacation&Leave/Leave",
          },
          {
            id: "JustifiedAbsence",
            title: "JustifiedAbsence",
            messageId: "sidebar.hrrelation.JustifiedAbsence",
            url: "/Hr/Vacation&Leave/JustifiedAbsence",
          },
          {
            id: "MaternityPaternity",
            title: "MaternityPaternity",
            messageId: "sidebar.hrrelation.MaternityPaternity",
            url: "/Hr/Vacation&Leave/MaternityPaternity",
          },
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
    messageId: "sidebar.HrCoordinator",
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
            id: "Travel",
            title: "Travel",
            messageId: "sidebar.general.travel",
            url: "/Hr/Visa/Travel",
          },
        
          {
            id: "VisaHealth",
            title: "VisaHealth",
            messageId: "sidebar.general.VisaHealth",
            url: "/Hr/VisaHealth/Visa",
          },
          {
            id: "HealthCertification",
            title: "HealthCertification",
            messageId: "sidebar.general.HealthCertification",
            url: "/Hr/VisaHealth/HealthCertification",
          },
          {
            id: "Corona Test",
            title: "Corona Test",
            messageId: "sidebar.general.CoronaTest",
            url: "/Hr/VisaHealth/CoronaTest",
          },
       
          
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
          {
            id: "ManpowerHystograms",
            title: "ManpowerHystograms",
            messageId: "sidebar.general.ManpowerHystograms",
            url: "/ManpowerLocation/ManpowerHystograms",
          },
    
       
        ],
      },
      
    
    ],
  },

];
export default routesConfig;
