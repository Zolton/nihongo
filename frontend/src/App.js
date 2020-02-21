import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

// Every page
import HeaderLinks from "./EveryPage/HeaderLinks";
import FooterLinks from "./EveryPage/FooterLinks";

// Login/Registration
import Login from "./Login/Login";
import Registration from "./Login/Registration";

// Public Pages
import Error404 from "./PublicPages/404";
import AboutUs from "./PublicPages/AboutUs";
import ContactUs from "./PublicPages/ContactUs"
import DMCA from "./PublicPages/DMCA"
import LandingPage from "./PublicPages/LandingPage"

// Private Routes - registers users only
import PrivateRoute from "./Security/PrivateRoute";
import UserHome from "./Users/UserHome";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderLinks />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/dmca" component={DMCA} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path="/home" component={UserHome} />
        <FooterLinks />
      </Router>
    </div>
  );
}

export default App;
