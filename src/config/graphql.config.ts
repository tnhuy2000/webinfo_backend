import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

export const graphqlConfig: ApolloDriverConfig = {
  // Schema First: Load all .graphql files from modules
  typePaths: [
    join(process.cwd(), 'src/graphql/**/*.graphql'),
    join(process.cwd(), 'src/modules/**/*.graphql'),
  ],

  // Generate TypeScript types from schema
  definitions: {
    path: join(process.cwd(), 'src/graphql.schema.ts'),
    outputAs: 'class',
    emitTypenameField: true,
  },

  playground: true,
  context: ({ req, res }: any) => ({ req, res }),
  formatError: (error: any) => {
    return {
      message: error.message,
      code: error.extensions?.code,
      path: error.path,
    };
  },
  csrfPrevention: false,
};
