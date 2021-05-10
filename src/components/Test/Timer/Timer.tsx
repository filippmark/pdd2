import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../reducers";


export default function Timer() {
  const startDate = useSelector(
    (state: ApplicationState) => state.test.dateStart
  );
  const dispatch = useDispatch();
  const endDate = useSelector((state: ApplicationState) => state.test.dateEnd);
  const remainingTime = useMemo(() => {
    console.log(endDate);
    if (endDate && startDate)
      return new Date(endDate.getTime() - startDate.getTime());
    else return null;
  }, [endDate, startDate]);

  useEffect(() => {
  }, [dispatch, endDate]);

  return (
    <div className="timer">
      {remainingTime && (
        <h5>
          {`${remainingTime.getMinutes()} : ${remainingTime.getSeconds()}`}
        </h5>
      )}
    </div>
  );
}
