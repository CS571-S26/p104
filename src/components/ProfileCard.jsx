import { Card, Badge } from 'react-bootstrap';

function ProfileCard({ name, role, major }) {
  return (
    // hover-card 클래스 추가, 테두리 둥글게(rounded-4)
    <Card className="mb-4 shadow-sm border-0 h-100 hover-card rounded-4 overflow-hidden">
      <Card.Body className="p-4 text-center">
        <div className="mb-3">
          {/* 아바타 느낌의 동그라미 플레이스홀더 (나중에 사진으로 교체 가능) */}
          <div 
            className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center text-primary fw-bold" 
            style={{ width: '80px', height: '80px', fontSize: '24px' }}>
            {name.charAt(0)}
          </div>
        </div>
        <Card.Title className="fw-bold fs-4">{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{role}</Card.Subtitle>
        <Badge bg="info" className="p-2 rounded-pill">{major}</Badge>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;