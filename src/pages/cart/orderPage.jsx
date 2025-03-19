import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Table, Container, Row, Col } from "react-bootstrap";

function OrderPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart || [];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "cod",
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.paymentMethod === "card" && (!formData.cardNumber || !formData.expiryDate || !formData.cvv)) {
            alert("Please enter card details!");
            return;
        }

        alert("Order confirmed successfully!");
        localStorage.removeItem("cart"); 
        navigate("/");
    };

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} className="p-4 border rounded shadow">
                    {/* <h3 className="text-center">Order Summary</h3>
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
                    <h4 className="text-center mt-3">Total Price: <strong>Rs.{totalPrice}</strong></h4> */}

                    <h2 className="text-center mt-4"> Order Details</h2>
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
                                <option value="card">Credit/Debit/ATM Card</option>
                            </Form.Select>
                        </Form.Group>

                        {formData.paymentMethod === "card" && (
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control type="number" name="cvv" value={formData.cvv} onChange={handleChange} required />
                                </Form.Group>
                            </>
                        )}

                        <Button variant="success" type="submit" className="w-100">Confirm Order</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderPage;
