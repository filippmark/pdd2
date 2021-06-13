import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ApplicationState } from "../../reducers";
import { actionCreators } from "../../actions/passedControls";
import Loader from "../Global/Loader/Loader";
import { PassedControl } from "../../types/topic";
import List from "../List/List";

export default function PassedControls(props: any) {
  const passedControls: PassedControl[] = useSelector(
    (state: ApplicationState) => state.passedControls.questions,
    shallowEqual
  );
  const isLoading = useSelector(
    (state: ApplicationState) => state.passedControls.isLoading,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getPassedQuestions());
  }, [dispatch])

  if (isLoading) {
    return (<Loader></Loader>)
  } else {
    return (<List topics={passedControls} link={"/passed-control/"} ></List>);
  }
}
