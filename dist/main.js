"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const app_module_1 = require("./app.module");
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
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Server is running on http://localhost:${port}/graphql`);
    logger.debug('App is listening on port ' + port);
}
bootstrap();
//# sourceMappingURL=main.js.map