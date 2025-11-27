import React from "react";
import { Navigate } from "react-router-dom";

function Protect_Routes({ children, adminOnly }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    // User not logged in
    return <Navigate to="/login" />;
  }

  if (adminOnly && role !== "admin") {
    // User logged in but not admin
    return <Navigate to="/" />;
  }

  return children;
}

export default Protect_Routes;