import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropList = (props) => {
  //console.log(props)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mapStudents = () => {
    return props.students.map(student => {
      return student.contactinfo
    })
  }

  const onlyContactInfo = mapStudents()
  //console.log(onlyContactInfo)
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        { onlyContactInfo.map(({firstname, lastname, email}) => {
          return (

          <DropdownItem onClick={props.handleNameSelect} value={email} key={email}>{firstname} {lastname}</DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropList;