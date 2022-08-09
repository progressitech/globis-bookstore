import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Books } from "./Books";

export function Home() {
  return (
    <>
      <Container fluid className="container-1-image bg-opacity-10 rounded mb-5">
        <p className="container-1-text text-danger">Special deals,</p>
        <p className="container-1-text text-light">Interesting</p>
        <p className="container-1-text text-success">Books,</p>
        <p className="container-1-text text-primary">At best prices.</p>
      </Container>

      <Container fluid className="text-light text-center p-4">
        <Container fluid className="book-container">
          <Row>
            <h1>BEST SELLERS</h1>
            <hr />
          </Row>
          <Row>
            <Books />
          </Row>
          <br />
          <Row>
            <hr />
            <h5>This Month's</h5>
            <h1>RECOMMENDED BOOKS</h1>
            <hr />
          </Row>
          <Row>
            <Books />
          </Row>
          <br />
          <hr />
          <Row>
            <h1 className="container-1-text">
              THERE'S NO <br />
              SUCH THING AS TOO <br />
              MANY BOOKS
            </h1>
          </Row>
          <button className="our-story-button mt-3">Read Our Story</button>
        </Container>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={12} className="section-title">
            <h5>Coming Up</h5>
            <h1>BOOK LAUNCH</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="book-launch-text-column">
            <h5 className="mb-4">Introducing "Plausible Accolade"</h5>
            <h6 className="mb-4">By Samuel Kumi Asiedu</h6>
            <br />
            <h6 className="mb-2">When</h6>
            <hr />
            <h6 className="mb-4">Jul 12, 2023, 7:00 AM</h6>
            <br />
            <h6 className="mb-2">Where</h6>
            <hr />
            <h6 className="mb-5">Video Conference</h6>
            <button className="rsvp-button">RSVP NOW</button>
          </Col>
          <Col md={6}>
            <Image
              fluid
              src="https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg"
              className="place-holder-image-1 book-launch-image"
              alt="Place-holder Book Cover"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
