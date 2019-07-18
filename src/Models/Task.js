import { Model } from "objectmodel"
import { shortEnglishHumanizer } from "../APIs/Utility";


const TaskModel = {
    id: Number,
    title: String,
    project: String,
    duration: Number, //in milisecond
    status: ["notStarted","started","paused","completed"],
    progress: Number
}

export class Task extends Model(TaskModel){
    getHumanizedDuration() {
        return shortEnglishHumanizer(this.duration)
    }
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