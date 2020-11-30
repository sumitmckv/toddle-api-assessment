import { Column, Entity } from 'typeorm';
import Base from './base';

@Entity()
export default class SurveyResponse extends Base {
  @Column('varchar', { length: 100 })
  private username!: string;

  @Column('uuid')
  private surveyId!: string;

  @Column('uuid')
  private questionId!: string;

  @Column('boolean')
  private answer!: boolean;
}
