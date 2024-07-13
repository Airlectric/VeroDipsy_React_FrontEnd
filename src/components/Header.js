import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import '../styles/Header.css'; // Optional: Create a separate CSS file for additional styles

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-center">
          Verosy Beads and Clothing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
            <Nav.Link as={Link} to="/lookbook" className="text-white">Lookbook</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="text-white">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-white">Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="link" className="text-white p-0 me-2" href="https://www.facebook.com/veronicaositasiakie24">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Button>
            <Button variant="link" className="text-white p-0 me-2" href="https://www.instagram.com/verodipsybeads?igsh=YzljYTk1ODg3Zg==">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Button>
            <Button variant="link" className="text-white p-0" href="https://www.tiktok.com/Verodipsybeads">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
