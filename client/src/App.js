import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// TODO Replace name with different word

import Names from "./pages/Names";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Names} />
          <Route exact path="/names" component={Names} />
          <Route exact path="/names/:id" component={} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;