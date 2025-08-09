export const graphqlFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const res = await fetch('https://graphqlzero.almansi.me/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    return json.data;
  };
};

export type Fetcher = typeof graphqlFetcher;