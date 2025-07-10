import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://graphqlzero.almansi.me/api',
  documents: 'src/api/graphql/operations/**/*.graphql',
  generates: {
    'src/api/graphql/generated/hooks.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: '../client/graphqlFetcher#graphqlFetcher',
        reactQueryVersion: 'v5',
        legacyMode: false,
        useTypeImports: false,
      },
    },
  },
};

export default config;
