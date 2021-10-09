import { CreateTeacherInput } from './create-teacher.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeacherInput extends PartialType(CreateTeacherInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  first_name?: string;

  @Field({ nullable: true })
  last_name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field((type) => [Number], { nullable: true })
  subject_ids?: number[];

  @Field({ nullable: true })
  specialRole?: string;
}
