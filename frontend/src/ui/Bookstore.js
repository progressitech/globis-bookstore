import React from "react";
import { Col, Container, DropdownButton, Dropdown, Row } from "react-bootstrap";
import { Books } from "./Books";

export function Bookstore() {
  return (
    <>
      <Container fluid className="text-center">
        <Row>
          <h5>Our</h5>
          <h1>BOOKSTORE</h1>
        </Row>
      </Container>
      <Container fluid>
        <Row className="d-flex px-5">
          <Col md={3}></Col>
          <Col md={9} className="d-flex justify-content-end">
            <DropdownButton 
            id="dropdown-basic-button" 
            title="Sort by"
            variant="outline-dark border-dark rounded-0"
            className="bookstore-dropdown-button">
              <Dropdown.ItemText className="bg-secondary">Sort by</Dropdown.ItemText>
              <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price (low to high)</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Price (high to low)</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name A-Z</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Name Z-A</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}
