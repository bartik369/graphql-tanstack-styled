import { useQuery } from '@tanstack/react-query';
import { graphqlFetcherCountries } from '@/api/graphql/client/graphqlFetcherCountries';
export const GetCountriesDocument = `
    query GetCountries {
  countries {
    awsRegion
    capital
    code
    continent {
      name
      code
    }
    currency
    emojiU
    languages {
      name
    }
    native
    phone
  }
}
    `;
export const useGetCountriesQuery = (variables, options) => {
    return useQuery({
        queryKey: variables === undefined ? ['GetCountries'] : ['GetCountries', variables],
        queryFn: graphqlFetcherCountries(GetCountriesDocument, variables),
        ...options
    });
};
useGetCountriesQuery.getKey = (variables) => variables === undefined ? ['GetCountries'] : ['GetCountries', variables];
