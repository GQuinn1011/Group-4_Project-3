import React from "react";
import DropList from "../components/DropList.js";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import "../styles/Home.css";

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
    const foundStudent = this.state.students.find(
      student => student._id === value
    );
    this.setState({ selectedName: foundStudent });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>{/* <h1>this is connected</h1> */}</div>
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
        <div>
          {this.state.selectedName.contactinfo && (
            <div>
              <h2>Is this you?</h2>
              <p>{this.state.selectedName.contactinfo.firstname}</p>
            </div>
          )}
          <div class="yesno">
            <ButtonToolbar>
              <Button id="yes" variant="primary" size="lg">Yes</Button>
              <Button id="no" variant="primary" size="lg">No</Button>
            </ButtonToolbar>
          </div>
          {/* <div class="yesno">
            <button>Yes</button>
            <button>No</button>
          </div> */}
        </div>
      </>
    );
  }
}

export default Home;
