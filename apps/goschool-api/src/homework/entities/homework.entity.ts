import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClassGroup } from '../../class-group/entities/class-group.entity';

@Entity()
@ObjectType()
export class Homework {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @Column((type) => Date)
  @Field((type) => Date)
  due_to: Date;

  @Column((type) => ClassGroup)
  @Field((type) => ClassGroup)
  class_group: ClassGroup;
}
