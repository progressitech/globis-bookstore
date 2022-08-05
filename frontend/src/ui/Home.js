import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Avengers} from "./Avengers";


export function Home() {
    return (
        <>
            <Container className="bg-dark text-dark bg-opacity-10 rounded my-2 p-4">
                <h1>Special deals, <br /> Interesting <br />Books, <br />At best prices.</h1>
            </Container>
            <Container fluid className="bg-dark text-dark bg-opacity-25 mb-5 py-5">
                <Container className="px-0">
                    <Row>
                        <Col lg={2}>
                            <img
                                src=""
                                className="img-fluid border-dark-1" alt="Placeholder"/>
                        </Col>
                        <Col lg={10} className="ps-4">
                            <p>
                                Nicholas Joseph "Nick" Fury is a spy, former Director of S.H.I.E.L.D. and founder of the Avengers. Fury began his career within the United States Army, rising to the rank of Colonel before his honorable discharge. He later became a CIA operative during the Cold War, primarily operating in Soviet territory. Fury joined S.H.I.E.L.D. to fight against Earth's most dangerous enemies. The great scope of enemies widened in the 1990s as Fury met Vers, helping her uncover her human heritage as Carol Danvers, as the two fought off the Starforce, which was led by Yon-Rogg, as they were targeting Skrull refugees. Fury took a liking to Goose who scratched him for violating her space and permanently blinded Fury's left eye. Fury kept the reason for this injury secret, telling others it was classified but happened in the line of duty.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Row>
                    <Avengers/>
                </Row>
            </Container>
            <Container>
                <Row>
                <h3>Coming Up</h3>
                </Row>
            </Container>
        </>
    )
}