import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './core/config/dto/env-variables.dto';
import { SwaggerConfig } from './core/config/swagger/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService<EnvironmentVariables> =
    app.get(ConfigService);

  SwaggerConfig(app);

  await app.listen(configService.get('PORT'));
}
bootstrap();
