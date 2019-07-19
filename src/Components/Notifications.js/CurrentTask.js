import React from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import PauseIcon from '@material-ui/icons/Pause'
import 'react-circular-progressbar/dist/styles.css';
function CurrentTask(props) {
  return (
        <div className="current-task-background">
            <div className="current-task-item">
                
                <div className="task-progress-box">
                    <div className="task-progress-action">
                        <PauseIcon className="icon"/>
                    </div>
                    <CircularProgressbar
                        className="task-circular-progress"
                        value={50}
                        text={""}
                        strokeWidth={13}
                        styles={buildStyles({
                            rotation: 1.5,
                            strokeLinecap: 'butt',
                            textSize: '1.5rem',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(255, 255, 255, 1)`,
                            textColor: 'white',
                            trailColor: 'rgba(255,255,255,.2)',
                            backgroundColor: '#3e98c7',
                        })}
                    />
                </div>


                <div className="current-task-details">
                    <div className="current-task-project-name">
                        Parkners
                    </div>
                    <div className="current-task-name">
                        Persona Research
                    </div>
                    <div className="current-task-timestamp">
                        12:00 - 13:45
                    </div>
                </div>

            </div>
        </div>
  );
}

export default CurrentTask;
