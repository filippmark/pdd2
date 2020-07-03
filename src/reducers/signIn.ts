import { Reducer, Action } from "redux";
import { knownAction } from "../actions/signIn";

export const initialState = {
  isLoading: false,
  token: "",
  username: "",
  error: "",
  verifyIsLoading: false,
  verifyError: "",
};

export interface SignInState {
  isLoading: boolean;
  token: string;
  username: string;
  error: string;
  verifyIsLoading: boolean;
  verifyError: string;
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
    case "VERIFY_JWT_TOKEN_REQUEST":
      return { ...state, verifyIsLoading: true };
    case "SET_JWT_TOKEN":
      return { ...state, token: action.token, verifyIsLoading: false };
    case "VERIFY_JWT_TOKEN_REQUEST_FAILED":
      return { ...state, verifyError: action.verifyError };
    default:
      return state;
  }
};
