import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { getCartAPI } from "../../api_services/allAPIs/cartAPI";

function NavEg() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    try {
      const res = await getCartAPI();
      const totalItems = res.data.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalItems);
    } catch (err) {
      console.error("Failed to fetch cart count");
    }
  };
  useEffect(() => {
    updateCartCount();
  }, []);

  useEffect(() => {
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  // Hide navbar on login page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        style={{
          backgroundColor: "#003366",
          position: "fixed",
          top: 0,
          width: "100%",
          height: "80px",
          zIndex: 1000,
        }}
      >
        <Container>
          <Navbar.Brand className="fw-bold text-white">
            Flower Shop
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link as={Link} to="/home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={() => navigate("/shop")}
              >
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/admin" className="text-white">
                Admin
              </Nav.Link>

              <NavDropdown title="More" id="moreDropdown">
                <div className="container-box p-3">
                  <NavDropdown.Item as={Link} to="/account">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/wishlist">
                    Wishlist
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/track-order">
                    Track Order
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/feedback">
                    Feedback
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item as={Link} to="/logout">
                    Logout
                  </NavDropdown.Item> */}
                </div>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/cart"
                style={{ position: "relative", display: "inline-block" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                    color: "white",
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
                      top: "-5px",
                      right: "-10px", // Prevent overlap
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      width: "18px", // Fixed size to handle larger numbers
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                      zIndex: 10,
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div style={{ height: "70px" }}></div>
    </>
  );
}

export default NavEg;
