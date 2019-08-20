import { Model } from "objectmodel"
import { SectionTarget } from './SectionTarget';
import { BCHDateTime } from './BCHDateTime';

const TaskModel = {
    id: Number,
    title: String,
    description: [String],
    point: [Number],
    length: [Number],
    date_start: [BCHDateTime],
    date_end: [BCHDateTime],
    date_accepted: [BCHDateTime],

    section_target: SectionTarget,
    // eslint-disable-next-line no-use-before-define
    // required_tasks: [ArrayModel(Task)],
    // task_events: [ArrayModel(TaskEvent)],
}

export class Task extends Model(TaskModel){
    
}