import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route
          path="/details/:imdbID"
          render={(props) => <Details {...props} />}
        />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
