import { Card, Badge, Button } from 'react-bootstrap';

function ProfileCard({ id, name, role, major, image, onDelete }) {
  return (
    <Card className="mb-4 shadow-sm border-0 h-100 hover-card rounded-4 overflow-hidden position-relative">
      
      {/* 삭제 버튼: onDelete 프롭스가 전달되었을 때만 렌더링 (X 아이콘) */}
      {onDelete && (
        <Button 
          variant="danger" 
          size="sm" 
          className="position-absolute rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{ top: '10px', right: '10px', width: '28px', height: '28px', zIndex: 10, padding: 0 }}
          onClick={() => onDelete(id)}
        >
          &times;
        </Button>
      )}

      <Card.Body className="p-4 text-center mt-2">
        <div className="mb-3 d-flex justify-content-center">
          {image ? (
            <div className="rounded-circle overflow-hidden shadow-sm border" style={{ width: '100px', height: '100px' }}>
              <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ) : (
            <div 
              className="rounded-circle bg-light d-flex align-items-center justify-content-center text-primary fw-bold shadow-sm border" 
              style={{ width: '100px', height: '100px', fontSize: '32px' }}>
              {name.charAt(0)}
            </div>
          )}
        </div>
        <Card.Title className="fw-bold fs-4 mb-1">{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>{role}</Card.Subtitle>
        <Badge bg="primary" className="p-2 px-3 rounded-pill" style={{ fontSize: '0.75rem' }}>{major}</Badge>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;