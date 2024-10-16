export const exceptionMsger = (err: unknown) => {
    if (err instanceof Error) {
        return { exceptionMessage: err.message };
    } else if (typeof err === 'string') {
        return { exceptionMessage: err };
    }
    return { exceptionMessage: 'An unexpected error occurred' };
};
