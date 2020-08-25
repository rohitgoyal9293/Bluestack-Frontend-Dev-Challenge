import React, { Component } from "react";
//import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./layout/navBar";
import "./App.scss";
import { withTranslation } from 'react-i18next';

class App extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <NavBar />

        <section>
          <main>
             <Home />
            {/* <Switch>
              <Route path="/home" component={Home} />
              <Redirect from="/" exact to="/home" />
            </Switch> */}
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation() (App);
