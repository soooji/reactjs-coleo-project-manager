import { Model } from "objectmodel"
import { BCHDateTime } from './BCHDateTime';

const PayInModel = {
    id: Number,
    title: String,
    description: [String],
    date_payed: BCHDateTime,
    amount: Number,

    // payed_by: Employer,
    // section: Section
}

export class PayIn extends Model(PayInModel){

}