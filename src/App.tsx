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
import { ChapterTest } from "./components/ChapterTest/ChapterTest";
import { RandomQuestionsTest } from "./components/RandomQuestionsTest/RandomQuestions";
import { RandomQuestionsControl } from "./components/RandomQuestionsControl/RandomQuestionsControl";
import { TopicControl } from "./components/TopicControl/TopicControl";
import { PersonalisedQuestions } from "./components/PersonalisedQuestions/PersonalisedQuestions";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/sign-in"
            render={() => <Auth logIn={true}></Auth>}
          ></Route>
          <Route
            exact
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
            path="/tests-chapters/:chapterId"
            render={(props) => <ChapterTest {...props}></ChapterTest>}
          ></Route>
          <Route
            exact
            path="/tests-topics"
            render={(props) => <Topics {...props}></Topics>}
          ></Route>
          <Route
            path="/tests-topics/:topicId"
            render={(props) => <TopicTest {...props}></TopicTest>}
          ></Route>
          <Route
            exact
            path="/control-topics"
            render={(props) => <Topics {...props}></Topics>}
          ></Route>
          <Route
            path="/control-topics/:topicId"
            render={(props) => <TopicControl {...props}></TopicControl>}
          ></Route>
          <Route
            exact
            path="/random-questions/"
            render={(props) => <RandomQuestionsTest {...props} ></RandomQuestionsTest>}
          ></Route>
          <Route
            exact
            path="/random-questions-control/"
            render={(props) => <RandomQuestionsControl {...props} ></RandomQuestionsControl>}
          ></Route>
          <Route
            exact
            path="/personalised-questions/"
            render={(props) => <PersonalisedQuestions {...props} ></PersonalisedQuestions>}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
