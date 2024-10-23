import React from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePermittedRole } from '../../../@crema/constants/AppEnums';

const ProtectedRoute = ({ element, permittedRole }) => {
  const userRole = localStorage.getItem('role');

  if (permittedRole === RoutePermittedRole.Admin && !userRole.includes('admin')) {
    return <Navigate to="/no-permission" />;
  }

  if (permittedRole === RoutePermittedRole.Hr && !userRole.includes('Hr')) {
    return <Navigate to="/no-permission" />;
  }

  return element;
};

export default ProtectedRoute;
