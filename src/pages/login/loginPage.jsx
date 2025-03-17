import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundImage: `url("/login.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}
            ></div>

            <Container style={{ position: "relative" }}>
                <Row className="justify-content-center">
                    <Col md={5} sm={8}>
                        <div
                            className="p-4 rounded-3 text-center"
                            style={{
                                backgroundColor: "rgba(249, 251, 251, 0.23)",
                                backdropFilter: "blur(5px)",
                                padding: "30px",
                                color: "#333",
                            }}
                        >
                            <h2 className="fw-bold mb-4" style={{ color: "#222" }}>Login</h2>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: "bold", color: "#000" }}>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="loginEmail"
                                        placeholder="Enter email"
                                        value={userCredentials.loginEmail}
                                        onChange={handleInputChange}
                                        required
                                        style={{ borderRadius: "8px", padding: "10px" }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: "bold", color: "#000" }}>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="loginPassword"
                                        placeholder="Enter password"
                                        value={userCredentials.loginPassword}
                                        onChange={handleInputChange}
                                        required
                                        style={{ borderRadius: "8px", padding: "10px" }}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 py-2" style={{ borderRadius: "8px" }}>
                                    Login
                                </Button>
                            </Form>

                            <p className="text-center mt-3" style={{ color: "#000" }}>
                                Don't have an account? <a href="/register" style={{ color: "#007bff", fontWeight: "bold" }}>Register</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
