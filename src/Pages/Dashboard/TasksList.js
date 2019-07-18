import React from 'react';
import TaskItem from '../../Components/Tasks/TaskItem';
import { Task } from '../../Models/Task';
export default function(props){
    const sampleTask = new Task({id:0,title:'Process Research',project:'LuckyHouse',duration:30,status:"started",progress:45});
    return (
        <div>
            <TaskItem task={sampleTask}/>
        </div>
    )
}