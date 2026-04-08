import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';

function About() {
  // 임원진 데이터 (이곳에 실제 데이터를 추가하시면 됩니다)
  const boardMembers = [
    { id: 1, name: "Youngwon Ju", role: "President / Product Manager", major: "Computer Science" },
    { id: 2, name: "Jiho Han", role: "Vice President", major: "Mechanical Engineering" },
    { id: 3, name: "Nicholas Beahm", role: "Secretary", major: "Biology" }
  ];

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">About Us</h2>
        <p className="lead text-muted">
          Our mission is to empower STEM students at UW-Madison by providing a 
          centralized hub for opportunities, networking, and growth.
        </p>
      </div>

      <h3 className="mb-4 border-bottom pb-2">Executive Board</h3>
      <Row>
        {boardMembers.map((member) => (
          <Col md={4} key={member.id}>
            <ProfileCard 
              name={member.name} 
              role={member.role} 
              major={member.major} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;