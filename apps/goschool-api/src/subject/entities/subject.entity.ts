import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
@ObjectType()
export class Subject {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column((type) => Number, { array: true })
  @Field((type) => [Teacher])
  teachers: number[];

  @Column()
  @Field()
  color_hex: string;
}
