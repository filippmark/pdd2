import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";

export interface SignInRequest {
  type: "SIGN_IN_REQUEST";
}

export interface SignInReceive {
  type: "SIGN_IN_RECEIVE";
  data: string;
}

export interface SignInRequestFailed {
  type: "SIGN_IN_REQUEST_FAILED";
  error: string;
}

export type knownAction = SignInReceive | SignInRequest | SignInRequestFailed;

export const actionCreators = {
  signIn: (userData: { username: string; password: string }): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "SIGN_IN_REQUEST" });
      try {
        const response = await axios.post(endpoint + "auth/signIn", userData);
        console.log(response);
        dispatch({ type: "SIGN_IN_RECEIVE", data: "2123" });
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
