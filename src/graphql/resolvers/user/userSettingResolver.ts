import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Query,
} from '@nestjs/graphql';
import { UserSettings } from '../../models/UserSetting';
import { CreateUserSetting } from '../../utils/createUserSeting';
import { User } from '../../models/User';
import { UserSettingService } from './userSetting.service';

@Resolver(() => UserSettings)
export class UserSettingResolver {
  constructor(private readonly userSettingService: UserSettingService) {}

  @Mutation((returns) => UserSettings)
  createUserSettings(
    @Args('createUserSettingData')
    createUserSettingData: CreateUserSetting,
  ) {
    return this.userSettingService.createUserSettings(createUserSettingData);
  }

  @Query((returns) => [UserSettings], { nullable: true })
  @ResolveField((returns) => UserSettings, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return this.userSettingService.getUserSetting();
  }
}
