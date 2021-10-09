import { CreateSchoolInput } from './create-school.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSchoolInput extends PartialType(CreateSchoolInput) {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  homepage_url?: string;

  @Field({ nullable: true })
  name?: string;
}
