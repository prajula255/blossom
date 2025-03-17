import React, { useState } from "react";

function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add your form submission logic here (e.g., API call)
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", textAlign: "center" }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
                <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactPage;
