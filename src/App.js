import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viking from "./components/Viking/Viking";
import Oilers from "./components/Oilers/Oilers";
import Error from "./common/Error.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Viking}></Route>
          <Route path="/oilers" component={Oilers}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
