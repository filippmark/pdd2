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

export type knownAction =
  | SetCurrentQuestion
  | AddAnswerToQuestion
  | DestroyTestResult
  | SetTestStartDate
  | SetTestEndDate
  | ShowHint;

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
};
