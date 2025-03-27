
import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./loginPage.css";

const LoginPage = () => {
    const [userCredentials, setUserCredentials] = useState({
        loginEmail: "",
        loginPassword: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        console.log("User credentials before sending request:", userCredentials);
    
        if (!userCredentials.loginEmail || !userCredentials.loginPassword) {
            alert("Please enter both email and password.");
            return;
        }
    
        try {
            const requestBody = {
                email: userCredentials.loginEmail,  // Ensure field matches backend
                password: userCredentials.loginPassword,
            };
    
            console.log("Sending Login Request:", requestBody); // Log request body
    
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
    
            const data = await response.json();
            console.log("Server Response:", data); // Log server response
    
            if (response.ok) {
                alert("Login successful!");
                localStorage.setItem("authToken", data.token);
                navigate("/home")
            } else {
                alert(data.message || "Login failed.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Something went wrong.");
        }
    };
        
    return (
        <div className="login-page">
            <div className="login-overlay"></div>
            <Container className="login-container">
                <Row className="justify-content-center">
                    <Col md={5} sm={8}>
                        <div className="login-box">
                            <h2>Login</h2>
                            <Form onSubmit={handleLogin} className="login-form">
                                <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="loginEmail"
                                        placeholder="Enter email"
                                        value={userCredentials.loginEmail}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="loginPassword"
                                        placeholder="Enter password"
                                        value={userCredentials.loginPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="login-btn">
                                    Login
                                </Button>
                            </Form>

                            <p className="register-link">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
