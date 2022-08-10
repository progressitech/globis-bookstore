import React from "react";
import { Nav } from "react-bootstrap";
import "./App.css";

export function NavButtons(props) {
  const { link, attributes, type, element } = props.button;

  return (
    <>
      <Nav.Link href={link} {...attributes}>
        <p id="navbuttons">
          {type}
        </p>
      </Nav.Link>
      {element}
    </>
  );
}
