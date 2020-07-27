import { Reducer, Action } from "redux";
import { knownAction } from "../actions/test";

export const initialState = {
  currentQuestion: 0,
};

export interface TestState {
  currentQuestion: number;
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
    default:
      return state;
  }
};
