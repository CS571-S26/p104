import { Container, Row, Col, Card } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';
import { motion } from 'framer-motion';

function About() {
  const boardMembers = [
    { id: 1, name: "Donghyun Kim", role: "President", major: "Electric Engineering", image: "" },
    { id: 2, name: "Anah Choi", role: "Vice President", major: "Biology", image: "" },
    { id: 3, name: "Ruda Lee", role: "Event Coordinator", major: "Chemistry, Data Science", image: "" },
    { id: 4, name: "Sohyun Ryu", role: "Public Relations", major: "Biology", image: "" },
    { id: 5, name: "Seoyeon Kim", role: "Secretary", major: "Psychology", image: "" },
    { id: 6, name: "Youngwon Ju", role: "Academic Coordinator", major: "Computer Science", image: "" },
    { id: 7, name: "Heejae Hwang", role: "Academic Coordinator", major: "Data Science", image: "" },
    { id: 8, name: "Hyunwook Baek", role: "Financial Director", major: "Computer Science", image: "" }
  ];

  return (
    <Container className="py-5 mt-3">
      {/* 1. 헤더 섹션: 단체 소개 */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">About Us</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
          KSEA UW-Madison is dedicated to fostering a vibrant community of 
          Korean-American scientists and engineers. We provide a centralized hub 
          for professional growth, networking, and academic excellence.
        </p>
      </div>

      {/* 2. Mission & Vision 섹션 (얇은 테두리 적용) */}
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="h-100 border-primary rounded-4 shadow-sm" style={{ borderWidth: '1px' }}>
            <Card.Body className="p-4">
              <h4 className="fw-bold text-primary mb-3">Our Mission</h4>
              <p className="text-secondary mb-0">
                To empower the next generation of STEM leaders by facilitating knowledge sharing, 
                mentorship, and collaboration within the UW-Madison community.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-primary rounded-4 shadow-sm" style={{ borderWidth: '1px' }}>
            <Card.Body className="p-4">
              <h4 className="fw-bold text-primary mb-3">Our Vision</h4>
              <p className="text-secondary mb-0">
                Building a worldwide network of Korean-American professionals who contribute 
                to the advancement of science and technology.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 3. Executive Board 섹션 */}
      <div className="mt-5">
        <h2 className="fw-bold mb-4 border-start border-4 border-primary ps-3 text-primary">
          Executive Board
        </h2>
        
        {/* g-4를 추가하여 카드 간 간격을 확보하고, lg={3}으로 한 줄에 4개씩 정렬 */}
        <Row className="g-4">
          {boardMembers.map((member) => (
            <Col md={6} lg={3} key={member.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProfileCard 
                  name={member.name} 
                  role={member.role} 
                  major={member.major} 
                  image={member.image}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* 4. 하단 강조 섹션 (점선 테두리) */}
      <div className="mt-5 p-5 bg-white rounded-4 border border-primary text-center shadow-sm" 
           style={{ borderWidth: '1px', borderStyle: 'dashed' }}>
        <h4 className="fw-bold text-primary mb-2">Want to join our team?</h4>
        <p className="text-muted mb-0">Stay tuned for our recruitment cycles or reach out to us via email.</p>
      </div>
    </Container>
  );
}

export default About;