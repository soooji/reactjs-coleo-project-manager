import React from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Form/Select';
import { DatePicker } from '../../Components/Form/DatePicker';
import TasksList from './TasksList';

function Tasks() {
  return (
    <LargeCard
        className="card-style"
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
        <TasksList/>
    </LargeCard>
  );
}

export default Tasks;