import { CreateSubjectInput } from './create-subject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubjectInput extends PartialType(CreateSubjectInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => [Number], { nullable: true })
  teacher_ids?: number[];

  @Field({ nullable: true })
  color_hex?: string;
}
