import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('lastOrder'));
    if (savedOrder) {
      setOrder(savedOrder);
      localStorage.removeItem('lastOrder'); // optional cleanup
    }
  }, []);

  if (!order) {
    return (
      <Container className="text-white mt-5 text-center">
        <h2>No order found.</h2>
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h1 style={{ fontWeight: 'bolder' }}>🎉 Thank You for Your Purchase!!! 🎉</h1>
      <p>Your order has been placed successfully.</p>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Order Date:</strong> {order.date}</p>
      <h4 className="mt-4" style={{ fontWeight: 'bold' }}>Order Summary</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td style={{color:'#f8e3c4'}}>{item.name}</td>
              <td style={{color:'#f8e3c4'}}>₹{item.price}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>₹{order.total}</strong></td>
          </tr>
        </tbody>
      </Table>

      {/* Back to Shopping Button */}
      <Link to="/shopping">
        <Button style={{
            backgroundColor: '#170558',
            color: 'white',
            fontWeight: 'bold',
            border: '1px solid white',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }} className="mt-4">
           Back to Shopping
        </Button>
      </Link>
    </Container>
  );
};

export default ThankYou;

