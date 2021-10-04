import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity()
@ObjectType()
export class Class {

  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(type => [Student])
  @OneToMany(type => Student, student => student.class)
  @JoinColumn()
  students: Student[];  
}
