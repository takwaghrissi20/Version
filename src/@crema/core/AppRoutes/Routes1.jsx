import React from 'react';

import ComposedChart from '../../../modules/thirdParty/visa/Composed';
import LineChart from '../../../modules/thirdParty/visa/Line';
import PieChart from '../../../modules/thirdParty/visa/Pie';
import Radial from '../../../modules/thirdParty/visa/Radial';
import Treemap from '../../../modules/thirdParty/visa/Treemap';
import Scatter from '../../../modules/thirdParty/visa/Scatter';
import Radar from '../../../modules/thirdParty/visa/Radar';
import FunnelChart from '../../../modules/thirdParty/visa/Funnel';

export const recharts1Configs = [
  {
    path: '/Hr/Vacation&Leave/Vacation',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Vacation&Leave/Leave',
    element: <ComposedChart />,
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
