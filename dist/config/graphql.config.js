"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlConfig = void 0;
const path_1 = require("path");
exports.graphqlConfig = {
    typePaths: [
        (0, path_1.join)(process.cwd(), 'src/common/**/*.graphql'),
        (0, path_1.join)(process.cwd(), 'src/graphql/**/*.graphql'),
        (0, path_1.join)(process.cwd(), 'src/modules/**/*.graphql'),
    ],
    definitions: {
        path: (0, path_1.join)(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
        emitTypenameField: true,
    },
    playground: true,
    context: ({ req, res }) => ({ req, res }),
    formatError: (error) => {
        return {
            message: error.message,
            code: error.extensions?.code,
            path: error.path,
        };
    },
    csrfPrevention: false,
};
//# sourceMappingURL=graphql.config.js.map