import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAboutUsContent } from '../services/api';

const AboutUs = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getAboutUsContent().then(response => setContent(response.data[0]));
  }, []);

  if (!content) return null;

  return (
    <Container className="my-4 text-center "  style={{ minHeight: 'calc(100vh - 100px)', position: 'relative' }}>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title as="h4">{content.title}</Card.Title>
              <Card.Text>{content.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={content.image}
              alt={content.title}
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
