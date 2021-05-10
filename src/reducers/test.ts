import { Reducer, Action } from "redux";
import { knownAction } from "../actions/test";

export const initialState = {
  currentQuestion: 0,
  anwersQuestions: [],
  dateStart: null,
  dateEnd: null,
  showHint: false,
  controlMode: false,
  amountOfErrors: 0,
  amountOfCorrect: 0,
  isTestFinished: false
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
  controlMode: boolean;
  amountOfErrors: number;
  amountOfCorrect: number;
  isTestFinished: boolean;
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
    case "SET_TEST_FINISHED":
      return {
        ...state,
        isTestFinished: true
      }
    case "DESTROY_TEST_DATA":
      return {
        ...state,
        anwersQuestions: [],
        currentQuestion: 0,
        dateStart: null,
        dateEnd: null,
        showHint: false,
        controlMode: false,
        amountOfErrors: 0,
        amountOfCorrect: 0,
        isTestFinished: false
      };
    case "SET_TEST_START_DATE":
      return {
        ...state,
        dateStart: action.date,
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
    case "SET_CONTROL":
      return {
        ...state,
        controlMode: true,
      };
    case "INCREASE_AMOUNT_OF_ERRORS":
      return {
        ...state,
        amountOfErrors: state.amountOfErrors + 1,
      };
    case "INCREASE_AMOUNT_OF_CORRECT_ANSWERS": 
      return {
        ...state,
        amountOfCorrect: state.amountOfCorrect + 1,
      }
    default:
      return state;
  }
};
