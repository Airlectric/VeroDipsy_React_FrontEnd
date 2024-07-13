import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductCard.css'; // Create a separate CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>₦{product.price}</strong></Card.Text>
        <Button variant="primary" size="sm">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
