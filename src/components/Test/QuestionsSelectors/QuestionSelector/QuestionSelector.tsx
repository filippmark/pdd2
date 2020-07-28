import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../../actions/test";
import { Button } from "reactstrap";
import "./QuestionSelector.css";
import { TopicQuestion } from "../../../../types/topic";
import { ApplicationState } from "../../../../reducers";
import { Answer } from "../../../../types/answer";

export default function QuestionSelector(props: {
  questionNumber: number;
  currentQuestion: number;
  question: TopicQuestion;
}) {
  const dispatch = useDispatch();
  const answerId: number | undefined = useSelector(
    (state: ApplicationState) => {
      const answerQuestion = state.test.anwersQuestions.find(
        (val: { answerId: number; questionId: number }) =>
          val.questionId === props.question?.id
      );
      return answerQuestion?.answerId;
    }
  );
  function handleQuestionSelect() {
    dispatch(actionCreators.setCurrentQuestion(props.questionNumber));
  }

  return (
    <Button
      className="question-selector"
      color={
        !!answerId
          ? props.question.answers.find((val: Answer) => val.id === answerId)!
              .correct
            ? "success"
            : "danger"
          : "primary"
      }
      size="lg"
      outline={props.currentQuestion === props.questionNumber}
      onClick={handleQuestionSelect}
    >
      Вопрос #{props.questionNumber + 1}
    </Button>
  );
}
