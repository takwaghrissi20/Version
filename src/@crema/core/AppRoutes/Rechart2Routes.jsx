import React from 'react';
import AreaChart from '../../../modules/thirdParty/recharts/Area';
import BarChart from '../../../modules/thirdParty/recharts/Bar';
import ComposedChart from '../../../modules/thirdParty/recharts/Composed';
import LineChart from '../../../modules/thirdParty/recharts/Line';
import PieChart from '../../../modules/thirdParty/recharts/Pie';
import Radial from '../../../modules/thirdParty/recharts/Radial';
import Treemap from '../../../modules/thirdParty/recharts/Treemap';
import Scatter from '../../../modules/thirdParty/recharts/Scatter';
import Radar from '../../../modules/thirdParty/recharts/Radar';
import FunnelChart from '../../../modules/thirdParty/recharts/Funnel';

export const recharts2Configs = [
  {
    path: '/Hr/Visa/Travel',
    element: <AreaChart />,
  },
  {
    path: '/Hr/VisaHealth/Visa',
    element: <BarChart />,
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
