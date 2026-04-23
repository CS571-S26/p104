import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0">&copy; 2026 KSEA UW-Madison Chapter. All rights reserved.</p>
        <small className="text-muted">Connecting Korean-American STEM students.</small>
      </Container>
    </footer>
  );
}

export default Footer;