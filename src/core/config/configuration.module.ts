import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { validate } from './env.validation';
import { generateTypeOrmConfig } from './typeorm/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: generateTypeOrmConfig,
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService],
})
export class ConfigurationModule {}
