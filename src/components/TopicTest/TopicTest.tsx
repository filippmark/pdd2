import React, {useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { ApplicationState } from "../../reducers";
import { TopicQuestion } from "../../types/topic";
import { actionCreators } from "../../actions/questionsByTopic";

export default function TopicTest(props: any) {
  const questions = useSelector(
    (state: ApplicationState) =>
      state.questionsTopics.questionsTopics.find(
        (value: { topicId: number; questionsTopic: TopicQuestion[] }) =>
          value.topicId === props.match.params.topicId
      ),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(actionCreators.getQuestionsByTopic(props.match.params.topicId));
  }, [dispatch, props.match.params.topicId]);

  return <div>{props.match.params.topicId}</div>;
}
