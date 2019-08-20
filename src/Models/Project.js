import { Model, ArrayModel } from "objectmodel"
import { Employer } from './Employer';
import { Developer } from './Developer';
import { BCHDateTime } from './BCHDateTime';

const ProjectModel = {
    id: Number,
    title: String,
    description: [String],
    date_start: [BCHDateTime],
    date_end: [BCHDateTime],
    price: [Number],

    employers: [ArrayModel(Employer)],
    manager: [Developer],
    // sections: [ArrayModel(Section)],
}

export class Project extends Model(ProjectModel){

}