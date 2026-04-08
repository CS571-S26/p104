import { Card } from 'react-bootstrap';

function ProfileCard({ name, role, major }) {
  return (
    <Card className="mb-4 shadow-sm border-0 h-100">
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-primary">{role}</Card.Subtitle>
        <Card.Text>
          <strong>Major:</strong> {major}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;