import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import LandingScreen from "./pages/landing/LandingScreen";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
