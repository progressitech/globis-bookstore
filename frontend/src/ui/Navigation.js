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
      type: [<i class="fa-solid fa-user pe-2"></i>, "Login"],
    },
    {
      link: "/cart",
      type: [<i class="fa-solid fa-cart-shopping pe-2"></i>, "Cart"],
    },
  ];

  return (
    <>
      <Navbar expand="lg">
        <Container fluid className="mx-5 px-5">
          <Navbar.Brand href="/">
            <p class="website-icon-upper">GLOBIS</p>
            <p class="website-icon-lower">
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
