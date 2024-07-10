import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  userName: string;

  @Field({ nullable: true })
  displayName?: string;
}
