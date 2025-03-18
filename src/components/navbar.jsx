import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavEg() {
  const navigate=useNavigate()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Flower Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" style={{ margin: "0 15px", color: "#000" }} >
              Home
            </Nav.Link>
            <Nav.Link  style={{ margin: "0 15px", color: "#000" }}onClick={()=>navigate("/shop")}>
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ margin: "0 15px", color: "#000" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ margin: "0 15px", color: "#000" }}>
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
