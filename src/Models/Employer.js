import { Model } from "objectmodel"

const EmployerModel = {
    id: Number,
    first_name: [String],
    last_name:[String],
    phone: [String],
    email: [String],
    telegram_id: [String],

    // projects: [ArrayModel(Project)],
    // pay_ins: [ArrayModel(PayIn)] //TODO: is it needed?
}

export class Employer extends Model(EmployerModel){

}