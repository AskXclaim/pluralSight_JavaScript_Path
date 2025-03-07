import {FlightStatus} from "../enums";
import {Validation} from "../common";
import {FlightDetailInterface, FlightDetailType} from "../interfaces_types";

export class FlightDetail implements FlightDetailType, FlightDetailInterface {
    readonly #_flightId: string;
    readonly #_from: string;
    #_status: FlightStatus;

    constructor(flightId: string, from: string, status: FlightStatus) {
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

    get flightId() {
        return this.#_flightId;
    }

    get from() {
        return this.#_from;
    }

    get status() {
        return this.#_status;
    }
    set status(value: FlightStatus) {
            this.#_status = value;
    }

    public flightDetails = () => ({
        flightId: this.#_flightId,
        from: this.#_from,
        status: this.#_status
    });

    private readonly validateArguments
        = ({flightId, from, invalidParameters}: { flightId: string, from: string, invalidParameters: string[] }) => {
        if (!Validation.doesStringHaveValue(flightId)) {
            invalidParameters.push("flightId");
        }
        if (!Validation.doesStringHaveValue(from)) {
            invalidParameters.push("from");
        }
    }
    private readonly getInvalidParametersMessage = (invalidParameters: string[]) => {
        let errorMessage: string = "The following parameters have invalid arguments:\\n"
        return `${errorMessage}${invalidParameters.join(",")}`;
    }
}