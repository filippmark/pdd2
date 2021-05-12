import { Axios } from "../axios";
import { Dispatch } from "redux";
import { useHistory } from 'react-router-dom';

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

export interface ReturnStartState {
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
    userAnswers: { answerId: number; questionId: number }[];
  }, navigateCallback: (error?: any) =>  void): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "SAVE_USER_ANSWERS_REQUEST" });
      try {
        const response = await Axios.post(`controls/`, answersForQuestions);
        dispatch({
          type: "SAVE_USER_ANSWERS_RECEIVE",
        });
        navigateCallback();
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SAVE_USER_ANSWERS_FAILED",
          error: error.response?.data,
        });
        navigateCallback(error);
      }
    };
  },
  returnStartState: () => ({ type: "RETURN_START_STATE" })
};
