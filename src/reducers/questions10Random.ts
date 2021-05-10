import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questions10Random";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questions: [],
  error: "",
};

export interface QuestionsRandomState {
  isLoading: boolean;
  questions: TopicQuestion[];
  error: string;
}

export const reducer: Reducer<QuestionsRandomState> = (
  state: QuestionsRandomState | undefined,
  incomingAction: Action
): QuestionsRandomState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "RANDOM_QUESTIONS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "RANDOM_QUESTIONS_RECEIVE":
      return {
        ...state,
        questions: action.topics,
        isLoading: false,
      };
    case "RANDOM_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    case "RANDOM_QUESTIONS_BY_RANDOM":
      return { ...state, isLoading: false, questions: [] };
    default:
      return state;
  }
};
