import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TopicQuestion } from "../../types/topic";
import QuestionsSelectors from "./QuestionsSelectors/QuestionsSelectors";
import QuestionBody from "./QuestionBody/QuestionBody";
import "./Test.css";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/test";

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

  useEffect(() => {
    dispatch(actionCreators.setTestStartDate());
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
    </div>
  );
}
