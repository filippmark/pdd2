import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface ControlTopicQuestionsRequest {
  type: "CONTROL_TOPIC_QUESTIONS_REQUEST";
}

export interface ControlTopicQuestionsReceive {
  type: "CONTROL_TOPIC_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
  endTime: number;
}

export interface ControlTopicQuestionsRequestFailed {
  type: "CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveControlQuestionsByTopic {
  type: "REMOVE_CONTROL_QUESTIONS_BY_TOPIC";
}

export type knownAction =
  | ControlTopicQuestionsReceive
  | ControlTopicQuestionsRequest
  | RemoveControlQuestionsByTopic
  | ControlTopicQuestionsRequestFailed;

export const actionCreators = {
  removeQuestionsForControl: () => ({
    type: "REMOVE_CONTROL_QUESTIONS_BY_TOPIC",
  }),
  getQuestionsForControl: (topicId: number): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "CONTROL_TOPIC_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
           `controls/topic/${topicId}`
        );
        console.log(response);
        dispatch({
          type: "CONTROL_TOPIC_QUESTIONS_RECEIVE",
          topics: response.data.questions,
          endTime: response.data.endTime,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
