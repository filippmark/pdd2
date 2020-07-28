import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import List from "../List/List";
import { ApplicationState } from "../../reducers";
import {actionCreators} from "../../actions/chapters";

export default function Chapters() {
  const chapters = useSelector(
    (state: ApplicationState) => state.chapters.chapters,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getChapters());
  }, [dispatch])

  return <List topics={chapters} link={"/tests-chapters/"}></List>;
}
