import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/questionsByChapter";
import { ApplicationState } from '../../reducers';
import { TopicQuestion } from '../../types/topic';
import Loader from '../Global/Loader/Loader';
import Test from '../Test/Test';


export const ChapterTest = (props: any) => {
  const questions = useSelector(
    (state: ApplicationState) =>
      state.questionsChapters.questionsChapters.find(
        (value: { topicId: number; questionsTopic: TopicQuestion[] }) => {
          return value.topicId === parseInt(props.match.params.chapterId)
        }

      ),
    shallowEqual
  );
  const isLoading = useSelector(
    (state: ApplicationState) => state.questionsChapters.isLoading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.match);
    dispatch(actionCreators.getQuestionsByChapter(parseInt(props.match.params.chapterId)));
  }, [dispatch, props.match, props.match.params.chapterId]);


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