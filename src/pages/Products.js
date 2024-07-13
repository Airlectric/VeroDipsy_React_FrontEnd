import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <Container className="py-4"  >
      <Row>
        {products.map(product => (
          <Col xs={12} sm={6} md={4} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
