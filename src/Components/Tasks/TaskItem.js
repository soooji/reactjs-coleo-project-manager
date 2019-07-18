import React from 'react';
import TickIcon from '@material-ui/icons/Check'
import { shortEnglishHumanizer } from '../../APIs/Utility';

export default function TaskItem(props){
    return (
        <div className="task-item">
            <div className="task-progress" style={{width: `${props.task.progress}%`}}></div>
            <div className="task-container">
                <div className="task-title">
                    {props.task.title}
                </div>
                <div className="task-project">
                    {props.task.project}
                </div>
                <div className="task-duration">
                    {shortEnglishHumanizer(props.task.duration)}
                </div>
                <div className="task-action">
                    {
                        props.task.status !== "completed" ?
                        <div className="task-action-button noselect normal-button" onClick={props.task.doAvailableAction}>
                            {props.task.getAvailableActionText()}
                        </div>
                        : 
                        <div className="task-action-button noselect">
                            <TickIcon className="check-icon"/>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}