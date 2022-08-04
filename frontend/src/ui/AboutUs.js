import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export function AboutUs() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-3">
                        <h1>About Us</h1>
                    </Col>
                    <Col md={4} className="ms-auto d-flex align-items-end justify-content-end">
                        <p>Alright. So... five years ago, right before Thanos, I was in a place called the Quantum Realm. The Quantum Realm is like its own microscopic universe. To get in there, you have to be incredibly small.  Oh, my eye. That's... you remember the Battle of Haroquin? When I got hit in the face with a broadsword?  No, no, no. There's no other options. There's no do-overs. We're not going anywhere else. We have one particle left. Each. That's it, alright? We use that... Bye, bye. You're not going home.   I'm sorry. No offense, but you're a very earthly being. Okay? We're talking about space magic. And "can't" seems very definitive don't you think?</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light p-4">
                <Row>
                    <Col md={2}>
                        <img
                            src="https://wallpaperaccess.com/full/84977.png"
                            className="img-fluid border border-dark" alt="Placeholder"/>
                    </Col>
                    <Col md={10} className="ps-4">
                        <p>
                            World governments are in pieces. The parts that are still working are trying to take a census. And it looks like he did... he did exactly what he said he was gonna do. Thanos wiped out fifty percent, of all living creatures.  You know I'd offer to cook you dinner but you seem pretty miserable already. Alright. So... five years ago, right before Thanos, I was in a place called the Quantum Realm. The Quantum Realm is like its own microscopic universe. To get in there, you have to be incredibly small.  No, you accidentally survived. It's a billion to one cosmic fluke. And now you wanna pull off a... What do you call it?  Alright, Heartbreaker. She's alone. This is our shot. [He turns back to where Thor was moments ago] Thor? Thor!  Oh, he's gonna answer to us. Odin can have what's left. And I'm gonna need that case, that's been SHIELD property for over 70 years. His head was over there... His body over there... What was the point? I was too late. I was just standing there. Some idiot with an axe. Everybody wants a happy ending, right? But it doesn't always roll that way. Maybe this time. I'm hoping if you play this back, it's in celebration. I hope families are reunited, I hope we get it back, and something like a normal version of the planet has been restored. If there ever was such a thing. God, what a world. Universe, now. If you told me ten years ago that we weren't alone, let alone, you know, to this extent, I mean, I wouldn't have been surprised. But come on, you know? The epic forces of darkness and light that have come into play. And, for better or worse, that's the reality Morgan's gonna have to find a way to grow up in.</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}