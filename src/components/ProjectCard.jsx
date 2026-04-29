import { Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function ProjectCard({ project, onClick, onDelete }) {
  // 데이터가 없을 경우를 대비한 안전 장치
  if (!project) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-100 position-relative"
    >
      {onDelete && (
        <Button 
          variant="danger" 
          size="sm" 
          className="position-absolute rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{ top: '10px', right: '10px', width: '32px', height: '32px', zIndex: 10, padding: 0, border: '2px solid white' }}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(project.id);
          }}
        >
          &times;
        </Button>
      )}

      {/* 얇은 파란색 테두리 적용 */}
      <Card className="h-100 border border-primary shadow-sm hover-card rounded-4 overflow-hidden" style={{ borderWidth: '1px' }}>
        <div style={{ height: '220px', overflow: 'hidden' }}>
          <img 
            src={project.imageUrl || "https://via.placeholder.com/800x450?text=KSEA+Project"} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <Card.Body className="p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Badge bg="primary" className="rounded-pill px-3">{project.year}</Badge>
            <small className="text-accent fw-bold">{project.teamName}</small>
          </div>
          <Card.Title className="fw-bold fs-5 mb-3 text-primary">{project.title}</Card.Title>
          <Card.Text className="text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.9rem' }}>
            {project.description}
          </Card.Text>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.tags && project.tags.map((tag, index) => (
              <Badge key={index} bg="light" text="dark" className="border px-2 py-1" style={{ fontSize: '0.7rem' }}>#{tag}</Badge>
            ))}
          </div>
          <Button variant="outline-primary" className="w-100 rounded-pill fw-bold mt-auto" onClick={() => onClick(project)}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;