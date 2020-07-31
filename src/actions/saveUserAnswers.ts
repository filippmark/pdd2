import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
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

export type knownAction =
  | SaveUserAnswersReceive
  | SaveUserAnswersRequest
  | SaveUserAnswersRequestFailed;

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
        const response = await axios.get(endpoint + `controls/random`);
        console.log(response);
        dispatch({
          type: "SAVE_USER_ANSWERS_RECEIVE",
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SAVE_USER_ANSWERS_FAILED",
          error: error.response.status,
        });
      }
    };
  },
};
