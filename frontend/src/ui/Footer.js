import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

export function Footer(){
    return (
        <footer className='bg-dark text-center text-light py-4'>
            <Container>
            <Row>
                <Col md={3}>
                <p>Globis Bookstore</p>
                </Col>
                <Col md={3}>
                <p>Shop</p>
                </Col>
                <Col md={3}>
                <p>Socials</p>
                </Col>
                <Col md={3}>
                <p>Be The First To Know</p>
                </Col>
            </Row>
            <Row>
            <Col md={3}>
                <p>Bealeton, Virginia, USA <br /> +1 (571) 376-3319 <br /> samuelasiedu@hotmail.com</p>
                </Col>
                <Col md={3}>
                <p>FAQ</p>
                <p>Shipping & Returns</p>
                <p> Store Policy</p>
                <p>Payment Methods</p>
                </Col>
                <Col md={3}>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Pinterest</p>
                </Col>
                <Col md={3}>
                <p>Sign up for our newsletter</p>
                <button className="bg-transparent border-light px-4 py-2 text-light">Enter your email here*</button>
                <button className="bg-light px-4 py-2 text-dark">Subscribe</button>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}