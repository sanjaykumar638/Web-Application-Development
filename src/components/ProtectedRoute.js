// ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthenticationContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    user ? <Route {...rest} element={<Component />} /> : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
