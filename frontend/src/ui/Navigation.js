import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { NavButtons } from "./NavButtons";

export function Navigation() {
  const buttons = [
    {
      link: "/bookstore",
      type: "Bookstore",
    },
    {
      link: "/events",
      type: "Events",
    },
    {
      link: "/about-us",
      type: "About Us",
    },
    {
      link: "/contact",
      type: "Contact",
    },
    {
      link: "/login",
      type: "Login",
    },
    {
      link: "/cart",
      type: "Cart",
    },
  ];

  return (
<<<<<<< HEAD
    <Navbar expand="lg">
      <Container fluid>
        <Col md={2} className="ms-4 mt-4">
=======
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
>>>>>>> 8c1c35effcbda3c995115974829a79a7114d726c
          <Navbar.Brand href="/">
            <p class="text-light bg-dark fs-6 text-center mb-0">GLOBIS</p>
            <p class="border border-dark website-icon fs-6 text-center mb-0 px-1">
              BOOKSTORE
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {buttons.map((button) => (
                <NavButtons button={button} key={button.type} />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
