
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule , { cors: true });
  
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Levant Wings')
    .setDescription('Hajj and Umrah trips reservation office')
    .setVersion('')
    .addTag('Hajj & Umrah')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();