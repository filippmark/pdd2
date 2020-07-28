import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormGroup, Button } from "reactstrap";
import "./QuestionBody.css";
import { TopicQuestion } from "../../../types/topic";
import { Answer } from "../../../types/answer";
import { actionCreators } from "../../../actions/test";

export default function QuestionBody(props: {
  question: TopicQuestion | null;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const dispatch = useDispatch();

  function handleAnswerSelect(event: React.MouseEvent<any, MouseEvent>) {
    const answerIndex = parseInt(event.currentTarget.id);
    setSelectedAnswer(answerIndex);
    dispatch(
      actionCreators.addAnswerToQuestion({
        answerId: props.question!.answers[answerIndex].id,
        questionId: props.question!.id,
      })
    );
  }

  useEffect(() => {
    setSelectedAnswer(-1);
  }, [props.question]);

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
            if (selectedAnswer !== -1) {
              outline = true;
              if (index === selectedAnswer) {
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
                label={answer.text}
                onClick={handleAnswerSelect}
                color={color}
                outline={outline}
                disabled={selectedAnswer !== -1}
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
