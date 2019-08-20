import { Model,ArrayModel } from "objectmodel"
import { Project } from './Project';
import { PayIn } from './PayIn';
import { BCHDateTime } from './BCHDateTime';

const SectionModel = {
    id: Number,
    title: String,
    description: [String],
    sections: ArrayModel(Number),
    length: [Number],
    date_start: [BCHDateTime],
    date_end: [BCHDateTime],

    project: Project, 
    section_pay_ins: [ArrayModel(PayIn)],
    // targets: [ArrayModel(SectionTarget)]
}

export class Section extends Model(SectionModel){

}