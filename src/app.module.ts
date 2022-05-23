import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './core/config/configuration.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [ConfigurationModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
