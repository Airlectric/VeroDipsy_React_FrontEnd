import React from 'react';
import LookbookCarousel from '../components/LookbookCarousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Lookbook = () => {
  return (
    <Container className="text-center py-4">
      <Row className="mb-4">
        <Col>
          <h4>Lookbook</h4>
        </Col>
      </Row>
      <LookbookCarousel />
    </Container>
  );
};

export default Lookbook;
