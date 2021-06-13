import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'reactstrap';

export const Profile = (props: any) => {
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
            <div className="mx-auto"  style={{ width: 150, height: 200}}>
                <Button className="mt-5" color="primary">
                    Просмотр истории
                </Button>
            </div>
        </div>
    )
}