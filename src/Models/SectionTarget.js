import { Model,ArrayModel } from "objectmodel"
import { Section } from './Section';
import { Skill } from './Skill';

const SectionTargetModel = {
    id: Number,
    title: String,
    description: [String],
    sections: ArrayModel(Number),
    length: [Number],

    section: Section,
    needed_skill: Skill,
    // Tasks: [ArrayModel(Task)]
}

export class SectionTarget extends Model(SectionTargetModel){

}