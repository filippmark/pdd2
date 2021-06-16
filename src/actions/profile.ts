import { Axios } from "../axios";
import { Dispatch } from "redux";

import { ApplicationState } from "../reducers/index";

export interface PercentRequest {
    type: "PERCENT_REQUEST";
}

export interface PercentReceive {
    type: "PERCENT_RECEIVE";
    percent: number;
}

export interface PercentRequestFailed {
    type: "PERCENT_REQUEST_FAILED";
    error: string;
}

export type knownAction =
    | PercentRequest
    | PercentReceive
    | PercentRequestFailed;

export const actionCreators = {
    getPercent: (): any => {
        return async (
            dispatch: Dispatch<knownAction>,
            getState: () => ApplicationState
        ) => {
            dispatch({ type: "PERCENT_REQUEST" });
            try {
                const response = await Axios.get("/controls/percentage");
                console.log(response);
                dispatch({ type: "PERCENT_RECEIVE", percent: response.data });
            } catch (error) {
                console.log(error);
                dispatch({
                    type: "PERCENT_REQUEST_FAILED",
                    error: error.response?.data,
                });
            }
        };
    },
};
