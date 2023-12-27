import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      //delete invalid request info
      forbidNonWhitelisted: true,
      //error when request is not valid
    }),
  );
  await app.listen(3000);
}
bootstrap();
