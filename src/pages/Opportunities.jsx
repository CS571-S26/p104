import { Container, ListGroup } from 'react-bootstrap';
import EventItem from '../components/EventItem';

function Opportunities() {
  const events = [
    { id: 1, title: "Spring Semester Kickoff & Networking", date: "April 15, 2026", type: "Networking", desc: "Meet the new members and executive board." },
    { id: 2, title: "Tech Talk: Future of AI in Software", date: "April 22, 2026", type: "Tech Talk", desc: "Guest speaker from the tech industry." },
    { id: 3, title: "Midterm Prep: CS & Math Study Group", date: "May 2, 2026", type: "Study Group", desc: "Collaborative study session with upperclassmen." }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold">Upcoming Opportunities</h2>
      <ListGroup variant="flush">
        {events.map(event => (
          <EventItem 
            key={event.id}
            title={event.title}
            date={event.date}
            type={event.type}
            desc={event.desc}
          />
        ))}
      </ListGroup>
    </Container>
  );
}

export default Opportunities;