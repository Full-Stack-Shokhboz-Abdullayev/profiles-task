import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { EnvironmentVariables } from '../dto/env-variables.dto';

export const generateTypeOrmConfig: (
  ...args: any[]
) => TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> = (
  configService: ConfigService<EnvironmentVariables>,
) => {
  return {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities: [join(__dirname, '../../..', '**/entities/*.entity.{t,j}s')],
    migrations: ['src/core/migrations/'],
    cli: {
      migrationsDir: 'src/core/migrations/',
    },
  };
};
