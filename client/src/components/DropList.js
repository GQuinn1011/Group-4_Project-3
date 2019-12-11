import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../styles/DropList.css";

const DropList = (props) => {
  console.log(props)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mapStudents = () => {
    return props.students.map(student => {
      return {...student.name, id: student._id}
    })
  }

  const onlyName = mapStudents()
  console.log(onlyName)
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size='lg'>
      <DropdownToggle color='primary' caret>
        Select Your Name
        </DropdownToggle>
      <DropdownMenu>
        { onlyName.map(({first, last, email, id}) => {
          return (

          <DropdownItem onClick={props.handleNameSelect} value={id} key={id}>{first} {last}</DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropList;