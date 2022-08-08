import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Avengers } from "./Avengers";

export function Home() {
  return (
    <>
      <Container className="container-1-image text-dark bg-opacity-10 rounded my-3 p-4">
        <h1 className="container-1-h1">
          Special deals, <br /> Interesting <br />
          Books, <br />
          At best prices.
        </h1>
      </Container>
      <Container className="book-container text-light text-center">
        <Row>
            <Col md={12}>
                <h1>BEST SELLERS</h1>
                <br />
            </Col>
        </Row>
                <Row>
                    <Avengers/>
                </Row>
                <br />
                <Row>
          <Col md={12} className="text-center pb-5">
            <hr />
            <h5>This Month's</h5>
            <h1>RECOMMENDED BOOKS</h1>
            <hr />
            <Row>
            <Avengers/>
            </Row>
            <br />
            <hr />
            <Row>
                <h1>THERE'S NO <br />SUCH THING AS TOO <br /> MANY BOOKS</h1>
                <button className="border-light bg-transparent">Read Our Story</button>
            </Row>
          </Col>
        </Row>
        </Container>
      <Container className="px-5 pb-5">
        <Row>
          <Col md={12} className="text-center pb-5">
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
            <button className="bg-transparent px-4 py-2">RSVP NOW</button>
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
