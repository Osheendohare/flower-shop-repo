import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

if (!userData) {
  navigate('/login');
  return;
}

setUser(userData);

    // Demo/mock order data
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [
      {
        id: 'ORD123',
        date: '2025-06-18',
        total: 799,
        items: [
          { name: 'Red Roses', price: 399 },
          { name: 'Greeting Card', price: 200 },
        ],
      },
    ];
    setOrders(storedOrders);
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('user');
      localStorage.removeItem('cartItems');
      localStorage.removeItem('likedItems');
      localStorage.removeItem('orders');
      navigate('/');
    }
  };

  return (
    <Container
      className="mt-5 p-4"
      style={{
        background: 'linear-gradient(135deg, rgb(17, 1, 7) 0%, rgb(143, 29, 9) 100%)',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgb(44, 3, 2)',
        maxWidth: '700px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bolder',
          textDecoration: 'underline',
          textDecorationColor: '#0759f1',
        }}
      >
        My Profile
      </h2>

      {user ? (
        <Row className="pt-4">
          <Col md={6}>
            <h5 style={{ color: 'white', fontWeight: 'bold' }}>Name:</h5>
            <p style={{ color: '#f8e3c4' }}>{user.name || user.username || 'N/A'}</p>

            <h5 style={{ color: 'white', fontWeight: 'bold' }}>Email:</h5>
            <p style={{ color: '#f8e3c4' }}>{user.email || 'N/A'}</p>

            <h5 style={{ color: 'white', fontWeight: 'bold' }}>Member Since:</h5>
            <p style={{ color: '#f8e3c4' }}>
              {user.dateJoined || new Date().toLocaleDateString()}
            </p>
          </Col>

          <Col md={6}>
            <Card
              style={{
                backgroundColor: '#2e0707',
                border: '1px solid #f8e3c4',
                borderRadius: '1rem',
              }}
            >
              <Card.Header
                style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#440707' }}
              >
                My Orders
              </Card.Header>
              <ListGroup variant="flush">
                {orders.length === 0 ? (
                  <ListGroup.Item
                    style={{ backgroundColor: '#2e0707', color: '#f8e3c4' }}
                  >
                    No orders yet.
                  </ListGroup.Item>
                ) : (
                  orders.map((order, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{ backgroundColor: '#2e0707', color: '#f8e3c4' }}
                    >
                      <strong>ID:</strong> {order.id}
                      <br />
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.name} – ₹<strong>{item.price}</strong>
                        </div>
                      ))}
                      <div style={{ fontStyle: 'italic' }}>
                        Date: {order.date}
                      </div>
                      <div>
                        <strong>Total: ₹{order.total}</strong>
                      </div>
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : (
        <p style={{ color: 'white', textAlign: 'center', marginTop: '30px' }}>
          Loading profile...
        </p>
      )}

      <div className="text-center mt-4">
        <Button
          style={{
            background: '#0759f1',
            color: 'white',
            boxShadow: '0 0 10px black',
            width: '80px',
            height: '40px',
            fontWeight: 'bold',
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default ProfilePage;
