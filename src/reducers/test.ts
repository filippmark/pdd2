import { Reducer, Action } from "redux";
import { knownAction } from "../actions/test";

export const initialState = {
  currentQuestion: 0,
  anwersQuestions: [],
};

export interface TestState {
  currentQuestion: number;
  anwersQuestions: {
    answerId: number;
    questionId: number;
  }[];
}

export const reducer: Reducer<TestState> = (
  state: TestState | undefined,
  incomingAction: Action
): TestState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: action.number };
    case "ADD_ANSWER_TO_QUESTION":
      return {
        ...state,
        anwersQuestions: state.anwersQuestions.concat([action.answer]),
      };
    default:
      return state;
  }
};
