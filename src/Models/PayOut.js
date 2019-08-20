import { Model } from "objectmodel"
import { BCHDateTime } from './BCHDateTime';

const PayOutModel = {
    id: Number,
    title: String,
    description: [String],
    date_payed: BCHDateTime,
    amount: Number
}

export class PayOut extends Model(PayOutModel){

}