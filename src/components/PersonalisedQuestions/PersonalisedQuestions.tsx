import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../reducers';
import { actionCreators } from "../../actions/personalisedQuestions";
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';
import './PersonalisedQuestions.css';


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
    const error = useSelector(
        (state: ApplicationState) => state.questionsPersonalised.error
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.getQuestionsByPersonal());
    }, [dispatch]);


    if (isLoading) {
        return <Loader></Loader>;
    } else if (!error){
        return (
            <React.Fragment>
                <Test questions={questions}></Test>
            </React.Fragment>
        );
    } else {
        return (
            <div className="no-data d-flex justify-content-center align-items-center" >
                <h6 className="text-info"> К сожалению, у нас нет информации для вашей персональной тренировки </h6>
            </div>
        );
    }
}