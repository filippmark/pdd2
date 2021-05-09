import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface RandomQuestionsRequest {
  type: "RANDOM_QUESTIONS_REQUEST";
}

export interface RandomQuestionsReceive {
  type: "RANDOM_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
}

export interface RandomQuestionsRequestFailed {
  type: "RANDOM_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveQuestionsByRandom {
  type: "RANDOM_QUESTIONS_BY_RANDOM";
}

export type knownAction =
  | RandomQuestionsRequest
  | RandomQuestionsRequestFailed
  | RandomQuestionsReceive
  | RemoveQuestionsByRandom;

export const actionCreators = {
  removeQuestionsByRandom: () => ({ type: "REMOVE_QUESTIONS_BY_RANDOM" }),
  getQuestionsByRandom: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "RANDOM_QUESTIONS_REQUEST" });
      try {
        const response = await axios.get(
          endpoint + 'questions/random/'
        );
        console.log(response);
        dispatch({
          type: "RANDOM_QUESTIONS_RECEIVE",
          topics: response.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "RANDOM_QEUSTIONS_REQUEST_FAILED",
          error: error.response.status,
        });
      }
    };
  },
};
