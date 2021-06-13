import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


export const Profile = (props: any) => {

    const history = useHistory();

    const navigateToHistory = () => {
        history.push('/passed-controls');
    }

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="pt-4 mx-auto" style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                    value={66}
                    text={`${66}%`}
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