import {FlightStatus} from "../enums";

export class Style{
    public static getColorBasedOnStatus(status: FlightStatus): string {
        if (status===FlightStatus.OnTime) return "lightgreen";
        if (status===FlightStatus.Delayed) return "yellow";
        if (status===FlightStatus.Cancelled) return "red";
        
        return "lightgreen"
    }
    
}