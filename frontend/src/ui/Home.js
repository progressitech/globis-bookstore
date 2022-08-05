import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Avengers } from "./Avengers";

export function Home() {
  return (
    <>
      <Container
        fluid
        className="bg-dark text-dark bg-opacity-10 rounded my-5 p-4"
      >
        <Image src="https://placehold.jp/1860x500.png" className="img-fluid" />
      </Container>
      <Container>
                <Row>
                    <Avengers/>
                </Row>
            </Container>

    </>
  );
}
