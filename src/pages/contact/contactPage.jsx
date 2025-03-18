import React, { useState } from "react";
import FooterEg from "../../components/footer";
import NavEg from "../../components/navbar";

function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}><NavEg /></div> */}

            <div
                style={{
                    minHeight: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url("/home.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "40px"
                }}
            >
                <div style={{
                    maxWidth: "600px",
                    width: "100%",
                    backgroundColor: "rgba(229, 156, 200, 0.32)",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    textAlign: "center"
                }}>
                    <h2>Contact Us</h2>
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
                            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                padding: "10px",
                                borderRadius: "5px",
                                backgroundColor: "#28a745",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "16px"
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <FooterEg />
        </>
    );
}

export default ContactPage;
