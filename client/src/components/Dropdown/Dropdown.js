import React from "react";
import { Dropdown } from "semantic-ui-react";
// import "./Dropdown.css"

const userNames = [
  // { key: "am", value: "am", text: "Amir" },
  // { key: "bd", value: "bd", text: "Ben" },
  // { key: "gb", value: "gb", text: "Gabe" },
  // { key: "ml", value: "ml", text: "Michael" }
];

const DropdownMenu = () => (
  <Dropdown
    placeholder="Select Your Name"
    fluid
    search
    selection
    options={userNames}
  />
);

export default DropdownMenu;
