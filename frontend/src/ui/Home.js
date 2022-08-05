import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Avengers } from "./Avengers";

export function Home() {
  return (
    <>
      <Container
        className="container-1-image text-dark bg-opacity-10 rounded my-5 p-4"
      >
        <h1>Special deals, <br /> Interesting <br />Books, <br />At best prices.</h1>
      </Container>
      <Container>
                <Row>
                    <Avengers/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>Coming Up</h3>
                        <h1>BOOK LAUNCH</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}