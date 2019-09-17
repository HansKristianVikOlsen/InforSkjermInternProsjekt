import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viking from "./components/Viking/Viking";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Viking}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
