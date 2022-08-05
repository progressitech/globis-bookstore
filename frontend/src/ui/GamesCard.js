import React from "react";
import {
    Nav,
    Button,
  } from "react-bootstrap"

export function NavButtons(props) {
  const { link, type } = props.button;

  return (
    <>
      <Nav.Link href='/'{link}'"'>
        <Button>{type}</Button>
      </Nav.Link>
    </>
  );
}
