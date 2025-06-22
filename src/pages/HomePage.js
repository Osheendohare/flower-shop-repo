import '../App.css';
import React from 'react';
import { Container, Button, Carousel, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 text-center mt-5">
      <h1 style={{color:'#f5f7f4'}}>🌹 Welcome to <b style={{color:'#570603', textDecoration:'underline'}}>La Rosa</b> Florals 🌹</h1>
      <p style={{color:'#ddeed5', fontWeight:'light'}}>Your one-stop destination for fresh and fragrant flowers!!!</p>
<p style={{color:'#fcf9fa'}} className="mt-4 fw-semibold">Please login to explore our floral collection and manage your orders.</p>
      <Button style={{ backgroundColor:'#170558', color:'white', fontWeight:'bold', border:'1px solid rgb(16, 1, 36)' , boxShadow: '0 0 10px #0b011a'}} className="m-2" onClick={() => navigate('/login')}>
        Login
      </Button>
      {/* <Button variant="success" className="m-2" onClick={() => navigate('/register')}>
        Register
      </Button> */}

    <div className="mt-4">
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block mx-auto img-fluid rounded"
            src="/images/fresh roses.png"
            alt="Fresh Roses"
            style={{ height: '400px', width: '95%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Fresh Roses</h3>
            <p>Say it with flowers — elegant & timeless.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto img-fluid rounded"
            src="/images/colourful tulips.png"
            alt="Colorful Tulips"
            style={{ height: '400px', width: '95%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Colorful Tulips</h3>
            <p>Brighten up your day with vibrant tulips!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto img-fluid rounded"
            src="/images/beautiful lilies.png"
            alt="Beautiful Lilies"
            style={{ height: '400px', width: '95%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Elegant Lilies</h3>
            <p>Graceful and beautiful — perfect for any occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

<div className="d-flex justify-content-center align-items-center " style={{ borderRadius: '3rem', }}>
<div
  style={{
    background: 'linear-gradient(to right,rgb(160, 85, 10),rgb(94, 47, 10))',
    borderRadius: '3rem',
    color: 'white',
    overflow: 'hidden',
    maxWidth: '900px',
    display: 'flex',
    alignItems: 'stretch', // make children same height
    height: '500px',
    boxShadow: '0 0 30px rgb(27, 3, 2)'
  }}
>
    <Container fluid className="about-section p-3 rounded shadow"
    style={{ maxWidth: '900px', display: 'flex', alignItems: 'stretch', borderRadius: '3rem', height: '500px' }}
    >
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/images/logo.jpg"
              alt="About Us"
              className="img-fluid rounded"
              style={{ maxHeight: '500px', width: '400px', objectFit: 'cover', boxShadow: '0 0 30px rgb(8, 1, 0)' }}
            />
          </Col>
          <Col md={6} className="text-start d-flex flex-column justify-content-center">
            <h2 className="mb-3">About La Rosa Florals</h2>
            <p>
        <strong>"La Rosa"</strong> means <em>"The Rose"</em> in Spanish — a symbol of love, passion, and timeless beauty. At <strong>LA ROSA FLORALS</strong>, we bring that meaning to life through every petal.
      </p>
      <p>
        Founded with a love for floristry and a deep appreciation for nature’s elegance, we specialize in hand-crafted floral arrangements that celebrate life's most meaningful moments.
      </p>
      <p>
        Whether it's a joyful occasion or a quiet gesture, our blooms help express what words sometimes can't. Let LA ROSA FLORALS add a touch of beauty to your story.
      </p>
            <p>
              Our flowers are sourced from the finest farms and arranged by expert florists who put their heart into every design.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
</div>
</div>
  );
}





































































































































































































































