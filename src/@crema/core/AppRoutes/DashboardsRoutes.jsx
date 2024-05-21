import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import { Navigate } from 'react-router-dom';
const Dashboards = React.lazy(() => import('../../../modules/dashboards/Dashboards'));
const Widgets = React.lazy(() => import('../../../modules/dashboards/Widgets'));
const InterviewSheet = React.lazy(() => import('../../../modules/InterviewSheet'));
const InterviewSheetConstruction = React.lazy(() => import('../../../modules/InterviewSheetContructionStaff'));

export const dashboardConfig = [


  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/hr',
    element: <Dashboards />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/widgets',
    element: <Widgets />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/hr/:CodeJob',
    element: <InterviewSheet />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/hr/InterviewSheetContructionStaff/:CodeJob',
    element: <InterviewSheetConstruction />,
  },

];
