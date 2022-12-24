import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Pages/Context/Context";

const PrivetRouter = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user.loading) {
    <h1>Loading</h1>;
  }
  if (user.email) return children;
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivetRouter;
