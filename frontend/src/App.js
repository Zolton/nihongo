import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderLink from "./EveryPage/HeaderLinks"
import LandingPage from "./Login/LandingPage";
import Login from "./Login/Login"
import Registration from "./Login/Registration"
import PrivateRoute from "./Login/PrivateRoute"
import KnownUserHomePage from "./Users/UserHome"

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderLink />
        <Route exact path="/" component={LandingPage} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/registration" component={Registration} />
        <PrivateRoute exact path = "/home" component = {KnownUserHomePage} />
      </Router>
    </div>
  );
}

export default App;
