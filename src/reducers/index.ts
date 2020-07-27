import * as SignIn from "./signIn";
import * as SignUp from "./signUp";
import * as Topics from "./topics";
import * as QuestionsTopics from "./questionsByTopic";
import * as Test from "./test";

export interface ApplicationState {
  signIn: SignIn.SignInState;
  signUp: SignUp.SignUpState;
  topics: Topics.TopicsState;
  questionsTopics: QuestionsTopics.QuestionSTopicState;
  test: Test.TestState
}

export const reducers = {
  signUp: SignUp.reducer,
  signIn: SignIn.reducer,
  topics: Topics.reducer,
  questionsTopics: QuestionsTopics.reducer,
  test: Test.reducer
};
