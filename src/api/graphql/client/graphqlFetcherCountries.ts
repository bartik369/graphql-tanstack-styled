export const graphqlFetcherCountries = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const res = await fetch("https://countries.trevorblades.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const error = json.errors[0];
      const message = error?.extensions?.message 
      || error?.message 
      || "Unknown GraphQL error";
    
      const customError = new Error(message) as Error & {
        graphQLErrors?: typeof json.errors;
        extensions?: typeof error.extensions;
      };
    
      customError.graphQLErrors = json.errors;
      customError.extensions = error?.extensions;
    
      throw customError;
    }
    

    return json.data;
  };
};

export type Fetcher = typeof graphqlFetcherCountries;
