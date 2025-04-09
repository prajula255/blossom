import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    toast.success("You have been logged out.");
    setTimeout(() => {
      navigate("/");
    }, 1500); // Wait for toast before navigating
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Logging you out...</h2>
      </div>
    </>
  );
};

export default LogoutPage;
