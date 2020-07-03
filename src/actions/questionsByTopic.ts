import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";
import { TopicQeustion } from "../types/topic";

export interface TopicQuestionsRequest {
  type: "TOPIC_QUESTIONS_REQUEST";
}

export interface TopicQuestionsReceive {
  type: "TOPIC_QUESTIONS_RECEIVE";
  topics: TopicQeustion[];
}

export interface TopicQuestionsRequestFailed {
  type: "TOPIC_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export type knownAction =
  | TopicQuestionsRequest
  | TopicQuestionsRequestFailed
  | TopicQuestionsReceive;

export const actionCreators = {
  getTopics: (topicId: number): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "TOPIC_QUESTIONS_REQUEST" });
      try {
        const response = await axios.get(
          endpoint + `questions/topics/${topicId}`
        );
        console.log(response);
        dispatch({
          type: "TOPIC_QUESTIONS_RECEIVE",
          topics: response.data.questions,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "TOPIC_QEUSTIONS_REQUEST_FAILED",
          error: error.response.status,
        });
      }
    };
  },
};
