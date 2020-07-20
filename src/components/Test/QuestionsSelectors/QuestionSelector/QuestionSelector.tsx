import React from "react";
import { Button } from "reactstrap";
import "./QuestionSelector.css";

export default function QuestionSelector(props: { questionNumber: number }) {
  function handleQuestionSelect() {
    console.log("here");
  }

  return (
    <Button
      className="question-selector"
      color="primary"
      size="lg"
      outline
      onClick={handleQuestionSelect}
    >
      Вопрос #{props.questionNumber + 1}
    </Button>
  );
}
