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
    return items.filter(item => {
      
      if (userRole.includes("Manager")) {
        if (item.id === "VisaHealth"||
            item.id === "ManpowerLocation"||
            item.id === "Employees"  ||
            item.id === "attendance" ||
            item.id === "VacationLeave" ||
            item.id === "ManpowerEvaluation"                                
          )
           {
          return false; 
        }
      }
      else if (userRole.includes("bod")) {
        if (item.id === "VisaHealth"||
            item.id === "ManpowerLocation"||
            item.id === "Employees"  ||
            item.id === "attendance" ||
            item.id === "VacationLeave" ||
            item.id === "ManpowerEvaluation" ||
            item.id === "Add Recruitment" 
                                    
          )
           {
          return false; 
        }
      }
      else if (userRole.includes("Administrator" )) {
        if (
            item.id === "VisaHealth"  || 
            item.id === "ManpowerEvaluation" ||
            item.id === "ManpowerLocation"
          
          
          )
           
             {
          return false; 
        }
      }
   

      if (item.children && item.children.length > 0) { 
        item.children = filterMenuItems(item.children);
      }     
      else if (userRole.includes("Manager")) {
        if (item.id === "Interview Statistics" ||
            item.id === "Integration" ||
            item.id === "IntegrationStatistics" ||
            item.id === "VisaHealth" )
           
             {
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
