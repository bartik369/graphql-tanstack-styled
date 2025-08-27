import { graphqlFetcher } from "./graphqlFetcher";

export const graphqlFetcherWithSignal = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => async ({ signal }: { signal?: AbortSignal }): Promise<TData> => {
  return graphqlFetcher<TData, TVariables>(query, variables)({ signal });
};