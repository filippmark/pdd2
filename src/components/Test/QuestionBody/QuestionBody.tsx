import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Button } from "reactstrap";
import "./QuestionBody.css";
import { TopicQuestion } from "../../../types/topic";
import { Answer } from "../../../types/answer";
import { actionCreators } from "../../../actions/test";
import { ApplicationState } from "../../../reducers";

export default function QuestionBody(props: {
  question: TopicQuestion | null;
}) {
  const answerId: number | undefined = useSelector(
    (state: ApplicationState) => {
      const answerQuestion = state.test.anwersQuestions.find(
        (val: { answerId: number; questionId: number }) =>
          val.questionId === props.question?.id
      );
      return answerQuestion?.answerId;
    }
  );
  const showHint = useSelector(
    (state: ApplicationState) => state.test.showHint
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (showHint) {
      dispatch(
        actionCreators.addAnswerToQuestion({
          answerId: props.question!.answers.find((val: Answer) => val.correct)!
            .id,
          questionId: props.question!.id,
        })
      );
    }
  }, [dispatch, props.question, showHint]);

  function handleAnswerSelect(event: React.MouseEvent<any, MouseEvent>) {
    const answerIndex = parseInt(event.currentTarget.id);
    dispatch(
      actionCreators.addAnswerToQuestion({
        answerId: props.question!.answers[answerIndex].id,
        questionId: props.question!.id,
      })
    );
  }

  return (
    <div className="question-body">
      <h5 className="question-body__text">{props.question?.text}</h5>
      <div className="question-body__image-wrapper">
        {props.question?.linkToImage && (
          <img
            className="question-body__image"
            src={props.question?.linkToImage}
            alt="question pic"
          ></img>
        )}
      </div>
      <FormGroup className="question-body__answers">
        <div>
          {props.question?.answers.map((answer: Answer, index: number) => {
            let color = "primary";
            let outline = false;
            if (answerId) {
              outline = true;
              if (answer.id === answerId) {
                color = answer.correct ? "success" : "danger";
                outline = false;
              } else if (answer.correct) {
                color = "success";
                outline = false;
              }
            }
            return (
              <Button
                key={answer.id}
                id={index.toString()}
                name="question-answer"
                onClick={handleAnswerSelect}
                color={color}
                outline={outline}
                disabled={!!answerId}
              >
                {answer.text}
              </Button>
            );
          })}
        </div>
      </FormGroup>
    </div>
  );
}
