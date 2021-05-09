import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/questions10Random";
import { ApplicationState } from '../../reducers';
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const RandomQuestionsTest = (props: any) => {
    const questions = useSelector(
        (state: ApplicationState) => (
            {
                topicId: 0,
                questionsTopic: state.questionsRandom.questions,
            }
        ),
        shallowEqual
    );
    const isLoading = useSelector(
        (state: ApplicationState) => state.questionsChapters.isLoading,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.getQuestionsByRandom());
    }, [dispatch]);


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