import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // 🔹 Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  // 🔹 Update total price
useEffect(() => {
  const total = cartItems.reduce((sum, item) => {
    return sum + (parseFloat(item.price) || 0);
  }, 0);
  setTotalPrice(total);
}, [cartItems]);

  // 🔹 Remove item
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated')); // optional update
  };

  // 🔹 Buy Now
  const handleBuyNow = () => {
    if (cartItems.length === 0) return;
    if (!window.confirm('Are you sure you want to place this order?')) return;

    const order = {
      id: 'ORD-' + Date.now().toString().slice(-6),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString()
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));
    localStorage.removeItem('cartItems');
    setCartItems([]);
    setTotalPrice(0);
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/thankyou');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold pt-4 mt-4 mb-4 text-white">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
                <Card style={{
                  minWidth: '200px',
                  borderRadius: '1rem',
                  backgroundColor: '#440707',
                  color: 'white',
                  boxShadow: '0 0 1rem #440707'
                }}>
                  <Card.Img
                    variant="top"
                    src={item.image || '/fallback.jpg'}
                    style={{
                      height: '200px',
                      borderTopLeftRadius: '1rem',
                      borderTopRightRadius: '1rem',
                      objectFit: 'cover'
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bolder'
                    }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                      {item.price}
                    </Card.Text>
                    <Button
                      variant="warning"
                      style={{ fontWeight: 'bold', boxShadow: '0 0 5px yellow' }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4 text-white fw-bold">
            <h5>Total: ₹{totalPrice}</h5>
            <Button
              style={{
                backgroundColor: '#170558',
                color: 'white',
                fontWeight: 'bold',
                border: '1px solid white',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)'
              }}
              className="mt-2"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
