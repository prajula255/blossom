
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

        if (!userCredentials.loginEmail || !userCredentials.loginPassword) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Login successful!");
        console.log("Logged in with:", userCredentials);

        navigate("/home");
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
