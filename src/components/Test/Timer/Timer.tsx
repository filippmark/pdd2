import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../reducers";
import { actionCreators } from '../../../actions/test';
import './Timer.css';

export default function Timer() {
  const startDate = useSelector(
    (state: ApplicationState) => state.test.dateStart
  );
  const dispatch = useDispatch();
  const endDate = useSelector((state: ApplicationState) => state.test.dateEnd);
  const remainingTime = useMemo(() => {
    if (endDate && startDate) {
      const time = endDate.getTime() - startDate.getTime();
      if (time <= 0) {
        dispatch(actionCreators.setTestFinished())
        return null;
      } else {
        return new Date(time);
      }
    }
    else return null;
  }, [dispatch, endDate, startDate]);

  const isTestFinished = useSelector(
    (state: ApplicationState) => state.test.isTestFinished
  );


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isTestFinished) {
        dispatch(actionCreators.setTestStartDate());
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [dispatch, isTestFinished]);

  useEffect(() => {
  }, [dispatch, endDate]);

  const formattNumber = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }

  if (remainingTime) {

    return (
      <div className="mx-3 timer">

        <h5>
          {`${formattNumber(remainingTime.getMinutes())} : ${formattNumber(remainingTime.getSeconds())}`}
        </h5>

      </div>
    );
  } else {
    return (
      <div className="mx-3 timer">
        <h5>
          00 : 00
          </h5>
      </div>
    )
  }
}
