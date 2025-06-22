import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sentiments } from './OccasionSuggestions';

const MakeItSpecial=[
  {
    id:"63",
    name: "Custom Message Card",
    description: "Include a handwritten message card with your personal note. Perfect for making your recipient feel truly special.",
    image: "/images/custom card.png",
    price: "₹49"
  },
  {
    id:"64",
    name: "Soft Teddy Bear",
    description: "Add a cute 6-inch teddy bear to accompany your flowers. Ideal for romantic and birthday occasions.",
    image: "/images/teddy.png",
    price: "₹199"
  },
  {
    id:"65",
    name: "Premium Wrapping",
    description: "Opt for our luxury Korean wrapping with designer ribbons and paper for a stunning first impression.",
    image: "/images/wrapping.png",
    price: "₹99"
  },
  {
    id:'66',
    name: "Ferrero Rocher Chocolates (4 pcs)",
    description: "Sweeten the surprise with premium Ferrero Rocher chocolates. A perfect combo with any bouquet.",
    image: "/images/ferrero rocher.png",
    price: "₹149"
  },
  {
    id:"67",
    name: "Scented Candle Jar",
    description: "Choose from our range of small scented candle jars to create a cozy, calming experience.",
    image: "/images/candle.png",
    price: "₹199"
  },
  {
    id:"68",
    name: "Surprise Balloon Decor (Mini)",
    description: "Include a small helium heart balloon or birthday balloon with your flower set.",
    image: "/images/balloon.png",
    price: "₹129"
  }
];

const bestSelling = [
  {
    id: 1,
    name: 'Elegant Red Roses',
    image: '/images/rose buoquet.png',
    price: '599',
    category: 'Roses',
    occasion: 'Romantic, Anniversary, Valentine’s Day',
    description: 'A classic bouquet of red roses perfect for romantic occasions.This romantic bouquet features 12 long-stemmed red roses, handpicked for their freshness and beauty. Each rose is carefully arranged with seasonal greens and wrapped in elegant red and white Korean-style floral paper, tied with a satin ribbon. Perfect for expressing deep love, this arrangement is ideal for anniversaries, Valentine Day, and romantic gestures.'
  },
  {
    id: 2,
    name: 'Mixed Flower Basket',
    image: '/images/mixed flower basket.png',
    price: '799',
    category: 'Mixed Flowers',
    occasion: 'Birthday, Celebration, Get Well Soon',
    description: 'A colorful arrangement of assorted blooms in a decorative basket.A vibrant floral arrangement with a delightful mix of 10 carnations, 5 gerberas, and 5 roses, this bouquet is neatly placed in a handwoven cane basket. Adorned with decorative fillers and ribbons, it is a great gift to convey cheerfulness, congratulations, or best wishes. It makes a beautiful centerpiece for home décor as well.'
  },
  {
    id: 3,
    name: 'Orchid Delight',
    image: '/images/orchid delight.png',
    price: '999',
    category: 'Orchids',
    occasion: 'Thank You, Corporate Gifting, Anniversary',
    description: 'Exotic purple and white orchids that bring elegance to any space.A premium bouquet of 8 exotic purple orchids paired with gypsophila  and lush green leaves. These long-lasting blooms are wrapped in glossy paper with a lavender ribbon. This elegant arrangement suits formal occasions, corporate gifting, or expressing admiration and elegance.'
  },
  {
    id: 4,
    name: 'Sunflower Surprise',
    image: '/images/sunflower surprise.png',
    price: '499',
    category: 'Sunflowers',
    occasion: 'Cheer Up, Housewarming, Friendship',
    description: 'Brighten your day with this cheerful bunch of 6 sunflowers arranged with eucalyptus leaves and fillers. Wrapped in natural jute fabric and tied with twine, it offers a rustic and vibrant look. It is perfect for friendship, housewarmings, or a sunny morning surprise.'
  },
  {
    id: 5,
    name: 'Lilies of Love',
    image: '/images/lilies of love.png',
    price: '649',
    category: 'Lilies',
    occasion: 'Love, Sympathy, Anniversary',
    description: 'Graceful lilies symbolizing admiration and affection.This luxurious bouquet features 6 white lilies (with multiple blooms) arranged with seasonal greens. The flowers are presented in a soft pastel wrapping with a pearl white ribbon. It’s an elegant gift for weddings, anniversaries, apologies, or showing sympathy due to its purity and grace'
  },
  {
    id: 6,
    name: 'Carnation Charm',
    image: '/images/carnation Charm.png',
    price: '699',
    category: 'Carnations',
    occasion: 'Mother’s Day, Teacher’s Day, Thank You',
    description: 'Delicate carnations in soft hues, perfect for expressing gratitude.A charming bunch of 15 mixed-color carnations symbolizing love, fascination, and distinction. These fluffy blooms are tied together in dual-tone wrapping paper with colorful ribbons. It’s a popular choice for birthdays, Mother’s Day, or simply to cheer someone up.'
  },
  {
    id: 7,
    name: 'Romantic Rose Box',
    image: '/images/rose box.png',
    price: '1199',
    category: 'Box Arrangement',
    occasion: 'Proposal, Anniversary, Valentine’s Day',
    description: 'Stylish rose box for a romantic surprise that speaks volumes.A premium floral box containing 20 fresh red roses arranged aesthetically in a heart-shaped or square designer box. Topped with golden beads and a bow, this arrangement speaks volumes of love and devotion. Ideal for proposals, Valentine’s surprises, and luxurious romantic gifts.'
  },
  {
    id: 8,
    name: 'Exotic Tulip Set',
    image: '/images/tulip set.png',
    price: '899',
    category: 'Tulips',
    occasion: 'Modern Gifting, Birthday, Spring Greetings',
    description: 'Charming tulips in vivid colors that create a delightful impression.A rare collection of 10 imported tulips in vibrant shades (red, yellow, pink, and white), carefully packed in an elegant pastel wrapping with a sheer ribbon. These delicate flowers symbolize elegance and grace, making them perfect for birthdays, thank-you gifts, or as a classy gesture of affection.'
  }
];

