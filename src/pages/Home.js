import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom'; // Ensure you're using react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <Hero />
      <Container className="my-4">
        <Row>
          {products.slice(0, 3).map(product => (
            <Col xs={12} sm={6} md={4} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button as={Link} to="/products" variant="primary" className="mt-3">
            View More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
