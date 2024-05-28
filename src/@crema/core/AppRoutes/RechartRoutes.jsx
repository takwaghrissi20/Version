import React from 'react';
import ComposedChart from '../../../modules/thirdParty/visa/Composed';
import LineChart from '../../../modules/thirdParty/visa/Line';
import PieChart from '../../../modules/thirdParty/visa/Pie';
import Radial from '../../../modules/thirdParty/visa/Radial';
import Treemap from '../../../modules/thirdParty/visa/Treemap';
import Scatter from '../../../modules/thirdParty/visa/Scatter';
import Radar from '../../../modules/thirdParty/visa/Radar';
import FunnelChart from '../../../modules/thirdParty/visa/Funnel';

export const rechartsConfigs = [
  {
    path: '/Hr/Attendances/SiteTimeSheet',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Attendances/OfficeTimeSheet',
    element:<ComposedChart />,
  },
  {
    path: '/third-party/recharts/composed',
    element: <ComposedChart />,
  },
  {
    path: '/third-party/recharts/line',
    element: <LineChart />,
  },
  {
    path: '/third-party/recharts/pie',
    element: <PieChart />,
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
    element: <Scatter />,
  },
  {
    path: '/third-party/recharts/funnel',
    element: <FunnelChart />,
  },
];
