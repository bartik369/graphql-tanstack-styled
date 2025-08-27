export type GraphQLError = {
  graphQLErrors?: {
    message: string; // Основной текст ошибки (что пошло не так)
    extensions?: {
      // Тут дополнительная информация
      code?: string; // GraphQL-код ошибки
      message?: string; // Более точное описание ошибкт
    };
  }[];
  networkError?: unknown; // Ошибка на уровне сети(не бизнес логики)
  message?: string; // Общее сообщение об ошибке для UI или логов
};

// HTTP запрос >= 400
export type AxiosError = {
  code?: string; // ERR_NETWORK | ECONNABORTED | ERR_BAD_REQUEST и тд
  response?: {
    status?: number; // 4хx 5хx код ошибки
    statusText?: string; // Unauthorized | Not Found | Internal Server Error
    data?: {
      // body of answer
      message?: string; // Сообщение ошибки
      error?: string; // Ошибка
      code?: string; // Серверный код ошибки
    };
  };
  message?: string; // Сообщение ошибки сгенерированно самим
  isAxiosError?: boolean; // Определение ошибки
};

export type FetchError = {
  response?: {
    status?: number;
    statusText: string;
    body?: any;
  };
  message?: string; // Описание ошибки
  name?: string;
};

export type CommonError = {
  userMessage: string; // UI сообщение ошибки(модалка)
  devMessage?: string; // Ошибка для логов
  type: 'GRAPHQL' | 'AXIOS' | 'NETWORK' | 'FETCH' | 'UNKNOWN'; // Тип ошибки
  code?: string; // Код ошибки для бизнес-логики
  originalError: unknown; // Оригинальный объект ошибкт(не для UI)
};

export function isGraphQLError(error: unknown): error is GraphQLError {
  return (
    typeof error === 'object' &&
    error != null &&
    'graphQLErrors' in error &&
    Array.isArray((error as any).graphQLErrors)
  );
}
export function isAxiosError(error: unknown): error is AxiosError {
  return (
    typeof error === 'object' &&
    error != null &&
    ((error as AxiosError).isAxiosError === true ||
      (error as AxiosError).response != null)
  );
}

export function isFetchError(error: unknown): error is FetchError {
  return (
    typeof error === 'object' &&
    error != null &&
    ('response' in (error as any) || 'name' in (error as any))
  );
}

export function mapHttpStatusToMessage(status?: number): string {
  if (!status) return 'Произошла ошибка';
  if (status === 401) return 'Неверные учетные данные';
  if (status === 403) return 'Доступ запрещен';
  if (status >= 500) return 'Сервис временно недоступен. Уже устраняем ошибку.';
  return 'Произошла ошибка';
}

export function errorHandler(error: unknown): CommonError {
  if (isGraphQLError(error)) {
    const gqlError = error.graphQLErrors?.[0];
    const errorCode = gqlError?.extensions?.code;
    const devMessage =
      gqlError?.extensions?.message || gqlError?.message || error.message;

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
      devMessage:
        error.response?.body?.message ||
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
    const serverMessage =
      error.response.data?.message || error.response.statusText;

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
