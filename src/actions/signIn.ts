import { Axios } from "../axios";
import { Dispatch } from "redux";

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

export interface SignOut {
  type: "SIGN_OUT"
}

export type knownAction =
  | SignInReceive
  | SignInRequest
  | SignInRequestFailed
  | SetJwtToken
  | VerifyJwtTokenRequest
  | VerifyJwtTokenRequestFailed
  | SignOut;

export const actionCreators = {
  setToken: (token: string) => ({ type: "SET_JWT_TOKEN", token }),
  verifyToken: (token: string) => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "VERIFY_JWT_TOKEN_REQUEST" });
      try {
        const response = await Axios.get( `auth/verify/${token}`);
        console.log(response);
        dispatch({ type: "SET_JWT_TOKEN", token });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "VERIFY_JWT_TOKEN_REQUEST_FAILED",
          verifyError: error.response?.data,
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
        const response = await Axios.post( "auth/login", userData);
        console.log(response);
        const { authenticationToken, refreshToken, username } = response.data;
        localStorage.setItem('TOKEN', authenticationToken);
        localStorage.setItem('REFRESH_TOKEN', refreshToken);
        localStorage.setItem('USERNAME', username);
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + authenticationToken;
        dispatch({ type: "SIGN_IN_RECEIVE", token: authenticationToken, username });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SIGN_IN_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
  signOut: () => ({
    type: 'SIGN_OUT'
  })
};
