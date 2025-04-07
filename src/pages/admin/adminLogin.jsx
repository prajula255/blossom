import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../../api_services/baseURL";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseURL}/admin/login`, { email, password }, { withCredentials: true });

      if (res.data && res.data.role === "admin") {
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("userRole", "admin");
        toast.success("Admin login successful!");
        navigate("/admin"); // redirect to AdminPage
      } else {
        toast.error("Access denied: Not an admin");
      }
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Login</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
      <button onClick={handleLogin} style={{ width: "100%", padding: "10px", backgroundColor: "green", color: "#fff" }}>
        Login
      </button>
      <ToastContainer />
    </div>
  );
}

export default AdminLogin;
