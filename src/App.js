import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Viking from "./components/Viking/Viking";
import Oilers from "./components/Oilers/Oilers";
import Error from "./common/Error.js";
import VikingTable from "./components/Viking/VikingTable";
import OilersTable from "./components/Oilers/OilersTable";
import TeaterPage from "./components/Teater/Teater";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Viking}></Route>
          <Route path="/oilers" component={Oilers}></Route>
          <Route path="/vikingtable" component={VikingTable}></Route>
          <Route path="/oilerstable" component={OilersTable}></Route>
          <Route path="/teater" component={TeaterPage}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
