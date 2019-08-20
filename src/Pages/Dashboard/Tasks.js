import React from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Form/Select';
import { DatePicker } from '../../Components/Form/DatePicker';
import TaskItem from '../../Components/Tasks/TaskItem';
import { Task } from '../../Models/Task';

function Tasks() {
  return (
    <LargeCard
        className="tasks-list-card"
        title={<HeadTitle className="white-text-on-dark" text="Tasks"/>}
        actions={<>
            <DatePicker/>
            <Select
                options={[
                    {id: 0,title: 'All Projects'},
                    {id: 1,title: 'Parkners'},
                    {id: 2,title: 'LuckyHouse'},
                ]}
                arrow={true}
                selectedOption={0}
            />
        </>}
    >
            <div className="tasks-title-bar noselect">
                <div className="title">Title</div>
                <div className="project">Project</div>
                <div className="duration">Duration</div>
                <div className="action">Action</div>
            </div>

            {/* <TaskItem task={new Task({id:0,title:'Landing Page',project:'LuckyHouse',duration:3600000,status:"completed",progress:100})}/> */}
            {/* <TaskItem task={new Task({id:0,title:'Process Research',project:'Parkners',duration:4600000,status:"started",progress:45})}/> */}
    </LargeCard>
  );
}

export default Tasks;