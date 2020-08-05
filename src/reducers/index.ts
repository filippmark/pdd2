import * as SignIn from "./signIn";
import * as SignUp from "./signUp";
import * as Topics from "./topics";
import * as QuestionsTopics from "./questionsByTopic";
import * as Test from "./test";
import * as Chapters from "./chapters";
import * as QuestionsChapters from "./questionsByChapter";
import * as QuestionsControl from "./questionsForControl";
import * as QuestionsRandomControl from "./questionsRandomForControl";
import * as SaveUserAnswers from "./saveUserAnswers";

export interface ApplicationState {
  signIn: SignIn.SignInState;
  signUp: SignUp.SignUpState;
  topics: Topics.TopicsState;
  questionsTopics: QuestionsTopics.QuestionSTopicState;
  test: Test.TestState;
  chapters: Chapters.ChaptersState;
  questionsChapters: QuestionsChapters.QuestionsChapterstate;
  questionsControl: QuestionsControl.QuestionsControlState;
  questionsRandomControl: QuestionsRandomControl.QuestionsRandomControlState;
  saveUserAnswers: SaveUserAnswers.SaveUserAnswersState
}

export const reducers = {
  signUp: SignUp.reducer,
  signIn: SignIn.reducer,
  topics: Topics.reducer,
  questionsTopics: QuestionsTopics.reducer,
  test: Test.reducer,
  chapters: Chapters.reducer,
  questionsChapters: QuestionsChapters.reducer,
  questionsControl: QuestionsControl.reducer,
  questionsRandomControl: QuestionsRandomControl.reducer,
  saveUserAnswers: SaveUserAnswers.reducer
};
