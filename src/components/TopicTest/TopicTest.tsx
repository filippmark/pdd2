import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { ApplicationState } from "../../reducers";
import { TopicQuestion } from "../../types/topic";
import { actionCreators } from "../../actions/questionsByTopic";
import Test from "../Test/Test";
import Loader from "../Global/Loader/Loader";

export default function TopicTest(props: any) {
  const questions = useSelector(
    (state: ApplicationState) =>
      state.questionsTopics.questionsTopics.find(
        (value: { topicId: number; questionsTopic: TopicQuestion[] }) =>
          value.topicId === parseInt(props.match.params.topicId)
      ),
    shallowEqual
  );
  const isLoading = useSelector(
    (state: ApplicationState) => state.questionsTopics.isLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.match);
    dispatch(actionCreators.getQuestionsByTopic(props.match.params.topicId));
  }, [dispatch, props.match, props.match.params.topicId]);

  useEffect(() => {
    return () => {
      dispatch(actionCreators.removeQuestionsByTopic());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loader></Loader>;
  } else {
    return (
      <React.Fragment>
        <Test questions={questions}></Test>
      </React.Fragment>
    );
  }
}
