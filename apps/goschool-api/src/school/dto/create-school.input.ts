import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSchoolInput {
  @Field()
  homepage_url: string;

  @Field()
  name: string;
}
