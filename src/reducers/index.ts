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
import * as QuestionsRandom from './questions10Random';
import * as QuestionsPersonalised from './questionsPersonalised';
import * as QuestionsTopicsControl from './questionsByTopicForControl';
import * as PassedControls from './passedControls';
import * as Profile from './profile';

export interface ApplicationState {
  signIn: SignIn.SignInState;
  signUp: SignUp.SignUpState;
  topics: Topics.TopicsState;
  questionsTopics: QuestionsTopics.QuestionSTopicState;
  quetionsTopicsControl: QuestionsTopicsControl.QuestionsTopicControlState,
  test: Test.TestState;
  chapters: Chapters.ChaptersState;
  questionsRandom: QuestionsRandom.QuestionsRandomState,
  questionsChapters: QuestionsChapters.QuestionsChapterstate;
  questionsControl: QuestionsControl.QuestionsControlState;
  questionsRandomControl: QuestionsRandomControl.QuestionsRandomControlState;
  questionsPersonalised: QuestionsPersonalised.QuestionsPersonalisedState,
  saveUserAnswers: SaveUserAnswers.SaveUserAnswersState;
  passedControls: PassedControls.QuestionsPassedState;
  profile: Profile.ProfileState;
}

export const reducers = {
  signUp: SignUp.reducer,
  signIn: SignIn.reducer,
  topics: Topics.reducer,
  questionsTopics: QuestionsTopics.reducer,
  quetionsTopicsControl: QuestionsTopicsControl.reducer,
  test: Test.reducer,
  chapters: Chapters.reducer,
  questionsChapters: QuestionsChapters.reducer,
  questionsControl: QuestionsControl.reducer,
  questionsRandom: QuestionsRandom.reducer,
  questionsRandomControl: QuestionsRandomControl.reducer,
  questionsPersonalised: QuestionsPersonalised.reducer,
  saveUserAnswers: SaveUserAnswers.reducer,
  passedControls: PassedControls.reducer,
  profile: Profile.reducer,
};
