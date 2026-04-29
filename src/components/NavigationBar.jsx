import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import kseaLogo from '../assets/ksea-logo.gif';

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" className="shadow-sm mb-4" style={{ backgroundColor: '#0f3d7a' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center" style={{ letterSpacing: '1px' }}>
          
          <img
            src={kseaLogo}
            alt="KSEA Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2 bg-white rounded-circle shadow-sm" 
            style={{ padding: '2px' }}
          />
          
          KSEA UW-Madison
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/opportunities">Opportunities</Nav.Link>
            <Nav.Link as={Link} to="/network">Member Network</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/rsvp">RSVP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;