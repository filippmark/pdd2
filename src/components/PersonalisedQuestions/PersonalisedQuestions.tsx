import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../reducers';
import { actionCreators } from "../../actions/personalisedQuestions";
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const PersonalisedQuestions = (props: any) => {
    const questions = useSelector(
        (state: ApplicationState) => (
            {
                topicId: 0,
                questionsTopic: state.questionsPersonalised.questions,
            }
        ),
        shallowEqual
    );
    const isLoading = useSelector(
        (state: ApplicationState) => state.questionsPersonalised.isLoading,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.getQuestionsByPersonal());
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