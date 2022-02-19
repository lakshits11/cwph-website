import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    //  Header
    <header className="background-header">
      <Navbar bg="default" expand="lg" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Navbar.Brand className="align-middle" href="/">
            <h2 style={{ cursor: "pointer" }}>CWPH</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/activities">Activities</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
