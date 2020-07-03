import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questionsByTopic";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questionsTopics: [],
  error: "",
};

export interface QuestionSTopicState {
  isLoading: boolean;
  questionsTopics: { topicId: number; questionsTopic: TopicQuestion[] }[];
  error: string;
}

export const reducer: Reducer<QuestionSTopicState> = (
  state: QuestionSTopicState | undefined,
  incomingAction: Action
): QuestionSTopicState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "TOPIC_QUESTIONS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "TOPIC_QUESTIONS_RECEIVE":
      return {
        ...state,
        questionsTopics: state.questionsTopics.concat([
          {
            topicId: action.topics[0].topicId,
            questionsTopic: action.topics,
          },
        ]),
        isLoading: false,
      };
    case "TOPIC_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
