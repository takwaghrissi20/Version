import React from 'react';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
// import OfficeTimeSheet from '../../../modules/TimeSheet/TimeSheetoffice';
import Radial from '../../../modules/VisaAndTravel/visa/Radial';
import Treemap from '../../../modules/VisaAndTravel/visa/Treemap';
import Radar from '../../../modules/VisaAndTravel/visa/Radar';
import FunnelChart from '../../../modules/VisaAndTravel/visa/Funnel';

export const rechartsConfigs = [
  {
    path: '/Hr/Attendances/SiteTimeSheet',
    element: <ComposedChart />,
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
  {
    path: '/third-party/recharts/pie',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/radar',
    element: <Radar />,
  },
  {
    path: '/third-party/recharts/radial',
    element: <Radial />,
  },
  {
    path: '/third-party/recharts/treemap',
    element: <Treemap />,
  },
  {
    path: '/third-party/recharts/scatter',
    element: <Treemap />,
  },
  {
    path: '/third-party/recharts/funnel',
    element: <FunnelChart />,
  },
];
