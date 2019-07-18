import { Model } from "objectmodel"

const TaskModel = {
    id: Number,
    title: String,
    project: String,
    duration: Number, //in minutes
    status: ["notStarted","started","paused","completed"],
    progress: Number
}

export class Task extends Model(TaskModel){
    getAvailableActionText() {
        switch (this.status) {
            case 'notStarted':
            case 'paused':
                return 'Start'
            case 'started':
                return 'Done'
            case 'completed':
                return 'Done'
            default:
                return 'No action available'
        }
    }
}