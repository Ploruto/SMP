import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Homework {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
