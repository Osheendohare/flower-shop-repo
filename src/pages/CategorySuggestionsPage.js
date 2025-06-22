import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryData } from './CategoriesData'; // your file
import { Container, Row, Col, Card } from 'react-bootstrap';

const CategorySuggestionsPage = () => {
  const { category } = useParams();
  const flowerCategories = categoryData[category] || [];

//   const sentimentFlowers = Object.values(sentiments).flat();
//     const allFlowers = [...sentimentFlowers];

//     const CategorySpecificFlowers = allFlowers.filter(flower =>
//     flowerCategories.includes(flower.category)
//   );

  return (
    <Container className="mt-5">
      <h2 className='mt-4 pd-4 mb-4' style={{textAlign:'center', fontWeight:'bolder' }}>{category.replace(/-/g, ' ')} Options</h2>
      <Row>
        {flowerCategories.map((flower, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="mb-4 mt-4" style={{ minWidth: '300px', borderRadius: '1rem', backgroundColor: '#440707', color:'white', boxShadow:'0 0 1rem #440707' }}>
                            <Card.Img variant="top" src={flower.image} style={{ height: '200px',borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }}/>
                            <Card.Body>
                              <Card.Title>{flower.name}</Card.Title>
                              <Card.Text><strong>{flower.price}</strong></Card.Text>
                            <Link to={`/product/${flower.id}`}>
                            <button className="btn btn-primary w-100">View Detail</button>
                          </Link>
                          </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategorySuggestionsPage;