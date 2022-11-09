import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Privateroutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <p className="text-center my-24 text-2xl">loading . . .</p>;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privateroutes;
