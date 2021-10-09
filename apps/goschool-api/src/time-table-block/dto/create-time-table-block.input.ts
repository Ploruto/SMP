import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimeTableBlockInput {
  @Field()
  subject_id: number;

  @Field()
  teacher_id: number;

  @Field((type) => Date)
  from_date: Date;

  @Field((type) => Date)
  to_date: Date;

  @Field((type) => Int, { nullable: true })
  take_over_teacher_id: number;

  @Field((type) => Boolean)
  is_cancelled: boolean;

  @Field()
  class_group_id: number;
}
