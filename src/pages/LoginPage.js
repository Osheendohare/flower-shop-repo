import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ message: '', variant: '' });
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find matching user
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setAlert({ message: 'Logged in successfully!', variant: 'success' });

      setTimeout(() => {
        navigate('/shopping');
      }, 1500);
    } else {
      setAlert({ message: 'Invalid username or password.', variant: 'danger' });
    }
  };

  return (
    <Container
      className="w-50 mt-5 p-4"
      style={{
        background: 'linear-gradient(135deg, rgb(17, 1, 7) 0%, rgb(143, 29, 9) 100%)',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bolder' }}>Login</h2>
      {alert.message && <Alert variant={alert.variant}>{alert.message}</Alert>}

      <Form style={{ color: 'white', fontWeight: 'bold' }} onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username :</Form.Label>
          <Form.Control
            type="text"
            style={{ background: '#f0f8a2', color: 'black' }}
            placeholder="Enter username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password :</Form.Label>
          <Form.Control
            type="password"
            style={{ background: '#f0f8a2', color: 'black' }}
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </Form.Group>

        <div className="d-flex align-items-center justify-content-between">
          <Button
            type="submit"
            style={{
              background: '#0759f1',
              color: 'white',
              boxShadow: '0 0 10px black',
              width: '100px',
              height: '40px',
              fontWeight: 'bold',
              border: 'none',
            }}
          >
            Login
          </Button>

          <Form.Text className="text-muted">
            <Link to="/forgot-password" style={{ color: '#75c1ff', fontWeight: 'bold' }}>
              Forgot Password?
            </Link>
          </Form.Text>
        </div>

        <p className="mt-3" style={{ color: 'white', fontWeight: 'bold' }}>
          New user?{' '}
          <Link to="/register" style={{ color: '#75c1ff' }}>
            Register here
          </Link>
        </p>
      </Form>
    </Container>
  );
}
