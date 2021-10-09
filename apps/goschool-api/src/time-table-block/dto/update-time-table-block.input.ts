import { CreateTimeTableBlockInput } from './create-time-table-block.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTimeTableBlockInput extends PartialType(
  CreateTimeTableBlockInput
) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  subject_id?: number;

  @Field({ nullable: true })
  teacher_id?: number;

  @Field((type) => Date, { nullable: true })
  from_date?: Date;
  @Field((type) => Date, { nullable: true })
  to_date?: Date;

  @Field((type) => Int, { nullable: true })
  take_over_teacher_id?: number;

  @Field((type) => Boolean, { nullable: true })
  is_cancelled?: boolean;
  @Field((type) => Int, { nullable: true })
  class_group_id?: number;
}
