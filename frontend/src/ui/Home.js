import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Avengers } from "./Avengers";

export function Home() {
  return (
    <>
      <Container
        className="container-1-image text-dark bg-opacity-10 rounded my-5 p-4"
      >
        <h1 className="container-1-h1">Special deals, <br /> Interesting <br />Books, <br />At best prices.</h1>
      </Container>
      <Container>
                <Row>
                    <Avengers/>
                </Row>
            </Container>
            <Container className="px-5">
                <Row>
                    <Col md={12} className="text-center pb-5">
                        <h5>Coming Up</h5>
                        <h1>BOOK LAUNCH</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="book-launch-text-column">
                        <h5>Introducing "Plausible Accolade"</h5>
                        <h6>By Samuel Kumi Asiedu</h6>
                        <h6>When</h6>
                    </Col>
                    <Col md={6}>
                        <Image fluid src="https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg" className="place-holder-image-1" alt="Place-holder Book Cover" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}