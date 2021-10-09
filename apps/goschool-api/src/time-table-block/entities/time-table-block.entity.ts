import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ClassGroup } from '../../class-group/entities/class-group.entity';
import { Subject } from '../../subject/entities/subject.entity';
import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
@ObjectType()
export class TimeTableBlock {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column((type) => Subject)
  @Field((type) => Subject)
  subject: Subject;

  @Column((type) => Teacher)
  @Field((type) => Teacher)
  teacher: Teacher;

  @Column((type) => Date)
  @Field((type) => Date)
  from_date: Date;

  @Column((type) => Date)
  @Field((type) => Date)
  to_date: Date;

  @Column((type) => Teacher)
  @Field((type) => Teacher, { nullable: true })
  take_over_teacher: Teacher;

  @Column((type) => Boolean)
  @Field((type) => Boolean, { defaultValue: false })
  is_cancelled: boolean;

  @Column((type) => ClassGroup)
  @Field((type) => ClassGroup)
  class_group: ClassGroup;
}
