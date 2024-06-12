import React from 'react';
import { RoutePermittedRole } from '../../../@crema/constants/AppEnums';
const Dashboards = React.lazy(() => import('../../../modules/dashboards/Dashboards'));
const Widgets = React.lazy(() => import('../../../modules/dashboards/Widgets'));
const InterviewSheet = React.lazy(() => import('../../../modules/InterviewSheet'));
const InterviewSheetConstruction = React.lazy(() => import('../../../modules/InterviewSheetContructionStaff'));
import ProtectedRoute from './ProtectedRoute';
export const dashboardConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/hr',
    
    element: <ProtectedRoute element={<Dashboards />} permittedRole={RoutePermittedRole.User} />,
  },

  // {
  //   permittedRole: RoutePermittedRole.User,
  //   path: '/dashboards/hr',
  //   element: <Dashboards />,
  // },

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
