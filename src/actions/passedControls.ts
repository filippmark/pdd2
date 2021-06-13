import { Axios } from "../axios";
import { Dispatch } from "redux";
import moment from "moment";
import { ApplicationState } from "../reducers/index";
import { PassedControl } from "../types/topic";
import 'moment/locale/ru';

export interface PassedQuestionsRequest {
  type: "PASSED_QUESTIONS_REQUEST";
}

export interface PassedQuestionsReceive {
  type: "PASSED_QUESTIONS_RECEIVE";
  topics: PassedControl[];
}

export interface PassedQuestionsRequestFailed {
  type: "PASSED_QEUSTIONS_REQUEST_FAILED";
  error: string;
}


export type knownAction =
  | PassedQuestionsRequest
  | PassedQuestionsRequestFailed
  | PassedQuestionsReceive;

export const actionCreators = {
  removeQuestionsByPassed: () => ({ type: "REMOVE_QUESTIONS_BY_Passed" }),
  getPassedQuestions: (): any => {
    return async (
      dispatch: Dispatch<knownAction>,
      getState: () => ApplicationState
    ) => {
      dispatch({ type: "PASSED_QUESTIONS_REQUEST" });
      try {
        const response = await Axios.get(
          'controls'
        );
        console.log(response);
        moment.locale('ru');
        const topics: PassedControl[] = response.data.map((value: PassedControl, id: number) => ({
          ...value,
          name: moment(value.createdAt).locale('ru').format('LLL'),
          id,
        }));
        dispatch({
          type: "PASSED_QUESTIONS_RECEIVE",
          topics,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "PASSED_QEUSTIONS_REQUEST_FAILED",
          error: error.response?.data,
        });
      }
    };
  },
};
