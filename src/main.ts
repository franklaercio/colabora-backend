import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Colabora')
    .setDescription('The Colabora API')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost',
      'https://colabora-backend-franklaercio.vercel.app/',
    ],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    credentials: false,
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  });

  await app.listen(3000);
}
bootstrap();
