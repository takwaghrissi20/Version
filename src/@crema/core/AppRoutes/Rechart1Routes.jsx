import React from 'react';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';;



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
    element: <Treemap />,
  },
  {
    path: '/Hr/Vacation&Leave/ReportedReports',
    element: <Treemap />,
  },
  {
    path: '/third-party1/recharts1/radar',
    element: <Treemap />,
  },
  {
    path: '/third-party1/recharts1/radial',
    element: <Treemap />,
  },
  {
    path: '/third-party1/recharts1/treemap',
    element: <Treemap />,
  },
  {
    path: '/third-party1/recharts1/scatter',
    element: <Treemap />,
  },
 
];
