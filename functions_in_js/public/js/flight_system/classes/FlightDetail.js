var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FlightDetail__flightId, _FlightDetail__from, _FlightDetail__status;
import { Validation } from "../common";
export class FlightDetail {
    constructor(flightId, from, status) {
        _FlightDetail__flightId.set(this, void 0);
        _FlightDetail__from.set(this, void 0);
        _FlightDetail__status.set(this, void 0);
        this.flightDetails = () => ({
            flightId: __classPrivateFieldGet(this, _FlightDetail__flightId, "f"),
            from: __classPrivateFieldGet(this, _FlightDetail__from, "f"),
            status: __classPrivateFieldGet(this, _FlightDetail__status, "f")
        });
        this.validateArguments = ({ flightId, from, invalidParameters }) => {
            if (!Validation.doesStringHaveValue(flightId)) {
                invalidParameters.push("flightId");
            }
            if (!Validation.doesStringHaveValue(from)) {
                invalidParameters.push("from");
            }
        };
        this.getInvalidParametersMessage = (invalidParameters) => {
            let errorMessage = "The following parameters have invalid arguments:\\n";
            return `${errorMessage}${invalidParameters.join(",")}`;
        };
        const invalidParameters = [];
        this.validateArguments({ flightId, from, invalidParameters });
        if (invalidParameters.length > 0) {
            const errorMessage = this.getInvalidParametersMessage(invalidParameters);
            throw new Error(errorMessage);
        }
        __classPrivateFieldSet(this, _FlightDetail__flightId, flightId.trim(), "f");
        __classPrivateFieldSet(this, _FlightDetail__from, from.trim(), "f");
        __classPrivateFieldSet(this, _FlightDetail__status, status, "f");
    }
    get flightId() {
        return __classPrivateFieldGet(this, _FlightDetail__flightId, "f");
    }
    get from() {
        return __classPrivateFieldGet(this, _FlightDetail__from, "f");
    }
    get status() {
        return __classPrivateFieldGet(this, _FlightDetail__status, "f");
    }
    set status(value) {
        __classPrivateFieldSet(this, _FlightDetail__status, value, "f");
    }
}
_FlightDetail__flightId = new WeakMap(), _FlightDetail__from = new WeakMap(), _FlightDetail__status = new WeakMap();
