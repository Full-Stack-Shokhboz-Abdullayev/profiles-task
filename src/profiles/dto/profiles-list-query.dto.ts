import { Transform } from 'class-transformer';
import { isArray, IsEnum, IsOptional } from 'class-validator';
import { SortablesEnum } from '../types/enums/sortables.enum';

export class ProfilesListQueryDto {
  @Transform(({ value }) => {
    const transformed = value ? (isArray(value) ? value : [value]) : value;
    return transformed;
  })
  @IsEnum(SortablesEnum, {
    each: true,
  })
  @IsOptional()
  filters?: SortablesEnum[];
}
