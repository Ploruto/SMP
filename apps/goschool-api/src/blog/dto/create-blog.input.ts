import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => Date)
  created_at: Date;
}
