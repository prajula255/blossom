import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavEg() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  useEffect(() => {
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Flower Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/home"
              style={{ margin: "0 15px", color: "#000" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ margin: "0 15px", color: "#000" }}
              onClick={() => navigate("/shop")}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ margin: "0 15px", color: "#000" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{ margin: "0 15px", color: "#000" }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "-20px",
                    background: "red",
                    color: "black",
                    borderRadius: "50%",
                    padding: "4px 8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavEg;
