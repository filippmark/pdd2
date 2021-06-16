import { Reducer, Action } from "redux";
import { knownAction } from "../actions/profile";

export const initialState = {
  isLoading: false,
  percent: 0,
  error: "",
};

export interface ProfileState {
  isLoading: boolean;
  percent: number;
  error: string;
}

export const reducer: Reducer<ProfileState> = (
  state: ProfileState | undefined,
  incomingAction: Action
): ProfileState => {
  if (state === undefined) {
    return initialState;
  }

  const action = incomingAction as knownAction;
  switch (action.type) {
    case "PERCENT_REQUEST":
      return { ...state, isLoading: true, error: "" };
    case "PERCENT_RECEIVE":
      return { ...state, percent: action.percent, isLoading: false };
    case "PERCENT_REQUEST_FAILED":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
