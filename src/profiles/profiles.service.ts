import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { P_TOKEN } from './constants';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  async getProfileList() {
    // const profileList = this.ProfileRepository.find({
    //   order: {
    //     created_date: 'DESC',
    //     updated_date: 'DESC',
    //   },
    // });
    // const caseWhenNotNull = (column: string) =>
    //   `CASE WHEN "${P_TOKEN}"."${column}" IS NULL THEN 1 ELSE 0 END`;

    // const order =
    //   `"${P_TOKEN}"."created_date DESC", ` +
    //   `"${P_TOKEN}"."updated_date DESC", ` +
    //   caseWhenNotNull('folder') +
    //   ', ' +
    //   caseWhenNotNull('note');

    const profilesList = await this.ProfileRepository.createQueryBuilder()
      .select('*')
      .orderBy('created_date', 'DESC')
      .addOrderBy('updated_date', 'DESC')
      .addOrderBy('folder', 'ASC', 'NULLS LAST')
      .addOrderBy('note', 'ASC', 'NULLS LAST')
      .execute();

    return profilesList;
  }
}
