import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { TopicQuestion } from "../../../types/topic";
import { actionCreators } from "../../../actions/test";

export default function Hint(props: {
  questions:
    | {
        topicId: number;
        questionsTopic: TopicQuestion[];
      }
    | undefined;
}) {
  const dispatch = useDispatch();

  function showHint() {
    dispatch(actionCreators.showHint());
  }

  return <Button onClick={showHint}>Подсказка </Button>;
}
