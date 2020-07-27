import React from "react";
import { useSelector } from "react-redux";
import { TopicQuestion } from "../../types/topic";
import QuestionsSelectors from "./QuestionsSelectors/QuestionsSelectors";
import QuestionBody from "./QuestionBody/QuestionBody";
import './Test.css';
import { ApplicationState } from "../../reducers";

export default function Test(props: {
  questions:
    | {
        topicId: number;
        questionsTopic: TopicQuestion[];
      }
    | undefined;
}) {
  const currentQuestion = useSelector((state: ApplicationState) => state.test.currentQuestion);

  return (
    <div className="test">
      <QuestionsSelectors questions={props.questions} currentQuestion={currentQuestion}></QuestionsSelectors>
      <QuestionBody  question={props.questions ? props.questions.questionsTopic[currentQuestion] : null}></QuestionBody>
    </div>
  );
}
