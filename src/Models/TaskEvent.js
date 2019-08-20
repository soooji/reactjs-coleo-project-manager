import { Model } from "objectmodel"
import { Task } from './Task';

const TaskEventModel = {
    id: Number,
    task: Task,
    event: Event
}

export class TaskEvent extends Model(TaskEventModel){
}