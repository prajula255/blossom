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
            {/* <NavEg /> */}
            <div style={{ padding: "24px" }}>
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Cart is empty. <Button onClick={() => navigate("/shop")}>Shop Now</Button></p>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ width: "50px", borderRadius: "5px" }}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>Rs.{item.price}</td>
                                    <td>
                                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                                    </td>
                                    <td>Rs.{item.price * item.quantity}</td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>x</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
                <h3>Total Price: Rs.{totalPrice}</h3>
                <Button variant="success" onClick={()=>navigate("/checkOut")}>Proceed to Checkout</Button>
            </div>
            <FooterEg />
        </>
    );
}

export default CartPage;
