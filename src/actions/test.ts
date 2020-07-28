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

export type knownAction =
  | SetCurrentQuestion
  | AddAnswerToQuestion
  | DestroyTestResult;

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
};
