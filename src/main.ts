import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use(bodyParser.json({ limit: '50mb' })); // Ajusta el límite según tus necesidades
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


  const config = new DocumentBuilder()
  .setTitle('Cloudinary Hackathon API')
  .setDescription('')
  .setVersion('1.0')
  .addTag('Cloudinary')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
