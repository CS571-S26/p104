import { Container, ListGroup, Badge } from 'react-bootstrap';

function Opportunities() {
  const events = [
    { id: 1, title: "Spring Semester Kickoff & Networking", date: "April 15, 2026", type: "Networking", desc: "Meet the new members and executive board." },
    { id: 2, title: "Tech Talk: Future of AI in Software", date: "April 22, 2026", type: "Tech Talk", desc: "Guest speaker from the tech industry." },
    { id: 3, title: "Midterm Prep: CS & Math Study Group", date: "May 2, 2026", type: "Study Group", desc: "Collaborative study session with upperclassmen." }
  ];

  return (
    <Container>
      <h2 className="mb-4 fw-bold">Upcoming Opportunities</h2>
      <ListGroup variant="flush" className="shadow-sm rounded">
        {events.map(event => (
          <ListGroup.Item key={event.id} className="p-4">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className="fw-bold mb-0">{event.title}</h5>
              <Badge bg="primary">{event.type}</Badge>
            </div>
            <div className="text-muted mb-2"><strong>Date:</strong> {event.date}</div>
            <p className="mb-0">{event.desc}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Opportunities;