import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavEg() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href>Flower Shop</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{
              margin: '0 15px', color: '#eee',
            }}>Home</Nav.Link>
            <Nav.Link href="/shop" style={{
              margin: '0 15px', color: '#eee',
            }}>Shop</Nav.Link>
            <Nav.Link href="/about" style={{
              margin: '0 15px', color: '#eee',
            }}>About</Nav.Link>
            <Nav.Link href="/contact" style={{
              margin: '0 15px', color: '#eee',
            }}>Contact</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavEg;