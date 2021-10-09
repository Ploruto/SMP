import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHomeworkInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => Date)
  due_to: Date;

  @Field()
  class_group_id: number;
}
