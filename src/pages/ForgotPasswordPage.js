import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      // Simulate email sent
      console.log(`🔐 Simulated reset link sent to: ${email}`);
    }

    setSubmitted(true);
    setError('');
  };

  return (
    <Container
      className="w-50 mt-5 p-4"
      style={{
        background: 'linear-gradient(135deg, rgb(17, 1, 7) 0%, rgb(143, 29, 9) 100%)',
        height: 'auto',
        borderRadius: '3rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
      }}
    >
      <h2
        className="mb-4 p-3"
        style={{ textAlign: 'center', color: 'white', fontWeight: 'bolder' }}
      >
        Forgot Password
      </h2>

      {submitted ? (
        <Alert variant="info">
          If the email is registered, a password reset link will be sent to your inbox.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit} style={{ color: 'white', fontWeight: 'bold' }}>
          <Form.Group className="mb-3">
            <Form.Label>Enter your email :</Form.Label>
            <Form.Control
              type="email"
              style={{ background: '#f0f8a2', color: 'black', padding: '10px' }}
              placeholder="Enter registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {error && (
            <Alert variant="danger" className="py-1">
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            style={{
              backgroundColor: '#170558',
              color: 'white',
              fontWeight: 'bold',
              border: '1px solid white',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            }}
          >
            Send Reset Link
          </Button>
        </Form>
      )}

      <p className="mt-3">
        <Link to="/login" style={{ color: '#0759f1', fontWeight: 'bold' }}>
          Back to Login
        </Link>
      </p>
    </Container>
  );
}
