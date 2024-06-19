import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  return userInfo ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
