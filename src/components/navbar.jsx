import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavEg() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        style={{
          position: "absolute", // Makes navbar float over background
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000, // Ensures it stays above other elements
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent for visibility
          backdropFilter: "blur(5px)" // Adds a blur effect for better UI
        }}
      >
        <Container>
          <Navbar.Brand>Flower Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" style={{ margin: "0 15px", color: "#eee" }}>
              Home
            </Nav.Link>
            <Nav.Link style={{ margin: "0 15px", color: "#eee" }} onClick={() => navigate("/shop")}>
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ margin: "0 15px", color: "#eee" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ margin: "0 15px", color: "#eee" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavEg;
