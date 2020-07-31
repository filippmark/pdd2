import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { actionCreators } from "../../actions/topics";
import "./Topics.css";
import { ApplicationState } from "../../reducers/index";
import List from "../List/List";
import Loader from "../Global/Loader/Loader";

export default function Topics() {
  const topics = useSelector(
    (state: ApplicationState) => state.topics.topics,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: ApplicationState) => state.topics.isLoading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getTopics());
  }, [dispatch]);

  if (isLoading) {
    return <Loader></Loader>;
  } else {
    return <List topics={topics} link={"/tests-topics/"}></List>;
  }
}
