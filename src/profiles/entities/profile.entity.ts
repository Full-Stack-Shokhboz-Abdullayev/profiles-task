import { Base } from 'src/core/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { P_TOKEN } from '../constants';

@Entity(P_TOKEN)
export class Profile extends Base {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  folder?: string;

  @Column({
    nullable: true,
  })
  note?: string;
}
