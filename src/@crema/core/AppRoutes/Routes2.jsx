import React from 'react';

import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';



export const recharts2Configs = [
  {
    path: '/Hr/Attendances/SiteTimeSheet',
    element:<ComposedChart />,
  },
  {
    path: '/Hr/Attendances/OfficeTimeSheet',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/composed',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/line',
    element: <ComposedChart />,
  },

 
];
