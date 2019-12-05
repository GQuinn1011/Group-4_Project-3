import React from "react";
import DropList from "../components/DropList.js";
import '../styles/Home.css';

class Home extends React.Component {
  state = { students: [], selectedName: {} };

  componentDidMount() {
    console.log("App.componentDidMount");

    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({ students: result }); //ALWAYS USE setState to modify state
        },
        error => {
          console.log("something bad happened");
        }
      );
  }

  handleNameSelect = event => {
    const { value } = event.target;
    const foundStudent = this.state.students.find(student => student._id === value)
    this.setState({ selectedName: foundStudent });
  };

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
