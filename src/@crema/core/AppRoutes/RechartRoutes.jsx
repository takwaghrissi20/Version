import React from 'react';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import OfficeTimeSheet from '../../../modules/TimeSheet/TimeSheetoffice';
import SiteTimeSheet from '../../../modules/TimeSheet/TimeSheetsite';
import AddSiteTimeSheet from '../../../modules/TimeSheet/AddTimeSheetsite';
import TimeSheetOffice from '../../../modules/TimeSheet/OfficeTimeSheet';
import AddTimeSheetOffice from '../../../modules/TimeSheet/AddTimeSheetOffice';



export const rechartsConfigs = [
  {
    path: '/Hr/Attendances/SiteTimeSheet',
    element: <SiteTimeSheet />,
  },
  {
    path: '/Hr/Attendances/OfficeTimeSheet',
    element: <OfficeTimeSheet />,
  },
  {
    path: '/Hr/Attendances/Office_Time_Sheet',
    element: <TimeSheetOffice />,
  },
  {
    path: '/Hr/Attendances/AddSiteTimeSheet',
    element: <AddSiteTimeSheet />,
  },
  {
    path: '/Hr/Attendances/Add_Office_TimeSheet',
    element: <AddTimeSheetOffice />,
  },
  
  
  {
    path: '/third-party/recharts/composed',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/line',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/pie',
    element: <ComposedChart />,
  },
  
 


];
