import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
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

  @ManyToMany(() => Teacher, { cascade: true })
  @JoinColumn()
  @Field((type) => [Teacher])
  teachers: Teacher[];

  @Column()
  @Field()
  color_hex: string;
}
