import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;