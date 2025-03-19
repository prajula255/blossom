import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";
import { Button, Table, Container, Row, Col } from "react-bootstrap";

function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/cart");
        }
    }, [cart, navigate]);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        navigate("/order", { state: { cart } });
    };

    return (
        <>
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
                        <Col xs={12} md={6} style={{
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            marginBottom: "20px"
                        }}>
                            <h3 className="text-center">My Orders</h3>
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

                            <Button variant="success" className="w-100 mt-3" onClick={handlePlaceOrder}>
                                Place Order
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterEg />
        </>
    );
}

export default CheckoutPage;
