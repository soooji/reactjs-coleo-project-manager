import { Model } from "objectmodel"

const ProjectModel = {
    id: Number,
    title: String,
    progress: Number,
    currentSection: String,
    nextDeadlineDuration: Number,
    logo: [String] //optional
}

export class Project extends Model(ProjectModel){

}