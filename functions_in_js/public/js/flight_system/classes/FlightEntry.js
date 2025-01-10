var _a;
import { Style, Validation } from "../common";
export class FlightEntry {
    static AddArrivalToArrivalBoard(parentId, data) {
        if (!Validation.doesStringHaveValue(parentId)) {
            throw new Error("Invalid parentId provided. parentId cannot be an empty string");
        }
        console.log(data);
        const parent = this.getHtmlElementById(parentId);
        if (parent === null) {
            throw new Error(`No element found with id ${parentId}`);
        }
        const newRow = this.getNewRow(data.flightDetails());
        parent.appendChild(newRow);
    }
}
_a = FlightEntry;
FlightEntry.getConstructedColumn = (data, key) => {
    const newColumn = _a.creatHtmlElementByType("td");
    newColumn.innerText = data[key];
    if (key === "status") {
        newColumn.style.backgroundColor = Style.GetColorBasedOnStatus(data.status);
    }
    return newColumn;
};
FlightEntry.getNewRow = (data) => {
    const newRow = _a.creatHtmlElementByType("tr");
    for (let key in data) {
        const newColumn = _a.getConstructedColumn(data, key);
        newRow.appendChild(newColumn);
    }
    return newRow;
};
FlightEntry.creatHtmlElementByType = (tagType) => document.createElement(tagType);
FlightEntry.getHtmlElementById = (elementId) => document.getElementById(elementId);
