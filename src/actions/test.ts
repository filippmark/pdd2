export interface SetCurrentQuestion {
  type: "SET_CURRENT_QUESTION";
  number: number;
}

export type knownAction = SetCurrentQuestion;

export const actionCreators = {
  setCurrentQuestion: (questionNumber: number) => ({
    type: "SET_CURRENT_QUESTION",
    number: questionNumber,
  }),
};
