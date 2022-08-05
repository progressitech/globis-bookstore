import React from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Image,
  Button,
} from "react-bootstrap";
import "./App.css";

export function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Col md={2} className="ms-4 mt-4">
          <Navbar.Brand href="/">
            <Row className="text-light bg-dark">
              <p class="text-center mb-0">GLOBIS</p>
            </Row>
            <Row className="border border-dark website-icon">
              <p class="text-center mb-0">BOOKSTORE</p>
            </Row>
          </Navbar.Brand>
        </Col>
        <Row md={6} className="ms-auto">
          <Nav.Link href="/about-us">
            <Button>Bookstore</Button>
          </Nav.Link>
          <Nav.Link href="/about-us">
            <Button>Events</Button>
          </Nav.Link>
          <Nav.Link href="/about-us">
            <Button>About</Button>
          </Nav.Link>
          <Nav.Link href="/about-us">
            <Button>Contact</Button>
          </Nav.Link>
          <Nav.Link href="/about-us">
            <Button>Login</Button>
          </Nav.Link>
          <Nav.Link href="/about-us">
            <Image
              src="https://icon-library.com/images/free-shopping-cart-icon/free-shopping-cart-icon-16.jpg"
              alt="shopping cart"
              height="25px"
              width="25px"
            />
          </Nav.Link>
        </Row>
      </Container>
    </Navbar>
  );
}
