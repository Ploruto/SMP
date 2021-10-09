import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  class_group_id: number;
}
