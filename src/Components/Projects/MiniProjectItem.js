import React from 'react';
import { shortEnglishHumanizer } from '../../APIs/Utility';
export default function MiniProjectItem(props){
    return (
        <div className="mini-project-item">
            <div className="mini-project-left">
                <div className="project-logo" style={{backgroundImage:`url(${props.project.logo})`}}></div>
                <div className="project-details">
                    <div className="project-title">
                        {props.project.title}
                    </div>
                    <div className="project-detail-line">
                        <div className="title">Current Section:</div>
                        <div>
                            {props.project.currentSection}
                        </div>
                    </div>
                    <div className="project-detail-line">
                        <div className="title">Until Next Deadline:</div>
                        <div>
                            {shortEnglishHumanizer(props.project.nextDeadlineDuration)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mini-project-progress-percentage">
                {props.project.progress}%
            </div>
        </div>
    )
}