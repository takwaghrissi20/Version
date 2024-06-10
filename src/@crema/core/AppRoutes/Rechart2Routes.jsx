import React from 'react';
import AddVisa from '../../../modules/VisaAndTravel/visa/AddVisa';
import AddVisaGetsEmployees from '../../../modules/HRGetsCompany/AddVisa';
import EditVisa from '../../../modules/HRGetsCompany/EditVisa';
import Visa from '../../../modules/VisaAndTravel/visa/Visa';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Health from '../../../modules/VisaAndTravel/visa/HealthCorona/Health';
import AddHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/AddHealth';
import PieChart from '../../../modules/VisaAndTravel/visa/Pie';
import Radial from '../../../modules/VisaAndTravel/visa/Radial';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';
import Scatter from '../../../modules/VisaAndTravel/visa/Scatter';
import Radar from '../../../modules/VisaAndTravel/visa/Radar';
import FunnelChart from '../../../modules/VisaAndTravel/visa/Funnel';
import Mission from '../../../modules/VisaAndTravel/visa/Mission';
import AddTravel from '../../../modules/VisaAndTravel/visa/Travel';
import AddDemobization from '../../../modules/TripTrackRecord/AddDemobilization';
import DemoPermissionSite from '../../../modules/TripTrackRecord/DemobPermissionSite';


export const recharts2Configs = [
  {
    path: '/Hr/Visa/Mission',
    element: <Mission/>,
  },
  {
    path: '/Hr/Visa/Travel',
    element: <AddTravel  />,
  },
  {
    path: '/Hr/VisaHealth/AddVisa',
    element: <AddVisa />,
  },
  {
    path: '/Hr/VisaHealth/AddVisa/GetsEmployee',
    element: <AddVisaGetsEmployees />,
  },

  {
    path: '/Hr/VisaHealth/Visa',
    element: <Visa />,
  },
  {
    path: '/ManpowerLocation/AddDemobilization',
    element: <AddDemobization />,
  },
  {
    path: '/ManpowerLocation/DemobPermissionSite',
    element: <DemoPermissionSite />,
  },

  {
    path: '/Hr/VisaHealth/UpdateVisa',
    element: <EditVisa/>,
  },
  {
    path: '/Hr/VisaHealth/AddHealthCertification',
    element: <AddHealth/>,
  },
  
  {
    path: '/Hr/VisaHealth/HealthCertification',
    element: <Health />,
  },
  {
    path: '/Hr/VisaHealth/CoronaTest',
    element: <ComposedChart />,
  },
  {
    path: '/ManpowerLocation/ManpowerLocationTrackRecord',
    element: <PieChart />,
  },
  {
    path: '/ManpowerLocation/PersononBoard',
    element: <Radar />,
  },
  {
    path: '/ManpowerLocation/HeadOfficeEmployees',
    element: <Radial />,
  },
  {
    path: '/ManpowerLocation/ManpowerHystograms',
    element: <Treemap />,
  },
  {
    path: '/ManpowerLocation/ManpowerAllocationPerProject',
    element: <Scatter />,
  },
  {
    path: '/ManpowerLocation/DemobilizationDirectEmployeesSite',
    element: <FunnelChart />,
  },
];
