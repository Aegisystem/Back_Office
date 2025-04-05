import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true, // Allow all origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow specific methods
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    },
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
