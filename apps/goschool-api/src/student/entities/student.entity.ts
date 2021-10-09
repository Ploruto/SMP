import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClassGroup } from '../../class-group/entities/class-group.entity';

@Entity()
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  first_name: string;

  @Column()
  @Field()
  last_name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  @Field({ nullable: true })
  email: string;

  @Column((type) => ClassGroup)
  @Field()
  class_group: ClassGroup;
}
