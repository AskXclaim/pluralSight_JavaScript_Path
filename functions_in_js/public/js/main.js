import { FlightDetail, FlightEntry } from "./flight_system/classes";
import { FlightStatus } from "./flight_system/enums";
function displayFlights(boardId, flightDetails) {
    flightDetails.forEach(fd => {
        FlightEntry.AddArrivalToArrivalBoard(boardId, fd);
    });
}
const getCurrentLocalTime = () => new Date().toLocaleTimeString();
const displayCurrentLocalTime = (displayTimeElementId) => {
    const displayTimeElement = document.getElementById(displayTimeElementId);
    if (displayTimeElement) {
        displayTimeElement.innerText = getCurrentLocalTime();
    }
};
const flightDetails = [
    new FlightDetail("tk345", "Tokoo", FlightStatus.Delayed),
    new FlightDetail("nx2143", "Lagos", FlightStatus.OnTime),
    new FlightDetail("ty9889", "Hippo", FlightStatus.Cancelled)
];
displayCurrentLocalTime("currentTime");
setInterval(() => displayCurrentLocalTime("currentTime"), 1000);
displayFlights("arrivalList", flightDetails);
