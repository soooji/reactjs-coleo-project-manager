import React from 'react';

export default function TaskItem(props){
    return (
        <div className="task-item" style={{background: 'white'}}>
            <div className="task-progress" style={{width: `${props.progress}%`}}></div>
            <div className="task-container">
                <div className="task-title">
                    {props.task.title}
                </div>
                <div className="task-project">
                    {props.task.project}
                </div>
                <div className="task-duration">
                    {props.task.duration} Minutes
                </div>
                <div className="task-action">
                    <div className="task-action-button noselect">{props.task.getAvailableActionText()}</div>
                </div>
            </div>
        </div>
    )
}