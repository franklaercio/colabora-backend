import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

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
      'http://localhost:3000',
      'https://colabora-frontend-franklaercio.vercel.app/',
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: '*',
    credentials: true,
  });

  await app.listen(3000);

  if (process.env.NODE_ENV === 'dev') {
    const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static');

    const pathToSwaggerJson = resolve(
      pathToSwaggerStaticFolder,
      'swagger.json',
    );

    const swaggerJson = JSON.stringify(document, null, 2);
    writeFileSync(pathToSwaggerJson, swaggerJson);
    console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
  }
}
bootstrap();
