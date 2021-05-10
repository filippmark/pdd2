import { Reducer, Action } from "redux";
import { knownAction } from "../actions/personalisedQuestions";
import { TopicQuestion } from "../types/topic";

export const initialState = {
    isLoading: false,
    questions: [],
    endDate: 0,
    error: "",
};

export interface QuestionsPersonalisedState {
    isLoading: boolean;
    questions: TopicQuestion[];
    endDate: number;
    error: string;
}

export const reducer: Reducer<QuestionsPersonalisedState> = (
    state: QuestionsPersonalisedState | undefined,
    incomingAction: Action
): QuestionsPersonalisedState => {
    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as knownAction;
    switch (action.type) {
        case "PERSONAL_QUESTIONS_REQUEST":
            return { ...state, isLoading: true, error: "" };
        case "PERSONAL_QUESTIONS_RECEIVE":
            return {
                ...state,
                questions: action.topics,
                endDate: action.endTime,
                isLoading: false,
            };
        case "PERSONAL_QEUSTIONS_REQUEST_FAILED":
            return { ...state, isLoading: false, error: action.error };
        case "PERSONAL_QUESTIONS_BY_PERSONAL":
            return { ...state, isLoading: false, questions: [] };
        default:
            return state;
    }
};
