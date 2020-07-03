import { Reducer, Action } from "redux";
import { knownAction } from "../actions/signUp";

export const initialState = {
  isLoading: false,
  data: "",
  error: "",
};

export interface SignUpState {
  isLoading: boolean;
  data: string;
  error: string;
}

export const reducer: Reducer<SignUpState> = (
  state: SignUpState | undefined,
  incomingAction: Action
): SignUpState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "SIGN_UP_REQUEST":
      return { ...state, isLoading: true, error: "", data: "" };
    case "SIGN_UP_RECEIVE":
      return { ...state, data: action.data, isLoading: false };
    case "SIGN_UP_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
