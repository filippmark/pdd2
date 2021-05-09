import { Reducer, Action } from "redux";
import { knownAction } from "../actions/questionsByChapter";
import { TopicQuestion } from "../types/topic";

export const initialState = {
  isLoading: false,
  questionsChapters: [],
  error: "",
};

export interface QuestionsChapterstate {
  isLoading: boolean;
  questionsChapters: { topicId: number; questionsTopic: TopicQuestion[] }[];
  error: string;
}

export const reducer: Reducer<QuestionsChapterstate> = (
  state: QuestionsChapterstate | undefined,
  incomingAction: Action
): QuestionsChapterstate => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  console.log(action);
  switch (action.type) {
    case "CHAPTER_QUESTIONS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "CHAPTER_QUESTIONS_RECEIVE":
      return {
        ...state,
        questionsChapters: !!action.topics.length
          ? state.questionsChapters.concat([
              {
                topicId: action.topicId,
                questionsTopic: action.topics,
              },
            ])
          : [...state.questionsChapters],
        isLoading: false,
      };
    case "CHAPTER_QEUSTIONS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    case "REMOVE_QUESTIONS_BY_CHAPTER":
      return { ...state, isLoading: false, questionsChapters: [] };
    default:
      return state;
  }
};
