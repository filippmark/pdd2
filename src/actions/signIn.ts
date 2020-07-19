import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";

export interface SignInRequest {
  type: "SIGN_IN_REQUEST";
}

export interface SignInReceive {
  type: "SIGN_IN_RECEIVE";
  token: string;
  username: string;
}

export interface SignInRequestFailed {
  type: "SIGN_IN_REQUEST_FAILED";
  error: string;
}

export interface SetJwtToken {
  type: "SET_JWT_TOKEN";
  token: string;
}

export interface VerifyJwtTokenRequest {
  type: "VERIFY_JWT_TOKEN_REQUEST";
}

export interface VerifyJwtTokenRequestFailed {
  type: "VERIFY_JWT_TOKEN_REQUEST_FAILED";
  verifyError: string;
}

export type knownAction =
  | SignInReceive
  | SignInRequest
  | SignInRequestFailed
  | SetJwtToken
  | VerifyJwtTokenRequest
  | VerifyJwtTokenRequestFailed;

export const actionCreators = {
  setToken: (token: string) => ({ type: "SET_JWT_TOKEN", token }),
  verifyToken: (token: string) => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "VERIFY_JWT_TOKEN_REQUEST" });
      try {
        const response = await axios.get(endpoint + `auth/verify/${token}`);
        console.log(response);
        dispatch({ type: "SET_JWT_TOKEN", token });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "VERIFY_JWT_TOKEN_REQUEST_FAILED",
          verifyError: error.response.status,
        });
      }
    };
  },
  signIn: (userData: { username: string; password: string }) => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "SIGN_IN_REQUEST" });
      try {
        const response = await axios.post(endpoint + "auth/login", userData);
        console.log(response);
        dispatch({ type: "SIGN_IN_RECEIVE", token: "2123", username: "" });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SIGN_IN_REQUEST_FAILED",
          error: error.response.status,
        });
      }
    };
  },
};
