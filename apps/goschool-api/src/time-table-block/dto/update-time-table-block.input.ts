import { CreateTimeTableBlockInput } from './create-time-table-block.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTimeTableBlockInput extends PartialType(CreateTimeTableBlockInput) {
  @Field(() => Int)
  id: number;
}
