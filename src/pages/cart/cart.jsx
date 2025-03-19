import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterEg from "../../components/footer";
import NavEg from "../../components/navbar";
import { Button, Table } from "react-bootstrap";

function CartPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const updateQuantity = (id, amount) => {
        const newCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        );
        setCart(newCart);
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <NavEg />
            <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
                <h2 className="mb-4">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty. <Button onClick={() => navigate("/shop")}>Shop Now</Button></p>
                ) : (
                    <>
                        <Table striped bordered hover responsive className="text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: "15%" }}>Product</th>
                                    <th style={{ width: "25%" }}>Name</th>
                                    <th style={{ width: "15%" }}>Price</th>
                                    <th style={{ width: "20%" }}>Quantity</th>
                                    <th style={{ width: "15%" }}>Total</th>
                                    <th style={{ width: "10%" }}>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{ width: "60px", height: "70px", borderRadius: "5px" }}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>Rs. {item.price}</td>
                                        <td>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="me-2"
                                            >
                                                -
                                            </Button>
                                            <span style={{ minWidth: "30px", display: "inline-block" }}>{item.quantity}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="ms-2"
                                            >
                                                +
                                            </Button>
                                        </td>
                                        <td><strong>Rs. {item.price * item.quantity}</strong></td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                ×
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h3>Total Price: <strong>Rs. {totalPrice}</strong></h3>
                            <Button variant="success" size="lg" onClick={() => navigate("/checkOut")}>
                                Proceed to Checkout
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <FooterEg />
        </>
    );
}

export default CartPage;
