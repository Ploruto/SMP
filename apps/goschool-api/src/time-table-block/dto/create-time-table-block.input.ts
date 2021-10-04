import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimeTableBlockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
