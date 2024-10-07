export interface CommonApiResponse<T> {
    hasError: boolean;
    statusMessage: string;
    data?: T; // Optional, as data may not be present in case of an error
    error?: any; // Optional, for error details
}
