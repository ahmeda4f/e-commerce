import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../Contexts/Context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { logged } = useContext(Authcontext);

  if (logged) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
