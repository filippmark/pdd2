import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface PassedQuestionsRequest {
  type: "PASSED_QUESTIONS_REQUEST";
}

export interface PassedQuestionsReceive {
  type: "PASSED_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
  endTime: number;
}

export interface PassedQuestionsRequestFailed {
  type: "PASSED_QEUSTIONS_REQUEST_FAILED";
  error: string;
}


export type knownAction =
  | PassedQuestionsRequest
  | PassedQuestionsRequestFailed
  | PassedQuestionsReceive;

export const actionCreators = {
  removeQuestionsByPassed: () => ({ type: "REMOVE_QUESTIONS_BY_Passed" }),
  getQuestionsByPassed: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "PASSED_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
           'CONTROLS'
        );
        console.log(response);
        dispatch({
          type: "PASSED_QUESTIONS_RECEIVE",
          topics: response.data.questions,
          endTime: response.data.endTime,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "PASSED_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
