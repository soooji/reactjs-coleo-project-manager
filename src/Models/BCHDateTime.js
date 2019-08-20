import { Model } from "objectmodel"

const BCHDateTimeModel = {
    year: [Number],
    month: [Number],
    day: [Number],
    hour: [Number],
    minute: [Number],
    second: [Number],
    microsecond: [Number],
    day_name: [String],
    month_name: [String]
}

export class BCHDateTime extends Model(BCHDateTimeModel){

}