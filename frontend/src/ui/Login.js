import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";


export function Login() {

    const [show, setShow] = React.useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [fullscreen, setFullscreen] = useState(true);

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}
