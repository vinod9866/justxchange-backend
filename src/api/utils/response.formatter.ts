import { CommonApiResponse } from '../interfaces/common.api.response';

export const createResponse = <T>(
    hasError: boolean,
    statusMessage: string,
    data?: T,
    error?: any
): CommonApiResponse<T> => {
    return {
        hasError,
        statusMessage,
        data,
        error,
    };
};
