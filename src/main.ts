import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './modules/interceptor/logging.interceptor';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from uploads directory
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Enable CORS
  app.enableCors({
    // origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
    origin: true,
  });

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new LoggingInterceptor())

  const port = process.env.PORT || 3001;
  const baseUrl = process.env.BASE_URL || `http://localhost:${port}/graphql`;
  await app.listen(port);
  console.log(`🚀 Server is running on ${baseUrl}`);
  logger.debug('App is listening on port ' + port);
}
bootstrap();
