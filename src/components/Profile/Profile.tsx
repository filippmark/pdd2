import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../reducers';
import Loader from '../Global/Loader/Loader';
import { useEffect } from 'react';
import { actionCreators } from '../../actions/profile';


export const Profile = (props: any) => {


    const percent = useSelector((state: ApplicationState) => state.profile.percent);
    const isLoading = useSelector((state: ApplicationState) => state.profile.isLoading);
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(actionCreators.getPercent());
    }, [dispatch])


    const navigateToHistory = () => {
        history.push('/passed-controls');
    }


    if (isLoading) {
        return <Loader></Loader>
    } else {
        return (
            <div className="d-flex flex-column justify-content-center">
                <div className="pt-4 mx-auto" style={{ width: 150, height: 150 }}>
                    <CircularProgressbar
                        value={percent}
                        text={`${percent}%`}
                        circleRatio={0.75}
                        styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#eee"
                        })}
                    />
                </div>
                <div className="mx-auto" style={{ width: 150, height: 200 }}>
                    <Button className="mt-5" color="primary" onClick={navigateToHistory}>
                        Просмотр истории
                    </Button>
                </div>
            </div>
        )
    }
}