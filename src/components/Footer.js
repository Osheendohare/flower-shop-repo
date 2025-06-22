import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container className="text-center">
        <p>&copy; 2025 La Rosa Florals. All rights reserved.</p>
        <div className="mb-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-twitter fs-4"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}


