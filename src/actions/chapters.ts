import axios from "axios";
import { Dispatch } from "redux";
import { endpoint } from "..";
import { ApplicationState } from "../reducers/index";
import { Topic } from "../types/topic";

export interface ChaptersRequest {
  type: "CHAPTERS_REQUEST";
}

export interface ChaptersReceive {
  type: "CHAPTERS_RECEIVE";
  chapters: Topic[];
}

export interface ChaptersRequestFailed {
  type: "CHAPTERS_REQUEST_FAILED";
  error: string;
}

export type knownAction =
  | ChaptersRequest
  | ChaptersReceive
  | ChaptersRequestFailed;

export const actionCreators = {
  getChapters: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "CHAPTERS_REQUEST" });
      try {
        const response = await axios.get(endpoint + "chapters");
        console.log(response);
        dispatch({ type: "CHAPTERS_RECEIVE", chapters: response.data });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "CHAPTERS_REQUEST_FAILED",
          error: error.response?.status,
        });
      }
    };
  },
};
