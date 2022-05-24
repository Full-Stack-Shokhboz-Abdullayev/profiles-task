import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { SortablesEnum } from './types/enums/sortables.enum';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  async getProfiles(sortables?: SortablesEnum[]) {
    const filters = {
      folder: 'CASE WHEN "profiles"."folder" IS NULL THEN 1 ELSE 0 END',
      note: 'CASE WHEN "profiles"."note" IS NULL THEN 1 ELSE 0 END',
      updated_date: `"profiles"."updated_date" DESC`,
    };

    const hydratedColumns = sortables
      ?.map((sortable) => filters[sortable])
      .join(', ');

    const query = `
      SELECT * FROM "profiles" 
        ORDER BY 
          ${hydratedColumns ? hydratedColumns + ', ' : ''}
          "profiles"."created_date" DESC;`;

    const profilesList = await this.ProfileRepository.query(query);

    return profilesList;
  }
}
