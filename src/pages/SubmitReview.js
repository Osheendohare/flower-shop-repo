import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const SubmitReview = () => {
  const [review, setReview] = useState({ rating: '', comment: '' });
  const [alert, setAlert] = useState({ message: '', variant: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');
    if (!token) {
      setAlert({ message: 'You must be logged in to submit a review.', variant: 'danger' });
      return;
    }

    setIsSubmitting(true);

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    const newReview = {
      id: Date.now(),
      rating: review.rating,
      comment: review.comment,
      date: new Date().toLocaleString(),
    };

    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    setAlert({ message: 'Review submitted successfully!', variant: 'success' });
    setReview({ rating: '', comment: '' });
    setIsSubmitting(false);
  };

  return (
    <Container className="pd-4 mt-4" style={{
      maxWidth: '600px',
      background: 'linear-gradient(135deg, rgb(17, 1, 7) 0%, rgb(143, 29, 9) 100%)',
      borderRadius: '2rem',
      padding: '2rem',
      boxShadow: '0 0 10px rgb(44, 3, 2)',
    }}>
      <h2 className="text-center mb-4" style={{ color: 'white' }}>Submit Your Review</h2>
      {alert.message && <Alert variant={alert.variant}>{alert.message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ratingInput" className="mb-3">
          <Form.Label style={{ color: 'white', fontWeight: 'bold' }}>Rating (1-5):</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            placeholder="Enter your rating"
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
            required
            style={{ background: '#f0f8a2', color: 'black' }}
          />
        </Form.Group>

        <Form.Group controlId="reviewTextarea" className="mb-3">
          <Form.Label style={{ color: 'white', fontWeight: 'bold' }}>Your Review:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            placeholder="Share your experience with us..."
            required
            style={{ background: '#f0f8a2', color: 'black' }}
          />
        </Form.Group>

        <div className="text-center">
          <Button
            type="submit"
            className="mt-2"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#4a2c10',
              border: '0.5px solid white',
              borderRadius: '1rem',
              padding: '0.5rem 2rem',
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SubmitReview;
