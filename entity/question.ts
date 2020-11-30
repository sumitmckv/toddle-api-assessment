import { Column, Entity } from 'typeorm';
import Base from './base';

@Entity()
export default class Question extends Base {
  @Column('varchar', { length: 100 })
  private name!: string;

  @Column('varchar', { nullable: true, length: 500 })
  private description!: string;
}
