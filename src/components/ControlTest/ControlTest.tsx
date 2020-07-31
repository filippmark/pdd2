import React, { useEffect } from "react";
import "./ControlTest.css";
import Loader from "../Global/Loader/Loader";
import Test from "../Test/Test";
import { actionCreators } from "../../actions/test";
import { useDispatch, useSelector } from "react-redux";

export default function ControlTest() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.setControl());
  }, [dispatch]);

  if (true) {
    return <Loader></Loader>;
  } else {
    return (
      <React.Fragment>
        <Test questions={{ questionsTopic: [], topicId: 1 }}></Test>
      </React.Fragment>
    );
  }
}
