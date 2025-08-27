import { graphqlFetcher } from "./graphqlFetcher";
export const graphqlFetcherWithSignal = (query, variables) => async ({ signal }) => {
    return graphqlFetcher(query, variables, signal)();
};
