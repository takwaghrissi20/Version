import React from 'react';
import AreaChart from '../../../modules/thirdParty/visa/Area';
import Visa from '../../../modules/thirdParty/visa/Visa';
import ComposedChart from '../../../modules/thirdParty/visa/Composed';
import LineChart from '../../../modules/thirdParty/visa/Line';
import PieChart from '../../../modules/thirdParty/visa/Pie';
import Radial from '../../../modules/thirdParty/visa/Radial';
import Treemap from '../../../modules/thirdParty/visa/Treemap';
import Scatter from '../../../modules/thirdParty/visa/Scatter';
import Radar from '../../../modules/thirdParty/visa/Radar';
import FunnelChart from '../../../modules/thirdParty/visa/Funnel';

export const recharts2Configs = [
  {
    path: '/Hr/Visa/Travel',
    element: <AreaChart />,
  },
  {
    path: '/Hr/VisaHealth/Visa',
    element: <Visa />,
  },
  {
    path: '/Hr/VisaHealth/HealthCertification',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/VisaHealth/CoronaTest',
    element: <LineChart />,
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
