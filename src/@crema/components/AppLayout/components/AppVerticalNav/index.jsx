import { useEffect, useState } from "react";
import { getRouteMenus } from "./VerticalMenuUtils";
import clsx from "clsx";
import defaultConfig from "@crema/constants/defaultConfig";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { MenuStyle } from "@crema/constants/AppEnums";
import { StyledVerticalNav } from "./index.styled";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AppVerticalNav = ({ routesConfig }) => {
  const { menuStyle, sidebarColorSet } = useSidebarContext();
  const { pathname } = useLocation();
  const selectedKeys = pathname.substr(1);
  const [openKeys, setOpenKeys] = useState([selectedKeys[0]]);
  const userRole = localStorage.getItem("role");


  useEffect(() => {
    setOpenKeys([selectedKeys[selectedKeys.length - 2]]);
  }, []);

  useEffect(() => {
    if (pathname && document.getElementById(pathname)) {
      setTimeout(() => {
        document
          .getElementById(pathname)
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1);
    }
  }, [pathname]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  const filterMenuItems = (items) => {
    console.log("filterMenuItemspp", items)
    return items.filter(item => {
      if (userRole.includes("Manager") && !userRole.includes("Human Ressource ") && !userRole.includes("Construction") && !userRole.includes("Operation") &&
        !userRole.includes("Project") && !userRole.includes("Site")) {
        if (item.id === "VisaHealth" ||
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "Payroll"


        ) {
          return false;
        }
      }
      //User==Human Ressource MANAGER
      if (userRole.includes("Manager") && userRole.includes("Human Ressource ") && !userRole.includes("Construction") && !userRole.includes("Operation") &&
        !userRole.includes("Project") && !userRole.includes("Site")) {
        if (
          item.id === "ManpowerLocation" ||
          item.id === "Add Project" ||
          item.id === "Affect a project to employee" ||
          item.id === "AddEmployees" ||
          item.id === "CategoryContract" ||
          item.id === "contractList" ||
          item.id === "attendance" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "Payroll" ||
          item.id === "ADDVisaHealth" ||
          item.id === "AddHealthCertification" ||
          item.id === "AddCorona" ||
          item.id === "Add Travel" ||
          item.id === "Add Mission" ||
          item.id === "Add Internal  Mission" ||
          item.id === "AddExtensoinMission" ||
          item.id === "AddDemobInput"


        ) {
          return false;
        }
      }

      //End User==Human Ressource MANAGER
      ///Operation Manager
      if (userRole.includes("Manager") && userRole.includes("Operation") &&
        !userRole.includes("Project") && !userRole.includes("Site")) {
        if (
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "Payroll" ||
          item.id === "AddHealthCertification" ||
          item.id === "Add Travel" ||
          item.id === "AddCorona" ||
          item.id === "HealthCertification" ||
          item.id === "CovidVaccin" ||
          item.id === "Add Internal  Mission" ||
          item.id === "AddExtensoinMission" ||
          item.id === "AddDemobInput" ||
          item.id === "Add Mission"  ||
          item.id === "ADDVisaHealth" 


        ) {
          return false;
        }
      }




      //End Operation Manager
      //Construction
      if (userRole.includes("Construction")) {
        if (item.id === "VisaHealth" ||
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||

          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||

          item.id === "Payroll" ||
          item.id === "recruitement" ||
          item.id === "VacationLeave"

        ) {
          return false;
        }
      }

      //End Construction
      //Project Manager
      if (userRole.includes("Project")) {
        if (
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "Payroll" ||
          item.id === "AllLeave" ||
          item.id === "Add Travel" ||
          item.id === "AddHealthCertification" ||
          item.id === "AddCorona" ||
          item.id === "HealthCertification" ||
          item.id === "CovidVaccin" ||
          item.id === "Visa" ||
          item.id === "Add Mission" ||
          item.id === "Add Internal  Mission" ||
          item.id === "Add Mission" ||
          item.id === "MissionExtention" ||
          item.id === "AddDemobInput" ||
          item.id === "DemobPermissionSite" ||
          item.id === "DemobTripTrackRecord" ||
          item.id === "SummaryDemobTrip" ||
          item.id === "SummarymobTrip" ||
          item.id === "AddExtensoinMission"


        ) {
          return false;
        }
      }

      //Project Manager
      if (userRole.includes("Leader")) {
        if (
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "Add Mission" ||
          item.id === "Payroll" ||
          item.id === "AllLeave" ||
          item.id === "ADDVisaHealth" ||
          item.id === "AddHealthCertification" ||
          item.id === "AddCorona" ||
          item.id === "HealthCertification" ||
          item.id === "CovidVaccin" ||
          item.id === "Visa" ||
          item.id === "Add Internal  Mission" ||
          item.id === "Add Mission" ||
          item.id === "MissionExtention" ||
          item.id === "AddDemobInput" ||
          item.id === "DemobPermissionSite" ||
          item.id === "DemobTripTrackRecord" ||
          item.id === "SummaryDemobTrip" ||
          item.id === "AddExtensoinMission"









        ) {
          return false;
        }
      }
      if (userRole.includes("PMO")) {
        if (item.id === "VisaHealth" ||
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "VacationLeave" ||
          item.id === "ManpowerEvaluation" ||
         
          item.id === "recruitement" ||
        
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "Payroll"


        ) {
          return false;
        }
      }
      //QC LEAD
      if (userRole.includes("QC Lead")) {
        if (item.id === "VisaHealth" ||
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "VacationLeave" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Dashboards" ||
          item.id === "recruitement" ||
          item.id === "dashboards" ||
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "Payroll"


        ) {
          return false;
        }
      }

      //QC Lead
      else if (userRole.includes("bod")) {
        if (
          item.id === "Add Travel" ||
          item.id === "ADDVisaHealth" ||
          item.id === "AddHealthCertification" ||
          item.id === "AddCorona" ||
          item.id === "AddCorona" ||
          item.id === "ManpowerLocation" ||
          item.id === "Add Project" ||
          item.id === "Affect a project to employee" ||
          item.id === "AddEmployees" ||
          item.id === "CategoryContract" ||     
          item.id === "attendance" ||
          item.id === "Vacation" ||
          item.id === "My Leave History" ||
          item.id === "AddDemobInput" ||
          
          item.id === "ManpowerEvaluation" ||
          item.id === "Add Recruitment" ||
          item.id === "Site Clerk" ||
          item.id === "Add Mission" ||
          item.id === "Add Internal  Mission" ||
          item.id === "AddExtensoinMission" ||
          item.id === "Payroll"


        ) {
          return false;
        }
      }
      if (userRole.includes("Administrator")) {
        if (
          item.id === "attendance" ||
          item.id === "ManpowerLocation" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "Payroll" ||
          item.id === "Vacation" ||
          item.id === "My Leave History" ||
          item.id === "Add Travel" ||
          item.id === "AddCorona"
         

          // item.id === "Employees"  ||
          // item.id === "attendance" ||
          // item.id === "VacationLeave"  ||
          // item.id === "ManpowerEvaluation" ||
          // item.id === "Site Clerk"  ||
          // item.id === "PROJECTS TRIP TRACK RECORD "                           
        ) {
          return false;
        }
      }
      if (userRole.includes("Site Klerk")) {
        if (
          item.id === "HR Administrator" ||
          item.id === "Payroll" ||
          item.id === "ManpowerLocation" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "VisaHealth" ||
          item.id === "VacationLeave"
          // item.id === "Payroll"

        ) {
          return false;
        }
      }
      if (userRole.includes("HSE Site Manager")) {
        if (item.id === "dashboards" ||
          item.id === "HR Administrator" ||
          item.id === "Payroll" ||
          item.id === "ManpowerLocation" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "VisaHealth" ||
          item.id === "VacationLeave" ||
          item.id === "Payroll" ||
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "HRCordinator" ||
          item.id === "HREmployeeRelation"




        ) {
          return false;
        }
      }

      else if (userRole.includes("admin")) {
        if (
          item.id === ""

        ) {
          return false;
        }
      }

      if (item.children && item.children.length > 0) {
        item.children = filterMenuItems(item.children);
      }
      else if (userRole.includes("Manager") && !userRole.includes("Construction") && !userRole.includes("Human Ressource")) {
        if (item.id === "Interview Statistics" ||
          item.id === "Integration" ||
          item.id === "IntegrationStatistics" ||
          item.id === "ReportedReports" ||
          item.id === "AllLeave" ||
          item.id === "VisaHealth") {
          return false;
        }
      }
      //Operation


      //End Operation
      ///Construction
      else if (userRole.includes("Construction")) {
        if (item.id === "Add Mission " ||
          item.id === "Add Internal  Mission" ||
          item.id === "Add Mission" ||
          item.id === "MissionExtention" ||
          item.id === "AddDemobInput" ||
          item.id === "DemobPermissionSite" ||
          item.id === "DemobTripTrackRecord" ||
          item.id === "SummaryDemobTrip" ||
          item.id === "SummarymobTrip"

        ) {
          return false;
        }
      }



      ////End Construction
      else if (userRole.includes("Administrator")) {
        if (item.id === "Add Project" ||
          item.id === "AddEmployees" ||
          item.id === "CategoryContract" ||
          item.id === "contractList" ||
          item.id === "Add Recruitment"
        ) {
          return false;
        }
      }
      //Site Clerck
      else if (userRole.includes("Site Klerk")) {
        if (item.id === "TimeSheetoffice" ||
          item.id === "VacationLeave" ||
          item.id === "CategoryContract" ||
          item.id === "contractList" ||
          item.id === "Add Recruitment" ||
          item.id === "Add Mission" ||
          item.id === "Add Internal  Mission" ||
          item.id === "MissionExtention" ||
          item.id === "AddExtensoinMission" ||
          item.id === "DemobPermissionSite" ||
          item.id === "DemobTripTrackRecord" ||
          item.id === "SummaryDemobTrip" ||
          item.id === "SummarymobTrip"

        ) {
          return false;
        }
      }
      //End Site Clerck
      ///Logistic Coordinator
      if (userRole.includes("LOGISTIC")) {
        if (item.id === "VisaHealth" ||
          item.id === "ManpowerLocation" ||
          item.id === "Employees" ||
          item.id === "attendance" ||
          item.id === "VacationLeave" ||
          item.id === "ManpowerEvaluation" ||
          item.id === "Dashboards" ||
          item.id === "recruitement" ||
          item.id === "dashboards" ||
          item.id === "Site Clerk" ||
          item.id === "PROJECTS TRIP TRACK RECORD " ||
          item.id === "Payroll"


        ) {
          return false;
        }
      }




      //Logicis Coordinator
      else if (userRole.includes("Leader")) {
        if (item.id === "Interview Statistics" ||
          item.id === "Integration" ||
          item.id === "IntegrationStatistics"
        ) {
          return false;
        }
      }








      return true;
    });
  };


  const filteredRoutesConfig = filterMenuItems(routesConfig);

  return (
    <StyledVerticalNav
      theme={sidebarColorSet.mode}
      color={sidebarColorSet.sidebarMenuSelectedTextColor}
      bgcolor={sidebarColorSet.sidebarMenuSelectedBgColor}
      mode="inline"
      className={clsx({
        "menu-rounded": menuStyle === MenuStyle.ROUNDED,
        "menu-rounded rounded-menu-reverse":
          menuStyle === MenuStyle.ROUNDED_REVERSE,
        "menu-rounded standard-menu": menuStyle === MenuStyle.STANDARD,
        "menu-rounded curved-menu": menuStyle === MenuStyle.CURVED_MENU,
        "bg-color-menu":
          sidebarColorSet.sidebarBgColor !==
          defaultConfig.sidebar.colorSet.sidebarBgColor,
      })}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={selectedKeys.split("/")}
      // defaultOpenKeys={[defaultOpenKeys]}
      items={getRouteMenus(filteredRoutesConfig)}
    />
  );
};

export default AppVerticalNav;

AppVerticalNav.propTypes = {
  routesConfig: PropTypes.array.isRequired,
};
