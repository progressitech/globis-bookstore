import React from "react";
import { Container, Modal } from "react-bootstrap";

export function LoginModal(props) {
  const [fullscreen] = React.useState(true);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={fullscreen}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Login</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid id="login-modal-body">
          <form
            id="login-form"
            name="login-form"
            action="post user to login api"
            method="POST"
          >
            <p>
              <input type="email" name="email" placeholder="Email" />
            </p>
            <p>
              <input type="password" name="password" placeholder="Password" />
            </p>
            <p>
              <button type="submit" id="footer-submit-button">
                Login
              </button>
            </p>
          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
