import { Reducer, Action } from "redux";
import { knownAction } from "../actions/chapters";
import { Topic } from "../types/topic";

export const initialState = {
  isLoading: false,
  chapters: [],
  error: "",
};

export interface ChaptersState {
  isLoading: boolean;
  chapters: Topic[];
  error: string;
}

export const reducer: Reducer<ChaptersState> = (
  state: ChaptersState | undefined,
  incomingAction: Action
): ChaptersState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "CHAPTERS_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "CHAPTERS_RECEIVE":
      return { ...state, chapters: action.chapters, isLoading: false };
    case "CHAPTERS_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
