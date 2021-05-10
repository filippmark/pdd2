import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface TopicQuestionsRequest {
  type: "TOPIC_QUESTIONS_REQUEST";
}

export interface TopicQuestionsReceive {
  type: "TOPIC_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
}

export interface TopicQuestionsRequestFailed {
  type: "TOPIC_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveQuestionsByTopic {
  type: "REMOVE_QUESTIONS_BY_TOPIC";
}

export type knownAction =
  | TopicQuestionsRequest
  | TopicQuestionsRequestFailed
  | TopicQuestionsReceive
  | RemoveQuestionsByTopic;

export const actionCreators = {
  removeQuestionsByTopic: () => ({ type: "REMOVE_QUESTIONS_BY_TOPIC" }),
  getQuestionsByTopic: (topicId: number): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "TOPIC_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
           `questions/topic/${topicId}/random`
        );
        console.log(response);
        dispatch({
          type: "TOPIC_QUESTIONS_RECEIVE",
          topics: response.data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "TOPIC_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
