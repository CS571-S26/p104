import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';

// 초기 기본 데이터
const INITIAL_EXECUTIVES = [
  { id: 1, name: "Donghyun Kim", role: "President", major: "Electric Engineering", image: "" },
  { id: 2, name: "Anah Choi", role: "Vice President", major: "Biology", image: "" },
  { id: 3, name: "Ruda Lee", role: "Event Coordinator", major: "Chemistry, Data Science", image: "" },
  { id: 4, name: "Sohyun Ryu", role: "Public Relations", major: "Biology", image: "" },
  { id: 5, name: "Seoyeon Kim", role: "Secretary", major: "Psychology", image: "" },
  { id: 6, name: "Youngwon Ju", role: "Academic Coordinator", major: "Computer Science", image: "" },
  { id: 7, name: "Heejae Hwang", role: "Academic Coordinator", major: "Data Science", image: "" },
  { id: 8, name: "Hyunwook Baek", role: "Financial Director", major: "Computer Science", image: "" }
];

const INITIAL_GENERALS = [
  { id: 101, name: "John Doe", major: "Computer Science", image: "https://i.pravatar.cc/150?u=john" },
  { id: 102, name: "Jane Smith", major: "Biology", image: "https://i.pravatar.cc/150?u=jane" }
];

function MemberNetwork() {
  const [filter, setFilter] = useState('All');

  // 데이터 상태 관리 (로컬 스토리지 연동)
  const [executives, setExecutives] = useState(() => JSON.parse(localStorage.getItem('ksea_execs')) || INITIAL_EXECUTIVES);
  const [generals, setGenerals] = useState(() => JSON.parse(localStorage.getItem('ksea_gens')) || INITIAL_GENERALS);

  // 관리 기능 상태 관리
  const [showModal, setShowModal] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '', major: 'Computer Science', group: 'General', image: '' });

  // 로컬 스토리지 자동 저장
  useEffect(() => {
    localStorage.setItem('ksea_execs', JSON.stringify(executives));
  }, [executives]);

  useEffect(() => {
    localStorage.setItem('ksea_gens', JSON.stringify(generals));
  }, [generals]);

  // 멤버 삭제 함수
  const handleDeleteExec = (id) => setExecutives(executives.filter(m => m.id !== id));
  const handleDeleteGeneral = (id) => setGenerals(generals.filter(m => m.id !== id));

  // 멤버 추가 함수
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now();
    
    if (newMember.group === 'Executive') {
      setExecutives([...executives, { id: newId, name: newMember.name, role: newMember.role, major: newMember.major, image: newMember.image }]);
    } else {
      setGenerals([...generals, { id: newId, name: newMember.name, major: newMember.major, image: newMember.image }]);
    }
    
    setShowModal(false);
    setNewMember({ name: '', role: '', major: 'Computer Science', group: 'General', image: '' });
  };

  const filterFn = (m) => filter === 'All' || m.major.includes(filter);
  const filteredExecs = executives.filter(filterFn);
  const filteredGenerals = generals.filter(filterFn);

  return (
    <Container className="py-5">
      {/* 상단 헤더 및 관리 버튼 */}
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
        <div>
          <h1 className="display-5 fw-bold text-primary mb-1">Member Network</h1>
          <p className="text-muted mb-0">KSEA UW-Madison의 모든 구성원을 만나보세요.</p>
        </div>
        
        <div className="d-flex gap-2">
          <Button 
            variant={isDeleteMode ? "secondary" : "outline-danger"} 
            className="rounded-pill px-4 fw-bold shadow-sm" 
            onClick={() => setIsDeleteMode(!isDeleteMode)}
          >
            {isDeleteMode ? "Done" : "- Remove Member"}
          </Button>
          
          <Button variant="primary" className="btn-accent rounded-pill px-4 fw-bold shadow-sm border-0" onClick={() => setShowModal(true)}>
            + Add Member
          </Button>
        </div>
      </div>

      {/* 필터링 섹션 */}
      <Form.Group className="mb-5 mx-auto" style={{ maxWidth: "400px" }}>
        <Form.Label className="fw-bold text-secondary">Filter by Major</Form.Label>
        <Form.Select className="rounded-pill shadow-sm py-2 border-primary" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Majors</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Data Science">Data Science</option>
          <option value="Electric Engineering">Electric Engineering</option>
          <option value="Psychology">Psychology</option>
        </Form.Select>
      </Form.Group>

      {/* 임원진 섹션 - g-4를 사용하여 카드 간 간격을 확보 */}
      {filteredExecs.length > 0 && (
        <section className="mb-5">
          <h2 className="fw-bold mb-4 border-start border-4 border-primary ps-3">Executive Board</h2>
          <Row className="g-4">
            {filteredExecs.map(member => (
              <Col md={6} lg={3} key={member.id}>
                <ProfileCard {...member} onDelete={isDeleteMode ? handleDeleteExec : null} />
              </Col>
            ))}
          </Row>
        </section>
      )}

      {/* 일반 멤버 섹션 - g-4 적용 */}
      {filteredGenerals.length > 0 && (
        <section>
          <h2 className="fw-bold mb-4 border-start border-4 border-danger ps-3">General Members</h2>
          <Row className="g-4">
            {filteredGenerals.map(member => (
              <Col md={6} lg={3} key={member.id}>
                <ProfileCard {...member} role="General Member" onDelete={isDeleteMode ? handleDeleteGeneral : null} />
              </Col>
            ))}
          </Row>
        </section>
      )}
      
      {filteredExecs.length === 0 && filteredGenerals.length === 0 && (
        <div className="text-center py-5 text-muted fs-5">해당 전공의 멤버를 찾을 수 없습니다.</div>
      )}

      {/* 추가 모달 */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Form onSubmit={handleAddSubmit}>
          <Modal.Header closeButton className="border-0"><Modal.Title className="fw-bold">Add New Member</Modal.Title></Modal.Header>
          <Modal.Body className="px-4">
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Name</Form.Label><Form.Control required placeholder="Name" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Group</Form.Label>
              <Form.Select value={newMember.group} onChange={e => setNewMember({...newMember, group: e.target.value})}>
                <option value="General">General Member</option>
                <option value="Executive">Executive Board</option>
              </Form.Select>
            </Form.Group>
            {newMember.group === 'Executive' && (
              <Form.Group className="mb-3"><Form.Label className="fw-bold">Role (Position)</Form.Label><Form.Control required placeholder="e.g. President" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})} /></Form.Group>
            )}
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Major</Form.Label><Form.Control required placeholder="Major" value={newMember.major} onChange={e => setNewMember({...newMember, major: e.target.value})} /></Form.Group>
            <Form.Group className="mb-3"><Form.Label className="fw-bold">Image URL (Optional)</Form.Label><Form.Control placeholder="https://..." value={newMember.image} onChange={e => setNewMember({...newMember, image: e.target.value})} /></Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="light" className="rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit" className="btn-accent rounded-pill px-4 fw-bold border-0">Add Member</Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </Container>
  );
}

export default MemberNetwork;