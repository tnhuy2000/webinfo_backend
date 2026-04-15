"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./modules/interceptor/logging.interceptor");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });
    app.enableCors({
        credentials: true,
        origin: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: false,
        transform: true,
    }));
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    const port = process.env.PORT || 3001;
    const baseUrl = process.env.BASE_URL || `http://localhost:${port}/graphql`;
    await app.listen(port);
    console.log(`🚀 Server is running on ${baseUrl}`);
    logger.debug('App is listening on port ' + port);
}
bootstrap();
//# sourceMappingURL=main.js.map