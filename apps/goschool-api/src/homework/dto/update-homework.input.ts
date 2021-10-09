import { CreateHomeworkInput } from './create-homework.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomeworkInput extends PartialType(CreateHomeworkInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;

  @Field((type) => Date, { nullable: true })
  due_to?: Date;

  @Field((type) => Int, { nullable: true })
  class_group_id?: number;
}
