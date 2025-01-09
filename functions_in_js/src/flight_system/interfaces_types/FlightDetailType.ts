import {FlightStatus} from "../enums";

export interface FlightDetailType{
    flightId:string,
    from:string,
    status:FlightStatus
}