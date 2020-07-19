import { Reducer, Action } from "redux";
import { knownAction } from "../actions/topics";
import { Topic } from "../types/topic";

export const initialState = {
  isLoading: false,
  topics: [],
  error: "",
};

export interface TopicsState {
  isLoading: boolean;
  topics: Topic[];
  error: string;
}

export const reducer: Reducer<TopicsState> = (
  state: TopicsState | undefined,
  incomingAction: Action
): TopicsState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "TOPICS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "TOPICS_RECEIVE":
      return { ...state, topics: action.topics, isLoading: false };
    case "TOPICS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
