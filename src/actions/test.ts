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

export type knownAction = SetCurrentQuestion | AddAnswerToQuestion;

export const actionCreators = {
  setCurrentQuestion: (questionNumber: number) => ({
    type: "SET_CURRENT_QUESTION",
    number: questionNumber,
  }),
  addAnswerToQuestion: (answer: { answerId: number; questionId: number }) => ({
    type: "ADD_ANSWER_TO_QUESTION",
    answer,
  }),
};
