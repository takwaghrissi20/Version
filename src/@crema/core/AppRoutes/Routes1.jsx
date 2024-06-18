import React from 'react';

import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Radial from '../../../modules/VisaAndTravel/visa/Radial';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';
import Scatter from '../../../modules/VisaAndTravel/visa/Scatter';
import Radar from '../../../modules/VisaAndTravel/visa/Radar';
import FunnelChart from '../../../modules/VisaAndTravel/visa/Funnel';

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
    element: <Radar />,
  },
  {
    path: '/Hr/Vacation&Leave/ReportedReports',
    element: <Radar />,
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
