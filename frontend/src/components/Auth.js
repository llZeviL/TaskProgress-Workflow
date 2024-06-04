import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  // Si no hay un token almacenado, redirecciona al usuario a la página de inicio de sesión
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si hay un token almacenado, renderiza el componente correspondiente a la ruta protegida
  return <Component {...rest} />;
};

export default PrivateRoute;
