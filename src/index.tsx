import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { initialState as questionsTopicsInit } from "./reducers/questionsByTopic";
import { initialState as topicsInit } from "./reducers/topics";
import { initialState as signInInit } from "./reducers/signIn";
import { initialState as signUpInit } from "./reducers/signUp";
import { initialState as testInit } from "./reducers/test";
import { initialState as chaptersInit } from "./reducers/chapters";
import { initialState as questionsChaptersInit } from "./reducers/questionsByChapter";
import { initialState as questionsControlInit } from "./reducers/questionsForControl";
import { initialState as questionsRandomControlInit } from "./reducers/questionsRandomForControl";
import { initialState as saveUserAnswersInit } from "./reducers/saveUserAnswers";
import { initialState as questionsRandom } from './reducers/questions10Random';
import { initialState as questionsPersonalised } from './reducers/questionsPersonalised';
import { initialState as quetionsTopicsControl } from './reducers/questionsByTopicForControl';
import { initialState as passedControls } from './reducers/passedControls';
import { initialState as profile } from './reducers/profile';
import configureStore from "./reducers/configStore";

export const store = configureStore({
  signIn: signInInit,
  signUp: signUpInit,
  topics: topicsInit,
  questionsTopics: questionsTopicsInit,
  test: testInit,
  chapters: chaptersInit,
  questionsChapters: questionsChaptersInit,
  questionsControl: questionsControlInit,
  questionsRandomControl: questionsRandomControlInit,
  saveUserAnswers: saveUserAnswersInit,
  questionsRandom,
  questionsPersonalised,
  quetionsTopicsControl,
  passedControls,
  profile,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

