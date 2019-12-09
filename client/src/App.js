import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch.js";
//import { RecordsTable } from 'admin-bro';

class App extends React.Component {

  render() {
    return (
      <div>
<<<<<<< HEAD

        <h1>this is connected</h1>
        {this.state.students.length > 0 ? (
          this.state.students.map(student => {
            return (
              <h6 onClick={this.whenclicked}>{student.contactinfo.firstname}  {student.contactinfo.lastname}</h6>
            )
          })
        ) : null}

=======
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
>>>>>>> 222671eff61b7867da716473baa75fd2a0899b35
      </div>
    );
  }
}

export default App;