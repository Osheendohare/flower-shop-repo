import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', variant: '' });
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpanded(true);

    if (password !== confirmPassword) {
      setAlert({ message: 'Passwords do not match!', variant: 'danger' });
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(u => u.email === email);
    const usernameExists = users.some(u => u.username === name);

    if (emailExists || usernameExists) {
      setAlert({ message: 'User already exists. Try a different email or username.', variant: 'danger' });
      return;
    }

    const newUser = {
      username: name,
      email: email,
      password: password,
      dateJoined: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setAlert({ message: 'Registration successful!', variant: 'success' });

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <Container
      className="w-50 mt-5 p-4"
      style={{
        background: 'linear-gradient(135deg,rgb(17, 1, 7) 0%,rgb(143, 29, 9) 100%)',
        height: expanded ? '600px' : 'auto',
        transition: 'height 0.5s ease',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bolder' }}>Register</h2>
      {alert.message && <Alert variant={alert.variant}>{alert.message}</Alert>}

      <Form style={{ color: 'white', fontWeight: 'bold' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            style={{ background: '#f0f8a2', color: 'black' }}
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            style={{ background: '#f0f8a2', color: 'black' }}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password :</Form.Label>
          <Form.Control
            style={{ background: '#f0f8a2', color: 'black' }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password :</Form.Label>
          <Form.Control
            style={{ background: '#f0f8a2', color: 'black' }}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex" style={{ gap: '10px' }}>
          <Button
            style={{
              background: '#0759f1',
              color: 'white',
              boxShadow: '0 0 10px black',
              width: '80px',
              height: '40px',
              fontWeight: 'bold',
              padding: '2px',
            }}
            type="submit"
          >
            Register
          </Button>
          <p className="mt-3" style={{ color: 'white', fontWeight: 'bold' }}>
            Back to Login?{' '}
            <Link to="/login" style={{ color: '#0759f1' }}>
              Login now
            </Link>
          </p>
        </div>
      </Form>
    </Container>
  );
}
