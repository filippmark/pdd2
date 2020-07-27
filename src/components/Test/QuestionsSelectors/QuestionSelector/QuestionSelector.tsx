import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../../actions/test";
import { Button } from "reactstrap";
import "./QuestionSelector.css";

export default function QuestionSelector(props: {
  questionNumber: number;
  currentQuestion: number;
}) {
  const dispatch = useDispatch();
  function handleQuestionSelect() {
    dispatch(actionCreators.setCurrentQuestion(props.questionNumber));
  }

  return (
    <Button
      className="question-selector"
      color="primary"
      size="lg"
      outline={props.currentQuestion === props.questionNumber}
      onClick={handleQuestionSelect}
    >
      Вопрос #{props.questionNumber + 1}
    </Button>
  );
}
