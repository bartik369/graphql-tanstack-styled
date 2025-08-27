export function isGraphQLError(error) {
    return (typeof error === 'object' &&
        error != null &&
        'graphQLErrors' in error &&
        Array.isArray(error.graphQLErrors));
}
export function isAxiosError(error) {
    return (typeof error === 'object' &&
        error != null &&
        (error.isAxiosError === true ||
            error.response != null));
}
export function isFetchError(error) {
    return (typeof error === 'object' &&
        error != null &&
        ('response' in error || 'name' in error));
}
export function mapHttpStatusToMessage(status) {
    if (!status)
        return 'Произошла ошибка';
    if (status === 401)
        return 'Неверные учетные данные';
    if (status === 403)
        return 'Доступ запрещен';
    if (status >= 500)
        return 'Сервис временно недоступен. Уже устраняем ошибку.';
    return 'Произошла ошибка';
}
export function errorHandler(error) {
    if (isGraphQLError(error)) {
        const gqlError = error.graphQLErrors?.[0];
        const errorCode = gqlError?.extensions?.code;
        const devMessage = gqlError?.extensions?.message || gqlError?.message || error.message;
        return {
            userMessage: '',
            devMessage: devMessage || 'Unknown GraphQL error',
            type: 'GRAPHQL',
            code: errorCode,
            originalError: error,
        };
    }
    if (isFetchError(error)) {
        const status = error.response?.status;
        if (!status) {
            return {
                userMessage: 'Проблемы с сетью.',
                devMessage: error.message || 'Network or aborted error',
                type: 'NETWORK',
                originalError: error,
            };
        }
        return {
            userMessage: mapHttpStatusToMessage(status),
            devMessage: error.response?.body?.message ||
                error.response?.statusText ||
                error.message,
            type: 'FETCH',
            code: `HTTP_${status}`,
            originalError: error,
        };
    }
    if (isAxiosError(error)) {
        const status = error.response?.status;
        if (error.code === 'ERR_NETWORK' || !error.response) {
            return {
                userMessage: 'Проблемы с сетью.',
                devMessage: error.message,
                type: 'NETWORK',
                originalError: error,
            };
        }
        const serverMessage = error.response.data?.message || error.response.statusText;
        return {
            userMessage: mapHttpStatusToMessage(status),
            devMessage: serverMessage || error.message,
            type: 'AXIOS',
            code: error.response.data?.code || `HTTP_${status}`,
            originalError: error,
        };
    }
    if (error instanceof Error) {
        return {
            userMessage: 'Произошла неизвестная ошибка',
            devMessage: error.message,
            type: 'UNKNOWN',
            originalError: error,
        };
    }
    return {
        userMessage: '',
        type: 'UNKNOWN',
        originalError: error,
    };
}
