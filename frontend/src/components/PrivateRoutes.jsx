import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoutes() {
  const { auth } = useAuth();

  if (auth === undefined) return 'loading...';

  return auth === true ? <Outlet /> : <Navigate to="/auth" />;
}
