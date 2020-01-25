import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderLink from "./EveryPage/HeaderLinks";
import LandingPage from "./PublicPages/LandingPage";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import PrivateRoute from "./Security/PrivateRoute";
import KnownUserHomePage from "./Users/UserHome";
import AboutUs from "./PublicPages/AboutUs";
import Error404 from "./PublicPages/404";
import FooterLinks from "./EveryPage/FooterLinks";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderLink />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path="/home" component={KnownUserHomePage} />
        <FooterLinks />
      </Router>
    </div>
  );
}

export default App;
