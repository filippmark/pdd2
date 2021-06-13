import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from 'react-router-dom';
import { actionCreators } from "../../actions/test";
import { ApplicationState } from '../../reducers';
import { PassedControl, RecordedQuestion, TopicQuestion } from '../../types/topic';
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const PassedControlTest = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<TopicQuestion[]>([]);
    const params: { controlId: string } = useParams();


    const passedControl: PassedControl = useSelector(
        (state: ApplicationState) =>
            state.passedControls.questions[parseInt(params.controlId)] ?? []
        ,
        shallowEqual
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.setPassed());
    }, [dispatch])

    useEffect(() => {
        if (passedControl) {
            const questions: TopicQuestion[] = [];
            passedControl.answers.forEach((value: RecordedQuestion) => {
                console.log(value);
                questions.push({
                    ...value.question
                });
                if (value.answer) {
                    dispatch(actionCreators.addAnswerToQuestion({
                        questionId: value.question.id,
                        answerId: value.answer.id
                    }))
                } else {
                    const answer = value.question.answers.find(answer => answer.correct);
                    dispatch(actionCreators.addAnswerToQuestion({
                        questionId: value.question.id,
                        answerId: answer!.id,
                    }));
                }
            });
            setQuestions(questions);
            setIsLoading(false);
        }
    }, [passedControl, dispatch]);

    if (isLoading) {
        return <Loader></Loader>;
    } else {
        return (
            <React.Fragment>
                <Test questions={{ questionsTopic: questions, topicId: 0 }}></Test>
            </React.Fragment>
        );
    }
}