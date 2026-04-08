import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function RSVP() {
  const [formData, setFormData] = useState({ name: '', email: '', year: '', event: '' });
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // 폼 제출 성공 시뮬레이션
      setShowSuccess(true);
      setValidated(false);
      setFormData({ name: '', email: '', year: '', event: '' }); // 폼 초기화
      
      // 3초 후 성공 메시지 숨김
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <Container style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 fw-bold text-center">Event RSVP & Interest Form</h2>
      
      {showSuccess && (
        <Alert variant="success" className="text-center">
          RSVP submitted successfully! We look forward to seeing you.
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-light border">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your name" 
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="name@wisc.edu" 
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Academic Year</Form.Label>
          <Form.Select required value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})}>
            <option value="">Select your year...</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Grad Student">Grad Student</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Please select your academic year.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Select Event</Form.Label>
          <Form.Select required value={formData.event} onChange={(e) => setFormData({...formData, event: e.target.value})}>
            <option value="">Choose an event...</option>
            <option value="Networking">Spring Semester Kickoff & Networking</option>
            <option value="Tech Talk">Tech Talk: Future of AI in Software</option>
            <option value="Study Group">Midterm Prep: CS & Math Study Group</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Please select an event.</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Confirm RSVP
        </Button>
      </Form>
    </Container>
  );
}

export default RSVP;