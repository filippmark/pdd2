import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface RandomControlTopicQuestionsRequest {
  type: "RANDOM_CONTROL_TOPIC_QUESTIONS_REQUEST";
}

export interface RandomControlTopicQuestionsReceive {
  type: "RANDOM_CONTROL_TOPIC_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
  endTime: number;
}

export interface RandomControlTopicQuestionsRequestFailed {
  type: "RANDOM_CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveRandomControlQuestionsByTopic {
  type: "REMOVE_RANDOM_CONTROL_QUESTIONS_BY_TOPIC";
}

export type knownAction =
  | RandomControlTopicQuestionsReceive
  | RandomControlTopicQuestionsRequest
  | RemoveRandomControlQuestionsByTopic
  | RandomControlTopicQuestionsRequestFailed;

export const actionCreators = {
  removeRandomQuestionsForControl: () => ({
    type: "REMOVE_RANDOM_CONTROL_QUESTIONS_BY_TOPIC",
  }),
  getRandomQuestionsForControl: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "RANDOM_CONTROL_TOPIC_QUESTIONS_REQUEST" });
      try {
        const response = await axios.get(
          endpoint + `controls/random`
        );
        console.log(response);
        dispatch({
          type: "RANDOM_CONTROL_TOPIC_QUESTIONS_RECEIVE",
          topics: response.data.questions,
          endTime: response.data.endTime,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "RANDOM_CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.status,
        });
      }
    };
  },
};
