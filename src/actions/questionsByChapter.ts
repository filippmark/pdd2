import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";
import { TopicQuestion } from "../types/topic";

export interface ChapterQuestionsRequest {
  type: "CHAPTER_QUESTIONS_REQUEST";
}

export interface ChapterQuestionsReceive {
  type: "CHAPTER_QUESTIONS_RECEIVE";
  topics: TopicQuestion[];
  topicId: number;
}

export interface ChapterQuestionsRequestFailed {
  type: "CHAPTER_QEUSTIONS_REQUEST_FAILED";
  error: string;
}

export interface RemoveQuestionsByChapter {
  type: "REMOVE_QUESTIONS_BY_CHAPTER";
}

export type knownAction =
  | ChapterQuestionsRequest
  | ChapterQuestionsRequestFailed
  | ChapterQuestionsReceive
  | RemoveQuestionsByChapter;

export const actionCreators = {
  removeQuestionsByChapter: () => ({ type: "REMOVE_QUESTIONS_BY_CHAPTER" }),
  getQuestionsByChapter: (topicId: number): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "CHAPTER_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
           `questions/chapter/${topicId}`
        );
        console.log(response);
        dispatch({
          type: "CHAPTER_QUESTIONS_RECEIVE",
          topics: response.data,
          topicId,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "CHAPTER_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
