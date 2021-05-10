import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Button, Collapse, Card, CardBody, CardHeader, CardTitle, CardText, } from "reactstrap";
import "./QuestionBody.css";
import { TopicQuestion } from "../../../types/topic";
import { Answer } from "../../../types/answer";
import { actionCreators } from "../../../actions/test";
import { ApplicationState } from "../../../reducers";
import './QuestionBody.css'

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
    const answer = props.question!.answers[answerIndex];
    if (!answer.correct) {
      dispatch(actionCreators.increaseAmountOfErrors());
    } else {
      dispatch(actionCreators.increaseAmountOfCorrectAnswers());
    }
    dispatch(
      actionCreators.addAnswerToQuestion({
        answerId: answer.id,
        questionId: props.question!.id,
      })
    );
  }


  const [isTheoryOpen, setIsTheoryOpen] = useState(false);

  const toggleTheory = () => setIsTheoryOpen(!isTheoryOpen);

  useEffect(() => {
    setIsTheoryOpen(false);
  }, [props.question]);

  return (
    <div className="question-body">
      <h5 className="question-body__text mr-3">{props.question?.text}</h5>
      {props.question?.linkToImage && (
        <div className="question-body__image-wrapper">
          <img
            className="question-body__image"
            src={props.question?.linkToImage}
            alt="question pic"
          ></img>
        </div>
      )}
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
                block
              >
                {answer.text}
              </Button>
            );
          })}
        </div>
      </FormGroup>
      <Card className="mr-3">
        <CardHeader className="bg-white">
          <Button color="primary" disabled={!answerId} onClick={toggleTheory}>
            Просмотреть ПДД
          </Button>
        </CardHeader>
        <Collapse isOpen={isTheoryOpen}>
          {
            isTheoryOpen && (
              <CardBody>
                <CardTitle tag="h5">{`Глава ${props.question?.paragraph?.chapter.id || '-'}. ${props.question?.paragraph?.chapter.name || '-'}`}</CardTitle>
                <CardText>
                  <div>
                    {`${props.question?.paragraph?.id || ''}. ${props.question?.paragraph?.text || ''}`}
                  </div>
                  {
                    props.question?.paragraph?.articles?.map((value, index) => (
                      <div className="ml-5 mt-2" key={value.text}>
                        <span>
                          {value.text}
                        </span>
                        {
                          value.linkToImage && (
                            <div>
                              <img src={value.linkToImage} alt="rule">
                              </img>
                            </div>
                          )
                        }
                      </div>
                    ))
                  }
                </CardText>
              </CardBody>
            )
          }
        </Collapse>
      </Card>
    </div>
  );
}
