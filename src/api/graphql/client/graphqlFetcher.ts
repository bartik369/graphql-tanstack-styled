export const graphqlFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const entries = Object.entries(variables ?? {});
    const fileEntries = entries.filter(([, value]) => value instanceof File) as [string, File][];

    if (fileEntries.length > 0) {
      const formData = new FormData();
      const variablesWithoutFiles = Object.fromEntries(
        entries.map(([key, value]) => [key, value instanceof File ? null : value])
      );

      formData.append('operations', JSON.stringify({ query, variables: variablesWithoutFiles }));

      const map = Object.fromEntries(
        fileEntries.map(([name,], i) => [String(i), [`variables.${name}`]])
      ) as Record<string, string[]>;
      formData.append('map', JSON.stringify(map));

      // Add files
      fileEntries.forEach(([, file], i) => {
        formData.append(String(i), file);
      });

      const res = await fetch('https://graphqlzero.almansi.me/api', {
        method: 'POST',
        // credentials: 'include', включить  если есть авторизация
        body: formData,
      });
      return handleResponse<TData>(res);
    }

    // Without files, regular JSON
    const res = await fetch('https://graphqlzero.almansi.me/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include', включить  если есть авторизация
      body: JSON.stringify({ query, variables }),
    });
    return handleResponse<TData>(res);
  };
};

async function handleResponse<TData>(res: Response): Promise<TData> {
  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  return json.data;
}
