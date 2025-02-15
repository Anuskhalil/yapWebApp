import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Show a pop-up or alert
    alert("Please sign up or log in to access this page.");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;