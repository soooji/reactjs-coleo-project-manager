import { Model } from "objectmodel"
import { BCHDateTime } from './BCHDateTime';

const EventModel = {
    id: Number,
    title: String,
    description: [String],
    date_start: BCHDateTime,
    date_end: BCHDateTime,
    date_end_repeat: [BCHDateTime],
    repeat_type: ["daily","weekly","monthly","yearly",undefined]
}

export class Event extends Model(EventModel){
}