import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ClassGroup } from '../../class-group/entities/class-group.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
@ObjectType()
export class Assessment {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column((type) => Subject)
  @Field((type) => Subject)
  subject: Subject;

  @Column()
  @Field()
  topic: string;

  @Column((type) => Date)
  @Field((type) => Date)
  date: Date;

  @Column((type) => ClassGroup)
  @Field((type) => ClassGroup)
  class_group: ClassGroup;
}
