import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../reducers";
import { actionCreators } from "../../../actions/test";

type TimerType = NodeJS.Timeout | null;

export default function Timer() {
  const startDate = useSelector(
    (state: ApplicationState) => state.test.dateStart
  );
  const dispatch = useDispatch();
  const endDate = useSelector((state: ApplicationState) => state.test.dateEnd);
  const remainingTime = useMemo(() => {
    if (endDate && startDate)
      return new Date(endDate.getTime() - startDate.getTime());
    else return null;
  }, [endDate, startDate]);

  useEffect(() => {
    let newTimerId: TimerType = null;
    if (!!endDate) {
      newTimerId = setTimeout(() => {
        dispatch(
          actionCreators.setTestEndDate(new Date(endDate.getTime() - 1000))
        );
      }, 1000);
    }
    return () => {
      clearTimeout(newTimerId!);
    };
  }, [dispatch, endDate]);

  return (
    <div>
      {remainingTime && (
        <h5>
          {`${remainingTime.getMinutes()} : ${remainingTime.getSeconds()}`}
        </h5>
      )}
    </div>
  );
}
