import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./layout/navBar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section>
          <main>
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect from="/" exact to="/home" />
            </Switch>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
