import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LikedPage() {
  const [likedItems, setLikedItems] = useState([]);
  const [error, setError] = useState('');

  // Load liked items from localStorage
  const fetchLikedItems = () => {
    try {
      const storedLikes = JSON.parse(localStorage.getItem('likedItems')) || [];
      setLikedItems(storedLikes);
    } catch (err) {
      console.error('❌ Error reading liked items from localStorage:', err.message);
      setError('Failed to load liked items.');
    }
  };

  useEffect(() => {
    fetchLikedItems();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center fw-bold text-white">❤️ Liked Items</h2>
      {error && <p className="text-danger text-center">{error}</p>}

      {likedItems.length === 0 ? (
        <p className="text-white text-center mt-4">You haven't liked any items yet.</p>
      ) : (
        <Row className="mt-4">
          {likedItems.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card style={{
                minHeight: '250px',
                backgroundColor: '#440707',
                color: 'white',
                borderRadius: '1rem',
                boxShadow: '0 0 10px #440707'
              }}>
                <Card.Img
                  variant="top"
                  src={item.image || '/fallback.jpg'}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.3rem', fontWeight: 'bolder' }}>
                    {item.name}
                  </Card.Title>
                  <Card.Text>Price: {item.price || 'N/A'}</Card.Text>
                  <Link to={`/product/${item.id}`}>
                    <Button variant="warning">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
