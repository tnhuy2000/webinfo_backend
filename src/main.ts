import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    // origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
    origin: true,
  });

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}/graphql`);
  logger.debug('App is listening on port ' + port);
}
bootstrap();
