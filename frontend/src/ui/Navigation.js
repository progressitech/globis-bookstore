import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { NavButtons } from "./NavButtons";
import { LoginModal } from "./LoginModal";

export function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);

  const buttons = [
    {
      link: "/bookstore",
      type: "Bookstore",
    },
    {
      link: "/#events",
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
      attributes: { onClick: () => setModalShow(true) },
      type: [<i class="fa-solid fa-user pe-2"></i>, "Login"],
      element: (
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      ),
    },
    {
      link: "/cart",
      type: [<i class="fa-solid fa-cart-shopping pe-2"></i>, "Cart"],
    },
  ];

  return (
    <>
      <Navbar expand="lg">
        <Container fluid className="navbar-spacing">
          <Navbar.Brand href="/">
            <p id="website-icon-upper">GLOBIS</p>
            <p id="website-icon-lower">BOOKSTORE</p>
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
