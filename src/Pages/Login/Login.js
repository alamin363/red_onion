import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Context";

const Login = () => {
   
  
  const {} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  return <div></div>;
};

export default Login;
