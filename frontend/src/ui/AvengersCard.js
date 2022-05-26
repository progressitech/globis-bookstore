import React from 'react'
import {Col, Container} from "react-bootstrap";

export function AvengersCard(props) {

    const {image, name, info} = props.avenger

    return (
        <>
            <Col lg={3}>
                <Container fluid>
                    <img className="img-fluid rounded-circle" src={image} alt="Placeholder"/>
                </Container>
                <br/>
                <br/>
                <Container className="rounded border border-secondary mb-4">
                    <p>{name}: {info}</p>
                </Container>
            </Col>
        </>
    )
}