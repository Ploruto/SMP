import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from '../../class/entities/class.entity';

@Entity()
@ObjectType()
export class Student {

  @PrimaryGeneratedColumn("uuid")
  @Field()
  id: string;
  
  @Column()
  @Field()
  first_name: string;

  @Column()
  @Field()
  last_name: string;

  @Column()
  encrypted_password: string;

  @Column()
  @Field()
  email: string;

  @Column({nullable: true})
  @Field({nullable: true})
  phone_number: string;

  @ManyToOne(type => Class)
  @Field()
  class: Class;
}
