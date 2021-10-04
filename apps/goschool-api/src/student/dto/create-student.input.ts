import { InputType, Int, Field } from '@nestjs/graphql';

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
  @Field()
  phone_number:string;
}
