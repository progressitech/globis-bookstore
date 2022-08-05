import React from 'react'
import { Col, Row } from "react-bootstrap";

export function Footer(){
    return (
        <footer className='bg-light text-center py-4'>
            <Row>
                <Col md={3}>
                <p>Test Column 1</p>
                </Col>
                <Col md={3}>
                <p>Test Column 2</p>
                </Col>
                <Col md={3}>
                <p>Test Column 3</p>
                </Col>
                <Col md={3}>
                <p>Test Column 4</p>
                </Col>
            </Row>
        </footer>
    )
}