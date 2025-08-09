export type UnknownError = unknown;

type GraphQLError = {
    graphQLErrors?: { 
      message: string;
      extensions?: {
        message?: string;
      }
    } [];
}
type AxiosError = {
    response?:{
        data?: {
            message?: string;
        }
    }
}
function isGraphQLError(error: UnknownError): error is GraphQLError {
    return (
        typeof error === 'object' 
        && error !== null 
        && "graphQLErrors" in error 
        && Array.isArray((error as any).graphQLErrors)
    )
}
function isAxiosError(error: UnknownError): error is AxiosError {
    return (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response === "object" &&
        (error as any).response !== null &&
        "data" in (error as any).response
      );
}
export function getErrorMessage(error: UnknownError): string {
    if (isGraphQLError(error)) {
      const gqlError = error.graphQLErrors?.[0];
      return (
        gqlError?.extensions?.message ||
        gqlError?.message  ||
        "Unknown GraphQL error"
      )
    }
  
    if (isAxiosError(error)) {
      return error.response?.data?.message || "Unknown API error";
    }
  
    if (error instanceof Error) {
      return error.message;
    }
  
    return "Something went wrong";
  }
  