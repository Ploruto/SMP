import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssessmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
