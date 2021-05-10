import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface PersonalQuestionsRequest {
  type: "PERSONAL_QUESTIONS_REQUEST";
}

export interface PersonalQuestionsReceive {
  type: "PERSONAL_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
  endTime: number;
}

export interface PersonalQuestionsRequestFailed {
  type: "PERSONAL_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveQuestionsByPersonal {
  type: "PERSONAL_QUESTIONS_BY_PERSONAL";
}

export type knownAction =
  | PersonalQuestionsRequest
  | PersonalQuestionsRequestFailed
  | PersonalQuestionsReceive
  | RemoveQuestionsByPersonal;

export const actionCreators = {
  removeQuestionsByPersonal: () => ({ type: "REMOVE_QUESTIONS_BY_PERSONAL" }),
  getQuestionsByPersonal: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "PERSONAL_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
           'controls/personalized'
        );
        console.log(response);
        dispatch({
          type: "PERSONAL_QUESTIONS_RECEIVE",
          topics: response.data.questions,
          endTime: response.data.endTime,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "PERSONAL_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
