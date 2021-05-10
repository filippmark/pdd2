export interface SetCurrentQuestion {
  type: "SET_CURRENT_QUESTION";
  number: number;
}

export interface AddAnswerToQuestion {
  type: "ADD_ANSWER_TO_QUESTION";
  answer: {
    answerId: number;
    questionId: number;
  };
}

export interface DestroyTestResult {
  type: "DESTROY_TEST_DATA";
}

export interface SetTestStartDate {
  type: "SET_TEST_START_DATE";
  date: Date;
}

export interface SetTestEndDate {
  type: "SET_TEST_END_DATE";
  date: Date;
}

export interface ShowHint {
  type: "SHOW_HINT";
}

export interface SetControl {
  type: "SET_CONTROL";
}

export interface IncreaseAmountOfErrors {
  type: "INCREASE_AMOUNT_OF_ERRORS";
}

export interface SetTestFinished {
  type: "SET_TEST_FINISHED";
}

export interface IncreaseAmountOfCorrectAnswers {
  type: 'INCREASE_AMOUNT_OF_CORRECT_ANSWERS';
}

export type knownAction =
  | SetCurrentQuestion
  | AddAnswerToQuestion
  | DestroyTestResult
  | SetTestStartDate
  | SetTestEndDate
  | ShowHint
  | SetControl
  | IncreaseAmountOfErrors
  | SetTestFinished
  | IncreaseAmountOfCorrectAnswers ;

export const actionCreators = {
  setCurrentQuestion: (questionNumber: number) => ({
    type: "SET_CURRENT_QUESTION",
    number: questionNumber,
  }),
  addAnswerToQuestion: (answer: { answerId: number; questionId: number }) => ({
    type: "ADD_ANSWER_TO_QUESTION",
    answer,
  }),
  destroyTestResult: () => ({
    type: "DESTROY_TEST_DATA",
  }),
  setTestStartDate: () => ({
    type: "SET_TEST_START_DATE",
    date: new Date(),
  }),
  setTestEndDate: (date: Date) => ({
    type: "SET_TEST_END_DATE",
    date,
  }),
  showHint: () => ({
    type: "SHOW_HINT",
  }),
  setControl: () => ({
    type: "SET_CONTROL",
  }),
  increaseAmountOfErrors: () => ({
    type: "INCREASE_AMOUNT_OF_ERRORS",
  }),
  setTestFinished: () => ({
    type: "SET_TEST_FINISHED"
  }),
  increaseAmountOfCorrectAnswers: () => ({
    type: "INCREASE_AMOUNT_OF_CORRECT_ANSWERS",
  }),
};
