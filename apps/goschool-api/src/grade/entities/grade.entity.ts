import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GradeType } from '../../grade-type/entities/grade-type.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
@ObjectType()
export class Grade {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column((type) => Number)
  @Field((type) => GradeType)
  type: number;

  @Column((type) => Number)
  @Field((type) => Int)
  mark: number;

  @Column((type) => Number)
  @Field((type) => Subject)
  subject: number;
}
