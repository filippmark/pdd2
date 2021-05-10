import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { Topic } from "../types/topic";

export interface TopicsRequest {
  type: "TOPICS_REQUEST";
}

export interface TopicsReceive {
  type: "TOPICS_RECEIVE";
  topics: Topic[];
}

export interface TopicsRequestFailed {
  type: "TOPICS_REQUEST_FAILED";
  error: string;
}

export type knownAction = TopicsRequest | TopicsReceive | TopicsRequestFailed;

export const actionCreators = {
  getTopics: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "TOPICS_REQUEST" });
      try {
        const response = await Axios.get( "topics");
        console.log(response);
        dispatch({ type: "TOPICS_RECEIVE", topics: response.data });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "TOPICS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
