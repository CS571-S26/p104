import { ListGroup, Badge } from 'react-bootstrap';

function EventItem({ title, date, type, desc }) {
  return (
    <ListGroup.Item className="p-4 shadow-sm mb-3 rounded border-0">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h5 className="fw-bold mb-0">{title}</h5>
        <Badge bg="primary">{type}</Badge>
      </div>
      <div className="text-muted mb-2"><strong>Date:</strong> {date}</div>
      <p className="mb-0">{desc}</p>
    </ListGroup.Item>
  );
}

export default EventItem;