import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubjectInput {
  @Field()
  name: string;

  @Field((type) => [Number])
  teacher_ids: number[];

  @Field()
  color_hex: string;
}
