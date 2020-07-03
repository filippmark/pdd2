import { Reducer, Action } from "redux";
import { knownAction } from "../actions/signIn";

export const initialState = {
  isLoading: false,
  token: "",
  username: "",
  error: "",
};

export interface SignInState {
  isLoading: boolean;
  token: string;
  username: string;
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
      return { ...state, isLoading: true, error: "" };
    case "SIGN_IN_RECEIVE":
      return {
        ...state,
        token: action.token,
        username: action.username,
        isLoading: false,
      };
    case "SIGN_IN_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
