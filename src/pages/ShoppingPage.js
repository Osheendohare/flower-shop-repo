import React from 'react';
import { Container, Row, Col, Card, Button, Carousel, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTruck, FaGift, FaShoppingCart, FaMonument, FaLandmark } from 'react-icons/fa';
import { GiFlowerPot, GiGiftOfKnowledge, GiBasket, GiIndiaGate, GiTajMahal, GiLotus } from 'react-icons/gi';
import { MdCelebration } from 'react-icons/md';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import '../App.css';
import { useLocation } from 'react-router-dom';

const categories = [
  { icon: <FaTruck />, label: 'Same Day Delivery', path: '/category/same-day'  },
  { icon: <FaGift />, label: 'Birthday Flowers', path: '/category/birthday'  },
  { icon: <MdCelebration />, label: 'Anniversary Flowers', path: '/category/anniversary'  },
  { icon: <GiBasket />, label: 'Grand Gestures', path: '/category/grand'  },
  { icon: <BsFillPersonBadgeFill />, label: "Father's Day", path: '/category/fathers-day'  },
  { icon: <GiFlowerPot />, label: 'Congrats Flowers', path: '/category/congrats'  },
  { icon: <GiGiftOfKnowledge />, label: 'Gift Hampers', path: '/category/hampers'  },
  { icon: <FaShoppingCart />, label: 'Business Concierge', path: '/category/concierge'  }
];

