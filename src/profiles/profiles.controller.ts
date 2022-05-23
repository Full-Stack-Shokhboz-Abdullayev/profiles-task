import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { P_TOKEN } from './constants';
import { ProfilesService } from './profiles.service';

@ApiTags(P_TOKEN)
@Controller(P_TOKEN)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get('list')
  profiles() {
    return this.profilesService.getProfileList();
  }
}
