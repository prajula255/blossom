import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavEg() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Flower Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" style={{ margin: "0 15px", color: "#eee" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" style={{ margin: "0 15px", color: "#eee" }}>
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
      <br />
    </>
  );
}

export default NavEg;
