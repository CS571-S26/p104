import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-4">
      {/* Hero Section: 파란 배경에 흰 글씨 */}
      <div className="p-5 mb-5 hero-gradient shadow-sm text-center text-white">
        <h1 className="display-4 fw-bold mb-3">Empowering STEM Leaders</h1>
        <p className="lead mt-3" style={{ fontWeight: '400', opacity: '0.9' }}>
          Korean-American Scientists and Engineers Association at UW-Madison.<br/>
          Connect, grow, and build your professional network.
        </p>
        <div className="mt-5">
          <Button as={Link} to="/network" variant="light" size="lg" className="me-3 rounded-pill px-4 shadow-sm text-primary fw-bold">
            Find Peers
          </Button>
          {/* 포인트 컬러(Red) 버튼 적용 */}
          <Button as={Link} to="/opportunities" className="btn-accent rounded-pill px-4 shadow-sm fw-bold border-0" size="lg">
            Upcoming Events
          </Button>
        </div>
      </div>

      <Row className="mt-5 text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary"><span style={{ fontSize: '2.5rem' }}>🤝</span></div>
              <Card.Title className="fw-bold">Networking</Card.Title>
              <Card.Text className="text-muted">Connect with fellow STEM students and professionals.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary"><span style={{ fontSize: '2.5rem' }}>💡</span></div>
              <Card.Title className="fw-bold">Tech Talks</Card.Title>
              <Card.Text className="text-muted">Gain insights from guest speakers in engineering fields.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4 h-100 hover-card rounded-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary"><span style={{ fontSize: '2.5rem' }}>📚</span></div>
              <Card.Title className="fw-bold">Study Groups</Card.Title>
              <Card.Text className="text-muted">Collaborate and excel in rigorous STEM coursework.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;