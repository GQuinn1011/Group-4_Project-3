import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../styles/DropList.css";

const DropList = (props) => {
  console.log(props)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mapStudents = () => {
    return props.students.map(student => {
      return {...student.contactinfo, id: student._id}
    })
  }

  const onlyContactInfo = mapStudents()
  console.log(onlyContactInfo)
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size='lg'>
      <DropdownToggle color='primary' caret>
        Select Your Name
        </DropdownToggle>
      <DropdownMenu>
        { onlyContactInfo.map(({firstname, lastname, email, id}) => {
          return (

          <DropdownItem onClick={props.handleNameSelect} value={id} key={id}>{firstname} {lastname}</DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropList;