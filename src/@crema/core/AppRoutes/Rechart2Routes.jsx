import React from 'react';
import AddVisa from '../../../modules/VisaAndTravel/visa/AddVisa';
import AddVisaGetsEmployees from '../../../modules/HRGetsCompany/AddVisa';
import EditVisa from '../../../modules/HRGetsCompany/EditVisa';
import Visa from '../../../modules/VisaAndTravel/visa/Visa';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Health from '../../../modules/VisaAndTravel/visa/HealthCorona/Health';
import Covid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid';
import AddHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/AddHealth';
import AddCorona from '../../../modules/VisaAndTravel/visa/HealthCorona/AddCorona';
import ViewHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/Health/ViewHealth';
import ViewCovid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid/ViewCovid';
import EditHealth from '../../../modules/VisaAndTravel/visa/HealthCorona/Health/EditHealth';
import EditCovid from '../../../modules/VisaAndTravel/visa/HealthCorona/Covid/EditCovid';
import LocationTripTrack from '../../../modules/VisaAndTravel/visa/LocationTripTrack';
import Radial from '../../../modules/VisaAndTravel/visa/Radial';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';
import Scatter from '../../../modules/VisaAndTravel/visa/Scatter';
import Radar from '../../../modules/VisaAndTravel/visa/Radar';
import FunnelChart from '../../../modules/VisaAndTravel/visa/Funnel';
import Mission from '../../../modules/VisaAndTravel/visa/Mission';
import AddTravel from '../../../modules/VisaAndTravel/visa/Travel';
import AddDemobization from '../../../modules/TripTrackRecord/AddDemobilization';
import DemoPermissionSite from '../../../modules/TripTrackRecord/DemobPermissionSite';
import AddMissionExtensoin from '../../../modules/TripTrackRecord/AddExtensionMission';
import DemobTripTrackRecorde from '../../../modules/TripTrackRecord/DeMOBTRIPTRACKRECORD';
import SammaryDemobTrips from '../../../modules/TripTrackRecord/SAMMARYDEMOBTRIPS';
import SammaryMobTrips from '../../../modules/TripTrackRecord/SAMMARYMOBTRIPS';
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
    path: '/ManpowerLocation/AddMissionExtensionRequest',
    element: <AddMissionExtensoin />,
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
    path: '/ManpowerLocation/DemobTripTrackRecorde',
    element: <DemobTripTrackRecorde/>,
  },
  {
    path: '/ManpowerLocation/SummaryDemobTrip',
    element: <SammaryDemobTrips/>,
  },
  {
    path: '/ManpowerLocation/SummaryMobTrip',
    element: < SammaryMobTrips/>,
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
    path: '/Hr/VisaHealth/AddCoronaVacine',
    element: <AddCorona/>,
  },

  {
    path: '/Hr/VisaHealth/ViewHealthCertification/:id',
    element: <  ViewHealth/>,
  },
  {
    path: '/Hr/VisaHealth/ViewCovid/:id',
    element: <ViewCovid/>,
  },
  {
    path: '/Hr/VisaHealth/EditHealthCertification/:id',
    element: <EditHealth/>,
  },
  {
    path: '/Hr/VisaHealth/EditCovid/:id',
    element: <EditCovid/>,
  },

  
  {
    path: '/Hr/VisaHealth/HealthCertification',
    element: <Health />,
  },
  {
    path: '/Hr/VisaHealth/CovidVaccine',
    element: <Covid />,
  },

  {
    path: '/Hr/VisaHealth/CoronaTest',
    element: <ComposedChart />,
  },
  {
    path: '/ManpowerLocation/ManpowerLocationTrackRecord',
    element: <LocationTripTrack />,
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
