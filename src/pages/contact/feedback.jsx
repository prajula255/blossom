import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/home"), 3000); // Redirect to home after 3 seconds
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url("/gfl1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "rgba(236, 231, 234, 0.32)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#FF6F4F" }}>We Value Your Feedback</h2>
          {submitted && (
            <p style={{ color: "black", fontWeight: "bold" }}>
              Thank you for your feedback!
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#FF6F4F",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <FooterEg />
    </>
  );
}

export default FeedbackPage;
