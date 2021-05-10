import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/topics";
import "./Topics.css";
import { ApplicationState } from "../../reducers/index";
import List from "../List/List";
import Loader from "../Global/Loader/Loader";

export default function Topics(props: any) {
  const topics = useSelector(
    (state: ApplicationState) => state.topics.topics,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: ApplicationState) => state.topics.isLoading
  );
  const [isForControl, setIsForControl] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsForControl(props.location?.pathname !== '/tests-topics');
    dispatch(actionCreators.getTopics());
  }, [dispatch, props]);

  if (isLoading) {
    return <Loader></Loader>;
  } else {
    return <List topics={topics} link={isForControl ? "/control-topics/" : "/tests-topics/"}></List>;
  }
}
