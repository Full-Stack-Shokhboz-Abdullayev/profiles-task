import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Environment } from '../typings/enums/env.enum';

export class EnvironmentVariables {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  PORT: number;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  POSTGRES_DB: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  POSTGRES_HOST: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  POSTGRES_PORT: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  POSTGRES_USER: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  POSTGRES_PASSWORD: string;
}
