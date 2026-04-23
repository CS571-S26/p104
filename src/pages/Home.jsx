import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-4">
      {/* 1. Hero Section (상단 메인 배너) */}
      <div className="p-5 mb-5 hero-gradient shadow-sm text-center">
        <h1 className="display-4 fw-bold text-dark mb-3">Empowering STEM Leaders</h1>
        <p className="lead mt-3 text-secondary" style={{ fontWeight: '500' }}>
          Join the Korean-American Scientists and Engineers Association at UW-Madison.<br/>
          Connect, grow, and build your professional network.
        </p>
        <div className="mt-5">
          <Button as={Link} to="/network" variant="primary" size="lg" className="me-3 rounded-pill px-4 shadow-sm">
            Find Peers
          </Button>
          <Button as={Link} to="/opportunities" variant="light" size="lg" className="rounded-pill px-4 shadow-sm text-primary fw-bold border">
            Upcoming Events
          </Button>
        </div>
      </div>

      {/* 2. Feature Cards Section (하단 주요 활동 소개) */}
      <Row className="mt-5 text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3">
                <span style={{ fontSize: '2.5rem' }}>🤝</span>
              </div>
              <Card.Title className="fw-bold">Networking</Card.Title>
              <Card.Text className="text-muted">
                Connect with fellow STEM students and industry professionals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3">
                <span style={{ fontSize: '2.5rem' }}>💡</span>
              </div>
              <Card.Title className="fw-bold">Tech Talks</Card.Title>
              <Card.Text className="text-muted">
                Gain insights from guest speakers in various engineering fields.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3">
                <span style={{ fontSize: '2.5rem' }}>📚</span>
              </div>
              <Card.Title className="fw-bold">Study Groups</Card.Title>
              <Card.Text className="text-muted">
                Collaborate and excel in rigorous STEM coursework together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;