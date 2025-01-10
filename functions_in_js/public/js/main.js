import { FlightDetail, FlightEntry } from "./flight_system/classes";
import { FlightStatus } from "./flight_system/enums";
FlightEntry.AddArrivalToArrivalBoard("arrivalList", new FlightDetail("nx2143", "Lagos", FlightStatus.OnTime));
FlightEntry.AddArrivalToArrivalBoard("arrivalList", new FlightDetail("tk345", "Tokoo", FlightStatus.Delayed));
FlightEntry.AddArrivalToArrivalBoard("arrivalList", new FlightDetail("ty9889", "Hippo", FlightStatus.Cancelled));
