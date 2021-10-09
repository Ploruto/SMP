import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssessmentInput {
  @Field((type) => Int)
  subject_id: number;

  @Field()
  topic: string;

  @Field((type) => Date)
  date: Date;

  @Field((type) => Int)
  class_group_id: number;
}
