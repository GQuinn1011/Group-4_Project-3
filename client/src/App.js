import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
//import { RecordsTable } from 'admin-bro';

class App extends React.Component {
  state = { students: [] };

  componentDidMount() {
    console.log("App.componentDidMount");

    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({ students: result }); //ALWAYS USE setState to modify state
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log("something bad happened");
        }
      );
  }
  whenclicked() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>this is connected</h1>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route components={NoMatch} />
            </Switch>
          </div>
        </Router>
        {this.state.students.length > 0
          ? this.state.students.map(student => {
              return (
                <h6 onClick={this.whenclicked}>
                  {student.contactinfo.firstname}
                </h6>
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
