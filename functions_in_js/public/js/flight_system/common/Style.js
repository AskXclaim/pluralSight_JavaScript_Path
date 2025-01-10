import { FlightStatus } from "../enums";
export class Style {
    static GetColorBasedOnStatus(status) {
        if (status === FlightStatus.OnTime)
            return "lightgreen";
        if (status === FlightStatus.Delayed)
            return "yellow";
        if (status === FlightStatus.Cancelled)
            return "red";
        return "lightgreen";
    }
}
