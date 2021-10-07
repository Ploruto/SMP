import { InputType, Int, Field } from '@nestjs/graphql';
import { ClassGroup } from '../../class-group/entities/class-group.entity';

@InputType()
export class CreateStudentInput {

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  encrypted_password: string;
  @Field()
  email: string;
  @Field({nullable: true})
  phone_number:string;

  @Field()
  group_name: string



}
