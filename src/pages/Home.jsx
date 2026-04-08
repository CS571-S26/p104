import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
        <h1 className="display-4 fw-bold">Empowering STEM Leaders</h1>
        <p className="lead mt-3">
          Join the Korean-American Scientists and Engineers Association at UW-Madison.
          Connect, grow, and build your professional network.
        </p>
        <div className="mt-4">
          <Button as={Link} to="/network" variant="primary" size="lg" className="me-3">
            Find Peers
          </Button>
          <Button as={Link} to="/opportunities" variant="outline-dark" size="lg">
            Upcoming Events
          </Button>
        </div>
      </div>

      <Row className="mt-5 text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Networking</Card.Title>
              <Card.Text>Connect with fellow STEM students and industry professionals.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Tech Talks</Card.Title>
              <Card.Text>Gain insights from guest speakers in various engineering fields.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Study Groups</Card.Title>
              <Card.Text>Collaborate and excel in rigorous STEM coursework together.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;