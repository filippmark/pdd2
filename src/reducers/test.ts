import { Reducer, Action } from "redux";
import { knownAction } from "../actions/test";

export const initialState = {
  currentQuestion: 0,
  anwersQuestions: [],
  dateStart: null,
  dateEnd: null,
  showHint: false,
};

export interface TestState {
  currentQuestion: number;
  anwersQuestions: {
    answerId: number;
    questionId: number;
  }[];
  dateStart: Date | null;
  dateEnd: Date | null;
  showHint: boolean;
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
      return { ...state, currentQuestion: action.number, showHint: false };
    case "ADD_ANSWER_TO_QUESTION":
      return {
        ...state,
        anwersQuestions: state.anwersQuestions.concat([action.answer]),
      };
    case "DESTROY_TEST_DATA":
      return {
        ...state,
        anwersQuestions: [],
        currentQuestion: 0,
        dateStart: null,
      };
    case "SET_TEST_START_DATE":
      return {
        ...state,
        dateStart: action.date,
        dateEnd: new Date(action.date.getTime() + 15 * 60000),
      };
    case "SET_TEST_END_DATE":
      return {
        ...state,
        dateEnd: action.date,
      };
    case "SHOW_HINT":
      return {
        ...state,
        showHint: true,
      };
    default:
      return state;
  }
};
