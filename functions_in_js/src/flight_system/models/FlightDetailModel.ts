import {FlightStatus} from "../enums";
import {FlightDetailType} from "../interfaces_types";

export class FlightDetailModel implements FlightDetailType {
    constructor(public flightId: string, public from: string, public status: FlightStatus) {
    }

}