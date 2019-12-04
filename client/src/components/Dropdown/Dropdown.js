import React from "react";
import { Dropdown, ButtonToolbar, DropdownButton } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const DropdownMenu = () => (
  <Container>
    <Row>
      <Col>
        <ButtonToolbar className="justify-content-md-center">
          {["Primary"].map(variant => (
            <DropdownButton
              title="Sign In Here"
              size="lg"
              variant={variant.toLowerCase()}
              id="dropdown-menu-align-center"
              key={variant}
            >
                <Dropdown.Item href="#/action-1">FirstName LastName</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Name 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Name 3</Dropdown.Item>
            </DropdownButton>
          ))}
        </ButtonToolbar>
      </Col>
    </Row>
  </Container>
);

export default DropdownMenu;
