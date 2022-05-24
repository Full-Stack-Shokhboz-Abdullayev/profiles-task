import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { P_TOKEN } from './constants';
import { ProfilesListQueryDto } from './dto/profiles-list-query.dto';
import { ProfilesService } from './profiles.service';
import { SortablesEnum } from './types/enums/sortables.enum';

@ApiTags(P_TOKEN)
@Controller(P_TOKEN)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @ApiQuery({
    name: 'filters',
    enum: SortablesEnum,
    isArray: true,
  })
  @Get('list')
  profiles(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    query: ProfilesListQueryDto,
  ) {
    return this.profilesService.getProfiles(query.filters);
  }
}
