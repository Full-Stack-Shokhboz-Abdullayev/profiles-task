import { ConfigService } from '@nestjs/config';
import fs = require('fs');

import { config } from 'dotenv';
import { validate } from 'src/core/config/env.validation';
import { EnvironmentVariables } from 'src/core/config/dto/env-variables.dto';
import { generateTypeOrmConfig } from 'src/core/config/typeorm/config';
config();

const environmentVars = validate(process.env);

const configService: ConfigService<EnvironmentVariables> = new ConfigService(
  environmentVars,
);

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(generateTypeOrmConfig(configService), null, 2),
);
