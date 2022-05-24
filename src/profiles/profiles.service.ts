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
    const filters: { [key: string]: [string, 'ASC' | 'DESC'] } = {
      folder: [
        'CASE WHEN "profiles"."folder" IS NULL THEN 1 ELSE 0 END',
        'ASC',
      ],
      note: ['CASE WHEN "profiles"."note" IS NULL THEN 1 ELSE 0 END', 'ASC'],
      updated_date: [`"profiles"."updated_date"`, 'DESC'],
    };

    const queryBuilder =
      this.ProfileRepository.createQueryBuilder('profiles').select('*');

    sortables?.forEach((sortable) => {
      const [q, o] = filters[sortable];
      queryBuilder.addOrderBy(q, o);
    });

    queryBuilder.addOrderBy('"profiles"."created_date"', 'DESC');

    const profilesList = await queryBuilder.execute();

    return profilesList;
  }
}
