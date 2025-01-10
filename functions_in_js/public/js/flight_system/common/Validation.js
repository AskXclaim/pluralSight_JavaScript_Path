export class Validation {
}
Validation.doesStringHaveValue = (value) => ((value === null || value === void 0 ? void 0 : value.trim().length) > 0);
