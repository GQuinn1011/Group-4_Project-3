import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
//import { RecordsTable } from 'admin-bro';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
