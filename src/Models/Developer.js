import { Model } from "objectmodel"
import { BCHDateTime } from './BCHDateTime';

const DeveloperModel = {
    id: Number,
    user: String, //TODO: what's user model?
    date_joined: BCHDateTime
}

export class Developer extends Model(DeveloperModel){

}