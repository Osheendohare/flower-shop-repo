import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  const historyEvents = [
    {
      year: '2022',
      title: 'The Blooming Idea',
      description: 'La Rosa Florals was founded with a dream to make floral gifting easy and meaningful. We began as a small online shop with a big heart.'
    },
    {
      year: '2023',
      title: 'First 100 Orders',
      description: 'Our first major milestone! We celebrated delivering our 100th handcrafted bouquet. Customer love pushed us to expand our team and variety.'
    },
    {
      year: '2024',
      title: 'Local Partnerships',
      description: 'We collaborated with local farmers and artisans to ensure freshness, sustainability, and community support in every floral product.'
    },
    {
      year: '2025',
      title: 'Flourishing Nationwide',
      description: 'Today, we deliver across the country with a loyal customer base, and we continue innovating with new floral styles and packaging.'
    }
  ];

  return (
    <Container className="mt-5">
      <Card style={{
        padding: '2rem',
        borderRadius: '2rem',
        background: 'linear-gradient(135deg, #3e0101 0%, #8d1a0e 100%)',
        color: 'white',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)'
      }}>
        <h2 className="text-center fw-bold mb-3 pt-4">🌸 About La Rosa Florals 🌸</h2>

        <Row className="mb-3 mt-4 p-4">
          <Col md={5}>
            <img
              src="/images/la rosa.jpg"
              alt="Flowers"
              className="rounded"
              style={{height:'400px',width:'400px',paddingLeft:'60px',marginRight:'40px'}}
            />
          </Col>
          <Col md={6} style={{backgroundColor: '#5d0b0b',color: '#f8e3c4', border: '1px solid #8e2c2c', padding: '1rem', borderRadius: '1rem', marginLeft:'40px'}}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Welcome to <strong>La Rosa Florals</strong> – where nature's beauty blossoms into moments of joy! We are passionate about delivering premium floral arrangements for every occasion.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Founded with a dream to bring colors into lives, La Rosa Florals prides itself on exceptional service, freshness, and thoughtful designs.
            </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
    Whether it's a romantic gesture, a celebration, or simply to brighten someone’s day, our handcrafted arrangements are made with love and creativity to suit every mood and message.
  </p>
          </Col>
        </Row>

<Row className="mb-5 align-items-center" style={{marginLeft:'40px'}}>
  <Col md={5} style={{backgroundColor: '#5d0b0b',color: '#f8e3c4', border: '1px solid #8e2c2c', padding: '1rem', borderRadius: '1rem',marginRight:'40px'}}>
    <h4 className="fw-bold mb-3">Why Choose Us?</h4>
    <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#f8e3c4' }}>
      <li>🌸 Wide range of fresh, exotic, and seasonal flowers</li>
      <li>🚚 Fast & reliable doorstep delivery</li>
      <li>🎁 Customized bouquets for every sentiment</li>
      <li>💬 Dedicated customer support</li>
      <li>🕒 Same-day delivery options available</li>
  <li>🧼 Hygienic packaging to preserve freshness</li>
    </ul>
  </Col>
  <Col md={6}>
    <img
      src="/images/visiting card.jpg"
      alt="Why Choose Us"
      className="rounded"
      style={{height:'300px',width:'450px'}}
    />
  </Col>
</Row>

        <Row className="mt-4">
          <Col>
            <h3 className="text-center fw-bold mb-4">🌹 Our Journey 🌹</h3>
            {historyEvents.map((event, index) => (
              <Card
                key={index}
                className="mb-3"
                style={{
                  backgroundColor: '#5d0b0b',
                  color: '#f8e3c4',
                  border: '1px solid #8e2c2c',
                  padding: '1rem',
                  borderRadius: '1rem'
                }}
              >
                <h5 className="fw-bold">{event.year}: {event.title}</h5>
                <p>{event.description}</p>
              </Card>
            ))}
          </Col>
        </Row>

        <p className="text-center mt-4" style={{ fontSize: '1rem', color: '#f8e3c4' }}>
          🌷 Thank you for making us a part of your special moments. 🌷
        </p>
      </Card>
    </Container>
  );
};

export default AboutPage;

