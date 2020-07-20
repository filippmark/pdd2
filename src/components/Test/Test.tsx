import React from "react";
import { TopicQuestion } from "../../types/topic";
import QuestionsSelectors from "./QuestionsSelectors/QuestionsSelectors";
import QuestionBody from "./QuestionBody/QuestionBody";
import './Test.css';

export default function Test(props: {
  questions:
    | {
        topicId: number;
        questionsTopic: TopicQuestion[];
      }
    | undefined;
}) {
  return (
    <div className="test">
      <QuestionsSelectors questions={props.questions}></QuestionsSelectors>
      <QuestionBody></QuestionBody>
    </div>
  );
}
