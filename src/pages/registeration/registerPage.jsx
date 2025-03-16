import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const RegisterPage = () => {
    const [userCredentials, setUserCredentials] = useState({
        RegName: "",
        RegEmail: "",
        RegPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!userCredentials.RegName || !userCredentials.RegEmail || !userCredentials.RegPassword) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Registration successful!");
        console.log("Registered Data:", userCredentials);
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundImage: `url("/regimage.jpg")`, // Fixed background image issue
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
                    zIndex: 1,
                }}
            ></div>

            <Container style={{ position: "relative", zIndex: 2 }}>
                <Row className="justify-content-center">
                    <Col md={5} sm={8}>
                        <div className="p-4 bg-white shadow-lg rounded-3 text-center">
                            <h2 className="fw-bold mb-4 text-dark">Register</h2>
                            <Form onSubmit={handleRegister}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3" className="text-end fw-bold text-dark" style={{ color: "#000", fontWeight: "bold" }}>
                                        Name
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            name="RegName"
                                            placeholder="Enter name"
                                            value={userCredentials.RegName}
                                            onChange={handleInputChange}
                                            required
                                            style={{ borderRadius: "125px", padding: "10px" }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3" className="text-end fw-bold text-dark" style={{ color: "#000", fontWeight: "bold" }}>
                                        Email
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="email"
                                            name="RegEmail"
                                            placeholder="Enter email"
                                            value={userCredentials.RegEmail}
                                            onChange={handleInputChange}
                                            required
                                            style={{ borderRadius: "125px", padding: "10px" }}

                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3" className="text-end fw-bold text-dark" style={{ color: "#000", fontWeight: "bold" }}>
                                        Password
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="password"
                                            name="RegPassword"
                                            placeholder="Enter password"
                                            value={userCredentials.RegPassword}
                                            onChange={handleInputChange}
                                            required
                                            style={{ borderRadius: "125px", padding: "10px" }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100 py-2" style={{ color: "#007bff", fontWeight: "bold" }}>
                                    Register
                                </Button>
                            </Form>

                            <p className="text-center mt-3 text-dark">
                                Already have an account? <a href="/login" style={{ color: "#007bff", fontWeight: "bold" }}>Login</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterPage;
