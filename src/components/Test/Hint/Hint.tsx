import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { TopicQuestion } from "../../../types/topic";
import { actionCreators } from "../../../actions/test";
import { ApplicationState } from "../../../reducers";
import "./Hint.css";

export default function Hint(props: {
  questions:
    | {
        topicId: number;
        questionsTopic: TopicQuestion[];
      }
    | undefined;
}) {
  const answerId: number | undefined = useSelector(
    (state: ApplicationState) => {
      const answerQuestion = state.test.anwersQuestions.find(
        (val: { answerId: number; questionId: number }) =>
          val.questionId ===
          props.questions?.questionsTopic[state.test.currentQuestion].id
      );
      return answerQuestion?.answerId;
    }
  );
  const isControlMode = useSelector(
    (state: ApplicationState) => state.test.controlMode
  );
  const dispatch = useDispatch();
  const showHint = useSelector(
    (state: ApplicationState) => state.test.showHint
  );

  function handleShowHint() {
    dispatch(actionCreators.showHint());
  }

  return (
    <Button
      className="hint"
      disabled={showHint || !!answerId}
      onClick={handleShowHint}
      color="success"
      hidden={isControlMode}
    >
      Подсказка
    </Button>
  );
}
