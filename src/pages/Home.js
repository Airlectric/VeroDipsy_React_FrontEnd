import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom'; // Ensure you're using react-router-dom for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'; // Import your CSS file

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <Hero />
      <Container className="my-4 text-center">
        <div>
        <h2 className="explore-title">Explore Our Products</h2>
        <p className="explore-subtitle">Discover the unique styles and quality we offer.</p>
        </div>
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
