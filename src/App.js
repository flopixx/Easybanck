import React from "react";
import Header from "./components/Header";

import "./scss/App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Articles />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
