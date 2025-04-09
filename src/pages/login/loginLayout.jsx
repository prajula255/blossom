import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginLayout.css";

const LoginSelectionPage = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate("/user-login");
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <div className="login-selection">
      <div className="login-box">
      <h2>Choose Login Type</h2>

        <button className="login-btn user" onClick={handleUserLogin}>
          User Login
        </button>
        <button className="login-btn admin" onClick={handleAdminLogin}>
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default LoginSelectionPage;
