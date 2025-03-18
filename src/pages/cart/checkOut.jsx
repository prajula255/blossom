import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";
import NavEg from "../../components/navbar";
import { Button, Form, Table, Container, Row, Col } from "react-bootstrap";

function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "cod"
    });

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/cart"); // Redirect to cart if empty
        }
    }, [cart, navigate]);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after checkout
        setCart([]);
        navigate("/");
    };

    return (
        <>
            {/* <NavEg /> */}
            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        {/* Order Summary */}
                        <Col xs={12} md={6} style={{
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            marginBottom: "20px"
                        }}>
                            <h3 className="text-center">Your Order</h3>
                            <Table striped bordered hover className="text-center">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{ width: "50px", height: "50px", borderRadius: "5px", objectFit: "cover" }}
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>Rs.{item.price * item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <h4 className="text-center mt-3">Total Price: <strong>Rs.{totalPrice}</strong></h4>
                        </Col>

                        {/* Checkout Form */}
                        <Col xs={12} md={6} style={{
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                        }}>
                            <h3 className="text-center">Billing Details</h3>
                            <Form onSubmit={handleSubmit} className="mt-3">
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="card">Credit/Debit Card</option>
                                    </Form.Select>
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100" style={{ padding: "10px", fontSize: "18px" }}>Place Order</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterEg />
        </>
    );
}

export default CheckoutPage;
