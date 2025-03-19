import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import FooterEg from "../../components/footer";

function FlowersList() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [blinkingItem, setBlinkingItem] = useState(null);

    const flowers = [
        { id: 1, category: "Bouquet", name: "Wild Flower", price: 430, image: "/wi.jpg" },
        { id: 2, category: "Flower", name: "Chembakam", price: 90, image: "/chembakam.jpg" },
        { id: 3, category: "Bouquet", name: "Tulips Bouquet", price: 500, image: "/tul.jpg" },
        { id: 4, category: "Bouquet", name: "White Rose", price: 450, image: "/white.jpg" },
        { id: 5, category: "Flower", name: "Red Rose", price: 50, image: "/rosef.jpg" },
        { id: 6, category: "Flower", name: "Water lilies", price: 190, image: "/lilie.jpg" },
        { id: 7, category: "Bouquet", name: "Pink Money", price: 250, image: "/pink.jpg" },
        { id: 8, category: "Flower", name: "West Indian Jasmine", price: 250, image: "/jas.jpg" },
        { id: 9, category: "Flower", name: "Dianthus barbatus", price: 150, image: "/purple.jpg" },
        { id: 10, category: "Bouquet", name: "Violet Dalia", price: 550, image: "/vilot.jpg" },
        { id: 11, category: "Flower", name: "Marigold", price: 200, image: "/mari.jpg" },
        { id: 12, category: "Flower", name: "Wild Purple", price: 60, image: "/pur.jpg" }
    ];

    const addToCart = (flower) => {
        const existingItem = cart.find(item => item.id === flower.id);

        let updatedCart;
        if (existingItem) {
            updatedCart = cart.map(item =>
                item.id === flower.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cart, { ...flower, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setBlinkingItem(flower.id);
        setTimeout(() => setBlinkingItem(null), 500);
    };

    return (
        <>
            <div style={{ padding: "24px" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "16px", fontSize: "20px", textAlign: "left" }}>Shop</h2>
                <Button onClick={() => navigate("/cart")}> View Cart ({cart.length})</Button>
                <ul style={{
                    listStyle: "none",
                    padding: 0,
                    display: "grid",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    gridTemplateColumns: "repeat(4,1fr)"
                }}>
                    {flowers.map((flower) => (
                        <li key={flower.id} style={{ position: "relative", textAlign: "center" }}>
                            <div style={{ position: "relative", display: "inline-block" }}>
                                <img
                                    src={flower.image}
                                    alt={flower.name}
                                    style={{
                                        width: "260px",
                                        height: "260px",
                                        objectFit: "cover",
                                        borderRadius: "8px"
                                    }}
                                />

                                <div
                                    onClick={() => addToCart(flower)}
                                    style={{
                                        position: "absolute",
                                        bottom: "10px",
                                        right: "10px",
                                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                                        padding: "8px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        animation: blinkingItem === flower.id ? "blink 0.5s ease-in-out" : "none"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="white"
                                        width="24"
                                        height="24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <span style={{ fontSize: "16px", fontWeight: "bold", display: "block", marginTop: "10px" }}>
                                {flower.category}<br /> {flower.name} <br /> Rs.{flower.price}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <style>
                {`
                    @keyframes blink {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
            <FooterEg />
        </>
    );
}

export default FlowersList;
