import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { sentiments } from './OccasionSuggestions';
import { bestSelling } from './ShoppingPage';

const FlowerCategoryPage = () => {
  const { flowerName } = useParams();
  const displayName = flowerName.charAt(0).toUpperCase() + flowerName.slice(1);
  const flowerList = sentiments[displayName] || [];
  
  const allSentimentProducts = Object.values(sentiments).flat();

  const sentimentProducts = allSentimentProducts.filter(
    (product) => product.category === flowerName
)
//   const bestSellingProducts = bestSelling.filter(
//     (product) => product.category === flowerName
//   );

  const allProducts = [...sentimentProducts];

  return (
    <Container className="pt-4">
      <h2 className='mt-4 pd-4 mb-4' style={{textAlign:'center', fontWeight:'bolder' }}>Explore {flowerName}</h2>
      {allProducts.length === 0 ? (
        <p>No products found for {flowerName}.</p>
      ) : (
        <Row>
          {allProducts.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card as={Link} to={`/product/${product.id}`} className="mb-4 mt-4" style={{ minWidth: '300px', borderRadius: '1rem', backgroundColor: '#440707', color:'white', boxShadow:'0 0 1rem #440707' }}>
                <Card.Img variant="top" src={product.image} style={{ height: '200px',borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text><strong>{product.price}</strong></Card.Text>
                  <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
                View Detail
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

export default FlowerCategoryPage;
