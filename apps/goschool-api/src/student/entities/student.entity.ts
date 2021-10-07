import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClassGroup } from '../../class-group/entities/class-group.entity';

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

  @Column({nullable: true})
  encrypted_password: string;

  @Column({unique: true})
  @Field()
  email: string;

  @Column({nullable: true, unique:true})
  @Field()
  phone_number: string;

  @ManyToOne(type => ClassGroup, c => c.students)
  @JoinColumn()
  @Field(type => ClassGroup)
  group: ClassGroup;
}

