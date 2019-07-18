import React from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Form/Select';
import { DatePicker } from '../../Components/Form/DatePicker';

function Tasks() {
  return (
    <LargeCard className="card-style">
        <div className="card-head-bar">
            <HeadTitle className="white-text-on-dark" text="Tasks"/>
            <div className="card-head-actions">
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
            </div>
        </div>
    </LargeCard>
  );
}

export default Tasks;