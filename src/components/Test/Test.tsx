import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TopicQuestion } from "../../types/topic";
import QuestionsSelectors from "./QuestionsSelectors/QuestionsSelectors";
import QuestionBody from "./QuestionBody/QuestionBody";
import "./Test.css";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/test";
import { Result } from "./Results/Results";

export default function Test(props: {
  questions:
  | {
    topicId: number;
    questionsTopic: TopicQuestion[];
  }
  | undefined;
}) {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(
    (state: ApplicationState) => state.test.currentQuestion
  );
  const isControlMode = useSelector(
    (state: ApplicationState) => state.test.controlMode
  );
  const amountOfErrors = useSelector(
    (state: ApplicationState) => state.test.amountOfErrors
  );
  const amountOfAnswers = useSelector(
    (state: ApplicationState) => state.test.anwersQuestions
  );
  const isPassed = useSelector(
    (state: ApplicationState) => state.test.isPassed
  )

  useEffect(() => {
    if (!isPassed) {
      if (isControlMode && amountOfErrors === 2) {
        dispatch(actionCreators.setTestFinished())
      } else if (amountOfAnswers.length === props.questions?.questionsTopic.length) {
        dispatch(actionCreators.setTestFinished());
      }
    }
  }, [amountOfAnswers, amountOfErrors, dispatch, isControlMode, props.questions, isPassed]);

  useEffect(() => {
    return () => {
      dispatch(actionCreators.destroyTestResult());
    };
  }, [dispatch]);

  return (
    <div className="test">
      <QuestionsSelectors
        questions={props.questions}
        currentQuestion={currentQuestion}
      ></QuestionsSelectors>
      <QuestionBody
        question={
          props.questions
            ? props.questions.questionsTopic[currentQuestion]
            : null
        }
      ></QuestionBody>
      <Result></Result>
    </div>
  );
}
