import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import {Avengers} from "./Avengers";


export function Bookstore() {
    return (
        <>
            <Container className="bg-dark text-dark bg-opacity-10 rounded my-5 p-4">
                <h1>Samuel Says...</h1>
                <p className="pe-4">
                    The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
                <button className="btn btn-primary btn-lg" type="button">Learn more</button>
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
        </>
    )
}