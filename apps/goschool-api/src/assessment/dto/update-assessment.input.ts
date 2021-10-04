import { CreateAssessmentInput } from './create-assessment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssessmentInput extends PartialType(CreateAssessmentInput) {
  @Field(() => Int)
  id: number;
}
