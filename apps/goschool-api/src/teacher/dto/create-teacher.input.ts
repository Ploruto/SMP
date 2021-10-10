import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeacherInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone_number: string;

  @Field((type) => [Number])
  subject_ids: number[];

  @Field({ nullable: true })
  specialRole?: string;
}
