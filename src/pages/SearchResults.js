import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem('allItems')) || [];
    const search = query.toLowerCase();

    const filtered = allItems.filter(item => {
      const fields = [
        item.name,
        item.title,
        item.category,
        item.occasion,
        item.sentiment,
        item.city
      ];
      return fields.some(field => field?.toLowerCase().includes(search));
    });

    // Remove duplicates based on name or title (case-insensitive)
    const uniqueByName = Array.from(
      new Map(
        filtered.map(item => [(item.name || item.title).toLowerCase(), item])
      ).values()
    );

    setResults(uniqueByName);
  }, [query]);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-white">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p className="text-white">No products found.</p>
      ) : (
        <Row>
          {results.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <Card style={{ backgroundColor: '#440707', color: 'white' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text><strong>₹{product.price}</strong></Card.Text>
                  <Link to={`/product/${product.id}`} className="btn btn-warning">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResults;
