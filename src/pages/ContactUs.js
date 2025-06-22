import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prevMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const newMessage = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem('contactMessages', JSON.stringify([...prevMessages, newMessage]));

    setStatus({ type: 'success', message: 'Message saved successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Container className="mt-5 pt-4 pb-4 mb-4" style={{
        background: 'linear-gradient(135deg, rgb(17, 1, 7) 0%, rgb(143, 29, 9) 100%)',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
        width: '800px',
        maxWidth: '90%',
      }}>
        <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bolder' }}>Contact Us</h2>
        <p className="text-center mb-3 mt-4" style={{ color: '#f8e3c4' }}>
          We'd love to hear from you! Fill out the form below and we'll get in touch with you soon.
        </p>

        <Row className='justify-content-center'>
          <Col md={8}>
            {status.message && (
              <Alert variant={status.type}>{status.message}</Alert>
            )}

            <Form onSubmit={handleSubmit} style={{ color: 'white', fontWeight: 'bold' }}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name :</Form.Label>
                <Form.Control
                  style={{ background: '#f0f8a2', color: 'black' }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address :</Form.Label>
                <Form.Control
                  style={{ background: '#f0f8a2', color: 'black' }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message :</Form.Label>
                <Form.Control
                  style={{ background: '#f0f8a2', color: 'black' }}
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    background: '#0759f1',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 0 10px black',
                    width: '150px',
                  }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Contact Info Box */}
      <Container className="mt-5 pt-4 pb-4 mb-4" style={{
        background: 'linear-gradient(135deg, rgb(6, 37, 25) 0%, rgb(4, 80, 15) 100%)',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
        width: '800px',
        maxWidth: '90%',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bolder',
          paddingTop: '20px',
          paddingBottom: '10px'
        }}>
          OUR DETAILS
        </h2>

        <Card className="p-4 shadow-lg" style={{ borderRadius: '1rem', backgroundColor: '#037244', color: 'white' }}>
          <Row>
            <Col md={4} className="mb-3">
              <h5>📍 Address</h5>
              <p>123 ABC Road, Gwl (M.P.) 474012</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>📞 Phone</h5>
              <p>+91 8109xxxxxx</p>
            </Col>
            <Col md={4}>
              <h5>📧 Email</h5>
              <p>osheendohareABC@gmail.com</p>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
