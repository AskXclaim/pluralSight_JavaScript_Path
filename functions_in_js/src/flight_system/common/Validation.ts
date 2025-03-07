export class Validation {
    public static readonly doesStringHaveValue = (value: string): boolean => (
        value?.trim().length > 0);
}
