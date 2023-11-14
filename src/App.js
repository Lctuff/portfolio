import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/navBar";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

class App extends Component {
  state = {};

  componentDidMount() {
    document.body.style.background = "black";
  }

  render() {
    return (
      <div className="bg-black bg-gradient">
        <NavBar className="bg-dark" />
        <main>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
