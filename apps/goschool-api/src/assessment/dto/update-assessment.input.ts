import { CreateAssessmentInput } from './create-assessment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssessmentInput extends PartialType(CreateAssessmentInput) {
  @Field()
  id: number;

  @Field((type) => Int, { nullable: true })
  subject_id?: number;

  @Field({ nullable: true })
  topic?: string;

  @Field((type) => Date, { nullable: true })
  date?: Date;

  @Field((type) => Int, { nullable: true })
  class_group_id?: number;
}
