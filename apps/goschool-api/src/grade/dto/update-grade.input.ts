import { CreateGradeInput } from './create-grade.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGradeInput extends PartialType(CreateGradeInput) {
  @Field(() => Int)
  id: number;

  @Field((type) => Int, { nullable: true })
  grade_type_id: number;

  @Field((type) => Int, { nullable: true })
  mark: number;

  @Field((type) => Int, { nullable: true })
  subject_id: number;
}
