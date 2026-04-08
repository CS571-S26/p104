import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';

function MemberNetwork() {
  const [filter, setFilter] = useState('All');

  // 가상의 회원 데이터
  const members = [
    { id: 1, name: "Youngwon Ju", role: "Junior", major: "Computer Science" },
    { id: 2, name: "Jiho Han", role: "Senior", major: "Mechanical Engineering" },
    { id: 3, name: "Nicholas Beahm", role: "Sophomore", major: "Biology" },
    { id: 4, name: "Alex Kim", role: "Junior", major: "Computer Science" },
    { id: 5, name: "Sarah Lee", role: "Freshman", major: "Mechanical Engineering" }
  ];

  // 필터링 로직
  const filteredMembers = filter === 'All' 
    ? members 
    : members.filter(member => member.major === filter);

  return (
    <Container>
      <h2 className="mb-4 fw-bold">Member Network</h2>
      <p className="text-muted">Find and connect with peers in your specific field.</p>

      <Form.Group className="mb-4" style={{ maxWidth: "300px" }}>
        <Form.Label className="fw-bold">Filter by Major:</Form.Label>
        <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Majors</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Biology">Biology</option>
        </Form.Select>
      </Form.Group>

      <Row>
        {filteredMembers.map(member => (
          <Col md={4} key={member.id}>
            <ProfileCard name={member.name} role={member.role} major={member.major} />
          </Col>
        ))}
      </Row>
      
      {filteredMembers.length === 0 && (
        <p className="text-center mt-5 text-muted">No members found in this major.</p>
      )}
    </Container>
  );
}

export default MemberNetwork;