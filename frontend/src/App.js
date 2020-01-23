import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderLink from "./components/EveryPage/TopLinks"
import LandingPage from "./components/Login/LandingPage";
import Login from "./components/Login/Login"
import Registration from "./components/Login/Registration"
import PrivateRoute from "./components/Login/PrivateRoute"
import KnownUserHomePage from "./components/Users/UserHome"

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
