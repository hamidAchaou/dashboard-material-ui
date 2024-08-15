// src/routes/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PublicRoute;
