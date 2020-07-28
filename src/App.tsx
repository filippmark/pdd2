import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Global/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Topics from "./components/Topics/Topics";
import Tests from "./components/Tests/Tests";
import TopicTest from "./components/TopicTest/TopicTest";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Chapters from "./components/Chapters/Chapters";

function App() {
  return (
    <Router>
      <Nav></Nav>
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
          <Route path="/tests" render={() => <Tests></Tests>}></Route>
          <Route
            exact
            path="/tests-chapters"
            render={() => <Chapters></Chapters>}
          ></Route>
          <Route
            exact
            path="/tests-topics"
            render={() => <Topics></Topics>}
          ></Route>
          <Route
            path="/tests-topics/:topicId"
            render={(props) => <TopicTest {...props}></TopicTest>}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
