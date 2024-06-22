import React from 'react';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import OfficeTimeSheet from '../../../modules/TimeSheet/TimeSheetoffice';
import SiteTimeSheet from '../../../modules/TimeSheet/TimeSheetsite';




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
