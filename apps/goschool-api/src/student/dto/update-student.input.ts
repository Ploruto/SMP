import { CreateStudentInput } from './create-student.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  first_name?: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  class_group_id?: number;
}
