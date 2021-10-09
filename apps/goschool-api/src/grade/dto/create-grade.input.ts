import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGradeInput {
  @Field()
  grade_type_id: number;

  @Field((type) => Int)
  mark: number;

  @Field()
  subject_id: number;
}
