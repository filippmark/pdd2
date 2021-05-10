import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";

export interface SignUpRequest {
  type: "SIGN_UP_REQUEST";
}

export interface SignUpReceive {
  type: "SIGN_UP_RECEIVE";
  data: string;
}

export interface SignUpRequestFailed {
  type: "SIGN_UP_REQUEST_FAILED";
  error: string;
}

export type knownAction = SignUpRequest | SignUpRequestFailed | SignUpReceive;

export const actionCreators = {
  signUp: (userData: {
    phone: string;
    email: string;
    username: string;
    password: string;
  }): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "SIGN_UP_REQUEST" });
      console.log(userData);
      try {
        const response = await Axios.post( "auth/signUp", userData);
        console.log(response);
        dispatch({ type: "SIGN_UP_RECEIVE", data: "2123" });
      } catch (error) {
        dispatch({
          type: "SIGN_UP_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
