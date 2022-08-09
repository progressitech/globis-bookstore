import React from "react";
import { Nav } from "react-bootstrap";
import "./App.css";

export function NavButtons(props) {
  const { link, type } = props.button;

  return (
    <>
      <Nav.Link href={link}>
        <p className="navbuttons">{type}</p>
      </Nav.Link>
    </>
  );
}
