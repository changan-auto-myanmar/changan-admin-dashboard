import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import handleTokenExpiration from "./TokenExpired";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  handleTokenExpiration();
  const token = localStorage.getItem("changanToken");
  if (token) {
    return children;
  } else {
    console.log("error");
    return navigate("/auth/sign-in");
  }
}

export default PrivateRoute;
