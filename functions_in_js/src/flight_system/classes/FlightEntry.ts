import {Style, Validation} from "../common";
import {FlightDetailType} from "../interfaces_types";
import {FlightDetail} from "./";

export class FlightEntry {

    public static AddArrivalToArrivalBoard(parentId: string, data: FlightDetail) {
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

    private static readonly getConstructedColumn = (data: FlightDetailType, key: string) => {
        const newColumn = this.creatHtmlElementByType("td");
        newColumn.innerText = data[key as keyof FlightDetailType];
        if (key === "status") {
            newColumn.style.backgroundColor = Style.getColorBasedOnStatus(data.status)
        }
        return newColumn;
    }

    private static readonly getNewRow = (data: FlightDetailType) => {
        const newRow = this.creatHtmlElementByType("tr");
        for (let key in data) {
            const newColumn = this.getConstructedColumn(data, key);
            newRow.appendChild(newColumn);
        }
        return newRow;
    }
    private static readonly creatHtmlElementByType = (tagType: string) => document.createElement(tagType);

    private static readonly getHtmlElementById = (elementId: string) => document.getElementById(elementId);

}