const recommended = bestSelling.slice(0, 6);

const ProductDetails = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [pincode, setPincode] = useState('');
  const [estimatedDate, setEstimatedDate] = useState('');
  const [addedExtras, setAddedExtras] = useState([]);
  const [product, setProduct] = useState(null);

  const recommended = bestSelling.slice(0, 6);
  const allSentimentProducts = Object.values(sentiments || {}).flat();
  const allProducts = [...bestSelling, ...allSentimentProducts, ...MakeItSpecial];

  // Load current product
  useEffect(() => {
    const foundProduct = allProducts.find(prod => String(prod.id) === String(id));
    if (foundProduct) {
      setProduct(foundProduct);

      // Check liked
      const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
      setLiked(likedItems.some(item => item.id === foundProduct.id));

      // Check cart
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setInCart(cartItems.some(item => item.id === foundProduct.id));
    } else {
      setProduct(null);
    }
  }, [id]);

  const toggleLike = () => {
    let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];

    if (liked) {
      likedItems = likedItems.filter(item => item.id !== product.id);
    } else {
      likedItems.push(product);
    }

    localStorage.setItem('likedItems', JSON.stringify(likedItems));
    setLiked(!liked);
    window.dispatchEvent(new Event('likedUpdated'));
  };

  const toggleCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (inCart) {
      cartItems = cartItems.filter(item => item.id !== product.id);
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setInCart(!inCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handlePincodeCheck = () => {
    if (/^\d{6}$/.test(pincode)) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      setEstimatedDate(formattedDate);
      alert('✅ Delivery is available in your area!');
    } else {
      alert('❌ Please enter a valid 6-digit pincode.');
      setEstimatedDate('');
    }
  };

  if (!product) {
    return <Container className="mt-4 text-white">Product not found.</Container>;
  }

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              height: '600px',
              width: '500px',
              borderRadius: '1rem',
              boxShadow: '0 0 25px rgb(19, 1, 1)'
            }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-3" style={{ fontWeight: 'bolder', color: 'white' }}>{product.name}</h1>
          <h4 className="mb-3" style={{ fontWeight: 'bold', color: 'black' }}>₹{product.price}</h4>
          <p className="mb-4" style={{ fontWeight: 'bold', color: 'black' }}>{product.description}</p>

          <div className="d-flex gap-2">
            <Button className="me-3" onClick={toggleCart}>
              {inCart ? 'Remove from Cart' : 'Add to Cart'}
            </Button>
            <Button className="me-3" style={{ background: '#4e4d4d', color: 'white' }} onClick={toggleLike}>
              {liked ? '❤️ Liked' : '🤍 Like'}
            </Button>
          </div>

          <div className="mt-4 pt-4">
            <h5 style={{ fontWeight: 'bold' }}>Check Product Delivery</h5>
            <div className="d-flex flex-wrap align-items-center pt-2 gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                style={{ maxWidth: '200px', background: '#f0f8a2', color: 'black' }}
              />
              <button className="btn btn-primary" onClick={handlePincodeCheck}>Check</button>
            </div>
            {estimatedDate && (
              <div className="mt-2" style={{ fontWeight: 'bold', color: 'white' }}>
                Estimated Delivery Date: {estimatedDate}
              </div>
            )}
          </div>
        </Col>
      </Row>

      <h3 className="mt-5 mb-3 text-white">Make it Extra Special 💝</h3>
      <div className="MakeItSpecial-scroll d-flex px-2" style={{ gap: '2rem' }}>
        {MakeItSpecial.map((product) => (
          <Card key={product.id} style={{ minWidth: '300px', backgroundColor: '#440707', color: 'white' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant={addedExtras.includes(product.id) ? "success" : "warning"}
  onClick={() => {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const alreadyInCart = cart.find(item => item.id === product.id);

    if (!alreadyInCart) {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem('cartItems', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage'));
      setAddedExtras(prev => [...prev, product.id]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  }}
>
  {addedExtras.includes(product.id) ? "Added" : "Add"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <h3 className="mt-5 mb-3 text-white">You Might Also Like 🌼</h3>
      <div className="recommended-scroll d-flex px-2" style={{ gap: '2rem' }}>
        {recommended.map((product) => (
          <Card key={product.id} style={{ minWidth: '300px', backgroundColor: '#440707', color: 'white' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text><strong>₹{product.price}</strong></Card.Text>
              <Link to={`/product/${product.id}`}>
                <Button variant="warning">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ProductDetails;