import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  async getProfileList() {
    const profilesList = await this.ProfileRepository.query(
      `SELECT * FROM "profiles" 
        ORDER BY 
        CASE WHEN "profiles"."folder" IS NULL THEN 1 ELSE 0 END, 
        CASE WHEN "profiles"."note" IS NULL THEN 1 ELSE 0 END, 
        "profiles"."created_date" DESC, 
        "profiles"."updated_date" DESC;`,
    );

    return profilesList;
  }
}
