import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questionsByTopicForControl";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questions: [],
  endTime: 0,
  error: "",
};

export interface QuestionsTopicControlState {
  isLoading: boolean;
  questions: TopicQuestion[];
  endTime: number;
  error: string;
}

export const reducer: Reducer<QuestionsTopicControlState> = (
  state: QuestionsTopicControlState | undefined,
  incomingAction: Action
): QuestionsTopicControlState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "CONTROL_TOPIC_QUESTIONS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "CONTROL_TOPIC_QUESTIONS_RECEIVE":
      return {
        ...state,
        questions: action.topics,
        endTime: action.endTime,
        isLoading: false,
      };
    case "CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    case "REMOVE_CONTROL_QUESTIONS_BY_TOPIC":
      return { ...state, isLoading: false, questions: [] };
    default:
      return state;
  }
};
