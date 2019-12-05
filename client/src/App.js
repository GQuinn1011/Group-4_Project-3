import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { RecordsTable } from 'admin-bro';

class App extends React.Component {

  state = { students: [] };

  componentDidMount() {
    console.log('App.componentDidMount');

    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({ students: result })//ALWAYS USE setState to modify state
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("something bad happened")
        }
      )
  }
  whenclicked() {
    console.log(this)
  }

  render() {
    return (
      <div>

        <h1>this is connected</h1>
        <select>
        {this.state.students.length > 0 ? (
          this.state.students.map(student => {
            return (
              
                <option value={student.contactinfo.firstname}>{student.contactinfo.firstname}</option>
                              
            )
          })
        ) : null}
        </select>

      </div>
    );
  }
}

export default App;