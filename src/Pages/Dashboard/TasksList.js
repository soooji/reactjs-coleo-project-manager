import React from 'react';
import TaskItem from '../../Components/Tasks/TaskItem';
import { Task } from '../../Models/Task';
export default function(props){
    return (
        <div>
            <div className="tasks-title-bar noselect">
                <div class="title">Title</div>
                <div class="project">Project</div>
                <div class="duration">Duration</div>
                <div class="action">Action</div>
            </div>

            <TaskItem task={new Task({id:0,title:'Landing Page',project:'LuckyHouse',duration:3600000,status:"completed",progress:100})}/>
            <TaskItem task={new Task({id:0,title:'Process Research',project:'Parkners',duration:4600000,status:"started",progress:45})}/>
        </div>
    )
}