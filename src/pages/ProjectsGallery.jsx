import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Modal } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const INITIAL_PROJECTS = [
  { 
    id: 1, title: "UW-Madison Campus Map AI", year: "2025", teamName: "Group A", tags: ["AI", "React", "Python"], 
    description: "AI-powered navigation optimized for Madison students.",
    fullDescription: "Predicts the fastest walking routes across the campus considering weather and schedules.",
    members: ["Youngwon Ju", "Alex Kim", "Sarah Lee"],
    imageUrl: "https://images.unsplash.com/photo-1541888091150-f80872688b50?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, title: "STEM Mentoring Platform", year: "2025", teamName: "Group B", tags: ["Web", "Node.js"], 
    description: "Connecting underclassmen with experienced senior mentors.",
    fullDescription: "A full-stack web application designed to pair incoming freshmen with senior mentors.",
    members: ["Jiho Han", "Nicholas Beahm"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

function ProjectsGallery() {
  // 상태 관리
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem('ksea_projects')) || INITIAL_PROJECTS);
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // 새 프로젝트 입력 폼 상태
  const [newProject, setNewProject] = useState({
    title: '', year: '2025', teamName: '', tags: '', description: '', fullDescription: '', members: '', imageUrl: ''
  });

  // 로컬 스토리지 저장
  useEffect(() => {
    localStorage.setItem('ksea_projects', JSON.stringify(projects));
  }, [projects]);

  // 프로젝트 추가/삭제 로직
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,
      id: Date.now(),
      tags: newProject.tags.split(',').map(tag => tag.trim()), // 쉼표로 태그 분리
      members: newProject.members.split(',').map(m => m.trim())
    };
    setProjects([projectToAdd, ...projects]);
    setShowAddModal(false);
    setNewProject({ title: '', year: '2025', teamName: '', tags: '', description: '', fullDescription: '', members: '', imageUrl: '' });
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("정말로 이 프로젝트를 삭제하시겠습니까?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  // 필터링 및 검색 로직
  const years = ['All', ...new Set(projects.map(p => p.year))].sort((a, b) => b - a);
  const filteredProjects = projects.filter(project => {
    const matchesYear = selectedYear === 'All' || project.year === selectedYear;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesYear && matchesSearch;
  });

  return (
    <Container className="py-5">
      {/* 헤더 섹션: 제목 및 관리 버튼 */}
      <div className="d-flex justify-content-between align-items-end mb-5 border-bottom pb-4">
        <div>
          <h1 className="display-4 fw-bold text-primary mb-2">Project Gallery</h1>
          <p className="text-muted mb-0 lead">KSEA UW-Madison 조별 프로젝트 아카이브</p>
        </div>
        <div className="d-flex gap-2">
          <Button 
            variant={isDeleteMode ? "secondary" : "outline-danger"} 
            className="rounded-pill px-4 fw-bold shadow-sm" 
            onClick={() => setIsDeleteMode(!isDeleteMode)}
          >
            {isDeleteMode ? "Done" : "- Remove Project"}
          </Button>
          <Button variant="primary" className="btn-accent rounded-pill px-4 fw-bold shadow-sm border-0" onClick={() => setShowAddModal(true)}>
            + Add Project
          </Button>
        </div>
      </div>

      {/* 필터 섹션 */}
      <Row className="mb-5 justify-content-center">
        <Col md={3} className="mb-3">
          <Form.Group>
            <Form.Label className="fw-bold text-secondary">Year</Form.Label>
            <Form.Select className="rounded-pill shadow-sm border-primary" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={7}>
          <Form.Group>
            <Form.Label className="fw-bold text-secondary">Search</Form.Label>
            <InputGroup className="shadow-sm rounded-pill overflow-hidden border">
              <Form.Control 
                placeholder="Search by title, technology, or keywords..." 
                className="border-0 px-4 py-2" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      {/* 갤러리 리스트 */}
      <Row>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <ProjectCard 
                project={project} 
                onClick={(proj) => setSelectedProject(proj)} 
                onDelete={isDeleteMode ? handleDeleteProject : null}
              />
            </Col>
          ))}
        </AnimatePresence>
      </Row>

      {/* 프로젝트 추가 모달 */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg" centered>
        <Form onSubmit={handleAddSubmit}>
          <Modal.Header closeButton className="border-0"><Modal.Title className="fw-bold">Archive New Project</Modal.Title></Modal.Header>
          <Modal.Body className="px-4">
            <Row>
              <Col md={8}><Form.Group className="mb-3"><Form.Label className="fw-bold">Title</Form.Label><Form.Control required placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} /></Form.Group></Col>
              <Col md={4}><Form.Group className="mb-3"><Form.Label className="fw-bold">Year</Form.Label><Form.Control required type="number" value={newProject.year} onChange={e => setNewProject({...newProject, year: e.target.value})} /></Form.Group></Col>
            </Row>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Team Name</Form.Label><Form.Control required placeholder="e.g. Group A, Badger Team" value={newProject.teamName} onChange={e => setNewProject({...newProject, teamName: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Short Description</Form.Label><Form.Control required placeholder="One-line summary for the card" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Full Details</Form.Label><Form.Control as="textarea" rows={3} required placeholder="Detailed project explanation..." value={newProject.fullDescription} onChange={e => setNewProject({...newProject, fullDescription: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Members (comma separated)</Form.Label><Form.Control placeholder="Youngwon Ju, Donghyun Kim, ..." value={newProject.members} onChange={e => setNewProject({...newProject, members: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Tags (comma separated)</Form.Label><Form.Control placeholder="React, Python, AI, ..." value={newProject.tags} onChange={e => setNewProject({...newProject, tags: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Image URL</Form.Label><Form.Control placeholder="https://images.unsplash.com/..." value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} /></Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0 p-4 pt-0">
            <Button variant="light" className="rounded-pill px-4 fw-bold" onClick={() => setShowAddModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit" className="btn-accent border-0 rounded-pill px-4 fw-bold shadow-sm">Save Project</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal show={selectedProject !== null} onHide={() => setSelectedProject(null)} project={selectedProject} />
    </Container>
  );
}

export default ProjectsGallery;