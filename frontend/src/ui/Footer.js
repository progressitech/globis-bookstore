import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";

export function Footer() {
  return (
    <Container fluid className="footer-background-color">
      <Container className="bg-opacity-100 py-4">
        <footer className="text-light text-center py-4">
          <Row>
            <Col md={3}>
              <p>Globis Bookstore</p>
              <br />
              <p>Bealeton, Virginia, USA <br />+1 (571) 376-3319</p>
              <a
                href="mailto:samuelasiedu@hotmail.com"
                className="link-unstyled"
              >
                samuelasiedu@hotmail.com
              </a>
            </Col>
            <Col md={3}>
              <p>Shop</p>
              <br />
              <p>
                <a href="/globisbookstore/faq" className="link-unstyled">
                  FAQ
                </a>
              </p>
              <p>
                <a
                  href="/globisbookstore/shipping-returns"
                  className="link-unstyled"
                >
                  Shipping & Returns
                </a>
              </p>
              <p>
                <a
                  href="/globisbookstore/store-policy"
                  className="link-unstyled"
                >
                  Store Policy
                </a>
              </p>
            </Col>
            <Col md={3}>
              <p>Socials</p>
              <br />
              <p>
                <a href="https://www.facebook.com/" className="link-unstyled">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.twitter.com" className="link-unstyled">
                  Twitter
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com" className="link-unstyled">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.pinterest.com" className="link-unstyled">
                  Pinterest
                </a>
              </p>
            </Col>
            <Col md={3}>
              <p>Be The First To Know</p>
              <br />
              <p>Sign up for our newsletter</p>
              <form method="POST">
                <p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email here"
                    className="footer-background-color text-light ps-2"
                  />
                </p>
                <p>
                  <button type="submit" className="footer-submit-text-color border border-none p-1">Subscribe</button>
                </p>
              </form>
            </Col>
          </Row>
        </footer>
      </Container>
    </Container>
  );
}
