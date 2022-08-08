import React from 'react'
import {Col, Container} from "react-bootstrap";

export function BookCard(props) {

    const {image, name, info} = props.avenger

    return (
        <>
            <Col lg={2}>
                <Container fluid>
                    <img className="img-fluid" src={image} alt="Placeholder"/>
                </Container>
                <Container className="rounded border border-secondary mb-4">
                    <p>{name}: {info}</p>
                </Container>
            </Col>
        </>
    )
}