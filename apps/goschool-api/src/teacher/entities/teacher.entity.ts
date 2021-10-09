import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, ManyToMany, Entity } from 'typeorm';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
@ObjectType()
export class Teacher {
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

  @Column({ nullable: true, unique: true })
  @Field({ nullable: true })
  email: string;

  @Column({ nullable: true, unique: true })
  @Field({ nullable: true })
  phone_number: string;

  @ManyToMany((type) => Subject, { cascade: true })
  @Field((type) => [Subject])
  subjects: Subject[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  specialRole?: string;
}
