import React from 'react';

import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';



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
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Vacation&Leave/ReportedReports',
    element: <ComposedChart />,
  },
  {
    path: '/third-party1/recharts1/radar',
    element: <ComposedChart />,
  },

  

];
