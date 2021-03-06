import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/questionsRandomForControl";
import { actionCreators as testActionCreators } from "../../actions/test";
import { ApplicationState } from '../../reducers';
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const RandomQuestionsControl = (props: any) => {
    const questions = useSelector(
        (state: ApplicationState) => (
            {
                topicId: 0,
                questionsTopic: state.questionsRandomControl.questions,
            }
        ),
        shallowEqual
    );
    const isLoading = useSelector(
        (state: ApplicationState) => state.questionsRandomControl.isLoading,
    );
    const endTime = useSelector(
        (state: ApplicationState) => state.questionsRandomControl.endTime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.getRandomQuestionsForControl());
    }, [dispatch]);

    useEffect(() => {
        if (questions.questionsTopic.length) {
            dispatch(testActionCreators.setControl());
        }
    }, [dispatch, questions])

    useEffect(() => {
        if (endTime) {
            const MS_IN_SECOND = 1000;
            const endTimeMs = endTime * MS_IN_SECOND;
            dispatch(testActionCreators.setTestEndDate(new Date(endTimeMs)));
            const INTERVAL = 60;
            dispatch(testActionCreators.setTestStartDate(new Date(endTimeMs - INTERVAL * MS_IN_SECOND)));
        }
    }, [dispatch, endTime]);

    if (isLoading) {
        return <Loader></Loader>;
    } else {
        return (
            <React.Fragment>
                <Test questions={questions}></Test>
            </React.Fragment>
        );
    }
}