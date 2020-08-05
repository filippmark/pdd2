import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questionsForControl";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questionsControl: [],
  error: "",
};

export interface QuestionsControlState {
  isLoading: boolean;
  questionsControl: { topicId: number; questionsChapter: TopicQuestion[] }[];
  error: string;
}

export const reducer: Reducer<QuestionsControlState> = (
  state: QuestionsControlState | undefined,
  incomingAction: Action
): QuestionsControlState => {
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
    case "CONTROL_TOPIC_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    case "REMOVE_CONTROL_QUESTIONS_BY_TOPIC":
      return { ...state, isLoading: false, questionsControl: [] };
    default:
      return state;
  }
};
