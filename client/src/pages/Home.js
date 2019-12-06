import React from "react";
import DropList from "../components/DropList.js";
import '../styles/Home.css';

class Home extends React.Component {
  state = { students: [], selectedName: {}, classNow:"" };

  componentDidMount() {
    console.log("App.componentDidMount");

    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(
        result => {
          //console.log(result);
          this.setState({ students: result }); //ALWAYS USE setState to modify state
        },
        error => {
          console.log("something bad happened");
        }
      );
  
  //front end has access to the Now Route api 
  fetch("http://localhost:8080/now")
      .then(res => res.json())
      .then(
        result => {
          //console.log(result);
          this.setState({ classNow: result }); //ALWAYS USE setState to modify state
        },
        error => {
          console.log("something bad happened",error);
        }
      );
  }

  handleNameSelect = event => {
    const { value } = event.target;
    const foundStudent = this.state.students.find(student => student._id === value)
    this.setState({ selectedName: foundStudent });
    const r = window.confirm(`Are you really ${foundStudent.contactinfo.firstname}?`);
     if(r === true){ 
       console.log("we got a confirm") 
       const attendanceData={
        student_id: foundStudent._id,
        class_id: this.state.classNow._id,
        type: this.state.classNow.type
       }
       console.log(attendanceData)
       fetch('http://localhost:8080/attendance', {
        method: 'post',
        body: JSON.stringify(attendanceData),
        headers: { 'Content-type': 'application/json' }
      })
  }
}


  render() {
    console.log(this.state);
    return (
      <>
        <div>
          {/* <h1>this is connected</h1> */}
        </div>
        <div>
          {this.state.students.length > 0 ? (
            <DropList
              students={this.state.students}
              handleNameSelect={this.handleNameSelect}
            />
          ) : (
            <h1>Waiting for API...</h1>
          )}
        </div>
      </>
    );
  }
}

export default Home;
