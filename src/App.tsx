import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Global/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="app">
        <Switch>
          <Route
            path="/sign-in"
            render={() => <Auth logIn={true}></Auth>}
          ></Route>
          <Route
            path="/sign-up"
            render={() => <Auth logIn={false}></Auth>}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
