/**
 * App component mainly responsible for Routing
 */

import React, { Fragment, Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Events from "./components/Events";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/events" component={Events}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/events" />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </Fragment >
    );
  }
}

export default App;
