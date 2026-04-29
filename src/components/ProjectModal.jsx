import { Modal, Button, Badge } from 'react-bootstrap';

function ProjectModal({ show, onHide, project }) {
  if (!project) return null; // 선택된 프로젝트가 없으면 아무것도 렌더링하지 않음

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold fs-3">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        {/* 프로젝트 대표 이미지 */}
        <div className="mb-4 rounded-4 overflow-hidden shadow-sm" style={{ height: '350px' }}>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Badge bg="primary" className="px-3 py-2 fs-6 rounded-pill">{project.year}</Badge>
          <h5 className="text-muted fw-bold mb-0 text-accent">{project.teamName}</h5>
        </div>

        <h5 className="fw-bold mb-3">Project Overview</h5>
        <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          {project.fullDescription}
        </p>

        <h5 className="fw-bold mb-3">Team Members</h5>
        <ul className="mb-4 text-muted">
          {project.members.map((member, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{member}</li>
          ))}
        </ul>

        <div>
          <h5 className="fw-bold mb-3">Technologies</h5>
          <div className="d-flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} bg="light" text="dark" className="border px-3 py-2">#{tag}</Badge>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0 p-4">
        <Button variant="light" onClick={onHide} className="rounded-pill px-4 fw-bold shadow-sm">
          Close
        </Button>
        <Button variant="primary" className="btn-accent border-0 rounded-pill px-4 fw-bold shadow-sm">
          View GitHub Repo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;