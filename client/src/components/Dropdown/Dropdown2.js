import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


const DropdownMenu = () => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Sign In Here
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Name 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Name 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Name 3</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownMenu;
