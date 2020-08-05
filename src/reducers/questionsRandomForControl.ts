import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questionsRandomForControl";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questionsControl: [],
  error: "",
};

export interface QuestionsRandomControlState {
  isLoading: boolean;
  questionsControl: { topicId: number; questionsChapter: TopicQuestion[] }[];
  error: string;
}

export const reducer: Reducer<QuestionsRandomControlState> = (
  state: QuestionsRandomControlState | undefined,
  incomingAction: Action
): QuestionsRandomControlState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "RANDOM_CONTROL_TOPIC_QUESTIONS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "RANDOM_CONTROL_TOPIC_QUESTIONS_RECEIVE":
      return {
        ...state,
        questionsControl: !!action.topics.length
          ? state.questionsControl.concat([
              {
                topicId: action.topics[0].topicId,
                questionsChapter: action.topics,
              },
            ])
          : [...state.questionsControl],
        isLoading: false,
      };
    case "RANDOM_CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    case "REMOVE_RANDOM_CONTROL_QUESTIONS_BY_TOPIC":
      return { ...state, isLoading: false, questionsControl: [] };
    default:
      return state;
  }
};
