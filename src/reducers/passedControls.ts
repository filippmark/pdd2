import { Reducer, Action } from "redux";
import { knownAction } from "../actions/passedControls";
import { TopicQuestion } from "../types/topic";

export const initialState = {
    isLoading: false,
    questions: [],
    endDate: 0,
    error: "",
};

export interface QuestionsPassedState {
    isLoading: boolean;
    questions: TopicQuestion[];
    endDate: number;
    error: string;
}

export const reducer: Reducer<QuestionsPassedState> = (
    state: QuestionsPassedState | undefined,
    incomingAction: Action
): QuestionsPassedState => {
    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as knownAction;
    switch (action.type) {
        case "PASSED_QUESTIONS_REQUEST":
            return { ...state, isLoading: true, error: "" };
        case "PASSED_QUESTIONS_RECEIVE":
            return {
                ...state,
                questions: action.topics,
                endDate: action.endTime,
                isLoading: false,
            };
        case "PASSED_QEUSTIONS_REQUEST_FAILED":
            return { ...state, isLoading: false, error: action.error };
        default:
            return state;
    }
};
