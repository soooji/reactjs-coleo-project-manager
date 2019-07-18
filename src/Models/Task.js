import { Model } from "objectmodel"

const TaskModel = {
    id: Number,
    title: String,
    project: String,
    duration: Number, //in milisecond
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
                return 'completed'
            default:
                return 'No action available'
        }
    }
    doAvailableAction() {
        alert("Action performed!")
    }
}