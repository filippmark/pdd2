import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";

export interface SaveUserAnswersRequest {
  type: "SAVE_USER_ANSWERS_REQUEST";
}

export interface SaveUserAnswersReceive {
  type: "SAVE_USER_ANSWERS_RECEIVE";
}

export interface SaveUserAnswersRequestFailed {
  type: "SAVE_USER_ANSWERS_FAILED";
  error: string;
}

export interface ReturnStartState{
  type: "RETURN_START_STATE"
}

export type knownAction =
  | SaveUserAnswersReceive
  | SaveUserAnswersRequest
  | SaveUserAnswersRequestFailed
  | ReturnStartState;

export const actionCreators = {
  saveUserAnswers: (answersForQuestions: {
    durationInSeconds: number;
    userAnswers: { answerId: number; questionId: number };
  }): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "SAVE_USER_ANSWERS_REQUEST" });
      try {
        const response = await Axios.post( `controls/random`, answersForQuestions);
        console.log(response);
        dispatch({
          type: "SAVE_USER_ANSWERS_RECEIVE",
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SAVE_USER_ANSWERS_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
  returnStartState: () => ({type: "RETURN_START_STATE"})
};
