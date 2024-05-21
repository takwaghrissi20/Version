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

export const recharts1Configs = [
  {
    path: '/Hr/Vacation&Leave/Vacation',
    element: <AreaChart />,
  },
  {
    path: '/Hr/Vacation&Leave/Leave',
    element: <BarChart />,
  },
  {
    path: '/Hr/Vacation&Leave/JustifiedAbsence',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Vacation&Leave/MaternityPaternity',
    element: <LineChart />,
  },
  {
    path: '/Hr/Vacation&Leave/ReportedReports',
    element: <PieChart />,
  },
  {
    path: '/third-party1/recharts1/radar',
    element: <Radar />,
  },
  {
    path: '/third-party1/recharts1/radial',
    element: <Radial />,
  },
  {
    path: '/third-party1/recharts1/treemap',
    element: <Treemap />,
  },
  {
    path: '/third-party1/recharts1/scatter',
    element: <Scatter />,
  },
  {
    path: '/third-party1/recharts1/funnel',
    element: <FunnelChart />,
  },
];
