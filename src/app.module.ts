import { Module } from '@nestjs/common';
import { ConfigurationModule } from './core/config/configuration.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [ConfigurationModule, ProfilesModule],
})
export class AppModule {}
