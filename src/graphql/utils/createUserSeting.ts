import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSetting {
  @Field((type) => Int)
  userId: number;

  @Field({ defaultValue: false, nullable: true })
  receiveNotifications: boolean;

  @Field({ defaultValue: false, nullable: true })
  receiveEmails: boolean;
}
