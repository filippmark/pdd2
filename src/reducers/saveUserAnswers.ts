import { Reducer, Action } from "redux";
import { knownAction } from "../actions/saveUserAnswers";

export const initialState = {
  isLoading: false,
  isSaved: false,
  error: "",
};

export interface SaveUserAnswersState {
  isLoading: boolean;
  isSaved: boolean;
  error: string;
}

export const reducer: Reducer<SaveUserAnswersState> = (
  state: SaveUserAnswersState | undefined,
  incomingAction: Action
): SaveUserAnswersState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "SAVE_USER_ANSWERS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "SAVE_USER_ANSWERS_RECEIVE":
      return {
        ...state,
        isSaved: true,
        isLoading: false,
      };
    case "SAVE_USER_ANSWERS_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isSaved: false,
      };
    case "RETURN_START_STATE":
        return{
            ...state,
            isLoading: false,
            isSaved: false,
            error: ""
        }
    default:
      return state;
  }
};
