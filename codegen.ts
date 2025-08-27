import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/api/graphql/generated/graphqlzero/types.ts": {
      schema: "https://graphqlzero.almansi.me/api",
      documents: "src/api/graphql/operations/graphqlzero/**/*.graphql",
      plugins: ["typescript", "typescript-operations"],
    },
    "src/api/graphql/generated/graphqlzero/hooks.ts": {
      schema: "https://graphqlzero.almansi.me/api",
      documents: "src/api/graphql/operations/graphqlzero/**/*.graphql",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
  
      config: {
        // fetcher: "@/api/graphql/client/graphqlFetcherWithSignal#graphqlFetcherWithSignal",
        fetcher: "@/api/graphql/client/graphqlFetcher#graphqlFetcher",
        reactQueryVersion: 'v5',
        legacyMode: false,
        useTypeImports: false,
        addQueryCall: true,
        exposeQueryKeys: true,
      },
    },


    "src/api/graphql/generated/countries/hooks.ts": {
      schema: "https://countries.trevorblades.com",
      documents: "src/api/graphql/operations/countries/**/*.graphql",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
  
      config: {
        fetcher: "@/api/graphql/client/graphqlFetcherCountries#graphqlFetcherCountries",
        reactQueryVersion: 'v5',
        legacyMode: false,
        useTypeImports: false,
        addQueryCall: true,
        exposeQueryKeys: true,
      },
    },
  },
};

export default config;
