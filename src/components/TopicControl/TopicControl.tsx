import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/questionsByTopicForControl";
import { actionCreators as testActionCreators } from "../../actions/test";
import { ApplicationState } from '../../reducers';
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const TopicControl = (props: any) => {
    const questions = useSelector(
        (state: ApplicationState) => (
            {
                topicId: 0,
                questionsTopic: state.quetionsTopicsControl.questions,
            }
        ),
        shallowEqual
    );
    const isLoading = useSelector(
        (state: ApplicationState) => state.quetionsTopicsControl.isLoading,
    );
    const endTime = useSelector(
        (state: ApplicationState) => state.quetionsTopicsControl.endTime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.getQuestionsForControl(parseInt(props.match.params.topicId)));
    }, [dispatch, props]);

    useEffect(() => {
        dispatch(testActionCreators.setControl());
    }, [dispatch, questions.questionsTopic.length])

    useEffect(() => {
        console.log(endTime)
        if (endTime) {
            dispatch(testActionCreators.setTestEndDate(new Date(endTime * 1000)));
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