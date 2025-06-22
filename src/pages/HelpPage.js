// src/pages/HelpPage.js
import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';

const HelpPage = () => {
  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <h2 className="mb-4 text-center">Need Help? We're Here for You! 🌸</h2>

      <Accordion defaultActiveKey="0" className="accordion-custom">
        <Accordion.Item eventKey="0">
          <Accordion.Header >How can I track my order?</Accordion.Header>
          <Accordion.Body>
            Once your order is confirmed, you can check the status in your Profile under "My Orders".
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I cancel or change my order?</Accordion.Header>
          <Accordion.Body>
            You can cancel or change your order within 1 hour of placing it. Please contact us immediately .
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Is same-day delivery available?</Accordion.Header>
          <Accordion.Body>
            Yes! We offer same-day delivery for most cities if orders are placed before 4 PM. Check availability using your pincode.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Still Need Help?</Accordion.Header>
          <Accordion.Body>
            <strong>📧 Email:</strong> osheendohareABC@gmail.com<br />
            <strong>📞 Phone:</strong> +91-8109xxxxxx<br />
            <strong>💬 Live Chat:</strong> Available 10 AM – 8 PM IST
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default HelpPage;
