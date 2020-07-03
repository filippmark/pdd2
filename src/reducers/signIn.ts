import { Reducer, Action } from "redux";
import { knownAction } from "../actions/signIn";

export const initialState = {
  isLoading: false,
  data: "",
  error: "",
};

export interface SignInState {
  isLoading: boolean;
  data: string;
  error: string;
}

export const reducer: Reducer<SignInState> = (
  state: SignInState | undefined,
  incomingAction: Action
): SignInState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return { ...state, isLoading: true, error: "", data: "" };
    case "SIGN_IN_RECEIVE":
      return { ...state, data: action.data, isLoading: false };
    case "SIGN_IN_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
