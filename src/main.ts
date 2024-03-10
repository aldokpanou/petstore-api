import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('PetStore API')
  .setDescription('API pour gérer un magasin d\'animaux (PetStore)')
  .setVersion('1.0')
  .addBearerAuth()
  // .addTag('pets', 'Endpoints pour gérer les animaux')
  // .addTag('petTypes', 'Endpoints pour gérer les types d\'animaux')
  // .addTag('auth', 'Endpoints pour l\'authentification des utilisateurs')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
