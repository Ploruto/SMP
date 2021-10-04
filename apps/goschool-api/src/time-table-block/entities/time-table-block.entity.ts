import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TimeTableBlock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
