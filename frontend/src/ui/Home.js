import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Books } from "./Books";

export function Home() {
  return (
    <>
      <Container
        fluid
        className="container-1-image bg-opacity-10 rounded p-5 mb-5"
      >
        <h1 className="ps-4 ms-3 container-1-h1 text-danger">Special deals,</h1>
        <h1 className="ps-4 ms-3 container-1-h1 text-light">Interesting</h1>
        <h1 className="ps-4 ms-3 container-1-h1 text-success">Books,</h1>
        <h1 className="ps-4 ms-3 container-1-h1 text-primary">
          At best prices.
        </h1>
      </Container>

      <Container
        fluid
        className="book-container text-light text-center rounded p-5 my-3"
      >
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
          <h1 className="container-1-h1">
            THERE'S NO <br />
            SUCH THING AS TOO <br /> 
            MANY BOOKS
          </h1>
        </Row>
        <button className="our-story-button mt-3">Read Our Story</button>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={12} className="book-launch-header text-center pb-4">
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
              className="place-holder-image-1"
              alt="Place-holder Book Cover"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
