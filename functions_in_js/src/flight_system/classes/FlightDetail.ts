import {FlightDetailInterface, FlightDetailType} from "../interfaces_types";
import {FlightStatus} from "../enums";

export class FlightDetail implements FlightDetailInterface {
    readonly #_flightId: string;
    readonly #_from: string;
    #_status: FlightStatus;

    constructor({flightId, from, status}: FlightDetailType) {
        const invalidParameters: string[] = [];
        this.validateArguments({flightId, from, invalidParameters});
        if (invalidParameters.length > 0) {
            const errorMessage = this.getInvalidParametersMessage(invalidParameters);
            throw new Error(errorMessage);
        }
        this.#_flightId = flightId.trim();
        this.#_from = from.trim();
        this.#_status = status;
    }

    set status(value: FlightStatus) {
        if (!this.#isParameterValid(value)) {
            throw new Error("Invalid value passed. status cannot be set to an invalid value");
        } else {
            this.#_status = value;
        }
    }

    public flightDetails = () => ({
        flightId: this.#_flightId,
        from: this.#_from,
        status: this.#_status
    });

    private readonly validateArguments
        = ({flightId, from, invalidParameters}: { flightId: string, from: string, invalidParameters: string[] }) => {
        if (!this.#isParameterValid(flightId)) {
            invalidParameters.push("flightId");
        }
        if (!this.#isParameterValid(from)) {
            invalidParameters.push("from");
        }
    }
    private readonly getInvalidParametersMessage = (invalidParameters: string[]) => {
        let errorMessage: string = "The following parameters have invalid arguments:\\n"
        return `${errorMessage}${invalidParameters.join(",")}`;
    }

    readonly #isParameterValid = (value: string): boolean => {
        return !value || value.trim().length === 0;
    }
}