const CategoryGrid = () => {
  return (
    <Container className="category-box p-4 my-5" style={{background:'#2c1b02',borderRadius:'3rem', border:'1px solid #f8f7ab', boxShadow:'0 0 30px #2c1b02' }}>
                <h3 className="text-center mb-4 fw-bold" style={{color:'#f8f7ab', textDecoration:'underline'}}>Explore Now</h3>
      <Row>
        {categories.slice(0, 4).map((cat, index) => (
          <Col key={index} xs={6} md={3} className="text-center mb-4 border-col">
            <Link to={cat.path} className="text-decoration-none text-dark">
            <div className="category-icon mb-2" style={{ fontSize: '2rem', color: '#f8f7ab' }}>
              {cat.icon}
            </div>
            <div className="category-label fw-semibold" style={{color:'#f8f7ab'}}>{cat.label}</div>
          </Link>
          </Col>
        ))}
      </Row>

<div className="horizontal-divider"></div>

<Row>
        {categories.slice(4).map((cat, index) => (
          <Col key={index + 4} xs={6} md={3} className="text-center mb-4 border-col">
            <Link to={cat.path} className="text-decoration-none text-dark">
              <div className="category-icon mb-2" style={{ fontSize: '2rem', color: '#f8f7ab' }}>
                {cat.icon}
              </div>
              <div className="category-label fw-semibold" style={{ color: '#f8f7ab' }}>{cat.label}</div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const categorySlides = [
  {
    image: './images/birthday.png',
    label: 'Birthday Flowers',
    path: '/category/birthday',
    caption: 'Celebrate birthdays with fresh blooms!'
  },
  {
    image: './images/anniversary.png',
    label: 'Anniversary Flowers',
    path: '/category/anniversary',
    caption: 'Mark anniversaries with elegance.'
  },
  {
    image: './images/gift hampers.png',
    label: 'Gift Hampers',
    path: '/category/hampers',
    caption: 'Delight your loved ones with special hampers.'
  },
  // Add more slides as needed
];

export const bestSelling = [
  {
    id: 1,
    name: 'Elegant Red Roses',
    image: './images/rose buoquet.png',
    price: '₹599',
    path: '/product/red-roses',
    category: 'roses'
  },
  {
    id: 2,
    name: 'Mixed Flower Basket',
    image: './images/mixed flower basket.png',
    price: '₹799',
    path: '/product/flower-basket',
    category: 'mixed'
  },
  {
    id: 3,
    name: 'Orchid Delight',
    image: './images/orchid delight.png',
    price: '₹999',
    path: '/product/orchid-delight',
    category: 'orchids'
  },
  {
    id: 4,
    name: 'Sunflower Surprise',
    image: './images/sunflower surprise.png',
    price: '₹499',
    path: '/product/sunflower-surprise',
    category: 'sunflowers'
  },
  {
    id: 5,
    name: 'Lilies of Love',
    image: './images/lilies of love.png',
    price: '₹649',
    path: '/product/lilies-love',
    category: 'lilies'
  },
  {
    id: 6,
    name: 'Carnation Charm',
    image: './images/carnation Charm.png',
    price: '₹699',
    path: '/product/carnation-charm',
    category: 'carnations'
  },
  {
    id: 7,
    name: 'Romantic Rose Box',
    image: './images/rose box.png',
    price: '₹1199',
    path: '/product/rose-box',
    category: 'roses'
  },
  {
    id: 8,
    name: 'Exotic Tulip Set',
    image: './images/tulip set.png',
    price: '₹899',
    path: '/product/tulip-set',
    category: 'tulips'
  }
];

const softSentiments = [
  {
    label: 'Send Congrats',
    path: '/sentiments/congrats',
    emoji: '🎉',
    image: './images/congrats.png'
  },
  {
    label: 'Send Thank You',
    path: '/sentiments/thank-you',
    emoji: '🙏',
    image: './images/thankyou.png'
  },
  {
    label: 'Send Best Wishes',
    path: '/sentiments/best-wishes',
    emoji: '🌟',
    image: './images/best wishes.png'
  },
  {
    label: 'For Housewarming',
    path: '/sentiments/housewarming',
    emoji: '🏠',
    image: './images/housewarming.png'
  },
  {
    label: 'For Baby Shower',
    path: '/sentiments/baby-shower',
    emoji: '👶',
    image: './images/babyshower.png'
  },
  {
    label: 'For the Host',
    path: '/sentiments/host',
    emoji: '🎁',
    image: './images/host.png'
  }
];

const cities = [
  { name: 'Agra', icon: './icons/taj mahal.png' },
  { name: 'Delhi', icon: './icons/red-fort.png' },
  { name: 'Mumbai', icon: './icons/mumbai.png' },
  { name: 'Hyderabad', icon: './icons/hyderabad.png' },
  { name: 'Bengaluru', icon: './icons/bengalore.png' },
  { name: 'Chennai', icon: './icons/chennai.png' },
  // Additional cities:
  { name: 'Jaipur', icon: './icons/jaipur.png' },
  { name: 'Lucknow', icon: './icons/lucknow.png' },
  { name: 'Kolkata', icon: './icons/kolkata.png' },
  { name: 'Amritsar', icon: './icons/amritsar.png' }
];

const flowerCategories = [
   {
    name: 'Mixed',
    image: './images/mixed flower basket.png',
    path: '/flowers/mixed',
  },
  {
    name: 'Roses',
    image: './images/rose f.png',
    path: '/flowers/roses'
  },
  {
    name: 'Lilies',
    image: './images/lilies f.png',
    path: '/flowers/lilies'
  },
  {
    name: 'Orchids',
    image: './images/orchids f.png',
    path: '/flowers/orchids'
  },
  {
    name: 'Tulips',
    image: './images/tulips f.png',
    path: '/flowers/tulips'
  },
  {
    name: 'Carnations',
    image: './images/carnations f.png',
    path: '/flowers/carnations'
  },
  {
    name: 'Gerberas',
    image: './images/gerberas f.png',
    path: '/flowers/gerberas'
  },
  {
    name: 'Daisies',
    image: './images/daisies.png',
    path: '/flowers/daisies',
  },
  {
    name: 'Chrysanthemums',
    image: './images/chrysanthemums f.png',
    path: '/flowers/chrysanthemums',
  },
];

const wallFrames = [
  {
    name: 'Blossom Frame',
    image: './images/frame1.png',
  },
  {
    name: 'Rose Elegance',
    image: './images/frame2.png',
  },
  {
    name: 'Sunshine Bloom',
    image: './images/frame3.png',
  },
  {
    name: 'Orchid Art',
    image: './images/frame4.png',
  },
  {
    name: 'Lavender Garden',
    image: './images/frame5.png',
  },
  {
    name: 'Tulip Charm',
    image: './images/frame6.png',
  },
];

const customerReviews = [
  {
    name: 'Anjali Sharma',
    image: './images/anjali.png',
    review: 'Absolutely beautiful flowers delivered on time! Highly recommend this service.',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    image: './images/contact.png',
    review: 'Very fresh flowers, great packaging. My wife loved the bouquet!',
    rating: 4
  },
  {
    name: 'Neha Mehta',
    image: './images/contact.png',
    review: 'I ordered a birthday hamper — it was beautifully arranged and made her day!',
    rating: 5
  },
  {
    name: 'Rohit Sinha',
    image: './images/contact.png',
    review: 'Wonderful service and creative arrangements!',
    rating: 4
  },
  {
    name: 'Isha Kapoor',
    image: './images/contact.png',
    review: 'Prompt delivery and lovely flowers.',
    rating: 4
  },
  {
    name: 'Vikram Das',
    image: './images/contact.png',
    review: 'A perfect gift, exactly what I wanted.',
    rating: 5
  }
];

const ShoppingPage = () => {
  return (
    <>
    <Container className="my-5">
      <Navbar/>
        <CategoryGrid/>
      <h2 className="text-center mb-4" style={{fontWeight:'bolder'}}>Featured Categories</h2>
      <Carousel fade style={{borderRadius:'2rem'}}>
        {categorySlides.map((slide, index) => (
          <Carousel.Item key={index} className="position-relative">
            <Link to={slide.path}> 
              <img
                className="d-block mx-auto rounded"
                src={slide.image}
                alt={slide.label}
                style={{ maxHeight: '500px', objectFit:'cover', width:'100%' }}
              />
              <div className="caption-bottom-left">
          <h3 style={{ color: '#120364', fontWeight: 'bolder' }}>{slide.label}</h3>
          <p style={{ color: 'white', fontWeight: 'bold' }}>{slide.caption}</p>         
          <Button variant="light" className=" fw-bold" style={{backgroundColor:'#4f35e4', color:'white', boxShadow:'0 0 10px white'
          }}>Shop Now</Button>
        </div>
        </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="text-center mt-5 mb-4" style={{ fontWeight: 'bolder' }}>Best Selling Bouquets</h2>
<div className="best-selling-scroll d-flex px-2" style={{ gap: '2rem'}}>
  {bestSelling.map((product) => (
    <Card key={product.id} style={{ minWidth: '300px', borderRadius: '1rem', backgroundColor: '#440707', color:'white', boxShadow:'0 0 1rem #440707' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '200px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text><strong>{product.price}</strong></Card.Text>
          <Link to={`/product/${product.id}`}>
            <Button variant="warning" style={{fontWeight:'bold', boxShadow:'0 0 5px yellow'}}>View Details</Button>
          </Link>
        </Card.Body>
      </Card>
  ))}
</div>

<h3 className="text-center pt-4 fw-bold mt-4">We Deliver in Several Cities</h3>
  <div className="city-scroll-container d-flex overflow-auto py-3 px-2" style={{ gap: '1rem', scrollbarWidth: 'none' }}>
    {cities.map((city) => (
      <Link
        key={city.name}
        to={`/city/${city.name.toLowerCase()}`}
        className="text-center text-decoration-none text-dark"
        style={{ minWidth: '100px' }}
      >
        <div className="city-icon-wrapper mx-auto mb-2">
          <img
            src={process.env.PUBLIC_URL + city.icon}
            alt={city.name}
            className="city-icon"
          />
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight:'bold' }}>{city.name}</div>
      </Link>

    ))}
  </div>


<div className="soft-sentiments mt-5 p-4" style={{ background: 'linear-gradient(135deg,rgb(41, 13, 4) 0%,rgb(233, 93, 28) 100%)', border: '2px dashed rgb(190, 151, 6)', borderRadius:'1rem' }}>
  <h3 className="text-center mb-4 fw-bold" style={{ color: 'white', textDecoration:'underline' }}>Soft Sentiments</h3>
  <Row className="justify-content-center">
    {softSentiments.map((item, index) => (
      <Col key={index} xs={12} sm={6} md={4} className="mb-4 text-center">
        <Link to={item.path} className="text-decoration-none">
          <div
            className="p-3 sentiment-card"
            style={{
              background: 'rgb(245, 228, 132)',
              border: ' 2px solid rgb(250, 249, 241)',
              borderRadius: '1rem',
              boxShadow: '0 0 1rem rgb(51, 42, 11)',
              transition: 'transform 0.2s ease',
              height: '100%',
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              className="mb-2"
              style={{ maxHeight: '200px', width:'100%', objectFit: 'cover',borderRadius:'1rem' }}
            />
            <div style={{ fontSize: '1.5rem', fontWeight:'bold' }}>{item.emoji}</div>
            <div className="mt-2 fw-bold" style={{ color: '#6b4f0d' }}>{item.label}</div>
          </div>
        </Link>
      </Col>
      ))}
  </Row>
</div>

  <h3 className="text-center fw-bold pt-4 mt-4 mb-4">🌺 Explore by Flower Categories 🌺</h3>
  <div className="d-flex gap-4 px-3 pb-3"
    style={{
    overflowX: 'auto',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none' // For IE/Edge
  }}
  onScroll={(e) => {
    e.target.style.scrollbarWidth = 'none';
  }}
>
  <style>
    {`
      div::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
    {flowerCategories.map((flower, index) => (
      <Card
        key={index}
        style={{
          backgroundColor:'#440707',
          fontWeight:'bold',
          minWidth: '180px',
          flex: '0 0 auto',
          border: '1px solid rgb(17, 10, 1)',
          borderRadius: '1rem',
          boxShadow: '0 0 5px rgb(15, 1, 1)',
        }}
        className="text-center"
      >
        <Link to={`/flowers/${flower.name.toLowerCase()}`} className="text-decoration-none text-dark">
          <Card.Img
            variant="top"
            src={flower.image}
            style={{
              height: '120px',
              objectFit: 'cover',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: '1rem', fontWeight: 'bolder', color:'white' }}>{flower.name}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    ))}
  </div>

  <Container className="my-5">
  <h3 className="fw-bold mb-4 text-center">Wall Frame Collage</h3>
  <Row className="g-1">
    {wallFrames.map((frame, idx) => (
      <Col key={idx} md={4} className="d-flex justify-content-center">
        <div className="gallery-card rounded overflow-hidden shadow-sm" style={{ width: '100%', maxWidth: '500px', height: '300px' }}>
        <img src={frame.image} alt={frame.name} className="w-100 h-100 object-fit-cover" 
          />
      </div>
      </Col>
    ))}
  </Row>
</Container>

<Container className="my-5">
  <h3 className="fw-bold mb-4 text-center">What Our Customers Say</h3>
  <div className="d-flex overflow-auto gap-3 px-2 pb-2"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    {customerReviews.map((review, idx) => (
      <Col key={idx} md={4}>
        <Card className="p-3 flex-shrink-0" style={{ minWidth: '300px', borderRadius: '1.5rem', background: 'rgba(53, 31, 4, 0.81)', boxShadow: '0 0 1rem rgba(26, 1, 1, 0.89)', border:'2px solid black' }}>
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <img src={review.image} alt={review.name} className="rounded-circle me-3" width="60" height="60" style={{border:'2px solid black'}}/>
              <div>
                <h6 className="mb-0 fw-bold" style={{color:'white'}}>{review.name}</h6>
                <div className="text-warning">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <Card.Text style={{color:'white'}}>
              “{review.review}”
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </div>
</Container>

<div className=" text-center mt-4">
    <Link to="/submit-review">
  <Button 
  className="custom-review-button"
    variant="outline-dark"
    style={{borderRadius: '0.5rem', padding: '0.5rem 2rem', fontWeight: 'bolder',
  background: 'rgb(12, 7, 70)',
  color: 'white',
  border: '2px solid rgb(238, 238, 247)',
}}
  >
    Add Your Review
  </Button>
  </Link>
</div>

    </Container>
    </>
  );
};

export { CategoryGrid }; // Named export
export default ShoppingPage; // Default export

