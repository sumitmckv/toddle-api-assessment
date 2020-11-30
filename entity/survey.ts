import { Column, Entity } from 'typeorm';
import Base from './base';

@Entity()
export default class Survey extends Base {
  @Column('varchar', { length: 100 })
  private name!: string;

  @Column('varchar', { nullable: true, length: 500 })
  private description!: string;

  @Column('text', { array: true, default: '{}' })
  private questions!: string[];
}
