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
        <Row>
          <Col md={3}></Col>
          <Col md={9} className="mr-auto">
            <DropdownButton 
            id="dropdown-basic-button" 
            title="Sort by"
            className="">
              <Dropdown.ItemText>Sort by</Dropdown.ItemText>
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
