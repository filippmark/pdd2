import React from "react";
import QuestionSelector from "./QuestionSelector/QuestionSelector";
import { TopicQuestion } from "../../../types/topic";
import "./QuestionsSelectors.css";

export default function QuestionsSelectors(props: {
  questions:
    | {
        topicId: number;
        questionsTopic: TopicQuestion[];
      }
    | undefined;
  currentQuestion: number;
}) {
  return (
    <div className="questions-selectors">
      <ul className="questions-selectors__list">
        {props.questions?.questionsTopic.map(
          (question: TopicQuestion, index: number) => (
            <li key={question.id} className="questions-selectors__item">
              <QuestionSelector
                currentQuestion={props.currentQuestion}
                questionNumber={index}
                question={question}
              ></QuestionSelector>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
