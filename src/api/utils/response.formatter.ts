import { ICommonApiRes } from '../interfaces';

export const createResponse = <T>(
    hasError: boolean,
    statusMessage: string,
    data?: T,
    error?: any,
): ICommonApiRes<T> => {
    return {
        hasError,
        statusMessage,
        data,
        error,
    };
};
